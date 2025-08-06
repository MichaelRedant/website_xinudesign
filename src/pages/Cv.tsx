import GlassPane from "../components/GlassPane";

export default function Cv() {
  return (
    <main className="px-4 py-24 bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <GlassPane className="max-w-5xl mx-auto p-8 space-y-16">
        <header className="text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-blue-800">Michaël Redant</h1>
          <p className="mt-2 text-gray-600">
            📍 Provincieweg 34a, Borsbeke • 📞 +32 496.90.85.03 • 📧
            michael.redant2@telent.be
          </p>
          <p className="max-w-xl mx-auto mt-3 italic text-gray-500">
            "People rarely succeed unless they have fun in what they are doing"
            – Dale Carnegie
          </p>
        </header>

        <section className="space-y-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-blue-600">🧠 Over mezelf</h2>
          <p>
            Ik ben een datagedreven marketeer met een passie voor analyse en
            creativiteit. Met ervaring in marketing, AI en 3D-printing help ik
            bedrijven groeien via innovatieve oplossingen.
          </p>
          <p>
            Na 16 jaar in de optiek, waarvan deels zelfstandig, gebruik ik mijn
            commerciële en technische ervaring nu om digitale platformen te
            optimaliseren en datagedreven campagnes te voeren.
          </p>
        </section>

        <section className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-bold text-blue-600">💼 Ervaring</h2>
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              Octopus Accountancy Software (2023 – heden)
            </h3>
            <p className="ml-4">
              Marketing, SEO, content & webbeheer van octopus.be en Octopus
              Academy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800">
              Xinudesign (2021 – heden)
            </h3>
            <p className="ml-4">
              Freelance marketing & webdesign, AI-integratie,
              conversie-optimalisatie en SEO.
            </p>
          </div>
        </section>

        <section className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-bold text-blue-600">⚙️ Core Skills</h2>
          <ul className="ml-4 space-y-1 list-disc list-inside">
            <li>Power BI, SQL, datavisualisatie</li>
            <li>SEO & SEA: Google Ads, Meta Ads, Google Analytics</li>
            <li>Webdesign: WordPress, React, Laravel, Shopify</li>
            <li>AI-copywriting, contentcreatie, UX/UI</li>
            <li>Projectmanagement en merkstrategie</li>
          </ul>
        </section>

        <section className="space-y-4" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-bold text-blue-600">
            🛠️ Tools & Software
          </h2>
          <ul className="ml-4 space-y-1 list-disc list-inside">
            <li>Google Ads, Meta Ads, Piwik Pro</li>
            <li>WordPress, Elementor, React, Laravel</li>
            <li>Figma, Canva, Adobe Creative Suite</li>
            <li>Power BI, SQL Server, Python</li>
            <li>ChatGPT, Gemini, Copilot</li>
          </ul>
        </section>

        <section className="text-center" data-aos="fade-up">
          <a
            href="/cv.pdf"
            download
            className="inline-block px-6 py-3 mt-6 text-white transition-transform bg-blue-600 rounded hover:bg-blue-700 hover:scale-105"
          >
            📥 Download CV
          </a>
        </section>
      </GlassPane>
    </main>
  );
}
