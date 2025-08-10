import { motion } from "framer-motion";
import { useState } from "react";
import GlassPane from "../components/GlassPane";
import Modal from "../components/Modal";
import Seo from "../components/Seo";
import { FaInfoCircle } from "react-icons/fa";

interface PortfolioItem {
  title: string;
  description: string;
  url?: string;
}

const defaultLink = "https://pixapop.be/webdesign-realisaties/";

const items: PortfolioItem[] = [
  {
    title: "Ann Coen",
    description:
      "We bouwden lokale landingspagina's en optimaliseerden de on-page SEO zodat haar diensten lokaal beter gevonden worden.",
  },
  {
    title: "Aqualand Fit & Sports Center",
    description:
      "We maakten conversiegerichte landingspagina's voor nieuwe sporten en integreerden een gebruiksvriendelijk afsprakensysteem.",
  },
  {
    title: "Asbest Keuren Vlaanderen",
    description:
      "Volledige website met lokale landingspagina's en een solide on-page SEO-basis.",
  },
  {
    title: "BP-Pleisterwerken",
    description:
      "Strak ontworpen landingspagina's en een uitgewerkte lokale SEO-strategie.",
  },
  {
    title: "Cirusso Art",
    description:
      "Een artistieke website in samenwerking en interactieve formulieren die het contact stroomlijnen.",
  },
  {
    title: "De Speelerij",
    description:
      "Wervende landingspagina's en SEO-optimalisatie voor meer zichtbaarheid.",
  },
  {
    title: "Golfbiljart Aalst",
    description:
      "Laravel webapp met dynamische scorekaarten, live scores en slimme toernooiranking.",
  },
  {
    title: "Berenatelier Jill & Jules",
    url: "https://www.jill-jules.be/",
    description: "Een warme website op maat met doordachte on-page SEO.",
  },
  {
    title: "Home-To-Bees",
    description:
      "Lokale landingspagina's en on-page SEO voor een sterk regionaal bereik.",
  },
  {
    title: "Planten en Zaden Ponnet",
    url: "https://www.plantenenzadenponnet.be",
    description:
      "Complete webshop met lokale landingspagina's en performante on-page SEO.",
  },
  {
    title: "Lexarix",
    description: "Grondige on-page SEO-audit en optimalisatie.",
  },
  {
    title: "Malok",
    description:
      "On-page SEO, lokale landingspagina's en doelgerichte Google Ads campagnes.",
  },
  {
    title: "Merebelle",
    description:
      "Nieuwe landingspagina's – lokaal én algemeen – ondersteund door sterke on-page SEO.",
  },
  {
    title: "Optiek Optison",
    description:
      "Volledig webdesign met interactieve formulieren, on-page SEO en lokale landingspagina's.",
  },
  {
    title: "Pixapop",
    description:
      "On-page SEO-optimalisatie voor een beter presterend portfolio.",
  },
  {
    title: "Poezen op Zolder",
    description:
      "Specifieke lokale landingspagina's om adoptanten in de buurt te bereiken.",
  },
  {
    title: "Rouwatelier",
    description:
      "Lokale landingspagina's en on-page SEO voor een hogere zichtbaarheid.",
  },
  {
    title: "Spirit By Lien",
    description: "On-page SEO zodat haar coachingaanbod beter gevonden wordt.",
  },
  {
    title: "Summa Pace",
    description:
      "Lokale landingspagina's, een stevig SEO-fundament en gerichte Google & Meta Ads.",
  },
  {
    title: "Octopus",
    url: "https://www.octopus.be",
    description:
      "Meertalige website uit Figma en WordPress, met interactieve formulieren, geautomatiseerde salesfunnel, afspraakmodule en geïntegreerde Google & Meta Ads.",
  },
  {
    title: "Octopus Academy",
    url: "https://academy.octopus.be/nl/",
    description:
      "Volledige meertalige LMS-site met interactieve formulieren en op maat ontworpen leermanagementsysteem.",
  },
  {
    title: "Persona Vault",
    description:
      "Lopend project: een veilige digitale kluis voor gepersonaliseerde data.",
  },
  {
    title: "AI Chatbot",
    description:
      "WordPress plugin met directe OpenAI-integratie voor slimme conversaties.",
  },
  {
    title: "Factuur Studio",
    description:
      "WordPress plugin om facturen te genereren en Peppol-documenten rechtstreeks te versturen via een Elementor-frontend.",
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <Seo
        title="Portfolio Webdesign & Marketing | Xinudesign"
        description="Bekijk een selectie webdesign en marketingprojecten in samenwerking met Pixapop. Websites, SEO en online marketing voor kmo's in Vlaanderen."
        canonical="https://www.xinudesign.be/portfolio"
      />

      <main className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {/* HERO / INTRO */}
        <section className="relative px-4 pt-24 pb-16 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Ons Portfolio
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Als freelance webdeveloper en marketeer werk ik nauw samen met{" "}
              <a
                href="https://www.pixapop.be"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-blue-500 hover:text-blue-700"
              >
                Pixapop
              </a>{" "}
              – een ervaren webdesigner. Samen realiseren we{" "}
              <strong>professionele websites</strong> die niet alleen visueel
              sterk zijn, maar ook <strong>SEO-geoptimaliseerd</strong> en
              gericht op conversie.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Hieronder vind je een greep uit de projecten waar we trots op
              zijn. Deze realisaties tonen onze brede expertise: van lokale
              kmo’s en zelfstandigen tot sportcentra en e-commerceplatformen.
              Het merendeel van deze projecten werd ontwikkeld in opdracht van
              Pixapop; eigen projecten linken rechtstreeks naar de website.
            </p>
          </motion.div>
        </section>

        {/* PROJECT LIST */}
        <GlassPane className="max-w-6xl mx-auto p-8">
          <motion.div
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
            }}
          >
            {items.map((item) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-4 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur border border-white/20 dark:border-white/10 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.title}</span>
                  <FaInfoCircle className="h-4 w-4 text-blue-500" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </GlassPane>

        <Modal
          isOpen={Boolean(selectedItem)}
          onClose={() => setSelectedItem(null)}
          title={selectedItem?.title ?? ""}
          description={selectedItem?.description ?? ""}
          link={selectedItem ? (selectedItem.url ?? defaultLink) : undefined}
        />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ook een professionele website op maat?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            Of je nu een bestaande site wil vernieuwen of een compleet nieuwe
            online aanwezigheid wil opbouwen, samen maken we een{" "}
            <strong>website die scoort in Google</strong> én converteert.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Vraag een offerte aan
          </a>
        </motion.section>
      </main>
    </>
  );
}
