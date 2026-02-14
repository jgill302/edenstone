import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Start a Conversation | Gestalt Gardens",
  description:
    "Tell us about your space and how you want it to feel. We respond with a written concept, design direction, and budget band.",
};

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <section className="min-h-screen bg-background pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              Contact
            </p>
            <h1 className="font-serif text-3xl text-ink md:text-5xl">
              <span className="text-balance">Start a conversation</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/50">
              No pressure, no sales call. Tell us about your space and how you
              want it to feel. We respond with thought, not templates.
            </p>
          </div>

          <ContactForm />

          {/* What to expect */}
          <div className="mt-24 border-t border-ink/10 pt-16">
            <p className="mb-8 text-center text-xs tracking-[0.3em] uppercase text-ink/30">
              What to expect
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Written Concept",
                  description:
                    "We read what you share and respond with initial thoughts on direction, tone, and possibility.",
                },
                {
                  step: "02",
                  title: "Design Direction",
                  description:
                    "If there is alignment, we outline a design approach -- materials, spatial feel, and key elements.",
                },
                {
                  step: "03",
                  title: "Budget Band",
                  description:
                    "Not a quote. A realistic range based on scope, so you can decide before going deeper.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <p className="mb-3 font-serif text-2xl text-gold/40">
                    {item.step}
                  </p>
                  <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/50">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
