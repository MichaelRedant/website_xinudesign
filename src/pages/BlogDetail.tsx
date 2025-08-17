import { Link, useParams } from "react-router-dom";
import matter from "gray-matter";
import { marked } from "marked";
import Seo from "../components/Seo";

interface BlogMeta {
  title: string;
  slug: string;
  date: string; // ISO
  author?: string;
  excerpt: string;
  tags?: string[];
  image?: string;
  canonical?: string;
  lastmod?: string;
}

// Utils
const siteUrl = "https://www.xinudesign.be";
const blogUrl = `${siteUrl}/blog`;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-BE", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

const calcReadingMinutes = (md: string) => {
  const words = (md.replace(/```[\s\S]*?```/g, "").match(/\S+/g) || []).length;
  return Math.max(2, Math.round(words / 220));
};

// Configure marked (safe IDs, no mangling of emails, etc.)
marked.setOptions({ mangle: false, headerIds: true, headerPrefix: "h-" });

export default function BlogDetail() {
  const { slug } = useParams();

  // Load all markdown posts eagerly (Vite glob)
  const files = import.meta.glob("/src/content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;

  const parsed = Object.entries(files).map(([path, raw]) => {
    const parsed = matter(raw);
    const meta = parsed.data as BlogMeta;
    return { path, meta, content: parsed.content };
  });

  // Sort for prev/next navigation
  const sorted = parsed
    .filter((p) => p.meta?.date)
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
    );

  const currentIndex = sorted.findIndex((p) => p.meta.slug === slug);
  const current = sorted[currentIndex];

  if (!current) {
    return (
      <main className="px-4 py-24 max-w-3xl mx-auto">
        <p className="text-slate-600 dark:text-slate-300">
          Artikel niet gevonden.
        </p>
        <Link
          to="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block"
        >
          ← Terug naar blog
        </Link>
      </main>
    );
  }

  const meta = current.meta;
  const content = current.content;

  const canonicalUrl = meta.canonical || `${blogUrl}/${meta.slug}`;
  const imageUrl = meta.image
    ? new URL(meta.image, siteUrl).toString()
    : `${siteUrl}/assets/img/default-blog.jpg`;
  const keywords = meta.tags?.join(", ");
  const readingMinutes = calcReadingMinutes(content);

  // Build a simple Table of Contents from H2/H3 using Marked's slugger
  const slugger = new marked.Slugger();
  const headingMatches = Array.from(content.matchAll(/^##?\s+(.+)$/gim));
  const headings = headingMatches.map((m) => ({
    text: m[1],
    id: `h-${slugger.slug(m[1])}`,
  }));
  const html = marked.parse(content, { headerIds: true, headerPrefix: "h-" });

  // JSON-LD
  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: meta.title,
      description: meta.excerpt,
      image: [imageUrl],
      datePublished: meta.date,
      dateModified: meta.lastmod || meta.date,
      author: {
        "@type": "Person",
        name: meta.author || "Xinudesign Team",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Xinudesign",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/apple-touch-icon.png`,
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords,
      wordCount: content.split(/\s+/).length,
      articleSection: meta.tags?.[0] || "Insights",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
        {
          "@type": "ListItem",
          position: 3,
          name: meta.title,
          item: canonicalUrl,
        },
      ],
    },
  ];

  const prev = sorted[currentIndex + 1]?.meta;
  const next = sorted[currentIndex - 1]?.meta;

  return (
    <>
      {/* SEO */}
      <Seo
        title={`${meta.title} | Xinudesign Blog`}
        description={meta.excerpt}
        canonical={canonicalUrl}
        jsonLd={jsonLd}
        image={imageUrl}
        keywords={keywords ? keywords.split(",") : []}
        lastmod={meta.lastmod}
      />

      {/* Top progress bar (scroll) */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 z-40"
        style={{ width: "var(--scroll-progress, 0%)" }}
        aria-hidden
      />

      <main className="px-4 py-24 bg-[radial-gradient(1200px_600px_at_10%_-10%,#dbeafe_10%,transparent_60%),radial-gradient(900px_500px_at_90%_-20%,#fecaca_8%,transparent_60%)] dark:bg-[radial-gradient(1200px_600px_at_10%_-10%,#0b1220_10%,transparent_60%),radial-gradient(900px_500px_at_90%_-20%,#111827_8%,transparent_60%)]">
        <article className="mx-auto max-w-3xl">
          {/* Hero */}
          <header className="mb-10 text-center" data-aos="fade-up">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {formatDate(meta.date)} • {readingMinutes} min{" "}
              {meta.author && `• ${meta.author}`}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 tracking-tight text-slate-900 dark:text-white">
              {meta.title}
            </h1>

            {meta.tags && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {meta.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 hover:translate-y-[-1px] transition"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {meta.image && (
              <img
                src={meta.image}
                alt={meta.title}
                className="rounded-2xl shadow-lg mt-8 mx-auto aspect-[16/9] object-cover w-full max-h-[480px]"
                loading="lazy"
              />
            )}

            {/* Quick meta strip */}
            {headings.length > 0 && (
              <nav
                className="mt-8 mx-auto max-w-3xl bg-white/70 dark:bg-slate-900/50 backdrop-blur border border-white/40 dark:border-slate-800 rounded-2xl p-4 text-left shadow-sm"
                aria-label="Inhoudsopgave"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Inhoud
                </p>
                <ul className="flex flex-wrap gap-3 text-sm">
                  {headings.slice(0, 8).map((h, i) => (
                    <li key={i}>
                      <a
                        href={`#${h.id}`}
                        className="inline-block px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </header>

          {/* Content */}
          <div
            className="prose prose-slate dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:scroll-mt-24 city-prose"
            dangerouslySetInnerHTML={{ __html: html }}
            data-aos="fade-up"
            data-aos-delay="100"
          />

          {/* Share / CTA */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Deel dit artikel:
            </div>
            <div className="flex gap-2">
              <a
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-sm"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 text-sm"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(meta.title)}`}
                target="_blank"
                rel="noreferrer"
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* Prev / Next */}
          <hr className="my-10 border-slate-200 dark:border-slate-800" />
          <nav
            className="grid gap-4 sm:grid-cols-2"
            aria-label="Navigatie"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="group rounded-2xl border border-white/40 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur p-4 hover:shadow-lg transition"
              >
                <p className="text-xs text-slate-500">Vorige</p>
                <p className="font-medium text-slate-900 dark:text-slate-100 group-hover:underline">
                  {prev.title}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {formatDate(prev.date)}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="group rounded-2xl border border-white/40 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur p-4 hover:shadow-lg transition text-right"
              >
                <p className="text-xs text-slate-500">Volgende</p>
                <p className="font-medium text-slate-900 dark:text-slate-100 group-hover:underline">
                  {next.title}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {formatDate(next.date)}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-300 font-medium hover:translate-x-0.5 transition"
            >
              ← Terug naar blog
            </Link>
          </div>
        </article>
      </main>

      {/* Scroll progress calc */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(() => {\n  const onScroll = () => {\n    const h = document.documentElement;\n    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;\n    document.documentElement.style.setProperty('--scroll-progress', scrolled.toFixed(2) + '%');\n  };\n  document.addEventListener('scroll', onScroll, { passive: true });\n  onScroll();\n})();`,
        }}
      />
    </>
  );
}
