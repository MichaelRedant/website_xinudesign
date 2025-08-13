import { FaShareAlt, FaTag, FaSearch, FaRocket } from "react-icons/fa";

export default function ProjectSection() {
  return (
    <section
      className="px-4 py-24 bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Projecten</h2>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Persona Vault</h3>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Beheer al je AI-persona's en prompts in één kluis. Deel, tag en
              vind alles bliksemsnel terug.
            </p>
            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <FaShareAlt className="text-blue-600" />
                1-klik deellinks
              </li>
              <li className="flex items-center gap-2">
                <FaTag className="text-blue-600" />
                Slimme tags
              </li>
              <li className="flex items-center gap-2">
                <FaSearch className="text-blue-600" />
                Razendsnel zoeken
              </li>
            </ul>
            <a
              href="https://www.xinudesign.be/vault/"
              className="inline-flex items-center gap-2 px-8 py-4 mt-8 text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 transition"
            >
              <FaRocket />
              Start gratis beta
            </a>
          </div>
          <div className="relative" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="/assets/img/screenshot.webp"
              alt="Persona Vault scherm"
              className="w-full rounded-2xl shadow-2xl border border-white/20"
              loading="lazy"
              width={1624}
              height={916}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
