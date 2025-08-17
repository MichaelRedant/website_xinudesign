import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const DataStrategy: React.FC = () => {
  return (
    <>
      <Seo
        title="Data Strategy & Dashboarding | Xinudesign"
        description="Bouw een schaalbare data-architectuur met datawarehouses, Power BI dashboards en geautomatiseerde ETL-processen via SSIS en SSMS. Van analyse tot implementatie."
        canonical="https://www.xinudesign.be/diensten/data-strategy"
        keywords={[
          "data strategy",
          "dashboarding",
          "datawarehouse",
          "Power BI",
          "ETL",
          "SSIS",
          "SSMS",
          "business intelligence",
        ]}
      />

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-slate-900 dark:text-white">
            Data Strategy & Dashboarding
          </h1>
          <p className="mb-8 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transformeer ruwe data in een strategisch voordeel. Wij bouwen
            schaalbare datawarehouses, interactieve Power BI dashboards en
            geautomatiseerde ETL-processen met <strong>SSIS</strong> en
            <strong> SSMS</strong> om je beslissingen te versnellen.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#024a96]"
          >
            Plan een gesprek
          </Link>
        </section>

        {/* Why Data Strategy */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold">Waarom een Data Strategy?</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Bedrijven verzamelen dagelijks enorme hoeveelheden data, maar vaak
              blijft deze onbenut in losse Excel-bestanden of verspreide
              systemen. Een goed uitgewerkte datastrategie zorgt ervoor dat
              gegevens centraal, betrouwbaar en bruikbaar zijn. Dit levert:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0362c8] mt-1" />
                Realtime inzichten voor snellere beslissingen
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0362c8] mt-1" />
                Geoptimaliseerde rapportage en minder handmatig werk
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-[#0362c8] mt-1" />
                Eén betrouwbare “single source of truth” voor alle teams
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/10 animate-fade-in">
            <img
              src="/assets/img/data-strategy-hero.webp"
              alt="Data Strategy Visual"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Technical Approach */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Onze technische aanpak</h2>
          <p className="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
            Wij combineren strategisch inzicht met technische precisie. Ons team
            werkt met bewezen Microsoft-technologieën en moderne BI-tools om je
            volledige datastroom te optimaliseren:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/70 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-3">
                Datawarehouse Architectuur
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Ontwerp en implementatie van schaalbare datawarehouses die
                gegevens uit meerdere bronnen centraliseren. Wij zorgen voor
                optimale datastructuren en query-prestaties.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/70 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-3">Power BI Dashboarding</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Bouw krachtige, interactieve dashboards die KPI’s visualiseren
                en trends inzichtelijk maken. Inclusief drill-down functionaliteit
                en real-time dataverbindingen.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/70 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-3">SSIS Dataflows</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Met SQL Server Integration Services (SSIS) automatiseren we ETL-processen:
                extractie, transformatie en laden van data naar je warehouse met minimale
                downtime.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200/70 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-3">SSMS Beheer</h3>
              <p className="text-slate-600 dark:text-slate-300">
                SQL Server Management Studio (SSMS) wordt ingezet voor databasebeheer,
                query-optimalisatie, back-ups en monitoring. Veilig, stabiel en
                schaalbaar.
              </p>
            </div>
          </div>
        </section>

        {/* Sales CTA */}
        <section className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">
            Klaar om je data te laten werken?
          </h2>
          <p className="mb-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Of je nu start met een eerste dashboard of je volledige data-architectuur
            wil herzien: wij leveren een oplossing die meegroeit met je business.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#024a96]"
          >
            Vraag je vrijblijvende demo aan
          </Link>
        </section>
      </main>
    </>
  );
};

export default DataStrategy;
