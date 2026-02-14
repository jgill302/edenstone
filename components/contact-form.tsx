"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center animate-fade-in-up">
        <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
          Received
        </p>
        <h3 className="font-serif text-2xl text-ink">
          Thank you for reaching out.
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-ink/50">
          We will respond with a written concept, design direction, and budget
          band -- typically within a few days. No sales call unless you want
          one.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
      <div className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs tracking-widest uppercase text-ink/40"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border-b border-ink/15 bg-transparent py-3 text-sm text-ink outline-none transition-colors focus:border-gold placeholder:text-ink/25"
            placeholder="First and last"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs tracking-widest uppercase text-ink/40"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border-b border-ink/15 bg-transparent py-3 text-sm text-ink outline-none transition-colors focus:border-gold placeholder:text-ink/25"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs tracking-widest uppercase text-ink/40"
          >
            Tell us about your space and how you want it to feel
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full resize-none border-b border-ink/15 bg-transparent py-3 text-sm leading-relaxed text-ink outline-none transition-colors focus:border-gold placeholder:text-ink/25"
            placeholder="A backyard that feels like an escape. Mostly shaded, needs to work with two old oaks..."
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-10 inline-flex rounded-lg bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-evergreen transition-all duration-300 hover:bg-champagne"
      >
        Send
      </button>
    </form>
  );
}
