import { motion } from "framer-motion";
import GlassPane from "../components/GlassPane";
import Seo from "../components/Seo";
import { FaExternalLinkAlt } from "react-icons/fa";

interface PortfolioItem {
  title: string;
}

const items: PortfolioItem[] = [
  
  { title: "Ann Coene" },
  { title: "Aqualand Fit & Sports Center" },
  { title: "Asbest Keuren Vlaanderen" },
  { title: "BP-Pleisterwerken" },
  
  { title: "Cirusso Art" },
 
  { title: "De Speelerij" },
 
  { title: "Golfbiljart Aalst" },

  { title: "Berenatelier Jill & Jules" },
  { title: "Home-To-Bees" },




  { title: "Lexarix" },
  { title: "Malok" },
  { title: "Merebelle" },
  { title: "Optiek Optison" },
  { title: "Pixapop" },
  { title: "Poezen op Zolder" },



  { title: "Rouwatelier" },


  { title: "Spirit By Lien" },
  { title: "Summa Pace" },
  { title: "Octopus" },
  { title: "Octopus Academy" },
];

export default function Portfolio() {
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
              sterk zijn, maar ook{" "}
              <strong>SEO-geoptimaliseerd</strong> en gericht op conversie.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Hieronder vind je een greep uit de projecten waar we trots op zijn.
              Deze realisaties tonen onze brede expertise: van lokale kmo’s en
              zelfstandigen tot sportcentra en e-commerceplatformen.
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
            {items.map(({ title }) => (
              <motion.a
                key={title}
                href="https://pixapop.be/webdesign-realisaties/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-4 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur border border-white/20 dark:border-white/10 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{title}</span>
                  <FaExternalLinkAlt className="h-3 w-3 text-blue-500" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </GlassPane>

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
