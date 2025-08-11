import GlassPane from "../components/GlassPane";
import Seo from "../components/Seo";
import { FaBriefcase, FaTools, FaProjectDiagram } from "react-icons/fa";

interface Job {
  company: string;
  role: string;
  period: string;
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface ProjectItem {
  title: string;
  link: string;
  period: string;
  description: string;
  skills: string;
  company: string;
}

const experience: Job[] = [
  {
    company: "Octopus Accountancy Software",
    role: "Globaal marketeer",
    period: "okt 2023 – heden",
  },
  {
    company: "X3DPrints.be",
    role: "Oprichter / 3D-printing",
    period: "sep 2023 – heden",
  },
  {
    company: "Xinudesign",
    role: "Freelance webontwikkelaar & marketeer",
    period: "jan 2022 – heden",
  },
  {
    company: "GrandOptical Belgium",
    role: "Zelfstandig opticien-optometrist",
    period: "sep 2017 – okt 2023",
  },
  { company: "Hans Anders", role: "Opticien", period: "jan 2008 – jan 2017" },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Core skills",
    items: [
      "Data-analyse & BI – Power BI, SQL",
      "SEO/SEA – Google & Meta Ads",
      "Webdesign – WordPress, React, Laravel",
      "AI-content & UX – ChatGPT, Gemini, Figma",
      "Project- & merkstrategie, lokale SEO",
    ],
  },
  {
    title: "Soft skills",
    items: [
      "Probleemoplossend & hands-on",
      "Samenwerkingsgericht",
      "Commercieel met oog voor detail",
    ],
  },
  {
    title: "Talen",
    items: [
      "Nederlands – moedertaal",
      "Engels – vloeiend",
      "Frans – professioneel",
    ],
  },
  {
    title: "Tools & software",
    items: [
      "Google Ads, Meta Ads, GTM, Piwik Pro",
      "Adobe CC, Canva, Figma, Fusion 360",
      "Power BI, SQL Server, Python, Visual Studio Code",
      "React, Node.js, Laravel, MySQL",
      "ChatGPT, Gemini, Copilot, Ahrefs",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "PGA Tour Rendabiliteit – Eindwerk Data-analyse",
    link: "https://github.com/MichaelRedant/PGA_Tour_Rendabiliteit",
    period: "jan 2025 – jun 2025",
    description:
      "Analyse van verdiensten per gespeelde slag voor PGA-spelers met genormaliseerde KPI in Power BI.",
    skills: "Power BI, SQL, Visual Studio",
    company: "Octopus Accountancy Software",
  },
  {
    title: "Boys & Girls-app – Thesis graduaat Informatica",
    link: "https://github.com/MichaelRedant/BoysAndGirlsApp",
    period: "feb 2021 – jun 2021",
    description:
      "Mobiele app en backend voor kindermode­winkel met focus op gebruiksgemak en voorraad­sync.",
    skills: "Webdesign, Front-end ontwikkeling",
    company: "Odisee",
  },
  {
    title: "Polarisatie in de optiek – verhandeling",
    link: "https://github.com/MichaelRedant/Polarisatie-in-de-Optiek",
    period: "okt 2016 – jun 2018",
    description:
      "Onderzoek naar toepassingen van polarisatiefilters binnen optometrie en brillenglazen.",
    skills: "Optometrie",
    company: "Syntra Gent",
  },
];

export default function Cv() {
  return (
    <>
      <Seo
        title="Curriculum Vitae | Xinudesign"
        description="Bekijk het cv van Michaël Redant, freelance webdeveloper en marketeer."
        canonical="https://www.xinudesign.be/cv"
      />
      <main className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <section className="relative w-full overflow-hidden py-24">
          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent to-white dark:to-black" />
          <div className="relative max-w-5xl px-4 mx-auto space-y-12">
            <GlassPane className="p-8 text-center" data-aos="fade-up">
              <h1 className="text-4xl font-bold">Wie is Michaël Redant?</h1>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Freelance webdeveloper en marketeer met een passie voor data, AI
                en conversiegerichte websites. Na 16 jaar in de optiek focus ik
                me nu op digitale projecten die resultaat opleveren.
              </p>
            </GlassPane>

            <GlassPane
              className="p-8 space-y-6"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <FaBriefcase /> Ervaring
              </h2>
              <ul className="space-y-2">
                {experience.map((job) => (
                  <li key={job.company}>
                    <span className="font-semibold">{job.company}</span> –{" "}
                    {job.role} ({job.period})
                  </li>
                ))}
              </ul>
            </GlassPane>

            <GlassPane
              className="p-8 space-y-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <FaTools /> Skills
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-semibold">{group.title}</h3>
                    <ul className="ml-4 list-disc">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GlassPane>

            <GlassPane
              className="p-8 space-y-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <FaProjectDiagram /> Projecten
              </h2>
              <ul className="space-y-4">
                {projects.map((proj) => (
                  <li key={proj.title}>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-800 hover:underline"
                    >
                      {proj.title}
                    </a>{" "}
                    <span className="text-gray-600">({proj.period})</span>
                    <p className="ml-4">{proj.description}</p>
                    <p className="ml-4 text-sm text-gray-700">
                      Skills: {proj.skills} –{" "}
                      <span className="italic">{proj.company}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </GlassPane>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="/cv.pdf"
                download
                className="inline-block px-6 py-3 mt-6 text-white transition-transform bg-blue-600 rounded hover:bg-blue-700 hover:scale-105"
              >
                Download mijn CV
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
