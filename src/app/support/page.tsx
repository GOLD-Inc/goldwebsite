"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Topic config                                                       */
/* ------------------------------------------------------------------ */

const topics = [
  {
    id: "support",
    label: "Support",
    prompt: "What can we support you with?",
  },
  {
    id: "feature",
    label: "Request Feature",
    prompt: "What feature would you love to have?",
  },
  {
    id: "bug",
    label: "Report Bug",
    prompt: "What were you doing that caused this?",
  },
  {
    id: "media",
    label: "Media",
    prompt: "What media company do you work for?",
  },
  {
    id: "contact",
    label: "Contact",
    prompt: "What can we help you with?",
  },
] as const;

type TopicId = (typeof topics)[number]["id"];

function getTopicFromHash(): TopicId {
  if (typeof window === "undefined") return "support";
  const hash = window.location.hash.replace("#", "");
  const match = topics.find((t) => t.id === hash);
  return match ? match.id : "support";
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SupportPage() {
  const [selectedTopic, setSelectedTopic] = useState<TopicId>("support");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contextAnswer, setContextAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const syncHash = useCallback(() => {
    setSelectedTopic(getTopicFromHash());
  }, []);

  useEffect(() => {
    syncHash();
    window.addEventListener("hashchange", syncHash);
    const interval = setInterval(() => {
      const current = getTopicFromHash();
      setSelectedTopic((prev) => (prev !== current ? current : prev));
    }, 200);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      clearInterval(interval);
    };
  }, [syncHash]);

  const currentTopic = topics.find((t) => t.id === selectedTopic)!;

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: currentTopic.label,
          name: name || undefined,
          email,
          contextQuestion: currentTopic.prompt,
          contextAnswer: contextAnswer || undefined,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 pb-24 pt-32">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle className="h-10 w-10 text-emerald-500" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Message sent
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-500">
            Thanks for reaching out. We&apos;ll get back to you as soon as
            possible.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setEmail("");
              setContextAnswer("");
              setMessage("");
            }}
            className="mt-10 rounded-full border border-neutral-200 px-8 py-3.5 text-base font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50 cursor-pointer"
          >
            Send another message
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-start justify-center px-6 pb-24 pt-36 sm:pt-44">
      <div className="w-full max-w-2xl">
        {/* Big title */}
        <h1 className="text-center text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
          Support
        </h1>

        {/* Card */}
        <div className="mt-10 rounded-[2rem] sm:rounded-[50px] border border-neutral-200/80 bg-neutral-50/50 p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Topic dropdown */}
            <div>
              <label className="mb-3 block text-base font-semibold text-neutral-800">
                I need help with
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-left text-base transition-colors hover:border-neutral-300 cursor-pointer"
                >
                  <span className="font-medium text-neutral-900">
                    {currentTopic.label}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-neutral-400 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setDropdownOpen(false)}
                    />
                    <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg shadow-black/5">
                      {topics.map((topic) => (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => {
                            setSelectedTopic(topic.id);
                            setDropdownOpen(false);
                            setContextAnswer("");
                            window.history.replaceState(
                              null,
                              "",
                              `/support#${topic.id}`
                            );
                          }}
                          className={`flex w-full items-center px-5 py-4 text-left text-base transition-colors hover:bg-neutral-50 cursor-pointer ${
                            selectedTopic === topic.id
                              ? "font-medium text-neutral-900 bg-neutral-50"
                              : "text-neutral-600"
                          }`}
                        >
                          {topic.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Contextual question */}
            <div>
              <label
                htmlFor="context"
                className="mb-3 block text-base font-semibold text-neutral-800"
              >
                {currentTopic.prompt}
              </label>
              <input
                id="context"
                type="text"
                value={contextAnswer}
                onChange={(e) => setContextAnswer(e.target.value)}
                placeholder="Your answer..."
                className="w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-base text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-400"
              />
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-base font-semibold text-neutral-800"
              >
                Name
                <span className="ml-1.5 font-normal text-neutral-400">
                  (optional)
                </span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-base text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-base font-semibold text-neutral-800"
              >
                Email
                <span className="ml-1 text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-base text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-400"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-base font-semibold text-neutral-800"
              >
                Message
                <span className="ml-1 text-red-400">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us more..."
                className="w-full resize-none rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-base text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-400"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="rounded-2xl bg-red-50 px-5 py-4 text-base text-red-600">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-neutral-900 px-8 py-4.5 text-base font-semibold text-white transition-colors hover:bg-neutral-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send message"}
            </button>

            <p className="text-center text-sm text-neutral-400">
              We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
