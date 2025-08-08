import matter from "gray-matter";

interface CityLink {
  city: string;
  slug: string;
}

export default function RegionSection() {
  const files = import.meta.glob("/src/content/landings/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>;

  const cityLinks: CityLink[] = Object.values(files)
    .map((raw) => {
      const { data } = matter(raw);
      return { city: data.city as string, slug: data.slug as string };
    })
    .slice(0, 6);

  if (!cityLinks.length) return null;

  return (
    <section
      className="px-4 py-24 bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Actief in de regio
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {cityLinks.map((link) => (
            <a
              key={link.slug}
              href={`/diensten/${link.slug}`}
              className={[
                "p-4 text-center rounded border border-slate-200 dark:border-slate-700",
                "hover:bg-blue-50 dark:hover:bg-gray-800 transition",
              ].join(" ")}
            >
              {link.city}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
