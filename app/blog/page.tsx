import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { SectionLabel } from "@/components/shared/SectionLabel";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionLabel label="THE PLAYBOOK" />
      <h1 className="mb-2 font-[var(--font-great-vibes)] text-6xl text-[#F5A623]">The Playbook</h1>
      <p className="mb-10 text-white/70">Insights from the climb.</p>
      <div className="grid gap-5 md:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
