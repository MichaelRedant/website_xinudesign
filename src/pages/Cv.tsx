import GlassPane from "../components/GlassPane";
import Seo from "../components/Seo";
import { FaBriefcase, FaTools, FaProjectDiagram } from "react-icons/fa";

// --------- Types ---------
interface Job { company: string; role: string; period: string; }
interface SkillGroup { title: string; items: string[]; }
interface ProjectItem {
  title: string; link: string; period: string; description: string; skills: string; company: string;
}

// --------- Data ---------
const experience: Job[] = [
  { company: "Octopus Accountancy Software", role: "Globaal marketeer", period: "okt 2023 – heden" },
  { company: "X3DPrints.be", role: "Oprichter / 3D‑printing", period: "sep 2023 – heden" },
  { company: "Xinudesign", role: "Freelance webontwikkelaar & marketeer", period: "jan 2022 – heden" },
  { company: "GrandOptical Belgium", role: "Zelfstandig opticien‑optometrist", period: "sep 2017 – okt 2023" },
  { company: "Hans Anders", role: "Opticien", period: "jan 2008 – jan 2017" },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Core skills",
    items: [
      "Data‑analyse & BI – Power BI, SQL",
      "SEO/SEA – Google Ads, Meta Ads",
      "Webdevelopment – WordPress, React, Laravel",
      "UX & AI‑content – Figma, ChatGPT, Gemini",
      "Project- & merkstrategie, lokale SEO",
    ],
  },
  {
    title: "Soft skills",
    items: ["Analytisch & hands‑on", "Communicatief en samenwerkingsgericht", "Commercieel met oog voor detail"],
  },
  {
    title: "Talen",
    items: ["Nederlands – moedertaal", "Engels – vloeiend", "Frans – professioneel"],
  },
  {
    title: "Tools & software",
    items: [
      "Google Ads, Meta Ads, GTM, Piwik Pro",
      "Adobe CC, Canva, Figma, Fusion 360",
      "Power BI, SQL Server, Python, VS Code",
      "React, Node.js, Laravel, MySQL",
      "ChatGPT, Gemini, Copilot, Ahrefs",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "PGA Tour Rendabiliteit – Eindwerk Data‑analyse",
    link: "https://github.com/MichaelRedant/PGA_Tour_Rendabiliteit",
    period: "jan 2025 – jun 2025",
    description: "Analyse van verdiensten per gespeelde slag voor PGA‑spelers met genormaliseerde KPI in Power BI.",
    skills: "Power BI, SQL, Visual Studio",
    company: "Octopus Accountancy Software",
  },
  {
    title: "Boys & Girls‑app – Thesis graduaat Informatica",
    link: "https://github.com/MichaelRedant/BoysAndGirlsApp",
    period: "feb 2021 – jun 2021",
    description: "Mobiele app + backend voor kindermodewinkel, met focus op gebruiksgemak en voorraad‑sync.",
    skills: "Webdesign, Front‑end ontwikkeling",
    company: "Odisee",
  },
  {
    title: "Polarisatie in de optiek – verhandeling",
    link: "https://github.com/MichaelRedant/Polarisatie-in-de-Optiek",
    period: "okt 2016 – jun 2018",
    description: "Onderzoek naar toepassingen van polarisatiefilters binnen optometrie en brillenglazen.",
    skills: "Optometrie",
    company: "Syntra Gent",
  },
];

