import matter from "gray-matter";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

interface CityLink {
  city: string;
  slug: string;
  province?: string;
}

const PAGE_SIZE = 12;

export default function RegionSection() {
  // 1) Lees alle .md-landings en haal city/slug op
  const files = import.meta.glob("/src/content/landings/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;

  const allCities: CityLink[] = useMemo(() => {
    const list = Object.values(files)
      .map((raw) => {
        const { data } = matter(raw);
        const city = (data.city as string) || "";
        const slug =
          (data.slug as string) ||
          city.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        return {
          city,
          slug,
          province: (data.province as string) || undefined,
        };
      })
      .filter((x) => x.city && x.slug);

    // Sorteer alfabetisch (localeAware)
    return [...list].sort((a, b) => a.city.localeCompare(b.city, "nl"));
  }, [files]);

  // 2) UI state
  const [q, setQ] = useState("");
  const [letter, setLetter] = useState<string>("*"); // '*' = alles
  const [visible, setVisible] = useState(PAGE_SIZE);

  if (!allCities.length) return null;

  // 3) Letterchips die effectief voorkomen in de dataset
  const letters = useMemo(() => {
    const set = new Set<string>();
    allCities.forEach(({ city }) => {
      const l = city.trim().charAt(0).toUpperCase();
      if (/[A-ZÁÀÂÄÆÇÉÈÊËÍÌÎÏÓÒÔÖÚÙÛÜÑ]/.test(l)) set.add(l);
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, "nl"));
  }, [allCities]);

  // 4) Filter + search
  const filtered = useMemo(() => {
    const byLetter =
      letter === "*"
        ? allCities
        : allCities.filter((c) => c.city.toUpperCase().startsWith(letter));
    const term = q.trim().toLowerCase();
    return term
      ? byLetter.filter(
          (c) =>
            c.city.toLowerCase().includes(term) ||
            c.slug.toLowerCase().includes(term),
        )
      : byLetter;
  }, [allCities, letter, q]);

  const visibleItems = filtered.slice(0, visible);

  // Motion
  const listVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  return (
    <section
      aria-labelledby="region-heading"
      className="px-4 py-24 bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading + korte SEO-alinea */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2
            id="region-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Actief in jouw regio
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Vind een lokale landingspagina voor jouw stad of gemeente. We bouwen
            snelle websites en sterke SEO in Vlaanderen en omstreken.
          </p>
        </div>

        {/* Controls: Search + Letterchips */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-sm">
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              type="search"
              placeholder="Zoek stad of gemeente…"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur px-4 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Zoek stad of gemeente"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setLetter("*");
                setVisible(PAGE_SIZE);
              }}
              className={`px-3 py-1.5 rounded-lg text-sm border transition ${
                letter === "*"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800"
              }`}
              aria-pressed={letter === "*"}
            >
              Alles
            </button>
            {letters.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLetter(l);
                  setVisible(PAGE_SIZE);
                }}
                className={`px-3 py-1.5 rounded-lg text-sm border transition ${
                  letter === l
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800"
                }`}
                aria-pressed={letter === l}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Result count (SEO + UX) */}
        <p className="mb-4 text-sm text-slate-500">
          {filtered.length} locaties gevonden
          {q ? ` voor “${q}”` : ""}.
        </p>

        {/* Grid list */}
        <motion.nav
          aria-label="Locaties"
          variants={listVariants}
          initial="hidden"
          animate="show"
          className="grid gap-3 sm:grid-cols-2 md:grid-cols-3"
        >
          {visibleItems.map((link) => (
            <motion.li
              key={link.slug}
              variants={item}
              className="list-none"
            >
              <a
                href={`/diensten/${link.slug}`}
                title={`Webdesign & SEO in ${link.city} | Xinudesign`}
                className="group block rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 backdrop-blur px-4 py-3 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{link.city}</span>
                  <span className="text-slate-400 group-hover:text-blue-600 transition">
                    →
                  </span>
                </div>
                {link.province ? (
                  <span className="mt-1 block text-xs text-slate-500">
                    {link.province}
                  </span>
                ) : null}
              </a>
            </motion.li>
          ))}
        </motion.nav>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:scale-[1.02] transition"
            >
              Toon meer locaties
            </button>
          </div>
        )}

        {/* Kleine SEO-paragraaf onderaan */}
        <div className="mt-12 text-center text-sm text-slate-500">
          <p>
            Geen stad gevonden? We voegen regelmatig nieuwe regio’s toe.{" "}
            <a href="/contact" className="underline hover:text-blue-600">
              Neem contact op
            </a>{" "}
            voor webdesign, lokale SEO en online marketing in jouw buurt.
          </p>
        </div>
      </div>
    </section>
  );
}
