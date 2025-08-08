// src/pages/LokaleSeoPage.tsx
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

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
    document.title = fm.title || `Lokale SEO ${fm.city} | Xinudesign`;

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
          name: "Lokale SEO",
          item: "https://www.xinudesign.be/lokale-seo",
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

  return (
    <main className="px-4 py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <article className="prose prose-slate dark:prose-invert max-w-3xl mx-auto">
        <header className="mb-8">
          <h1>{fm.h1 ?? fm.title}</h1>
          <p className="text-slate-600">{fm.description}</p>
          <a
            href="/contact"
            className="inline-block mt-4 bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
          >
            Plan een gesprek
          </a>
          {fm.services?.length ? (
            <ul className="not-prose mt-4 grid gap-3">
              {fm.services.map((s) => (
                <li
                  key={s.name}
                  className="p-3 rounded border border-slate-200 dark:border-slate-700"
                >
                  <strong>{s.name}:</strong> {s.short}
                </li>
              ))}
            </ul>
          ) : null}
        </header>

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
            <h2>Veelgestelde vragen over {fm.city}.</h2>
            <dl className="space-y-4">
              {fm.faqs.map(({ q, a }) => (
                <div key={q}>
                  <dt className="font-semibold">{q}</dt>
                  <dd className="text-slate-700 dark:text-slate-300">{a}</dd>
                </div>
              ))}
            </dl>
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
