import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const LokaleSeo: React.FC = () => {
  return (
    <>
      <Seo
        title="Lokale SEO | Xinudesign"
        description="Word beter zichtbaar in je regio met slimme, lokaal geoptimaliseerde landingspagina’s en vindbare content."
        canonical="https://www.xinudesign.be/diensten/lokale-seo"
      />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Lokale SEO</h1>
        <p className="mb-8 text-lg text-gray-700">
          Word beter zichtbaar in je regio met slimme, lokaal geoptimaliseerde
          landingspagina’s en vindbare content.
        </p>
        <ul className="mb-10 space-y-3 text-left">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Lokaal geoptimaliseerde pagina’s
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Vindbare content
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Meer klanten in je regio
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

export default LokaleSeo;
