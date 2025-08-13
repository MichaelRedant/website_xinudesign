import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const LokaleSeo: React.FC = () => {
  return (
    <>
      <Seo
        title="Lokale SEO — Scoor in jouw regio | Xinudesign"
        description="Win in je eigen regio met lokaal geoptimaliseerde landingspagina’s, Google Bedrijfsprofiel, reviews en NAP-consistentie. Ideaal voor KMO’s en lokale handelaars."
        canonical="https://www.xinudesign.be/diensten/lokale-seo"
        keywords={[
          "lokale SEO",
          "lokale landingspagina",
          "Google Bedrijfsprofiel",
          "Google Maps",
          "NAP consistentie",
          "reviews verzamelen",
          "lokale handel",
          "KMO marketing",
          "local citations",
          "schema LocalBusiness",
        ]}
      />

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Lokale SEO die klanten over de vloer brengt
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Val op in je buurt met <strong>lokale landingspagina’s</strong>, een sterk{" "}
            <strong>Google Bedrijfsprofiel</strong> en een slimme review‑strategie. 
            Ideaal voor <strong>KMO’s</strong>, zelfstandigen en lokale handelaars die willen scoren in{" "}
            <em>“dichtbij mij”</em> zoekopdrachten.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Lokale landings per gemeente/stad
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> GBP‑optimalisatie (Maps)
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> NAP & citations op orde
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Reviews & lokale autoriteit
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

        {/* WHY LOCAL SEO */}
        <section className="mb-20 grid gap-10 md:grid-cols-2 items-start animate-slide-up">
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-lg">
            <img
              src="/assets/img/lokaleSEO.webp"
              alt="Lokale SEO visual"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Waarom lokale SEO onmisbaar is</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              In lokale zoekopdrachten wint de zaak die het dichtst bij de gebruiker staat  
              <strong> én </strong> het best is geoptimaliseerd. Met lokale SEO zorg je ervoor dat jouw
              zaak naar boven komt in Maps en in organische resultaten wanneer klanten in jouw regio zoeken.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Meer zichtbaarheid in Google Maps en “dichtbij mij” zoekopdrachten
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Hogere conversie door lokale relevantie en vertrouwen (reviews)
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Stabiele stroom van kwalitatieve leads voor KMO’s en handelaars
              </li>
            </ul>
          </div>
        </section>

        {/* LOCAL LANDING PAGES */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Lokale landingspagina’s — de motor van je lokale vindbaarheid</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Per gemeente of stad",
                text:
                  "Unieke pagina’s voor je servicegebied (bv. Aalst, Ninove, Zottegem). Geen copy‑paste, wel lokale context, routes, landmarks en cases.",
              },
              {
                title: "Lokaal zoekgedrag & intentie",
                text:
                  "Content afgestemd op lokale intenties: openingstijden, parkeerinfo, service in de buurt, prijzen en directe contactmogelijkheden.",
              },
              {
                title: "Techniek & structuur",
                text:
                  "Heldere URL’s (/dienst/stad), interne linking tussen regio’s, LocalBusiness‑schema, snelle laadtijden en mobile‑first UX.",
              },
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
          <p className="mt-6 text-slate-600 dark:text-slate-300">
            We voorzien elk lokaal stuk van foto’s, veelgestelde vragen, referenties en
            duidelijke CTA’s (bellen, route, WhatsApp, afspraak). Zo wordt elke pagina een
            echte <strong>conversiepagina</strong>, niet enkel een SEO‑experiment.
          </p>
        </section>

        {/* GOOGLE BUSINESS PROFILE */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Google Bedrijfsprofiel (GBP) — zichtbaar in Maps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-semibold text-xl mb-2">Profiel & NAP</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Naam‑Adres‑Telefoon (NAP) 100% consistent, juiste categorieën, services, openingsuren, 
                extra attributen en up‑to‑date foto’s.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-semibold text-xl mb-2">Reviews & posts</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Review‑flow met QR, templates en opvolging. Regelmatige posts met promoties, events en nieuws 
                verhogen je relevantie en klikratio.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-semibold text-xl mb-2">Citations & linkjes</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Vermeldingen op lokale platformen en sector­directories. We bouwen lokale autoriteit op met 
                kwalitatieve citations en relevante backlinks.
              </p>
            </div>
          </div>
        </section>

        {/* MEASUREMENT */}
        <section className="mb-20 grid md:grid-cols-2 gap-10 items-start animate-slide-up">
          <div>
            <h2 className="text-3xl font-bold mb-4">Meten = weten (ook lokaal)</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We volgen rankings per gemeente, telefoontjes vanuit GBP, route‑klikken, formulieren en 
              organische sessies per landingspagina. Dashboards in <strong>GA4</strong> of{" "}
              <strong>Piwik Pro</strong> geven helder zicht op je lokale prestaties, maand na maand.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2"><FaCheckCircle className="mt-1 text-[#0362c8]" /> Zoekwoorden per regio</li>
              <li className="flex gap-2"><FaCheckCircle className="mt-1 text-[#0362c8]" /> Calls, routes, WhatsApp‑klikken</li>
              <li className="flex gap-2"><FaCheckCircle className="mt-1 text-[#0362c8]" /> Conversies per lokale pagina</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-lg">
            <img
              src="/assets/img/seo.webp"
              alt="Lokale KPI’s en dashboarding"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Onze lokale SEO‑aanpak in 5 stappen</h2>
          <ol className="grid md:grid-cols-5 gap-4 text-sm">
            {[
              "Intake & regio‑scope",
              "Keyword mapping per stad/gemeente",
              "Landingspagina’s & GBP setup",
              "Citations, reviews & interne links",
              "Meten, bijsturen & opschalen",
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

        {/* FAQ */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Veelgestelde vragen over lokale SEO</h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. Hoeveel lokale landingspagina’s heb ik nodig?</h3>
              <p>
                Start met je primaire servicegebieden (3–6 steden/gemeenten). 
                Breid daarna gefaseerd uit op basis van zoekvolume, concurrentie en bestaande klanten.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">2. Mag ik dezelfde tekst hergebruiken per stad?</h3>
              <p>
                Liever niet. Elke pagina krijgt unieke lokale invalshoeken: 
                referenties, routes, foto’s, veelgestelde vragen, prijzen of promoties per regio.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">3. Hoe belangrijk zijn reviews voor lokale ranking?</h3>
              <p>
                Zeer belangrijk. Reviews verhogen je zichtbaarheid én conversie. 
                We voorzien een eenvoudige flow om reviews te verzamelen en te beantwoorden.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">4. Wat met service‑area businesses (zonder winkel)?</h3>
              <p>
                Geen probleem. We optimaliseren voor servicegebieden via GBP, 
                lokale pagina’s en duidelijke coverage‑informatie (kaart/zone).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">5. Hoe snel zie ik resultaat?</h3>
              <p>
                Vaak binnen 4–8 weken merkbaar meer zichtbaarheid in Maps en verkeer naar lokale pagina’s, 
                afhankelijk van concurrentie en startpunt.
              </p>
            </div>
          </div>
        </section>

        {/* JSON-LD FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Hoeveel lokale landingspagina’s heb ik nodig?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start met je primaire servicegebieden (3–6 steden/gemeenten) en breid gefaseerd uit op basis van zoekvolume, concurrentie en bestaande klanten."
                }
              },
              {
                "@type": "Question",
                "name": "Mag ik dezelfde tekst hergebruiken per stad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Liever niet. Geef elke pagina unieke lokale invalshoeken: referenties, routes, foto’s, veelgestelde vragen, prijzen of promoties per regio."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe belangrijk zijn reviews voor lokale ranking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zeer belangrijk. Reviews verhogen zowel zichtbaarheid als conversie. Richt een eenvoudige reviewflow in en reageer op feedback."
                }
              },
              {
                "@type": "Question",
                "name": "Wat met service-area businesses (zonder winkel)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Optimaliseer voor servicegebieden met GBP, lokale pagina’s en duidelijke coverage-informatie (kaart/zone)."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe snel zie ik resultaat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vaak binnen 4–8 weken merkbaar meer zichtbaarheid in Maps en verkeer naar lokale pagina’s, afhankelijk van concurrentie en startpunt."
                }
              }
            ]
          })}
        </script>

        {/* CTA */}
        <section className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Domineren in jouw regio?</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300 mb-8">
            We maken een kort plan met de juiste lokale landings, GBP‑optimalisatie en een 
            haalbare review‑strategie. Ideaal voor KMO’s en zelfstandigen.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#024a96]"
          >
            Vraag je lokale SEO‑scan aan
          </Link>
        </section>
      </main>
    </>
  );
};

export default LokaleSeo;
