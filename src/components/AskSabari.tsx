import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Minus, Send, X } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  failed?: boolean;
};

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").trim().replace(/\/$/, "");

const WELCOME =
  "Hi! 👋 Welcome to my portfolio. I'm Sabari's AI assistant. Feel free to ask me about his backend development experience, technical skills, projects, and professional background.";

const SUGGESTED_QUESTIONS = [
  "What is Sabari's backend experience?",
  "Which technologies does he use?",
  "What projects has he worked on?",
  "How can I contact him?",
];

const AskSabari = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", text: WELCOME },
  ]);
  const threadRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && !minimized) {
      threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight });
      inputRef.current?.focus();
    }
  }, [messages, open, minimized, loading]);

  const ask = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const history = messages
      .filter((message) => message.id !== "welcome" && !message.failed)
      .map((message) => ({ role: message.role, content: message.text }));

    setMessages((current) => [
      ...current,
      { id: `user-${Date.now()}`, role: "user", text: trimmed },
    ]);
    setDraft("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = (await response.json().catch(() => null)) as { reply?: unknown; error?: unknown } | null;
      const reply = data && typeof data.reply === "string" ? data.reply.trim() : "";

      if (!response.ok || !reply) {
        const safeError = data && typeof data.error === "string" ? data.error : "The assistant is unavailable right now.";
        throw new Error(safeError);
      }

      setMessages((current) => [
        ...current,
        { id: `assistant-${Date.now()}`, role: "assistant", text: reply },
      ]);
    } catch (error) {
      const text =
        error instanceof Error && error.message && !/fetch|network/i.test(error.message)
          ? error.message
          : "The assistant is unavailable right now. Please try again.";
      setMessages((current) => [
        ...current,
        { id: `error-${Date.now()}`, role: "assistant", text, failed: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    ask(draft);
  };

  const showSuggestions = messages.length === 1;

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {open && (
        <section
          role="dialog"
          aria-label="Ask Sabari"
          className={`flex flex-col overflow-hidden border border-[#393027] bg-[#101010] text-white shadow-2xl shadow-black/60 animate-in fade-in slide-in-from-bottom-4 duration-300 ${
            minimized
              ? "h-auto w-[min(100vw-2.5rem,22rem)] rounded-2xl"
              : "fixed inset-0 h-[100dvh] w-screen rounded-none sm:static sm:h-[min(34rem,calc(100dvh-6rem))] sm:w-[24rem] sm:rounded-2xl"
          }`}
        >
          <header className="flex items-center gap-3 border-b border-[#393027] bg-[#191919] px-4 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAB526] text-black">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-base font-bold text-white">Ask Sabari</h2>
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#EAB526]" aria-hidden="true" />
                <span className="text-[10px] uppercase tracking-widest text-[#EAB526]">Online</span>
              </div>
              <p className="truncate text-xs text-[#A0A0A0]">AI Portfolio Assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setMinimized((value) => !value)}
              aria-label={minimized ? "Expand chat" : "Minimize chat"}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#A0A0A0] transition-colors hover:bg-black hover:text-[#EAB526]"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setMinimized(false);
              }}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-[#A0A0A0] transition-colors hover:bg-black hover:text-[#EAB526]"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          {!minimized && (
            <>
              <div ref={threadRef} className="flex-1 space-y-4 overflow-y-auto bg-[#101010] px-4 py-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <p
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-[#EAB526] text-black"
                          : "border border-[#393027] bg-[#191919] text-white"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <p className="rounded-2xl border border-[#393027] bg-[#191919] px-4 py-3 text-sm text-[#A0A0A0]">
                      Thinking…
                    </p>
                  </div>
                )}

                {showSuggestions && (
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-[#A0A0A0]">Suggested questions</p>
                    <div className="flex flex-col gap-2">
                      {SUGGESTED_QUESTIONS.map((question) => (
                        <button
                          key={question}
                          type="button"
                          onClick={() => ask(question)}
                          disabled={loading}
                          className="rounded-full border border-[#393027] bg-[#191919] px-4 py-2 text-left text-sm text-white transition-colors hover:border-[#EAB526] hover:text-[#EAB526] disabled:opacity-60"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2 border-t border-[#393027] bg-[#191919] p-3">
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  disabled={loading}
                  placeholder="Ask about experience, skills, or projects"
                  aria-label="Message"
                  className="h-11 flex-1 rounded-full border border-[#393027] bg-black px-4 text-sm text-white outline-none placeholder:text-[#A0A0A0] focus:border-[#EAB526]"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={loading || draft.trim().length === 0}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAB526] text-black transition-transform hover:scale-105 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </>
          )}
        </section>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Ask Sabari"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAB526] text-black shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default AskSabari;
