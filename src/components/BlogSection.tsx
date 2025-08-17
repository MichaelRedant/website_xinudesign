import matter from "gray-matter";
import { Link } from "react-router-dom";
import { useMemo } from "react";

interface BlogMeta {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  image?: string;
  readingMinutes?: number;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-BE", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

export default function BlogSection() {
  const files = import.meta.glob("/src/content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;

  const posts = useMemo(
    () =>
      Object.values(files)
        .map((raw) => {
          const { data, content } = matter(raw);
          const fm = data as BlogMeta;
          const words = content.split(/\s+/).filter(Boolean);
          const fallbackExcerpt =
            fm.excerpt ||
            words.slice(0, 24).join(" ") + (words.length > 24 ? "…" : "");
          const reading =
            fm.readingMinutes ||
            Math.max(2, Math.round((words.length || 300) / 220));
          return { ...fm, excerpt: fallbackExcerpt, readingMinutes: reading };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3),
    [files],
  );

  return (
    <section
      className="px-4 py-24 bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Laatste artikels</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => {
            const href = `/blog/${post.slug}`;
            return (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur border border-white/40 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-xl transition"
              >
                {post.image ? (
                  <Link
                    to={href}
                    aria-label={post.title}
                    className="relative block"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-48 w-full object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                ) : (
                  <div
                    className="h-48 w-full bg-slate-100 dark:bg-slate-800"
                    aria-hidden
                  />
                )}
                <div className="flex flex-col p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 leading-snug">
                    <Link
                      to={href}
                      className="hover:underline decoration-2 underline-offset-2"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    {formatDate(post.date)} • {post.readingMinutes} min
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 font-medium hover:underline"
          >
            Alle artikels
          </Link>
        </div>
      </div>
    </section>
  );
}