export default function Cv() {
  // --------- JSON‑LD ---------
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michaël Redant",
      jobTitle: "Freelance webdeveloper & marketeer",
      url: "https://www.xinudesign.be",
      email: "mailto:michael@xinudesign.be",
      telephone: "+32-496-90-85-03",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Provincieweg 34a",
        postalCode: "9552",
        addressLocality: "Borsbeke",
        addressCountry: "BE",
      },
      sameAs: [
        "https://www.linkedin.com/in/michael-redant",
        "https://github.com/michael-redant",
        "https://www.instagram.com/michael-redant",
      ],
      worksFor: { "@type": "Organization", name: "Xinudesign" },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Odisee Aalst" },
        { "@type": "EducationalOrganization", name: "Syntra Gent" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xinudesign.be/" },
        { "@type": "ListItem", position: 2, name: "CV", item: "https://www.xinudesign.be/cv" },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Curriculum Vitae | Michaël Redant (Xinudesign)"
        description="Ik ben Michaël Redant: freelance webdeveloper & marketeer uit Borsbeke (Herzele). Sterk in SEO, data‑analyse en conversiegerichte websites. Bekijk mijn ervaring, skills en projecten."
        canonical="https://www.xinudesign.be/cv"
        keywords={[
          "curriculum vitae",
          "Michaël Redant",
          "freelance webdeveloper",
          "marketeer",
          "SEO specialist",
          "data-analist",
          "Borsbeke",
          "ervaring",
        ]}
        jsonLd={jsonLd}
      />

      <main className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <section className="relative w-full overflow-hidden py-24">
          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent to-white/70 dark:to-black/40" />
          <div className="relative max-w-5xl px-4 mx-auto space-y-12">
            {/* Intro persoonlijk */}
            <GlassPane className="p-8" data-aos="fade-up">
              <h1 className="text-4xl font-bold text-center">Wie is Michaël Redant?</h1>
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
                Ik help kmo’s en teams groeien met <strong>SEO</strong>, <strong>data‑analyse</strong> en
                <strong> conversiegerichte webdevelopment</strong>. Ik woon in <strong>Herzele (Borsbeke)</strong>,
                bouw aan Xinudesign en X3DPrints, en werk als marketeer bij <strong>Octopus Accountancy Software</strong>.
                In mijn vrije tijd leid ik graag een potje <strong>Dungeons & Dragons</strong> met vrienden — een perfecte mix van
                strategie en storytelling die je ook in mijn werk terugziet.
              </p>

              {/* Quick facts */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
                <div className="rounded-xl border border-white/30 bg-white/60 dark:bg-gray-800/40 p-4">
                  <p className="font-semibold">Thuisbasis</p>
                  <p>Herzele (Borsbeke)</p>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/60 dark:bg-gray-800/40 p-4">
                  <p className="font-semibold">Community</p>
                  <p>Voorzitter Werkgroep Ondernemend Herzele · ex‑voorzitter District A (Aalst)</p>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/60 dark:bg-gray-800/40 p-4">
                  <p className="font-semibold">Focus</p>
                  <p>SEO · Webperformance · CRO · Data</p>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/60 dark:bg-gray-800/40 p-4">
                  <p className="font-semibold">Contact</p>
                  <p>+32 496 90 85 03 · michael@xinudesign.be</p>
                </div>
              </div>
            </GlassPane>

            {/* Mijn aanpak */}
            <GlassPane className="p-8 space-y-6" data-aos="fade-up" data-aos-delay="50">
              <h2 className="text-2xl font-bold text-blue-600 text-center">Mijn aanpak</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl bg-white/60 dark:bg-gray-800/40 p-5">
                  <p className="font-semibold mb-1">1) Data voor richting</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Heldere KPI’s, dashboards en tests sturen beslissingen.</p>
                </div>
                <div className="rounded-xl bg-white/60 dark:bg-gray-800/40 p-5">
                  <p className="font-semibold mb-1">2) UX voor conversie</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Snelheid, duidelijke flows en content die verkoopt.</p>
                </div>
                <div className="rounded-xl bg-white/60 dark:bg-gray-800/40 p-5">
                  <p className="font-semibold mb-1">3) SEO voor schaal</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Technische basis + contentmotor + autoriteit.</p>
                </div>
              </div>
            </GlassPane>

            {/* Ervaring */}
            <GlassPane className="p-8 space-y-6" data-aos="fade-up" data-aos-delay="100">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <FaBriefcase /> Ervaring
              </h2>
              <ol className="relative ml-2 border-l border-blue-200 dark:border-blue-900">
                {experience.map((job, idx) => (
                  <li key={`${job.company}-${idx}`} className="mb-6 ml-4">
                    <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-blue-600" />
                    <p className="text-sm text-gray-500">{job.period}</p>
                    <p className="font-semibold">{job.company}</p>
                    <p className="text-gray-700 dark:text-gray-300">{job.role}</p>
                  </li>
                ))}
              </ol>
            </GlassPane>

            {/* Skills */}
            <GlassPane className="p-8 space-y-6" data-aos="fade-up" data-aos-delay="150">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <FaTools /> Skills
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-semibold mb-2">{group.title}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-100"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GlassPane>

            {/* Waar ik het verschil maak */}
            <GlassPane className="p-8 space-y-4" data-aos="fade-up" data-aos-delay="175">
              <h2 className="text-2xl font-bold text-blue-600 text-center">Waar ik het verschil maak</h2>
              <ul className="grid gap-3 md:grid-cols-2 text-sm">
                <li className="rounded-xl bg-white/60 dark:bg-gray-800/40 p-4">Technische SEO + content die rendeert</li>
                <li className="rounded-xl bg-white/60 dark:bg-gray-800/40 p-4">Snelle sites (Core Web Vitals) en schaalbare code</li>
                <li className="rounded-xl bg-white/60 dark:bg-gray-800/40 p-4">Datagedreven campagnes (Google/Meta) met duidelijke ROI</li>
                <li className="rounded-xl bg-white/60 dark:bg-gray-800/40 p-4">Lokale SEO voor Herzele en de regio (Zuid‑Oost‑Vlaanderen)</li>
              </ul>
            </GlassPane>

            {/* Projecten */}
            <GlassPane className="p-8 space-y-6" data-aos="fade-up" data-aos-delay="200">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                <FaProjectDiagram /> Projecten
              </h2>
              <ul className="space-y-4">
                {projects.map((proj) => (
                  <li key={proj.title}>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800 hover:underline">
                      {proj.title}
                    </a>{" "}
                    <span className="text-gray-600">({proj.period})</span>
                    <p className="ml-4">{proj.description}</p>
                    <p className="ml-4 text-sm text-gray-700">
                      Skills: {proj.skills} – <span className="italic">{proj.company}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </GlassPane>

            {/* CTA’s */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="225">
              <a
                href="/cv.pdf"
                download
                className="inline-block px-6 py-3 mt-6 text-white transition-transform bg-blue-600 rounded hover:bg-blue-700 hover:scale-105"
              >
                Download mijn CV (PDF)
              </a>
              <a
                href="/contact"
                className="inline-block px-6 py-3 mt-6 ml-3 text-blue-700 border border-blue-700 rounded hover:bg-blue-50 dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-900/20"
              >
                Plan een kennismaking
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
