import GlassPane from "../components/GlassPane";
import Seo from "../components/Seo";

interface PortfolioItem {
  title: string;
  description: string;
  link: string;
}

const items: PortfolioItem[] = [
  {
    title: "Website voor lokale bakkerij",
    description: "Responsive site met focus op bestelgemak.",
    link: "https://pixapop.be/webdesign-realisaties/",
  },
  {
    title: "Portfolio van creatief bureau",
    description: "Lichte animaties en CMS-integratie.",
    link: "https://pixapop.be/webdesign-realisaties/",
  },
  {
    title: "E-commerce platform voor fashion retailer",
    description: "Snel ladende shop met maatwerk design.",
    link: "https://pixapop.be/webdesign-realisaties/",
  },
];

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio | Xinudesign"
        description="Een selectie van projecten gerealiseerd in samenwerking met webdesigner Pixapop."
        canonical="https://www.xinudesign.be/portfolio"
      />
      <main className="px-4 py-24 bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <GlassPane className="max-w-5xl mx-auto p-8 space-y-8">
          <header className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-blue-800">Portfolio</h1>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Voor webdesign werk ik samen met{" "}
              <a
                href="https://www.pixapop.be"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixapop
              </a>
              . Ontdek enkele realisaties hieronder of bekijk er meer op{" "}
              <a
                href="https://pixapop.be/webdesign-realisaties/"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                pixapop.be
              </a>
              .
            </p>
          </header>
          <section
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {items.map(({ title, description, link }) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-white/30 dark:bg-white/10 border border-white/25 dark:border-white/15 shadow-lg"
              >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {description}
                </p>
                <a
                  href={link}
                  className="inline-block mt-4 text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bekijk project
                </a>
              </div>
            ))}
          </section>
        </GlassPane>
      </main>
    </>
  );
}
