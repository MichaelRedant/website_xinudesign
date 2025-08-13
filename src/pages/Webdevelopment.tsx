import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const Webdevelopment: React.FC = () => {
  return (
    <>
      <Seo
        title="Webdevelopment | Xinudesign"
        description="We bouwen schaalbare, performante webapplicaties op maat van jouw noden – met moderne technologie én een tikkeltje 'vibe coding'."
        canonical="https://www.xinudesign.be/diensten/webdevelopment"
      />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Webdevelopment</h1>
        <p className="mb-8 text-lg text-gray-700">
          We bouwen schaalbare, performante webapplicaties op maat van jouw
          noden – met moderne technologie én een tikkeltje 'vibe coding'.
        </p>
        <ul className="mb-10 space-y-3 text-left">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Moderne stack
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Schaalbaar &amp; performant
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Vibe coding
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

export default Webdevelopment;
