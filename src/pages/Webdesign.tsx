import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";

const Webdesign: React.FC = () => {
  return (
    <>
      <Seo
        title="Webdesign & WordPress Websites | Xinudesign & Pixapop"
        description="Professioneel webdesign met focus op gebruiksvriendelijke WordPress websites — snel online, perfect voor basisgebruik. In samenwerking met Pixapop Webdesign."
        canonical="https://www.xinudesign.be/diensten/webdesign"
        keywords={[
          "webdesign",
          "WordPress website",
          "website laten maken",
          "Pixapop webdesign",
          "responsive design",
          "basis website",
          "CMS",
        ]}
      />
      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Webdesign dat werkt
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Samen met{" "}
            <a
              href="https://www.pixapop.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0362c8] underline hover:no-underline"
            >
              Pixapop Webdesign
            </a>{" "}
            leveren we gebruiksvriendelijke{" "}
            <strong>WordPress websites</strong> die er goed uitzien op elk
            apparaat. Ideaal voor wie snel online wil met een duidelijke structuur
            en eenvoudig beheer via een CMS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Responsive design
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Visueel sterk
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Zelf te beheren CMS
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

        {/* WHY WORDPRESS */}
        <section className="mb-20 grid gap-10 md:grid-cols-2 items-start animate-slide-up">
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-lg">
            <img
              src="/assets/img/wp.webp"
              alt="WordPress webdesign voorbeeld"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Waarom kiezen voor WordPress?</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              WordPress is wereldwijd het meest gebruikte CMS, en niet zonder
              reden: het is gebruiksvriendelijk, snel te implementeren en ideaal
              voor bedrijven die{" "}
              <strong>een basiswebsite</strong> willen die goed vindbaar is en
              eenvoudig te beheren blijft.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Voor geavanceerde functionaliteiten of uitgebreide
              personalisatie kom je echter sneller aan bij{" "}
              <strong>premium plugins</strong> of maatwerk, wat extra
              investering kan vragen. Voor veel ondernemers is dit geen
              beperking, maar juist een voordeel: je betaalt alleen voor wat je
              echt nodig hebt.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Snel online met een professioneel design
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Eenvoudig zelf aan te passen via het CMS
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Uit te breiden met plugins of maatwerk
              </li>
            </ul>
          </div>
        </section>

        {/* COMPARISON BLOCK */}
<section className="mb-20 animate-slide-up">
  <h2 className="text-3xl font-bold mb-6">WordPress of maatwerk: wat past bij jou?</h2>
  <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-4xl">
    Er bestaat geen one-size-fits-all oplossing. WordPress is ideaal voor ondernemers die snel online willen 
    met een professionele site die eenvoudig te beheren is.  
    Voor wie verder wil gaan met geavanceerde functies, integraties of unieke designs, kan 
    maatwerk de betere investering zijn.
  </p>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-slate-200 dark:border-slate-700 text-sm text-left">
      <thead className="bg-slate-100 dark:bg-slate-800">
        <tr>
          <th className="px-4 py-3 font-semibold">Kenmerk</th>
          <th className="px-4 py-3 font-semibold">WordPress</th>
          <th className="px-4 py-3 font-semibold">Maatwerk (Laravel / Headless CMS)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
        <tr>
          <td className="px-4 py-3">Tijd tot livegang</td>
          <td className="px-4 py-3">2–4 weken</td>
          <td className="px-4 py-3">4–12+ weken</td>
        </tr>
        <tr>
          <td className="px-4 py-3">Beheersgemak</td>
          <td className="px-4 py-3">Zeer gebruiksvriendelijk, eenvoudig CMS</td>
          <td className="px-4 py-3">Afhankelijk van implementatie, vaak complexer</td>
        </tr>
        <tr>
          <td className="px-4 py-3">Aanpasbaarheid</td>
          <td className="px-4 py-3">Beperkt tot thema’s en plugins</td>
          <td className="px-4 py-3">Volledig vrij, alles is mogelijk</td>
        </tr>
        <tr>
          <td className="px-4 py-3">Kosten</td>
          <td className="px-4 py-3">Lager instapbudget, paywalls bij premium plugins</td>
          <td className="px-4 py-3">Hogere initiële investering, maar geen CMS-limieten</td>
        </tr>
        <tr>
          <td className="px-4 py-3">Schaalbaarheid</td>
          <td className="px-4 py-3">Geschikt voor kleine tot middelgrote sites</td>
          <td className="px-4 py-3">Geschikt voor complexe en snelgroeiende platforms</td>
        </tr>
        <tr>
          <td className="px-4 py-3">Integraties</td>
          <td className="px-4 py-3">Veel plugins beschikbaar, soms beperkingen</td>
          <td className="px-4 py-3">Volledige API-integratie mogelijk</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p className="mt-6 text-slate-600 dark:text-slate-300">
    Bij Xinudesign adviseren we eerlijk op basis van jouw doelstellingen en budget.  
    <strong>Met onze samenwerking met Pixapop Webdesign</strong> leveren we snelle en effectieve WordPress websites, 
    maar als jouw project meer vraagt, zorgen we voor een schaalbare maatwerkoplossing.
  </p>
</section>


{/* FAQ */}
<section className="mb-20 animate-slide-up">
  <h2 className="text-3xl font-bold mb-6">Veelgestelde vragen over WordPress webdesign</h2>
  <div className="space-y-6 text-slate-600 dark:text-slate-300">
    <div>
      <h3 className="font-semibold text-lg mb-2">
        1. Is WordPress geschikt voor mijn bedrijf?
      </h3>
      <p>
        WordPress is perfect voor kleine tot middelgrote bedrijven die snel
        een professionele website willen lanceren. Het biedt alle basisfuncties
        die je nodig hebt voor online zichtbaarheid en is makkelijk zelf te
        beheren zonder technische kennis.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">
        2. Wat zijn de beperkingen van WordPress?
      </h3>
      <p>
        Voor geavanceerde functionaliteiten of complexe integraties is vaak
        maatwerk nodig of een premium plugin. Dit kan extra kosten met zich
        meebrengen. Voor veel basisgebruikers vormt dit geen probleem, omdat
        de standaardfunctionaliteit ruim voldoende is.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">
        3. Kan ik mijn WordPress site later uitbreiden?
      </h3>
      <p>
        Ja, WordPress is modulair opgebouwd. Je kan functionaliteiten toevoegen
        via plugins of volledig maatwerk. Hierdoor kan de website meegroeien
        met je bedrijf.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">
        4. Waarom werken jullie samen met Pixapop Webdesign?
      </h3>
      <p>
        Pixapop Webdesign is gespecialiseerd in het ontwerpen van visueel sterke
        en gebruiksvriendelijke WordPress websites. Door onze samenwerking
        combineren we technisch vakmanschap met een strak design, zodat je een
        site krijgt die én goed werkt én er professioneel uitziet.
      </p>
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">
        5. Hoe snel kan mijn website online staan?
      </h3>
      <p>
        Afhankelijk van de complexiteit en de hoeveelheid content kan een
        WordPress website vaak al binnen 2 tot 4 weken live zijn. Dankzij
        gestroomlijnde processen met Pixapop Webdesign houden we de doorlooptijd
        kort.
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
      "name": "Is WordPress geschikt voor mijn bedrijf?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WordPress is perfect voor kleine tot middelgrote bedrijven die snel een professionele website willen lanceren. Het biedt alle basisfuncties en is makkelijk zelf te beheren."
      }
    },
    {
      "@type": "Question",
      "name": "Wat zijn de beperkingen van WordPress?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voor geavanceerde functionaliteiten of complexe integraties is vaak maatwerk of een premium plugin nodig. Dit kan extra kosten met zich meebrengen."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik mijn WordPress site later uitbreiden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, WordPress is modulair opgebouwd en kan uitgebreid worden met plugins of maatwerk."
      }
    },
    {
      "@type": "Question",
      "name": "Waarom werken jullie samen met Pixapop Webdesign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pixapop Webdesign is gespecialiseerd in het ontwerpen van visueel sterke en gebruiksvriendelijke WordPress websites. Samen leveren we technisch vakmanschap en professioneel design."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe snel kan mijn website online staan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Afhankelijk van de complexiteit en content kan een WordPress website vaak al binnen 2 tot 4 weken live zijn."
      }
    }
  ]
})}
</script>




        {/* CTA */}
        <section className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Klaar om online te gaan?</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300 mb-8">
            Of je nu een eenvoudige bedrijfswebsite nodig hebt of een solide basis
            voor verdere groei: met WordPress en onze samenwerking met Pixapop
            Webdesign zorgen we dat jouw site er goed uitziet én goed presteert.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#024a96]"
          >
            Vraag je offerte aan
          </Link>
        </section>

        
      </main>
    </>
  );
};

export default Webdesign;
