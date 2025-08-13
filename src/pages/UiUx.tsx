import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const UiUx: React.FC = () => {
  return (
    <>
      <Seo
        title="UI/UX design | Xinudesign"
        description="Sterk design begint bij een fijne ervaring. We ontwerpen gebruiksvriendelijke interfaces met Figma die logisch aanvoelen én er goed uitzien."
        canonical="https://www.xinudesign.be/diensten/ui-ux"
      />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">UI/UX</h1>
        <p className="mb-8 text-lg text-gray-700">
          Sterk design begint bij een fijne ervaring. We ontwerpen
          gebruiksvriendelijke interfaces met Figma die logisch aanvoelen én er
          goed uitzien.
        </p>
        <ul className="mb-10 space-y-3 text-left">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Figma prototypes
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Logische flows
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Pixel-perfect visuals
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

export default UiUx;
