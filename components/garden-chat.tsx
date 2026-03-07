"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

const suggestions = [
  "Why do water features reduce anxiety?",
  "What plants thrive in Austin heat?",
  "How much maintenance does a zen garden need?",
  "What is wabi-sabi in garden design?",
];

export function GardenChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSend(text: string) {
    if (!text.trim() || isLoading) return;
    sendMessage({ text });
    setInput("");
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest shadow-lg transition-all duration-300 hover:bg-moss"
        aria-label={isOpen ? "Close garden guide" : "Open garden guide"}
      >
        {isOpen ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-cream"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-cream"
          >
            <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.115L5.5 21l4.014-2.19A10.2 10.2 0 0012 19.23c4.97 0 9-3.185 9-7.115S16.97 3 12 3z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[360px] flex-col overflow-hidden rounded-xl border border-forest/20 bg-cream shadow-2xl animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center gap-3 bg-forest px-5 py-4">
            <div className="h-2 w-2 rounded-full bg-gold" />
            <div>
              <p className="text-sm font-medium text-cream">Garden Guide</p>
              <p className="text-xs text-cream/50">
                Ask about gardens, materials, or design
              </p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col justify-end">
                <p className="mb-4 text-xs text-ink/30">
                  Try asking something:
                </p>
                <div className="flex flex-col gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="rounded-lg border border-ink/10 bg-transparent px-3 py-2 text-left text-xs text-ink/60 transition-colors hover:border-gold/40 hover:text-ink"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-forest text-cream"
                          : "bg-ink/5 text-ink/70"
                      }`}
                    >
                      {message.parts.map((part, i) => {
                        if (part.type === "text") {
                          return <span key={i}>{part.text}</span>;
                        }
                        return null;
                      })}
                    </div>
                  </div>
                ))}
                {isLoading &&
                  messages[messages.length - 1]?.role === "user" && (
                    <div className="flex justify-start">
                      <div className="flex gap-1 rounded-lg bg-ink/5 px-3.5 py-3">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink/20" />
                        <span
                          className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink/20"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink/20"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="border-t border-ink/10 px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about gardens..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/25"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-cream transition-colors hover:bg-moss disabled:opacity-30"
                aria-label="Send message"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
