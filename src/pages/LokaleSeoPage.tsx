// src/pages/LokaleSeoPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { FaBullhorn, FaChartLine, FaCode } from "react-icons/fa";

const md = new MarkdownIt({ html: true, linkify: true });

type Frontmatter = {
  title: string;
  h1?: string;
  slug: string;
  city: string;
  province?: string;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  description: string;
  canonical: string;
  phone?: string;
  email?: string;
  address?: {
    street: string;
    postalCode: string;
    locality: string;
    country: string;
  };
  geo?: { lat: number; lng: number };
  services?: { name: string; short: string }[];
  faqs?: { q: string; a: string }[];
  lastmod?: string;
  related?: { title: string; url: string }[];
};

export default function LokaleSeoPage() {
  const { city } = useParams<{ city: string }>();
  const [html, setHtml] = useState<string>("");
  const [fm, setFm] = useState<Frontmatter | null>(null);

  const mdPath = useMemo(
    () => `/src/content/landings/${city?.toLowerCase()}.md`,
    [city],
  );

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        // Dynamisch importeren via Vite: gebruik absolute url via import.meta.glob (veiliger)
        const files = import.meta.glob("/src/content/landings/*.md", {
          query: "?raw",
          import: "default",
        });
        const key = `/src/content/landings/${city?.toLowerCase()}.md`;
        if (!files[key]) throw new Error("Pagina niet gevonden");

        const raw = await files[key]();
        const { data, content } = matter(raw);
        if (!isMounted) return;

        setFm(data as Frontmatter);
        setHtml(md.render(content));
      } catch {
        setFm(null);
        setHtml("<p>Deze stadspagina werd nog niet aangemaakt.</p>");
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [mdPath, city]);

  // SEO/meta tags
  useEffect(() => {
    if (!fm) return;
    document.title = fm.title || `Diensten ${fm.city} | Xinudesign`;

    const setMeta = (
      selector: string,
      attr: "name" | "property",
      value: string,
      content: string,
    ) => {
      let tag = document.querySelector(`meta[${attr}='${value}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Description
    setMeta("meta[name='description']", "name", "description", fm.description);

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fm.canonical);

    // Open Graph
    setMeta("", "property", "og:title", fm.title);
    setMeta("", "property", "og:description", fm.description);
    setMeta("", "property", "og:url", fm.canonical);
    setMeta("", "property", "og:type", "website");

    // JSON‑LD: LocalBusiness + FAQ (indien aanwezig)
    // Verwijder bestaande scripts die we eerder injecteerden
    Array.from(document.querySelectorAll("script[data-ld='local']")).forEach(
      (s) => s.remove(),
    );
    Array.from(document.querySelectorAll("script[data-ld='faq']")).forEach(
      (s) => s.remove(),
    );
    Array.from(
      document.querySelectorAll("script[data-ld='breadcrumbs']"),
    ).forEach((s) => s.remove());

    if (fm.address) {
      const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Xinudesign",
        image: "https://www.xinudesign.be/apple-touch-icon.png",
        url: fm.canonical,
        telephone: fm.phone,
        email: fm.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: fm.address.street,
          addressLocality: fm.address.locality,
          postalCode: fm.address.postalCode,
          addressCountry: fm.address.country,
        },
        areaServed: fm.city,
        ...(fm.geo
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: fm.geo.lat,
                longitude: fm.geo.lng,
              },
            }
          : {}),
        sameAs: [
          "https://www.linkedin.com/in/michael-redant",
          "https://www.instagram.com/michael-redant",
        ],
      };
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.ld = "local";
      s.innerHTML = JSON.stringify(localBusiness);
      document.head.appendChild(s);
    }

    if (fm.faqs?.length) {
      const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: fm.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      };
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.ld = "faq";
      s.innerHTML = JSON.stringify(faqLd);
      document.head.appendChild(s);
    }

    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.xinudesign.be/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Diensten",
          item: "https://www.xinudesign.be/diensten",
        },
        { "@type": "ListItem", position: 3, name: fm.city, item: fm.canonical },
      ],
    };
    const b = document.createElement("script");
    b.type = "application/ld+json";
    b.dataset.ld = "breadcrumbs";
    b.innerHTML = JSON.stringify(breadcrumbLd);
    document.head.appendChild(b);
  }, [fm]);

  if (!fm) {
    return (
      <main className="px-4 py-20">
        <h1>Stad niet gevonden</h1>
        <p>
          Maak eerst de landingspagina aan in{" "}
          <code>src/content/landings/{city}.md</code>.
        </p>
      </main>
    );
  }

  const icons: Record<string, React.ComponentType> = {
    Webdevelopment: FaCode,
    "Advertising (Google & Meta)": FaBullhorn,
    "Online marketing": FaChartLine,
  };

  return (
    <main>
      <section className="px-4 py-24 text-center bg-gradient-to-br from-blue-600 via-purple-600 to-sky-500 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{fm.h1 ?? fm.title}</h1>
          <p className="text-lg opacity-90">{fm.description}</p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-blue-700 px-5 py-3 rounded font-medium hover:bg-slate-100"
          >
            Plan een gesprek
          </a>
        </div>
      </section>

      <article className="prose prose-slate dark:prose-invert max-w-4xl mx-auto px-4 py-16">
        {fm.services?.length ? (
          <div className="not-prose my-12 grid gap-6 md:grid-cols-3">
            {fm.services.map((s) => {
              const Icon = icons[s.name] ?? FaCode;
              return (
                <div
                  key={s.name}
                  className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-100 dark:border-slate-700"
                >
                  <Icon className="w-6 h-6 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {s.short}
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}

        <section dangerouslySetInnerHTML={{ __html: html }} />

        {fm.related?.length ? (
          <section className="mt-12">
            <h2>Lees ook</h2>
            <ul className="list-disc ml-5">
              {fm.related.map((r) => (
                <li key={r.url}>
                  <a href={r.url} className="text-blue-600 hover:underline">
                    {r.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {fm.faqs?.length ? (
          <section className="mt-12">
            <h2>Veelgestelde vragen</h2>
            <div className="space-y-4">
              {fm.faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="border border-slate-200 dark:border-slate-700 rounded"
                >
                  <summary className="cursor-pointer px-4 py-2 font-medium">
                    {q}
                  </summary>
                  <div className="px-4 pb-4 text-slate-700 dark:text-slate-300">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        <footer className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
          >
            Plan een gesprek
          </a>
        </footer>
      </article>
    </main>
  );
}
