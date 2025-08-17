import matter from "gray-matter";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Seo from "../components/Seo";

interface BlogMeta {
  title: string;
  slug: string;
  date: string; // ISO yyyy-mm-dd
  excerpt?: string;
  author?: string;
  tags?: string[];
  image?: string; // absolute or /public path
  readingMinutes?: number;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-BE", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

const PAGE_SIZE = 12;

export default function Blog() {
  // 🔹 Load all markdown files at build time
  const files = import.meta.glob("/src/content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;

  const allPosts: BlogMeta[] = useMemo(() =>
    Object.values(files)
      .map((raw) => {
        const { data, content } = matter(raw);
        const fm = data as BlogMeta;
        const words = content.split(/\s+/).filter(Boolean);
        const fallbackExcerpt =
          fm.excerpt || words.slice(0, 36).join(" ") + (words.length > 36 ? "…" : "");
        const reading =
          fm.readingMinutes || Math.max(2, Math.round((words.length || 300) / 220)); // ~220 wpm
        return {
          ...fm,
          excerpt: fallbackExcerpt,
          readingMinutes: reading,
          tags: (fm.tags || []).slice(0, 6),
        } as BlogMeta;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  [files]);

  // 🔹 Filters via querystring (q + tag + page)
  const [params, setParams] = useSearchParams();
  const paramQ = params.get("q") ?? "";
  const tag = params.get("tag") ?? "";
  const pageFromUrl = Math.max(1, parseInt(params.get("page") || "1", 10));

  // Debounced search (smoother UX)
  const [qInput, setQInput] = useState(paramQ);
  useEffect(() => setQInput(paramQ), [paramQ]);
  useEffect(() => {
    const t = setTimeout(() => {
      if (qInput) params.set("q", qInput); else params.delete("q");
      params.set("page", "1");
      setParams(params, { replace: true });
    }, 200);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qInput]);

  const tagsAll = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of allPosts) for (const t of p.tags || []) map.set(t, (map.get(t) || 0) + 1);
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [allPosts]);

  const filtered = useMemo(() => {
    const q = qInput.trim().toLowerCase();
    return allPosts.filter((p) => {
      const hitQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.excerpt || "").toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q));
      const hitTag = !tag || (p.tags || []).includes(tag);
      return hitQ && hitTag;
    });
  }, [allPosts, qInput, tag]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(pageFromUrl, totalPages);
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  // JSON-LD
  const siteUrl = "https://www.xinudesign.be";
  const blogUrl = `${siteUrl}/blog`;

