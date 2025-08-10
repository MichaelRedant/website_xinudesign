import GlassPane from "../components/GlassPane";
import Seo from "../components/Seo";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaUserTie,
  FaComment,
  FaLanguage,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Cv() {
  return (
    <>
      <Seo
        title="Curriculum Vitae | Xinudesign"
        description="Bekijk het cv van Michaël Redant, freelance webdeveloper en marketeer."
        canonical="https://www.xinudesign.be/cv"
      />
      <main className="px-4 py-24 bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <GlassPane className="max-w-5xl mx-auto p-8 space-y-16">
          {/* ─── Header ─── */}
          <header className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-blue-800">Michaël Redant</h1>
            <p className="mt-2 text-gray-600">
              Provincieweg 34a · Borsbeke • +32 496 90 85 03 •
              michael.redant2@telenet.be
            </p>
            <p className="max-w-xl mx-auto mt-3 italic text-gray-500">
              “People rarely succeed unless they have fun in what they are
              doing.” – Dale Carnegie
            </p>
          </header>

          {/* ─── Over mezelf ─── */}
          <section className="space-y-4" data-aos="fade-up">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <FaUserTie /> Over mezelf
            </h2>
            <p>
              Ik combineer een analytische blik met creatieve drive. Na 16 jaar
              in de optiek – waarvan een groot stuk zelfstandig – leg ik mij nu
              toe op datagedreven marketing, AI-toepassingen en webontwikkeling.
              Met dashboards en glasheldere inzichten vertaal ik complexe data
              naar haalbare acties.
            </p>
          </section>

          {/* ─── Ervaring ─── */}
          <section className="space-y-4" data-aos="fade-up" data-aos-delay="50">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <FaBriefcase /> Ervaring
            </h2>

            <Experience
              company="Octopus Accountancy Software"
              period="okt 2023 – heden"
              role="Globaal marketeer"
              location="Gentbrugge"
              details="Online én offline marketing, SEO, Octopus Academy, data­rapportage (Microsoft 365, Adobe CC)."
            />

            <Experience
              company="X3DPrints.be"
              period="sep 2023 – heden"
              role="Oprichter / 3D-printing"
              location="Herzele (remote)"
              details="Ontwerp & productie van innovatieve 3D-geprinte oplossingen (Fusion 360, WordPress-shop)."
            />

            <Experience
              company="Xinudesign"
              period="jan 2022 – jul 2025"
              role="Freelance webontwikkelaar & marketeer"
              location="Borsbeke (remote)"
              details="React-sites, WordPress, lokale SEO, conversie-optimalisatie, AI-content."
            />

            <Experience
              company="GrandOptical Belgium"
              period="sep 2017 – okt 2023"
              role="Zelfstandig opticien-optometrist"
              location="Aalst"
              details="Contactologie, optometrie, verkoop & winkel­management."
            />

            <Experience
              company="Hans Anders"
              period="jan 2008 – jan 2017"
              role="Opticien"
              location="Gent"
              details="Allround optiekmedewerker, klantadvies & werkplaats."
            />
          </section>

          {/* ─── Opleidingen ─── */}
          <section
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <FaGraduationCap /> Opleidingen &amp; Certificaten
            </h2>

            <Education item="Data-analist (Syntra Gent) – 2024-2025" />
            <Education item="Graduaat Informatica – Odisee Aalst (2018-2021)" />
            <Education item="Opticien-Optometrist – Syntra Gent (2013-2016)" />

            <div className="pt-2">
              <h3 className="flex items-center gap-2 font-semibold text-blue-800">
                <FaCertificate /> LinkedIn-certificaten (2025-2027)
              </h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>Advertising Fundamentals Certification (soh9zgwncj2a)</li>
                <li>Content & Creative Design Certification (yssk2h2mynkx)</li>
                <li>Marketing Strategy Certification (x7oqviscpv2u)</li>
              </ul>
            </div>
          </section>

          {/* ─── Core skills ─── */}
          <section
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <FaTools /> Core skills
            </h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Data-analyse & BI – Power BI, SQL, datamodellering</li>
              <li>SEO/SEA – Google Ads, Meta Ads, keyword research</li>
              <li>Webdesign – WordPress, React, Shopify, Laravel</li>
              <li>AI-content & UX – ChatGPT, Gemini, Figma-prototyping</li>
              <li>Project- & merkstrategie, lokale SEO</li>
            </ul>
          </section>

          {/* ─── Soft skills & Talen ─── */}
          <section
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <FaComment /> Soft skills
            </h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Probleemoplossend & hands-on</li>
              <li>Samenwerkingsgericht, mentorend</li>
              <li>Commercieel met oog voor detail</li>
            </ul>

            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <FaLanguage /> Talen
            </h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Nederlands – moedertaal</li>
              <li>Engels – vloeiend</li>
              <li>Frans – professioneel</li>
            </ul>
          </section>

          {/* ─── Tools & Software ─── */}
          <section
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <FaTools /> Tools &amp; Software
            </h2>
            <ul className="ml-4 list-disc space-y-1">
              <li>Google Ads, Meta Ads, GTM, Piwik Pro</li>
              <li>Adobe CC, Canva, Figma, Fusion 360</li>
              <li>Power BI, SQL Server, Python, Visual Studio Code</li>
              <li>React, Node.js, Laravel, MySQL</li>
              <li>ChatGPT, Gemini, Copilot, Ahrefs</li>
            </ul>
          </section>

          {/* ─── Projecten ─── */}
          <section
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <FaProjectDiagram /> Projecten
            </h2>

            <Project
              title="PGA Tour Rendabiliteit – Eindwerk Data-analyse"
              link="https://github.com/MichaelRedant/PGA_Tour_Rendabiliteit"
              period="jan 2025 – jun 2025"
              description="Analyse van verdiensten per gespeelde slag (earnings per stroke) voor PGA-spelers 2001-2024, met een genormaliseerde KPI in Power BI."
              skills="Power BI, SQL, Visual Studio"
              company="Octopus Accountancy Software"
            />

            <Project
              title="Boys & Girls-app – Thesis graduaat Informatica"
              link="https://github.com/MichaelRedant/BoysAndGirlsApp"
              period="feb 2021 – jun 2021"
              description="Mobiele applicatie + backend voor kindermode­winkel. Focus op gebruiksgemak en voorraad­sync."
              skills="Webdesign, Front-end ontwikkeling"
              company="Odisee"
            />

            <Project
              title="Polarisatie in de optiek – verhandeling"
              link="https://github.com/MichaelRedant/Polarisatie-in-de-Optiek"
              period="okt 2016 – jun 2018"
              description="Onderzoek naar toepassingen van polarisatiefilters binnen optometrie en brillenglazen."
              skills="Optometrie"
              company="Syntra Gent"
            />
          </section>

          {/* ─── Download ─── */}
          <section className="text-center" data-aos="fade-up">
            <a
              href="/cv.pdf"
              download
              className="inline-block px-6 py-3 mt-6 text-white transition-transform bg-blue-600 rounded hover:bg-blue-700 hover:scale-105"
            >
              Download mijn CV
            </a>
          </section>
        </GlassPane>
      </main>
    </>
  );
}

/* ───────────────────────── helpers ───────────────────────── */
interface ExpProps {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string;
}
function Experience({ company, role, period, location, details }: ExpProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-blue-800">
        {company} <span className="font-normal text-gray-700">({period})</span>
      </h3>
      <p className="ml-4">
        <span className="font-medium">{role}</span> – {location}. {details}
      </p>
    </div>
  );
}

interface EduProps {
  item: string;
}
function Education({ item }: EduProps) {
  return <p className="ml-4">• {item}</p>;
}

interface ProjProps {
  title: string;
  link: string;
  period: string;
  description: string;
  skills: string;
  company: string;
}
function Project({
  title,
  link,
  period,
  description,
  skills,
  company,
}: ProjProps) {
  return (
    <div className="space-y-1">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-800 hover:underline"
      >
        {title}
      </a>{" "}
      <span className="text-gray-600">({period})</span>
      <p className="ml-4">{description}</p>
      <p className="ml-4 text-sm text-gray-700">
        Skills: {skills} – <span className="italic">{company}</span>
      </p>
    </div>
  );
}
