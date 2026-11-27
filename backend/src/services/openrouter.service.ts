import { PORTFOLIO_SYSTEM_PROMPT } from "../config/portfolio.context.js";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const REQUEST_TIMEOUT_MS = 25_000;

export type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

export class AssistantUnavailableError extends Error {
  constructor() {
    super("The assistant is unavailable right now.");
    this.name = "AssistantUnavailableError";
  }
}

type OpenRouterMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const extractReply = (payload: unknown): string | null => {
  if (!payload || typeof payload !== "object") return null;
  const choices = (payload as { choices?: unknown }).choices;
  if (!Array.isArray(choices) || choices.length === 0) return null;
  const message = (choices[0] as { message?: { content?: unknown } }).message;
  const content = message?.content;

  if (typeof content === "string" && content.trim()) return content.trim();

  if (Array.isArray(content)) {
    const text = content
      .map((part) => {
        if (part && typeof part === "object" && "text" in part && typeof part.text === "string") {
          return part.text;
        }
        return "";
      })
      .join("")
      .trim();
    return text || null;
  }

  return null;
};

export const requestPortfolioReply = async (message: string, history: ChatTurn[]): Promise<string> => {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  const model = process.env.OPENROUTER_MODEL?.trim() || "openrouter/free";

  if (!apiKey) {
    console.error("OPENROUTER_API_KEY is not set.");
    throw new AssistantUnavailableError();
  }

  const messages: OpenRouterMessage[] = [
    { role: "system", content: PORTFOLIO_SYSTEM_PROMPT },
    ...history.map((turn) => ({ role: turn.role, content: turn.content })),
    { role: "user", content: message },
  ];

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:8080",
        "X-Title": "Ask Sabari",
      },
      body: JSON.stringify({ model, messages }),
    });

    if (!response.ok) {
      console.error(`OpenRouter request failed with status ${response.status}.`);
      throw new AssistantUnavailableError();
    }

    const payload: unknown = await response.json();
    const reply = extractReply(payload);
    if (!reply) {
      console.error("OpenRouter returned a response without assistant text.");
      throw new AssistantUnavailableError();
    }

    return reply;
  } catch (error) {
    if (error instanceof AssistantUnavailableError) throw error;
    console.error("OpenRouter request could not be completed.");
    throw new AssistantUnavailableError();
  } finally {
    clearTimeout(timer);
  }
};
