"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="flex flex-col divide-y divide-ink/10">
      {posts.map((post, i) => (
        <BlogEntry key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}

function BlogEntry({ post, index }: { post: BlogPost; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <article
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link href={`/blog/${post.slug}`} className="group block py-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-xs text-ink/40">
            <span className="tracking-widest uppercase">{post.category}</span>
            <span>-</span>
            <span>{post.date}</span>
            <span>-</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-gold md:text-3xl">
            <span className="text-balance">{post.title}</span>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink/50">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
