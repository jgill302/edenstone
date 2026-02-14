"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function CTASection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p
          className={`mb-4 text-xs tracking-[0.3em] uppercase text-gold transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          Begin
        </p>
        <h2
          className={`font-serif text-3xl leading-snug text-ink md:text-4xl transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <span className="text-balance">
            Not sure where to start? That&apos;s exactly the right place.
          </span>
        </h2>
        <p
          className={`mt-6 text-base leading-relaxed text-ink/60 transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Our Garden Direction Finder is a calm, 2-minute guided experience that
          helps you discover the emotional and functional direction of your ideal
          outdoor space. No commitment. No sales pitch.
        </p>
        <div
          className={`mt-10 flex flex-col items-center gap-4 transition-all duration-700 delay-500 sm:flex-row sm:justify-center ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <Link
            href="/direction-finder"
            className="inline-flex rounded-lg bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-evergreen transition-all duration-300 hover:bg-champagne"
          >
            Find Your Garden Direction
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-lg border border-ink/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
