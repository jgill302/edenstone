import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { DirectionFinder } from "@/components/direction-finder";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Find Your Garden Direction | Gestalt Gardens",
  description:
    "A calm, 2-minute guided experience to discover the emotional and functional direction of your ideal outdoor space.",
};

export default function DirectionFinderPage() {
  return (
    <main>
      <Navigation />
      <section className="min-h-screen bg-background pt-20">
        <div className="mx-auto max-w-2xl px-6 pt-12 text-center">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
            Garden Direction Finder
          </p>
          <h1 className="font-serif text-3xl text-ink md:text-4xl">
            <span className="text-balance">
              Let&apos;s discover what your garden should feel like
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/50">
            Six quiet questions. No right answers. This is about feeling, not
            features.
          </p>
        </div>
        <DirectionFinder />
      </section>
      <Footer />
    </main>
  );
}
