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
  { title: "Ann Coene", description: "Lokale landingspagina’s en geavanceerde on-page SEO, gericht op het aantrekken van nieuwe klanten in haar specifieke regio. Resultaat: hogere ranking in Google en meer aanvragen via de website." },
  { title: "Aqualand Fit & Sports Center", description: "Conversiegerichte landingspagina’s met pakkende visuals en call-to-actions. Inclusief een gebruiksvriendelijk online afsprakensysteem dat het aantal boekingen merkbaar verhoogde." },
  { title: "Asbest Keuren Vlaanderen", description: "Volledige website inclusief lokale SEO-landingspagina’s en een sterke technische SEO-basis, waardoor de vindbaarheid in heel Vlaanderen aanzienlijk verbeterde." },
  { title: "BP-Pleisterwerken", description: "Strakke, mobile-first landingspagina’s in combinatie met een doelgerichte lokale SEO-strategie. Gericht op het genereren van kwalitatieve leads binnen de bouwsector." },
  { title: "Cirusso Art", description: "Artistiek webdesign dat het unieke werk van de kunstenaar laat schitteren. Inclusief interactieve formulieren voor directe klantcommunicatie en verkoop." },
  { title: "De Speelerij", description: "SEO-optimalisatie en wervende landingspagina’s met lokaal relevante zoekwoorden, waardoor deze kinderopvang een hogere online zichtbaarheid kreeg in de regio." },
  { title: "Golfbiljart Aalst", description: "Laravel webapplicatie met dynamische scorekaarten, live scores en slimme toernooiranking. Ontworpen voor optimale gebruikerservaring en realtime beleving." },
  { title: "Berenatelier Jill & Jules", url: "https://www.jill-jules.be/", description: "Warme, op maat gemaakte website met focus op emotionele merkbeleving. Ondersteund door sterke on-page SEO voor betere online vindbaarheid." },
  { title: "Home-To-Bees", description: "Lokale landingspagina’s en regionale SEO-optimalisatie om het merk sterk te positioneren als dé imker in de omgeving." },
  { title: "Planten en Zaden Ponnet", url: "https://www.plantenenzadenponnet.be", description: "Volledige WooCommerce webshop, aangevuld met lokale landingspagina’s en performante on-page SEO. Geoptimaliseerd voor conversie en online verkoop." },
  { title: "Lexarix", description: "Grondige SEO-audit en technische optimalisaties die leidden tot een snellere laadtijd en hogere posities in Google." },
  { title: "Malok", description: "Doordachte SEO-optimalisatie en lokale landingspagina’s in combinatie met gerichte Google Ads campagnes, wat zorgde voor een directe stijging in offerteaanvragen." },
  { title: "Merebelle", description: "Nieuwe landingspagina’s – zowel lokaal als algemeen – versterkt met een solide SEO-strategie voor maximale online zichtbaarheid." },
  { title: "Optiek Optison", description: "Volledig webdesign met luxe-uitstraling, interactieve formulieren en lokale SEO-pagina’s. Gericht op het aantrekken van klanten in een concurrerende markt." },
  { title: "Pixapop", description: "SEO-optimalisatie voor betere prestaties van hun portfolio, inclusief optimalisatie van paginatitels, meta’s en interne linkstructuur." },
  { title: "Poezen op Zolder", description: "Lokale landingspagina’s geoptimaliseerd om adoptanten in de buurt aan te trekken. Inclusief storytelling om emotionele betrokkenheid te verhogen." },
  { title: "Rouwatelier", description: "SEO-geoptimaliseerde lokale pagina’s voor hogere zichtbaarheid in gevoelige niche-markt. Zorgvuldig geschreven content voor warme en respectvolle toon." },
  { title: "Spirit By Lien", description: "On-page SEO en contentoptimalisatie waardoor haar coachingaanbod beter zichtbaar werd voor de juiste doelgroep." },
  { title: "Summa Pace", description: "Combinatie van lokale SEO, stevig technisch fundament en strategische Google & Meta Ads om nieuwe klanten aan te trekken." },
  { title: "Octopus", url: "https://www.octopus.be", description: "Meertalige corporate website met interactieve formulieren, geautomatiseerde salesfunnel, afspraakmodule en volledig geïntegreerde advertentiecampagnes." },
  { title: "Octopus Academy", url: "https://academy.octopus.be/nl/", description: "Meertalige e-learning omgeving (LMS) op maat, met interactieve modules en geoptimaliseerde gebruikerservaring." },
  { title: "Persona Vault", description: "Innovatieve digitale kluis voor gepersonaliseerde data. Lopend project met focus op veiligheid, performance en gebruiksgemak." },
  { title: "AI Chatbot", url: "https://www.octopus.be", description: "WordPress plugin met directe OpenAI-integratie, waarmee bezoekers real-time en contextueel antwoord krijgen." },
  { title: "Factuur Studio", url: "https://www.octopus.be", description: "WordPress plugin voor facturatie en Peppol-documenten, geïntegreerd in Elementor voor maximale gebruiksvriendelijkheid." },
];


export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <Seo
        title="Portfolio Webdesign & Marketing | Xinudesign"
        description="Bekijk onze webdesign- en marketingprojecten in samenwerking met Pixapop. Professionele websites, SEO en online marketing voor kmo's in Vlaanderen."
        canonical="https://www.xinudesign.be/portfolio"
        keywords={[
          "portfolio",
          "webdesign projecten",
          "marketing cases",
          "SEO realisaties",
          "website voorbeelden",
          "online marketing",
          "kmo's",
          "Pixapop",
        ]}
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
              Als <strong>freelance webdeveloper en marketeer</strong> werk ik samen met{" "}
              <a
                href="https://www.pixapop.be"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-blue-500 hover:text-blue-700"
              >
                Pixapop
              </a>{" "}
              – een ervaren webdesigner. Samen creëren we{" "}
              <strong>professionele websites</strong> die niet alleen visueel sterk zijn, maar ook{" "}
              <strong>SEO-geoptimaliseerd</strong> en gericht op conversie.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Dit portfolio toont een selectie van onze realisaties, variërend van lokale kmo’s en zelfstandigen tot sportcentra en e-commerceplatformen. 
              Alle projecten zijn gebouwd met oog voor <strong>design, prestaties en vindbaarheid</strong>.
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
              show: { opacity: 1, transition: { staggerChildren: 0.05 } },
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

        {/* MODAL */}
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
            Klaar voor een website die scoort?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            Of je nu een bestaande site wil vernieuwen of een compleet nieuwe online aanwezigheid wil opbouwen: 
            samen zorgen we voor een <strong>krachtig design</strong> en <strong>uitstekende vindbaarheid</strong>.
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
