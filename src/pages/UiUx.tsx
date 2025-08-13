import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const UiUx: React.FC = () => {
  return (
    <>
      <Seo
        title="UI/UX Design — Gebruiksvriendelijk & Conversiegericht | Xinudesign"
        description="Ontwerp dat werkt: van intuïtieve user flows tot pixel-perfect interfaces. Wij creëren UI/UX designs die mooi ogen én conversies verhogen — getest, geoptimaliseerd en klaar voor groei."
        canonical="https://www.xinudesign.be/diensten/ui-ux"
        keywords={[
          "UI design",
          "UX design",
          "Figma prototypes",
          "gebruiksvriendelijke websites",
          "responsive webdesign",
          "conversieoptimalisatie",
          "customer journey",
          "digital product design",
        ]}
      />

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            UI/UX Design dat converteert
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Sterk design begint bij een sterke ervaring. Wij vertalen{" "}
            <strong>gebruikersbehoeften</strong> naar{" "}
            <strong>intuïtieve interfaces</strong> en{" "}
            <strong>vloeiende flows</strong>, zodat elke klik logisch voelt én bijdraagt aan conversie.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Figma Prototypes
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Logische User Flows
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Pixel-Perfect Visuals
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Conversiegericht Ontwerp
            </span>
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#024a96]"
            >
              Plan een gesprek
            </Link>
          </div>
        </section>

        {/* WHY UI/UX MATTERS */}
        <section className="mb-20 grid gap-10 md:grid-cols-2 items-start animate-slide-up">
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-lg">
            <img
              src="/assets/img/uiuix.webp"
              alt="UI/UX Design voorbeeld"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Waarom UI/UX het verschil maakt
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Een sterke UI/UX vertaalt jouw merk naar een digitale ervaring die 
              <strong> intuïtief, aantrekkelijk en conversiegericht</strong> is. 
              Goede UX zorgt dat gebruikers moeiteloos hun doel bereiken, terwijl 
              sterke UI het merkgevoel versterkt en vertrouwen opbouwt.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Kortere time-to-action en hogere conversies
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Minder afhakers door logische flows
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Sterke merkbeleving via consistent design
              </li>
            </ul>
          </div>
        </section>

        {/* UX PILLAR */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">UX — De gebruikservaring als kern</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "User Research",
                text: "Analyse van doelgroep, gedrag en pijnpunten. Interviews, heatmaps en data-analyse vormen de basis voor UX-beslissingen."
              },
              {
                title: "Customer Journeys",
                text: "In kaart brengen van de volledige gebruikersreis, van eerste contact tot conversie en retentie."
              },
              {
                title: "Flow Optimalisatie",
                text: "Vloeiende navigatie, logische stap-volgorde en micro-interacties die de gebruiker begeleiden."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UI PILLAR */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">UI — Visueel sterk en merkgericht</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Figma Prototyping",
                text: "Interactieve mockups die direct getest en gevalideerd kunnen worden met echte gebruikers."
              },
              {
                title: "Responsive Design",
                text: "Naadloze ervaring op desktop, tablet en mobiel. Pixel-perfect in elk formaat."
              },
              {
                title: "Brand Consistency",
                text: "Kleur, typografie en iconografie volgens een strak merkhandboek."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Onze UI/UX werkwijze in 5 stappen</h2>
          <ol className="grid md:grid-cols-5 gap-4 text-sm">
            {[
              "Intake & doelgroepanalyse",
              "User research & wireframes",
              "Design & prototyping",
              "Testing & feedback",
              "Livegang & optimalisatie",
            ].map((step, i) => (
              <li
                key={step}
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700 p-4 text-center shadow-sm"
              >
                <div className="text-2xl font-bold text-[#0362c8] mb-1">{i + 1}</div>
                <div className="font-medium">{step}</div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Klaar voor een betere gebruikerservaring?</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300 mb-8">
            We ontwerpen niet alleen wat er mooi uitziet, maar wat werkt. Ontvang een concreet UI/UX plan op maat van jouw doelgroep en doelstellingen.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#024a96]"
          >
            Vraag je gratis UX-scan aan
          </Link>
        </section>
      </main>
    </>
  );
};

export default UiUx;
