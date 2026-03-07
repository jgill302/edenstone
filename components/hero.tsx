"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-evergreen">
      {/* Background image */}
      <Image
        src="/images/hero-garden.jpg"
        alt="Serene Japanese zen garden with raked gravel and natural stones"
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-evergreen/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p
          className={`mb-6 text-xs tracking-[0.3em] uppercase text-gold transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Austin, Texas
        </p>
        <h1
          className={`font-serif text-4xl leading-tight text-cream transition-all duration-1000 delay-200 md:text-6xl lg:text-7xl ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <span className="text-balance">Designed to slow you down</span>
        </h1>
        <p
          className={`mx-auto mt-8 max-w-lg text-base leading-relaxed text-cream/70 transition-all duration-1000 delay-500 md:text-lg ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Full-service zen and Japanese-inspired garden design. We create
          outdoor spaces that counterbalance a tech-heavy world.
        </p>
        <div
          className={`mt-12 flex flex-col items-center gap-4 transition-all duration-1000 delay-700 sm:flex-row sm:justify-center ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <Link
            href="/direction-finder"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-evergreen transition-all duration-300 hover:bg-champagne"
          >
            Find Your Garden Direction
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-cream/20 bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Read the Journal
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-px bg-cream/20" />
      </div>
    </section>
  );
}
