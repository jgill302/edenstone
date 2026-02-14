"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    title: "Zen Courtyards",
    description:
      "Raked gravel, natural stone, and deliberate emptiness. Spaces that quiet the mind through visual simplicity.",
    image: "/images/raked-gravel.jpg",
    alt: "Perfectly raked zen gravel with natural stones",
  },
  {
    title: "Water Gardens",
    description:
      "Subtle water features that introduce non-repeating natural sound. Designed to shift your nervous system out of alert mode.",
    image: "/images/water-feature.jpg",
    alt: "Minimalist stone water basin surrounded by moss",
  },
  {
    title: "Japandi Retreats",
    description:
      "The warmth of Scandinavian craft meets Japanese restraint. Clean lines, natural wood, and intentional greenery.",
    image: "/images/zen-stones.jpg",
    alt: "Natural stones with moss in soft morning light",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="bg-evergreen py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p
            className={`mb-4 text-xs tracking-[0.3em] uppercase text-gold transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            What We Design
          </p>
          <h2
            className={`font-serif text-3xl text-cream md:text-4xl transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <span className="text-balance">Three directions, one intention</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href="/direction-finder"
              className={`group overflow-hidden rounded-lg bg-forest transition-all duration-700 hover:ring-1 hover:ring-gold/30 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/50">
                  {service.description}
                </p>
                <p className="mt-4 text-xs tracking-widest uppercase text-gold/70 transition-colors group-hover:text-gold">
                  Explore direction
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
