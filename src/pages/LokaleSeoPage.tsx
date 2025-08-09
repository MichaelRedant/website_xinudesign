import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { motion, useScroll, useTransform } from "framer-motion";

import { FaBullhorn, FaChartLine, FaCode } from "react-icons/fa";

const md = new MarkdownIt({ html: true, linkify: true });

// Frontmatter type
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
  image?: string; // <-- nieuw
  video?: string; // <-- optioneel, fallback op default
  services?: { name: string; short: string }[];
  faqs?: { q: string; a: string }[];
  lastmod?: string;
};

// Motion helpers
const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.12 * i },
  }),
};


export default function LokaleSeoPage() {
  const { city } = useParams<{ city: string }>();
  const [html, setHtml] = useState<string>("");
  const [fm, setFm] = useState<Frontmatter | null>(null);

  const mdPath = useMemo(
    () => `/src/content/landings/${city?.toLowerCase()}.md`,
    [city]
  );

  // Load .md content
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
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

  // Meta + JSON-LD
  useEffect(() => {
    if (!fm) return;
    document.title = fm.title || `Diensten ${fm.city} | Xinudesign`;

    const ensureMeta = (attr: "name" | "property", key: string, content: string) => {
      let tag = document.querySelector(`meta[${attr}='${key}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta("name", "description", fm.description);
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fm.canonical);

    ensureMeta("property", "og:title", fm.title);
    ensureMeta("property", "og:description", fm.description);
    ensureMeta("property", "og:url", fm.canonical);
    ensureMeta("property", "og:type", "website");

    // Clean LD
    ["local", "faq", "breadcrumbs"].forEach((k) =>
      Array.from(document.querySelectorAll(`script[data-ld='${k}']`)).forEach((s) => s.remove())
    );

    // LocalBusiness
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
          ? { geo: { "@type": "GeoCoordinates", latitude: fm.geo.lat, longitude: fm.geo.lng } }
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

    // FAQ
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

    // Breadcrumbs
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xinudesign.be/" },
        { "@type": "ListItem", position: 2, name: "Diensten", item: "https://www.xinudesign.be/diensten" },
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
    "Lokale SEO & Online marketing": FaChartLine,
    "Online marketing": FaChartLine,
  };

  // Defaults voor media
  const heroVideo = fm.video || "/assets/video/ai_video.mp4";
  const cityImage = fm.image || `/assets/img/landingpages/${fm.slug}.png`;
  

  return (
    <main className="relative overflow-hidden">
      {/* HERO: vaste video + stadsspecifieke image overlay */}
      <section className="relative h-[78vh] min-h-[560px] flex items-center justify-center text-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
        {/* Stadsspecifieke image als decor (glassy card, zwevend effect) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-8 right-4 sm:right-12 hidden md:block"
        >
          <div className="rounded-2xl overflow-hidden ring-1 ring-white/25 shadow-2xl backdrop-blur bg-white/10">
            <img
              src={cityImage}
              alt={fm.city}
              className="h-40 w-64 object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{fm.h1 ?? fm.title}</h1>
          <p className="text-lg/7 opacity-95">{fm.description}</p>
          <motion.a
            href="/contact"
            className="inline-block mt-8 px-6 py-3 rounded-xl font-semibold bg-white text-blue-700 shadow hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Plan een gesprek
          </motion.a>
        </motion.div>
      </section>

      {/* SERVICES: glassy cards + scroll reveal */}
      {fm.services?.length ? (
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-4 py-16 bg-gray-50"
        >
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {fm.services.map((s) => {
              const Icon = icons[s.name] ?? FaCode;
              return (
                <motion.div
                  key={s.name}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/40 bg-white p-6 shadow-sm hover:shadow-xl transition-all
                             dark:bg-slate-900 dark:border-white/10"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg
                                  bg-gradient-to-br from-blue-600/15 to-indigo-600/15 ring-1 ring-black/5">
                    <Icon className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.short}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      ) : null}

      {/* SPLIT SECTION (wisselbaar beeld) */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={reveal}>
            <h2 className="text-3xl font-bold mb-4">Waarom kiezen voor Xinudesign in {fm.city}?</h2>
            <p className="text-gray-600 mb-6">
              We combineren lokale kennis met digitale expertise. Of je nu midden in {fm.city} zit of in de randgemeenten,
              we begrijpen de doelgroep en vertalen dat naar performante UX, sterke content en meetbare resultaten.
            </p>
            <a
              href="/portfolio"
              className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Bekijk ons werk
            </a>
          </motion.div>
          <motion.div variants={reveal} className="w-full">
            <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-xl">
              <img
                src={cityImage}
                alt={`${fm.city} visual`}
                className="w-full h-64 object-cover md:h-80"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* MARKDOWN CONTENT: scroll reveal */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-3xl px-4 py-16"
      >
        <motion.article
          variants={reveal}
          className="prose prose-slate max-w-none dark:prose-invert"
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </motion.article>
      </motion.section>

      {/* FAQ: animated accordions */}
      {fm.faqs?.length ? (
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl px-4 pb-20"
        >
          <motion.h2 variants={reveal} className="text-2xl font-bold mb-4">
            Veelgestelde vragen
          </motion.h2>
          <div className="space-y-3">
            {fm.faqs.map(({ q, a }) => (
              <motion.details
                key={q}
                variants={reveal}
                className="group rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm
                           dark:bg-slate-900 dark:border-slate-700"
              >
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  <span>{q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "auto" }}
                  viewport={{ once: true }}
                  className="mt-2 text-slate-700 dark:text-slate-300 overflow-hidden"
                >
                  {a}
                </motion.div>
              </motion.details>
            ))}
          </div>
        </motion.section>
      ) : null}

      {/* FOOTER CTA */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-4 pb-24 text-center"
      >
        <motion.a
          variants={reveal}
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white
                     bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg ring-1 ring-white/10
                     hover:scale-[1.02] hover:shadow-xl transition-all"
        >
          Start jouw project
        </motion.a>
      </motion.section>
    </main>
  );
}
