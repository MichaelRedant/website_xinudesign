import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const SeoSea: React.FC = () => {
  return (
    <>
      <Seo
        title="SEO, SEA & Meta Ads — Vindbaarheid en Performance | Xinudesign"
        description="Scoor hoger met technische SEO, AI‑gestuurde zoekanalyse en performante campagnes in Google Ads én Meta (Facebook/Instagram). Wij meten, optimaliseren en schalen wat werkt."
        canonical="https://www.xinudesign.be/diensten/seo-sea"
        keywords={[
          "SEO",
          "technische SEO",
          "lokale SEO",
          "Core Web Vitals",
          "zoekwoordonderzoek",
          "AI zoekanalyse",
          "SEA",
          "Google Ads",
          "Search Ads",
          "Performance Max",
          "Meta Ads",
          "Facebook Ads",
          "Instagram Ads",
          "remarketing",
          "CAPI",
          "Piwik Pro",
          "GA4",
        ]}
      />

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            SEO, SEA & Meta Ads die wérken
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Word gevonden op Google én aanwezig in de feed. Van{" "}
            <strong>AI‑gestuurde zoekanalyse</strong> en{" "}
            <strong>technische SEO</strong> tot{" "}
            <strong>winstgevende Google Ads</strong> en{" "}
            <strong>Meta‑campagnes</strong>: we bouwen een duurzame stroom van kwalitatief verkeer
            én conversies, over kanalen heen.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> AI‑zoekintentie
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Core Web Vitals
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Lokale SEO & GBP
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Google Ads Performance
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Meta Ads (FB/IG) ROAS
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

        {/* WHY SEO + SEA + META */}
        <section className="mb-20 grid gap-10 md:grid-cols-2 items-start animate-slide-up">
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-lg">
            <img
              src="/assets/img/seo.webp"
              alt="SEO, SEA & Meta Ads visual"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Waarom SEO + SEA + Meta combineren?</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              SEO levert duurzame zichtbaarheid en lagere kosten per lead op de lange termijn.
              SEA (Google Ads) geeft direct bereik op zoekwoorden met koopintentie. Meta Ads
              (Facebook/Instagram) zorgt voor{" "}
              <strong>push‑distributie, doelgroepopbouw en remarketing</strong>.
              Door kanalen slim te combineren valideren we snel wat werkt, schalen we winnaars
              en vertalen we learnings tussen kanalen. Resultaat: een stabiele funnel,
              betere traffic‑kwaliteit en maximale ROI.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Snelle learnings via Ads, duurzame groei via SEO
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Sterke remarketing met first‑party audiences (Meta + Google)
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Eén datagedreven roadmap voor content, search én social
              </li>
            </ul>
          </div>
        </section>

        {/* SEO PILLAR */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">SEO — Technisch sterk en content die rankt</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">AI‑gestuurde zoekanalyse</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Clusters op basis van zoekintentie (informational, commercial, transactional) +
                SERP‑gapanalyse. Prioriteren op volume, concurrentie, CTR‑potentieel en
                verwachte conversiewaarde.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Technische SEO</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Sitemaps, robots, canonical & hreflang, schema.org, lazy‑loading, image‑optimalisatie,
                interne linking en <strong>Core Web Vitals</strong> (LCP, INP, CLS). Crawlbaarheid en indexatie op orde.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Lokale SEO & GBP</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Google Business‑profiel, NAP‑consistentie, lokale landings per stad/gemeente,
                reviews. Ideaal voor diensten met regionale focus.
              </p>
            </div>
          </div>
          <div className="mt-6 text-slate-600 dark:text-slate-300">
            <p>
              Content krijgt structuur (H1‑H3, inhoudsopgave, FAQ), E‑E‑A‑T (expertise, cases,
              auteurs) en interne links naar relevante diensten. Zo bouwen we topical authority en
              verhogen we de kans op rich results.
            </p>
          </div>
        </section>

        {/* GOOGLE ADS (SEA) */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">SEA — Slimme Google Ads die converteren</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Structuur & Intent</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Intentie‑clusters, strakke ad groups, relevante assets en landings per zoekthema.
                Negatieve keywords elimineren ruis.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Biedstrategie & Meting</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Doel‑CPA/ROAS met first‑party conversies. Meten via GA4 of Piwik Pro; sturen op echte
                waarde: leads, calls, formulieren, micro‑conversies, offline events.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Optimalisatie</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Query‑management, A/B‑varianten, asset‑quality, device & geo modifiers, dagdeel‑sturing
                en budget naar winnaars.
              </p>
            </div>
          </div>
        </section>

        {/* META ADS */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Meta Ads — Groei met Facebook & Instagram</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Audience Architectuur</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Volledige funnel: cold (interessen/Lookalikes), warm (engagers/website‑bezoekers),
                hot (cart/lead‑remarketing). Uitsluitingen en frequentie‑bewaking vermijden waste.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Creatives die klikken</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Creatieve matrix met hooks, UGC‑stijl video, carrousels en statics. Duidelijke
                value‑props en CTA’s per funnel‑stage. Variant‑testing voor hogere CTR en lagere CPA.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Meten met Pixel & CAPI</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Correcte events via Pixel én Conversions API (CAPI). Hygiënische naming, deduplicatie
                en server‑side tracking voor stabiele optimalisatie en betere attribuering.
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Campagne‑structuur</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Heldere splitsing per doel (Leads, Sales, Traffic) en funnel. Advantage+ waar
                zinvol, manueel waar controle nodig is. Budget naar best‑presterende ad sets.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Optimalisatie & Leren</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Creatives & copy itereren, audience‑overlap reduceren, placements testen, capping en
                sequencing. Sprints met duidelijke hypotheses en beslissingsregels.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-xl mb-2">Leadflows & Landings</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Snelle lead‑formulieren of on‑brand landingspagina’s. Consistente boodschap
                (ad→landing), sociale bewijskracht en micro‑conversies verhogen doorstroom.
              </p>
            </div>
          </div>
        </section>

        {/* MEASUREMENT */}
        <section className="mb-20 grid md:grid-cols-2 gap-10 items-start animate-slide-up">
          <div>
            <h2 className="text-3xl font-bold mb-4">Meten = weten</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We bouwen een meetplan met KPI’s per kanaal en funnel‑stage (CTR, CPC, CPA, ROAS,
              organische zichtbaarheid, conversieratio). Dashboards in <strong>GA4</strong> of{" "}
              <strong>Piwik Pro</strong> geven realtime inzicht per kanaal, campagne en landingspagina.
              Elke sprint eindigt met review, leerpunten en concrete next steps.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Heldere dashboards en rapportage
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Actiegerichte inzichten i.p.v. datadumps
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Doorlopende A/B‑testen op ads, creatives en landings
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-lg">
            <img
              src="/assets/img/sea.webp"
              alt="KPI en dashboarding visual"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* PROCESS */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Onze werkwijze in 5 stappen</h2>
          <ol className="grid md:grid-cols-5 gap-4 text-sm">
            {[
              "Intake & doelstellingen",
              "AI-zoekanalyse & kanaalplan",
              "Techniek & landingspagina’s",
              "Campagnes live + meting",
              "Sprints: optimaliseren & opschalen",
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
  <h2 className="text-3xl font-bold mb-6">Veelgestelde vragen over SEO, SEA & Meta Ads</h2>
  <div className="space-y-6 text-slate-600 dark:text-slate-300">
    <div>
      <h3 className="font-semibold text-lg mb-2">1. Hoe lang duurt het voor SEO-resultaten zichtbaar zijn?</h3>
      <p>
        SEO is een langetermijnstrategie. Afhankelijk van concurrentie en huidige website-status 
        zie je vaak binnen 3 tot 6 maanden merkbare verbeteringen in rankings en verkeer. 
        Met onze aanpak versnellen we dit proces door quick wins te combineren met duurzame optimalisaties.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">2. Wat is het verschil tussen SEA en Meta Ads?</h3>
      <p>
        SEA (Google Ads) richt zich op zoekintentie: je verschijnt in Google op het moment dat iemand actief zoekt. 
        Meta Ads (Facebook/Instagram) werkt vooral met push-marketing, waarbij je doelgroepen bereikt op basis van 
        interesses, gedrag en eerdere interacties. Samen vormen ze een krachtige full-funnel strategie.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">3. Werkt remarketing nog met de strengere privacyregels?</h3>
      <p>
        Ja, maar op een andere manier. We werken met first-party data, server-side tracking (zoals CAPI) en consent-mode. 
        Zo blijven campagnes effectief én voldoen we aan GDPR/AVG-richtlijnen.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">4. Hoe meten jullie het succes van campagnes?</h3>
      <p>
        We richten conversietracking in via GA4 of Piwik Pro, gecombineerd met pixels en CAPI. 
        KPI’s zoals CTR, CPC, CPA, ROAS en conversieratio worden in duidelijke dashboards gepresenteerd. 
        Elke maand krijg je actiegerichte inzichten.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">5. Kan ik klein beginnen met Ads en later opschalen?</h3>
      <p>
        Zeker. We starten vaak met een testbudget om de best presterende campagnes, zoekwoorden en doelgroepen te identificeren. 
        Daarna schalen we de winnaars op om het rendement te maximaliseren.
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
      "name": "Hoe lang duurt het voor SEO-resultaten zichtbaar zijn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO is een langetermijnstrategie. Afhankelijk van concurrentie en huidige website-status zie je vaak binnen 3 tot 6 maanden merkbare verbeteringen in rankings en verkeer."
      }
    },
    {
      "@type": "Question",
      "name": "Wat is het verschil tussen SEA en Meta Ads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEA (Google Ads) richt zich op zoekintentie, terwijl Meta Ads (Facebook/Instagram) vooral werkt met push-marketing op basis van interesses en gedrag."
      }
    },
    {
      "@type": "Question",
      "name": "Werkt remarketing nog met de strengere privacyregels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, maar met first-party data, server-side tracking (CAPI) en consent-mode zodat campagnes effectief blijven én AVG-compliant zijn."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe meten jullie het succes van campagnes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We gebruiken GA4 of Piwik Pro, pixels en CAPI. KPI’s zoals CTR, CPC, CPA, ROAS en conversieratio worden gepresenteerd in heldere dashboards."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik klein beginnen met Ads en later opschalen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. We starten vaak met een testbudget om de best presterende campagnes en doelgroepen te identificeren, waarna we de winnaars opschalen."
      }
    }
  ]
})}
</script>


        {/* CTA */}
        <section className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Klaar om hoger te scoren én meer te converteren?</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300 mb-8">
            Laat ons je huidige situatie kort scannen. Je krijgt een concreet plan met snelle
            winstpunten voor SEO, Google Ads én Meta Ads — afgestemd op jouw regio, doelgroep
            en budget.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#024a96]"
          >
            Vraag je gratis scan aan
          </Link>
        </section>


        
      </main>
    </>
  );
};

export default SeoSea;
