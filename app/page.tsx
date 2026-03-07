import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { PhilosophyPreview } from "@/components/philosophy-preview";
import { ServicesSection } from "@/components/services-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PhilosophyPreview />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
