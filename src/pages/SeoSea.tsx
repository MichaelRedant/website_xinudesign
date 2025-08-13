import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const SeoSea: React.FC = () => {
  return (
    <>
      <Seo
        title="SEO & SEA | Xinudesign"
        description="Scoor hoger in Google met AI-gestuurde zoekanalyse, slimme optimalisaties en gerichte campagnes."
        canonical="https://www.xinudesign.be/diensten/seo-sea"
      />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">SEO &amp; SEA</h1>
        <p className="mb-8 text-lg text-gray-700">
          Zorg dat je gevonden wordt op Google met AI-gestuurde zoekanalyse,
          slimme optimalisaties en gerichte campagnes.
        </p>
        <ul className="mb-10 space-y-3 text-left">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            AI-gestuurde zoekanalyse
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Slimme optimalisaties
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Gerichte campagnes
          </li>
        </ul>
        <Link
          to="/contact"
          className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-colors hover:bg-[#024a96]"
        >
          Plan een gesprek
        </Link>
      </main>
    </>
  );
};

export default SeoSea;
