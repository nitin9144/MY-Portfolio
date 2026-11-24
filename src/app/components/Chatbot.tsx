import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Bot, Send, X } from "lucide-react";

type ChatMessage = {
  id: number;
  sender: "bot" | "user";
  text: string;
  isError?: boolean;
};

const greeting = "Hi! I'm Nitin's assistant. What would you like to know?";
const quickReplies = ["Projects", "Skills", "Experience", "Contact"];
const CHAT_API_URL = "https://chatbot-fastapi-3-76wd.onrender.com/chat";

function getOfflineReply(message: string): string | undefined {
  if (/\b(college|university|degree|education|study|studied)\b/i.test(message)) {
    return "Nitin is pursuing a B.Tech in Computer Science at VIPS-TC.";
  }

  return undefined;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, sender: "bot", text: greeting },
  ]);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(1);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const conversation = messages
      .filter((message) => message.id !== 0 && !message.isError)
      .map((message) => ({
        role: message.sender === "user" ? "user" as const : "assistant" as const,
        content: message.text,
      }));

    setMessages((current) => [
      ...current,
      { id: nextIdRef.current++, sender: "user", text: trimmed },
    ]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...conversation, { role: "user", content: trimmed }],
        }),
        
      });
      console.log(response)
      if (!response.ok) {
        throw new Error(`Chat API request failed with status ${response.status}`);
      }

      const data: unknown = await response.json();
      if (
        typeof data !== "object" ||
        data === null ||
        !("reply" in data) ||
        typeof data.reply !== "string"
      ) {
        throw new Error("Chat API returned an invalid response.");
      }

      setMessages((current) => [
        ...current,
        { id: nextIdRef.current++, sender: "bot", text: data.reply },
      ]);
    } catch (error) {
      console.error("Unable to get a chatbot reply:", error);
      setMessages((current) => [
        ...current,
        {
          id: nextIdRef.current++,
          sender: "bot",
          text: getOfflineReply(trimmed)
            ?? "Sorry, I couldn't reach the assistant right now. Please try again in a moment.",
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "bottom right" }}
            aria-label="Portfolio Assistant chat"
            className="absolute bottom-[calc(100%+12px)] right-0 flex h-[460px] max-h-[70vh] w-[340px] max-w-[calc(100vw-40px)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <header className="flex shrink-0 items-center gap-3 bg-violet-500 px-4 py-3 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Bot size={21} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-semibold leading-5">Portfolio Assistant</h2>
                <p className="text-xs text-white/80">Ask me about Nitin</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-lg p-2 text-white/90 transition hover:bg-white/15 hover:text-white"
              >
                <X size={18} />
              </button>
            </header>

            <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.sender === "user"
                        ? "rounded-br-md bg-violet-500 text-white"
                        : "rounded-bl-md bg-muted text-foreground"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      type="button"
                      onClick={() => sendMessage(reply)}
                      disabled={isTyping}
                      className="rounded-full border border-violet-500/30 px-3 py-1.5 text-xs text-violet-500 transition hover:bg-violet-500/10 disabled:opacity-50"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-muted px-4 py-3"
                    role="status"
                    aria-label="Assistant is typing"
                  >
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                        animate={{ opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messageEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex shrink-0 items-center gap-2 border-t border-border p-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                disabled={isTyping}
                aria-label="Your message"
                placeholder="Ask a question..."
                className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-violet-500 focus:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500 text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-end gap-3">
        {!isOpen && (
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-lg"
          >
            Ask me anything
          </motion.span>
        )}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          aria-expanded={isOpen}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 text-white shadow-lg transition hover:bg-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2"
        >
          {isOpen ? <X size={23} /> : <span className="text-[27px] leading-none" aria-hidden="true">🤖</span>}
        </button>
      </div>
    </div>
  );
}
