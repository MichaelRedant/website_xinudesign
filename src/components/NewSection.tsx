import GlassPane from "./GlassPane";
import { FaBolt, FaMagic, FaRocket } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NewSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.4),transparent),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.4),transparent),radial-gradient(circle_at_60%_80%,rgba(236,72,153,0.4),transparent)] opacity-70 blur-3xl" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent to-white dark:to-black" />
      <div className="relative max-w-3xl px-4 mx-auto">
        <GlassPane className="p-8 text-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4 text-violet-600 dark:text-violet-400">
              <FaBolt size={28} className="animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Nieuw bij Xinudesign:{" "}
              <span className="text-violet-600 dark:text-violet-400">
                Vibe Coding
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="inline-flex items-center gap-2 font-semibold text-violet-600 dark:text-violet-400">
                <FaMagic /> Vibe Coding
              </span>{" "}
              is onze nieuwe werkwijze waarin <strong>speels experiment</strong>{" "}
              en <strong>technische precisie</strong> samenkomen.
              <br />
              We laten design, UX en development vloeiend in elkaar overlopen —
              een aanpak waarmee we razendsnel unieke digitale ervaringen
              creëren.
            </p>

            <p className="mt-4 text-md text-gray-600 dark:text-gray-400">
              Deze website? Die werd in slechts <strong>enkele dagen</strong>{" "}
              gebouwd via deze methode. ⚡️
              <br />
              Van slimme frontends tot interactieve tools:{" "}
              <em className="italic text-violet-500 dark:text-violet-300">
                de mogelijkheden zijn eindeloos.
              </em>
            </p>

            <div className="mt-8 flex justify-center">
              <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-violet-600 text-white font-medium shadow-lg hover:bg-violet-700 transition"
            >
              <FaRocket />
              Ontdek wat we voor jou kunnen bouwen
            </Link>
            </div>
          </div>
        </GlassPane>
      </div>
    </section>
  );
}
