import { PORTFOLIO_SYSTEM_PROMPT } from "../config/portfolio.context.js";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const REQUEST_TIMEOUT_MS = 25_000;
const MAX_ATTEMPTS = 3;
const TRANSIENT_STATUSES = new Set([408, 409, 425, 429, 500, 502, 503, 504]);

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

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const redact = (value: string) =>
  value.replace(/sk-or-[A-Za-z0-9_-]+/g, "[redacted]").replace(/Bearer\s+\S+/gi, "Bearer [redacted]");

const textFromContent = (content: unknown): string => {
  if (typeof content === "string") return content.trim();

  if (!Array.isArray(content)) return "";

  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (!part || typeof part !== "object") return "";
      const record = part as { text?: unknown; content?: unknown };
      if (typeof record.text === "string") return record.text;
      if (typeof record.content === "string") return record.content;
      return "";
    })
    .join("")
    .trim();
};

const extractReply = (payload: unknown): string | null => {
  if (!payload || typeof payload !== "object") return null;
  const choices = (payload as { choices?: unknown }).choices;
  if (!Array.isArray(choices) || choices.length === 0) return null;

  const choice = choices[0] as {
    text?: unknown;
    message?: { content?: unknown; refusal?: unknown };
  };
  const fromMessage = textFromContent(choice.message?.content);
  if (fromMessage) return fromMessage;

  if (typeof choice.text === "string" && choice.text.trim()) return choice.text.trim();

  if (typeof choice.message?.refusal === "string" && choice.message.refusal.trim()) {
    return choice.message.refusal.trim();
  }

  return null;
};

const failureDetail = (status: number, payload: unknown) => {
  const record =
    payload && typeof payload === "object"
      ? (payload as {
          error?: { message?: unknown; code?: unknown };
          choices?: Array<{ finish_reason?: unknown; error?: { message?: unknown; code?: unknown } }>;
        })
      : null;
  const top = record?.error;
  const choice = record?.choices?.[0];
  const nested = choice?.error;
  const message = typeof top?.message === "string" ? top.message : typeof nested?.message === "string" ? nested.message : "";
  const code = top?.code ?? nested?.code ?? "";
  const finish = typeof choice?.finish_reason === "string" ? choice.finish_reason : "";
  return redact(`status=${status} code=${String(code)} finish=${finish} message=${message}`).slice(0, 500);
};

const requestOnce = async (apiKey: string, model: string, messages: OpenRouterMessage[]) => {
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
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 1200,
        reasoning: { effort: "low", exclude: true },
      }),
    });

    const payload: unknown = await response.json().catch(() => null);
    return { response, payload };
  } finally {
    clearTimeout(timer);
  }
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

  let lastDetail = "OpenRouter request could not be completed.";

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const { response, payload } = await requestOnce(apiKey, model, messages);
      const reply = extractReply(payload);

      if (response.ok && reply) return reply;

      lastDetail = response.ok
        ? `OpenRouter returned no assistant text. ${failureDetail(response.status, payload)}`
        : `OpenRouter request failed. ${failureDetail(response.status, payload)}`;
      console.error(`${lastDetail} attempt=${attempt}`);

      const retryable = response.ok || TRANSIENT_STATUSES.has(response.status);
      if (!retryable || attempt === MAX_ATTEMPTS) break;
    } catch (error) {
      const reason = error instanceof Error ? error.name : "Error";
      lastDetail = reason === "AbortError" ? "OpenRouter request timed out." : "OpenRouter request could not be completed.";
      console.error(`${lastDetail} attempt=${attempt}`);
      if (attempt === MAX_ATTEMPTS) break;
    }

    await wait(400 * attempt);
  }

  console.error(redact(lastDetail));
  throw new AssistantUnavailableError();
};
