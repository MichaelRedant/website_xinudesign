import matter from "gray-matter";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

interface BlogMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author?: string;
  tags?: string[];
  image?: string;
}

export default function Blog() {
  const files = import.meta.glob("/src/content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;
  const posts: BlogMeta[] = Object.values(files)
    .map((raw) => {
      const { data } = matter(raw);
      return data as BlogMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: "https://www.xinudesign.be/blog",
    name: "Xinudesign Blog",
    description:
      "Insights over webdesign, SEO en SaaS growth uit eigen studio.",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://www.xinudesign.be/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <Seo
        title="Blog | Xinudesign"
        description="Nieuwe inzichten over webdesign, marketing en AI."
        canonical="https://www.xinudesign.be/blog"
        keywords={["blog", "webdesign", "seo", "saas"]}
        jsonLd={jsonLd}
      />
      <main className="px-4 py-24 bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800">
        <section
          className="max-w-6xl mx-auto text-center mb-16"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
            Blog
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Verhalen, strategieën en tools voor digitale groei.
          </p>
        </section>
        <section
          className="grid gap-10 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur border border-white/20 shadow-lg hover:shadow-xl transition"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="flex flex-col p-6 flex-1">
                <h2 className="text-2xl font-semibold mb-2 text-slate-800 dark:text-slate-100">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>{post.date}</span>
                  {post.tags && (
                    <span className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
