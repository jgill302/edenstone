"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    title: "Materials Over Trends",
    description:
      "We choose stone, wood, and water that age with grace. Nothing here is selected because it's popular -- it's selected because it endures.",
  },
  {
    title: "Restraint Over Excess",
    description:
      "A single well-placed stone can hold more presence than a hundred plants. We design by subtraction.",
  },
  {
    title: "Feeling Over Function",
    description:
      "Every element is chosen for how it makes you feel -- not just what it does. Calm is the function.",
  },
];

export function PhilosophyPreview() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Image side */}
          <div
            className={`relative aspect-[3/4] w-full overflow-hidden rounded-lg lg:w-2/5 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <Image
              src="/images/zen-stones.jpg"
              alt="Carefully placed natural stones with moss, soft morning light"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Content side */}
          <div className="flex flex-1 flex-col justify-center">
            <p
              className={`mb-4 text-xs tracking-[0.3em] uppercase text-gold transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              Our Philosophy
            </p>
            <h2
              className={`font-serif text-3xl leading-snug text-ink md:text-4xl transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <span className="text-balance">
                Gardens are not decoration. They are counterbalance.
              </span>
            </h2>
            <p
              className={`mt-6 max-w-md text-base leading-relaxed text-ink/60 transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              In a world designed to overstimulate, we create spaces that bring
              you back to your senses. Rooted in Japanese design principles and
              adapted for Austin&apos;s climate.
            </p>

            {/* Pillars */}
            <div className="mt-12 flex flex-col gap-8">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`border-l-2 border-gold/30 pl-6 transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  style={{ transitionDelay: `${500 + i * 150}ms` }}
                >
                  <h3 className="font-serif text-lg text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/50">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
