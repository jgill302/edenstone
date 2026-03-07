import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { MaterialsContent } from "@/components/materials-content";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Materials & Philosophy | Gestalt Gardens",
  description:
    "What we use and why. Stone, wood, plants, and water -- chosen for longevity, not trend.",
};

export default function MaterialsPage() {
  return (
    <main>
      <Navigation />
      <section className="bg-background pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
            Materials
          </p>
          <h1 className="font-serif text-3xl text-ink md:text-5xl">
            <span className="text-balance">What we use and why</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/50">
            Every material in a Gestalt garden is chosen for how it ages, how it
            feels, and how it performs in Austin&apos;s climate. Nothing is here
            because it&apos;s popular.
          </p>
        </div>
      </section>
      <MaterialsContent />
      <Footer />
    </main>
  );
}
