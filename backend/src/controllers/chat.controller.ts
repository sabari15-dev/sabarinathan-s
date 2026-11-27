import type { Request, Response } from "express";
import { AssistantUnavailableError, requestPortfolioReply, type ChatTurn } from "../services/openrouter.service.js";

const MAX_MESSAGE_LENGTH = 2_000;
const MAX_HISTORY_ITEMS = 12;
const MAX_HISTORY_CONTENT = 4_000;

const isChatTurn = (value: unknown): value is ChatTurn => {
  if (!value || typeof value !== "object") return false;
  const turn = value as { role?: unknown; content?: unknown };
  return (
    (turn.role === "user" || turn.role === "assistant") &&
    typeof turn.content === "string" &&
    turn.content.trim().length > 0 &&
    turn.content.length <= MAX_HISTORY_CONTENT
  );
};

export const postChat = async (req: Request, res: Response) => {
  const body = req.body as { message?: unknown; history?: unknown };

  if (typeof body.message !== "string" || body.message.trim().length === 0) {
    res.status(400).json({ error: "Please send a message." });
    return;
  }

  const message = body.message.trim();
  if (message.length > MAX_MESSAGE_LENGTH) {
    res.status(400).json({ error: "That message is too long." });
    return;
  }

  if (body.history !== undefined && !Array.isArray(body.history)) {
    res.status(400).json({ error: "Conversation history is not valid." });
    return;
  }

  const historyInput = Array.isArray(body.history) ? body.history : [];
  if (historyInput.length > MAX_HISTORY_ITEMS || historyInput.some((turn) => !isChatTurn(turn))) {
    res.status(400).json({ error: "Conversation history is not valid." });
    return;
  }

  try {
    const reply = await requestPortfolioReply(message, historyInput);
    res.json({ reply });
  } catch (error) {
    if (error instanceof AssistantUnavailableError) {
      res.status(503).json({ error: error.message });
      return;
    }
    console.error("Chat request failed.");
    res.status(503).json({ error: "The assistant is unavailable right now." });
  }
};
