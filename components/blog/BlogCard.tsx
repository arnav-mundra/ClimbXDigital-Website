import Link from "next/link";
import { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6">
      <p className="mb-2 text-xs uppercase tracking-wider text-[#F5A623]">{post.category}</p>
      <h3 className="mb-3 text-2xl font-bold">{post.title}</h3>
      <p className="mb-4 text-white/70">{post.excerpt}</p>
      <p className="mb-4 text-sm text-white/50">
        {post.date} · {post.readTime}
      </p>
      <Link href={`/blog/${post.slug}`} className="text-[#F5A623]">
        Read →
      </Link>
    </article>
  );
}
