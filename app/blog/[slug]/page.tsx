import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getBlogPost, getAllSlugs, blogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Gestalt Gardens`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  // Find next/prev posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || null;
  const prevPost = blogPosts[currentIndex - 1] || null;

  return (
    <main>
      <Navigation />
      <article className="min-h-screen bg-background pt-32 pb-24">
        <div className="mx-auto max-w-2xl px-6">
          {/* Header */}
          <header className="mb-16">
            <Link
              href="/blog"
              className="mb-8 inline-flex text-xs tracking-widest uppercase text-ink/30 transition-colors hover:text-gold"
            >
              Back to Journal
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs text-ink/40">
              <span className="tracking-widest uppercase">{post.category}</span>
              <span>-</span>
              <span>{post.date}</span>
              <span>-</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-4 font-serif text-3xl leading-snug text-ink md:text-4xl lg:text-5xl">
              <span className="text-balance">{post.title}</span>
            </h1>
            <p className="mt-4 font-serif text-lg italic text-ink/40">
              {post.subtitle}
            </p>
          </header>

          {/* Body */}
          <div className="flex flex-col gap-6">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-[1.85] text-ink/70"
              >
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Navigation */}
          <nav className="mt-20 border-t border-ink/10 pt-10">
            <div className="flex items-center justify-between">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col"
                >
                  <span className="text-xs tracking-widest uppercase text-ink/30 transition-colors group-hover:text-gold">
                    Previous
                  </span>
                  <span className="mt-1 font-serif text-sm text-ink transition-colors group-hover:text-gold">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col text-right"
                >
                  <span className="text-xs tracking-widest uppercase text-ink/30 transition-colors group-hover:text-gold">
                    Next
                  </span>
                  <span className="mt-1 font-serif text-sm text-ink transition-colors group-hover:text-gold">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </nav>
        </div>
      </article>
      <Footer />
    </main>
  );
}
