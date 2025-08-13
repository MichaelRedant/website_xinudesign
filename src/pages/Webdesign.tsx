import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const Webdesign: React.FC = () => {
  return (
    <>
      <Seo
        title="Webdesign | Xinudesign"
        description="Een frisse website die werkt op elk scherm. Visueel sterk, gebruiksvriendelijk en makkelijk aanpasbaar via een CMS."
        canonical="https://www.xinudesign.be/diensten/webdesign"
      />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Webdesign</h1>
        <p className="mb-8 text-lg text-gray-700">
          Een frisse website die werkt op elk scherm. Visueel sterk,
          gebruiksvriendelijk en makkelijk aanpasbaar via een CMS.
        </p>
        <ul className="mb-10 space-y-3 text-left">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Responsive design
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            Visueel sterk
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-[#0362c8]" />
            CMS dat je zelf beheert
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

export default Webdesign;
