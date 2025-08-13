import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { motion, easeOut } from "framer-motion";
import {
  FaBullhorn,
  FaChartLine,
  FaCode,
  FaCheckCircle,
  FaQuoteRight,
} from "react-icons/fa";
import Seo from "../components/Seo";

const md = new MarkdownIt({ html: true, linkify: true });
const mdFaq = new MarkdownIt({ html: true, linkify: true });

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
  image?: string;
  video?: string;
  services?: { name: string; short: string }[];
  faqs?: { q: string; a: string }[];
  lastmod?: string;
};

// motion helpers
const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};
const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

export default function LokaleSeoPage() {
  const { city } = useParams<{ city: string }>();
  const [html, setHtml] = useState<string>("");
  const [fm, setFm] = useState<Frontmatter | null>(null);

  const mdPath = useMemo(
    () => `/src/content/landings/${city?.toLowerCase()}.md`,
    [city],
  );

  // load .md
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

  const icons: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    Webdevelopment: FaCode,
    "Advertising (Google & Meta)": FaBullhorn,
    "Lokale SEO & Online marketing": FaChartLine,
    "Online marketing": FaChartLine,
  };

  // media
  const heroVideo = fm.video || "/assets/video/ai_video.mp4";
  const cityImage = fm.image || `/assets/img/landingpages/${fm.slug}.png`;
  const imageUrl = `https://www.xinudesign.be${cityImage}`;
  const keywordList = [
    fm.primaryKeyword,
    ...(fm.secondaryKeywords ?? []),
  ].filter(Boolean) as string[];

  // JSON‑LD
  const jsonLd: Record<string, unknown>[] = [];
  if (fm.address) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Xinudesign",
      image: imageUrl,
      logo: "https://www.xinudesign.be/apple-touch-icon.png",
      url: fm.canonical,
      telephone: fm.phone,
      email: fm.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: fm.address.street,
        addressLocality: fm.address.locality,
        ...(fm.province ? { addressRegion: fm.province } : {}),
        postalCode: fm.address.postalCode,
        addressCountry: fm.address.country,
      },
      areaServed: fm.city,
      ...(keywordList.length ? { keywords: keywordList.join(", ") } : {}),
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
    });
  }
  if (fm.faqs?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: fm.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  jsonLd.push({
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
  });

  return (
    <>
      <Seo
        title={fm.title || `Diensten ${fm.city} | Xinudesign`}
        description={fm.description}
        canonical={fm.canonical}
        jsonLd={jsonLd}
        image={imageUrl}
        keywords={keywordList}
      />

      <main className="relative overflow-x-hidden">
        {/* =================== HERO (SaaS 2025) =================== */}
        <section className="relative h-[78vh] min-h-[560px] flex flex-col items-center justify-center text-center text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
          />
          {/* gradient & shapes */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          {/* headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 max-w-3xl px-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">
                {fm.h1 ?? fm.title}
              </span>
            </h1>
            <p className="text-lg/7 opacity-95">{fm.description}</p>
            <motion.a
              href="/contact"
              className="inline-flex mt-8 items-center justify-center px-7 py-3 rounded-2xl font-semibold text-blue-900 bg-white/95 hover:bg-white shadow-lg ring-1 ring-white/30 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Plan een gesprek
            </motion.a>
          </motion.div>

          {/* floating city card – MOBILE (onder de tekst) */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 w-full flex justify-center md:hidden"
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/25 shadow-2xl backdrop-blur bg-white/10">
              <img
                src={cityImage}
                alt={fm.city}
                className="block w-[88vw] max-w-[22rem] aspect-[16/10] object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 88vw, 22rem"
              />
            </div>
          </motion.div>

          {/* floating city card – DESKTOP (absolute, rechts‑onder) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pointer-events-none hidden md:block md:absolute md:bottom-8 md:right-4 md:z-10"
          >
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/25 shadow-2xl backdrop-blur bg-white/10">
              <img
                src={cityImage}
                alt={fm.city}
                className="h-40 w-64 object-cover"
                loading="lazy"
                sizes="256px"
              />
            </div>
          </motion.div>
        </section>

        {/* =================== SERVICES =================== */}
        {fm.services?.length ? (
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="px-4 py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
          >
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
              {fm.services.map((s) => {
                const Icon = icons[s.name] ?? FaCode;
                return (
                  <motion.div
                    key={s.name}
                    variants={reveal}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all
                               dark:bg-slate-900/60 dark:border-white/10"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/15 to-indigo-600/15 ring-1 ring-black/5">
                      <Icon className="h-5 w-5 text-blue-700 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {s.short}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-blue-500" /> Snel, veilig
                        en SEO‑klaar
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-blue-500" /> Meetbare
                        KPI’s & dashboards
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-blue-500" />{" "}
                        Geoptimaliseerd voor {fm.city}
                      </li>
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        ) : null}

        {/* =================== USP + MINI‑CASE =================== */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="px-4 py-24 bg-white dark:bg-slate-950"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={reveal}>
              <h2 className="text-3xl font-bold mb-3">
                Waarom kiezen voor Xinudesign in {fm.city}?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Lokale kennis gecombineerd met technische precisie. We vertalen{" "}
                {fm.city}-specifieke intenties naar snelle UX, overtuigende
                content en constante optimalisaties.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Datagedreven beslissingen (Piwik Pro / GA)",
                  "Sterke Local SEO: GMB, NAP & reviews",
                  "Conversiegerichte copy & structuur",
                  "Schaalbaar: WordPress, React, Laravel",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <FaCheckCircle className="mt-1 text-blue-500" />
                    <span className="text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/portfolio"
                className="inline-block mt-8 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
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

              {/* mini-testimonial gebaseerd op stad */}
              {(() => {
                const testimonials = [
                  `“Onze nieuwe site laadt supersnel en trekt nu meer bezoekers in ${fm.city} dan ooit tevoren.”`,
                  `“Van strategie tot uitvoering: campagnes die echt renderen in ${fm.city} en omgeving.”`,
                  `“Moderne look, mobielvriendelijk en perfect vindbaar in Google voor ${fm.city}.”`,
                  `“Sinds de lancering meer aanvragen én betere zichtbaarheid in ${fm.city}.”`,
                  `“SEO-optimalisatie die ons hoger in Google zet bij zoekopdrachten in ${fm.city}.”`,
                  `“Gerichte Google Ads zorgden voor meer klanten uit ${fm.city} tegen lagere kosten.”`,
                  `“Professioneel webdesign dat onze zaak in ${fm.city} écht doet opvallen.”`,
                  `“Lokale targeting op Meta gaf ons meteen meer bereik in ${fm.city}.”`,
                  `“Heldere aanpak, meetbare groei en snelle laadtijden. Ideaal voor ${fm.city}.”`,
                  `“De perfecte mix van design, techniek en marketing voor succes in ${fm.city}.”`,
                ];

                // Eenvoudige hashfunctie op basis van stad
                const hashCode = (str) => {
                  let hash = 0;
                  for (let i = 0; i < str.length; i++) {
                    hash = str.charCodeAt(i) + ((hash << 5) - hash);
                  }
                  return Math.abs(hash);
                };

                const index = hashCode(fm.city) % testimonials.length;
                const cityTestimonial = testimonials[index];

                return (
                  <div className="mt-4 rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-700">
                    <div className="flex items-start gap-3">
                      <FaQuoteRight className="mt-1 text-blue-500" />
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {cityTestimonial}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        </motion.section>

        {/* MARKDOWN CONTENT: SaaS 2025 card + luxe prose */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24"
        >
          <motion.div
            variants={reveal}
            className="relative rounded-3xl border border-white/30 bg-white/70 
               p-6 sm:p-8 md:p-10 shadow-xl backdrop-blur-xl
               dark:bg-slate-900/40 dark:border-white/10"
          >
            {/* Top & side gradient accents */}
            <span
              className="pointer-events-none absolute inset-x-0 -top-px h-px 
                     bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
            />
            <span
              className="pointer-events-none absolute inset-y-0 -left-px w-px 
                     bg-gradient-to-b from-transparent via-blue-500/40 to-transparent"
            />

            {/* Markdown content */}
            <article
              className="city-prose prose prose-base sm:prose-lg max-w-none dark:prose-invert
                 prose-headings:font-bold prose-headings:tracking-tight
                 prose-h2:scroll-mt-28 prose-h3:scroll-mt-28
                 prose-h2:text-2xl sm:prose-h2:text-3xl 
                 prose-h3:text-xl sm:prose-h3:text-2xl
                 prose-a:text-blue-600 hover:prose-a:text-blue-800
                 prose-strong:text-slate-900 dark:prose-strong:text-white
                 prose-li:marker:text-blue-600
                 prose-img:rounded-xl prose-img:shadow-lg
                 leading-relaxed"
            >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
          </motion.div>
        </motion.section>

        {/* =================== FAQ =================== */}
        {fm.faqs?.length ? (
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl px-4 pb-24"
          >
            <motion.h2 variants={reveal} className="text-2xl font-bold mb-6">
              Veelgestelde vragen
            </motion.h2>
            <div className="space-y-3">
              {fm.faqs.map(({ q, a }) => (
                <motion.details
                  key={q}
                  variants={reveal}
                  className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-sm
                             dark:bg-slate-900/70 dark:border-slate-700"
                >
                  <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: mdFaq.renderInline(q),
                      }}
                    />
                    <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.35 }}
                    className="mt-2 text-slate-700 dark:text-slate-300 overflow-hidden"
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: mdFaq.render(a) }}
                    />
                  </motion.div>
                </motion.details>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold text-white
                           bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg ring-1 ring-white/10
                           hover:scale-[1.02] hover:shadow-xl transition-all"
              >
                Nog een vraag? Neem contact op
              </a>
            </div>
          </motion.section>
        ) : null}

        {/* =================== FOOTER CTA =================== */}
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-5xl">
            <div
              className="relative overflow-hidden rounded-3xl p-10 text-center
                            bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold">
                Klaar om je zichtbaarheid in {fm.city} te boosten?
              </h3>
              <p className="mt-2 opacity-90">
                We bouwen een snelle, SEO‑klare site met campagnes die renderen.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white/95 text-blue-900 hover:bg-white shadow-lg transition"
              >
                Start jouw project
              </a>
              {/* decor */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
