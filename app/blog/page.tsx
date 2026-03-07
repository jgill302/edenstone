import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { BlogList } from "@/components/blog-list";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Journal | Gestalt Gardens",
  description:
    "Thoughts on garden design, materials, nervous system regulation, and the philosophy of intentional outdoor spaces.",
};

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      <section className="min-h-screen bg-background pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              Journal
            </p>
            <h1 className="font-serif text-3xl text-ink md:text-5xl">
              <span className="text-balance">Thoughts on designed calm</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/50">
              Long-form writing on garden design, material philosophy, and why
              outdoor spaces matter more than most people think.
            </p>
          </div>
          <BlogList posts={blogPosts} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