  const jsonLdBlog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: blogUrl,
    name: "Xinudesign Blog",
    description: "Insights over webdesign, SEO en SaaS growth uit eigen studio.",
    blogPost: visible.map((p, i) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${blogUrl}/${p.slug}`,
      datePublished: p.date,
      author: p.author ? { "@type": "Person", name: p.author } : undefined,
      image: p.image ? new URL(p.image, siteUrl).toString() : undefined,
      position: start + i + 1,
    })),
  } as const;

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
    ],
  } as const;

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${blogUrl}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  } as const;

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: `${blogUrl}${tag ? `?tag=${encodeURIComponent(tag)}` : ""}`,
    numberOfItems: visible.length,
    itemListElement: visible.map((p, i) => ({
      "@type": "ListItem",
      position: start + i + 1,
      url: `${blogUrl}/${p.slug}`,
      name: p.title,
    })),
  } as const;

  // Helpers
  const setPage = (p: number) => {
    params.set("page", String(p));
    setParams(params, { replace: true });
    // Scroll to top after page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Seo
        title="Blog | Xinudesign"
        description="Nieuwe inzichten over webdesign, marketing, SEO en AI — rechtstreeks uit de studio."
        canonical={blogUrl}
        keywords={["blog", "webdesign", "seo", "saas", "ai", "growth"]}
        jsonLd={[jsonLdWebsite, jsonLdBreadcrumbs, jsonLdBlog, jsonLdItemList]}
        // Optional: avoid indexing faceted pages
      />

      <main className="px-4 py-24 bg-[radial-gradient(1200px_600px_at_10%_-10%,#dbeafe_10%,transparent_60%),radial-gradient(900px_500px_at_90%_-20%,#fecaca_8%,transparent_60%)] dark:bg-[radial-gradient(1200px_600px_at_10%_-10%,#0b1220_10%,transparent_60%),radial-gradient(900px_500px_at_90%_-20%,#111827_8%,transparent_60%)]">
        {/* Hero */}
        <section className="max-w-6xl mx-auto mb-10 text-center" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Blog
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Verhalen, strategieën en tools voor digitale groei.
          </p>

          {/* Controls: search + tag pills */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <label htmlFor="blog-search" className="sr-only">
              Zoek in blog
            </label>
            <input
              id="blog-search"
              type="search"
              placeholder="Zoek op onderwerp, tag of titel…"
              value={qInput}
              onChange={(e) => setQInput(e.target.value)}
              className="w-full max-w-xl rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/50 backdrop-blur px-4 py-3 text-slate-800 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Zoek in blogartikels"
            />

            {tagsAll.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <button
                  onClick={() => {
                    params.delete("tag");
                    params.set("page", "1");
                    setParams(params, { replace: true });
                  }}
                  className={`px-3 py-1 rounded-full text-sm border transition ${
                    !tag
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                  }`}
                >
                  Alle ({allPosts.length})
                </button>
                {tagsAll.map(([t, count]) => (
                  <button
                    key={t}
                    onClick={() => {
                      params.set("tag", t);
                      params.set("page", "1");
                      setParams(params, { replace: true });
                    }}
                    className={`px-3 py-1 rounded-full text-sm border transition ${
                      tag === t
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                    }`}
                    aria-pressed={tag === t}
                    aria-label={`Filter op tag ${t}`}
                  >
                    #{t} ({count})
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Grid */}
        <section
          className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {visible.map((post, i) => {
            const href = `/blog/${post.slug}`;
            const eager = !tag && !qInput && page === 1 && i === 0; // LCP-optimalisatie
            return (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur border border-white/40 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-xl transition will-change-transform"
              >
                {post.image ? (
                  <Link to={href} aria-label={post.title} className="relative block">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading={eager ? "eager" : "lazy"}
                      className="h-48 w-full object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                ) : (
                  <div className="h-48 w-full bg-slate-100 dark:bg-slate-800 animate-pulse" aria-hidden />
                )}
                <div className="flex flex-col p-6 flex-1">
                  <h2 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100 leading-snug">
                    <Link to={href} className="hover:underline decoration-2 underline-offset-2">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 flex-1 line-clamp-3">{post.excerpt}</p>

                  <div className="mt-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span title={post.date}>
                      {formatDate(post.date)} • {post.readingMinutes} min
                    </span>
                    {post.tags && post.tags.length > 0 && (
                      <span className="flex gap-2">
                        {post.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-xs"
                          >
                            #{t}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>

                  <div className="pt-4">
                    <Link
                      to={href}
                      className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 font-medium hover:translate-x-0.5 transition"
                      aria-label={`${post.title} openen`}
                    >
                      Lees meer
                      <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                        <path fill="currentColor" d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}

          {visible.length === 0 && (
            <div className="col-span-full text-center text-slate-600 dark:text-slate-300">
              Geen artikels gevonden. Probeer een andere zoekterm of reset je filters.
            </div>
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            className="mt-12 max-w-6xl mx-auto flex items-center justify-center gap-2"
            aria-label="Paginering"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <button
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-50"
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              Vorige
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`min-w-9 h-9 px-3 rounded-xl border text-sm transition ${
                  page === i + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                }`}
                aria-current={page === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-50"
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              Volgende
            </button>
          </nav>
        )}
      </main>
    </>
  );
}
