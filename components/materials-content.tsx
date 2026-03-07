"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Material {
  title: string;
  tagline: string;
  description: string;
  details: string[];
  image: string;
  alt: string;
}

const materials: Material[] = [
  {
    title: "Stone",
    tagline: "Natural aging over synthetic perfection",
    description:
      "We source stone that has already lived a life. Weathered limestone, river-tumbled basalt, and hand-cut flagstone that develops character with every season. In Austin's alkaline soil and intense sun, natural stone doesn't just hold up -- it gets better.",
    details: [
      "Locally sourced Texas limestone for heat tolerance",
      "Natural patina that deepens with age",
      "No sealants that create artificial sheen",
      "Each stone placed by hand, never machine-cut to fit",
    ],
    image: "/images/material-stone.jpg",
    alt: "Natural weathered stone with aged patina and moss",
  },
  {
    title: "Wood",
    tagline: "Charred for permanence, not trend",
    description:
      "Shou sugi ban -- the Japanese technique of charring cedar -- creates wood that resists rot, insects, and UV without chemicals. The deep black surface is not decorative; it's functional armor. In Austin's humidity swings, this matters.",
    details: [
      "Shou sugi ban (charred cedar) for natural preservation",
      "Reclaimed hardwoods when structurally sound",
      "No pressure-treated lumber in living spaces",
      "Finished with natural oils, never polyurethane",
    ],
    image: "/images/material-wood.jpg",
    alt: "Shou sugi ban charred cedar wood with deep grain patterns",
  },
  {
    title: "Plants",
    tagline: "Restraint over variety",
    description:
      "The impulse to fill every gap with greenery is one we resist. A single well-chosen specimen holds more presence than a hedge of fifty shrubs. We work with Austin's native palette and drought-adapted species, choosing plants that ask for less and give more.",
    details: [
      "Native and drought-adapted species for Austin's climate",
      "Intentional negative space between plantings",
      "Moss and groundcover over traditional lawn",
      "Seasonal interest without seasonal labor",
    ],
    image: "/images/material-plants.jpg",
    alt: "Minimal Japanese planting with ornamental grass and moss",
  },
  {
    title: "Water",
    tagline: "Subtlety over spectacle",
    description:
      "Water in our gardens is never a fountain. It's a quiet element -- a stone basin that overflows, a narrow channel that catches rain, a still surface that reflects. The sound of water is non-repeating, which is why it calms the nervous system in ways music cannot.",
    details: [
      "Tsukubai-style stone basins for quiet presence",
      "Recirculating systems with minimal water use",
      "Sound design: gentle overflow, not spray or splash",
      "Natural stone surrounds, never tile or composite",
    ],
    image: "/images/material-water.jpg",
    alt: "Still dark water in a stone basin with soft reflections",
  },
];

export function MaterialsContent() {
  return (
    <div className="flex flex-col">
      {materials.map((material, index) => (
        <MaterialBlock
          key={material.title}
          material={material}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}

function MaterialBlock({
  material,
  reverse,
}: {
  material: Material;
  reverse: boolean;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className={`py-20 md:py-28 ${reverse ? "bg-evergreen" : "bg-background"}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex flex-col gap-12 lg:items-center lg:gap-20 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          {/* Image */}
          <div
            className={`relative aspect-[4/5] w-full overflow-hidden rounded-lg lg:w-2/5 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <Image
              src={material.image}
              alt={material.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <p
              className={`mb-3 text-xs tracking-[0.3em] uppercase transition-all duration-700 delay-200 ${reverse ? "text-gold" : "text-gold"} ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {material.title}
            </p>
            <h2
              className={`font-serif text-2xl leading-snug md:text-3xl transition-all duration-700 delay-300 ${reverse ? "text-cream" : "text-ink"} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <span className="text-balance">{material.tagline}</span>
            </h2>
            <p
              className={`mt-6 max-w-lg text-base leading-relaxed transition-all duration-700 delay-400 ${reverse ? "text-cream/60" : "text-ink/60"} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              {material.description}
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {material.details.map((detail, i) => (
                <li
                  key={detail}
                  className={`flex items-start gap-3 text-sm transition-all duration-700 ${reverse ? "text-cream/50" : "text-ink/50"} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <span className="mt-1.5 block h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
