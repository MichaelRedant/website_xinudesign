import { useParams } from "react-router-dom";
import matter from "gray-matter";
import { marked } from "marked";
import Seo from "../components/Seo"; // zelfde SEO-component die je al gebruikt

interface BlogMeta {
  title: string;
  slug: string;
  date: string;
  author?: string;
  excerpt: string;
  tags?: string[];
  image?: string;
  canonical?: string;
  lastmod?: string;
}

export default function BlogDetail() {
  const { slug } = useParams();

  // Alle blogs ophalen (eager import → build-time bundling)
  const files = import.meta.glob("/src/content/blogs/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;

  // Correcte blog vinden
  const post = Object.values(files)
    .map((raw) => matter(raw))
    .find(({ data }) => data.slug === slug);

  if (!post) return <p>Artikel niet gevonden.</p>;

  const meta = post.data as BlogMeta;

  // Defaults
  const canonicalUrl =
    meta.canonical || `https://www.xinudesign.be/blog/${meta.slug}`;
  const imageUrl =
    meta.image || "https://www.xinudesign.be/assets/img/default-blog.jpg";
  const keywords = meta.tags?.join(", ");

  // JSON-LD (Schema.org → Article / BlogPosting)
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
        url: "https://www.xinudesign.be",
      },
      publisher: {
        "@type": "Organization",
        name: "Xinudesign",
        logo: {
          "@type": "ImageObject",
          url: "https://www.xinudesign.be/apple-touch-icon.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
      keywords,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xinudesign.be/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.xinudesign.be/blog" },
        { "@type": "ListItem", position: 3, name: meta.title, item: canonicalUrl },
      ],
    },
  ];

  return (
    <>
      {/* 🔹 SEO tags */}
      <Seo
        title={`${meta.title} | Xinudesign Blog`}
        description={meta.excerpt}
        canonical={canonicalUrl}
        jsonLd={jsonLd}
        image={imageUrl}
        keywords={keywords ? keywords.split(",") : []}
        lastmod={meta.lastmod}
      />

      {/* 🔹 Blog content */}
      <main className="max-w-4xl mx-auto px-6 py-20 prose dark:prose-invert">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
          <p className="text-sm text-slate-500">
            {meta.date} {meta.author && `• Geschreven door ${meta.author}`}
          </p>
          {meta.tags && (
            <div className="mt-3 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          {meta.image && (
            <img
              src={meta.image}
              alt={meta.title}
              className="rounded-2xl shadow-lg mt-8"
              loading="lazy"
            />
          )}
        </header>

        <article
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </main>
    </>
  );
}
