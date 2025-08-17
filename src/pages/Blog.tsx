import matter from "gray-matter";
import { Link } from "react-router-dom";

interface BlogMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author?: string;
  tags?: string[];
}

export default function Blog() {
  const files = import.meta.glob("/src/content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;

  const posts: BlogMeta[] = Object.values(files).map((raw) => {
    const { data } = matter(raw);
    return data as BlogMeta;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-slate-600">{post.excerpt}</p>
            <span className="block mt-3 text-sm text-slate-500">
              {post.date}
            </span>
          </article>
        ))}
      </div>
    </main>
  );
}
