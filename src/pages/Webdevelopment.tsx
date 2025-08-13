import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Seo from "../components/Seo";
import { motion } from "framer-motion";


const Webdevelopment: React.FC = () => {
  return (
    <>
      <Seo
        title="Webdevelopment op maat — Snelle, schaalbare webapps | Xinudesign"
        description="Eigen gecodeerde websites en webapplicaties die sneller laden, beter scoren en exact doen wat jij wil. Met Vibe Coding bouwen we op recordtempo zonder in te boeten aan kwaliteit."
        canonical="https://www.xinudesign.be/diensten/webdevelopment"
        keywords={[
          "webdevelopment",
          "webapplicatie laten maken",
          "maatwerk website",
          "Laravel",
          "React",
          "Tailwind",
          "PWA",
          "API integraties",
          "customer portal",
          "CPQ configurator",
          "boekingsplatform",
          "dashboarding",
          "Vibe Coding",
        ]}
      />

      <main className="mx-auto max-w-6xl px-6 py-24">
        {/* HERO */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Webdevelopment dat meegroeit met je ambities
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300">
            We bouwen <strong>eigen gecodeerde websites</strong> en{" "}
            <strong>webapplicaties</strong> die sneller laden, beter scoren en
            exact doen wat jij wil — <em>zonder plug-in limieten</em>. Met{" "}
            <strong>Vibe Coding</strong> zetten we ideeën om in robuuste features
            op <strong>recordtempo</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Maatwerk front‑ & backend
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Snel, veilig & schaalbaar
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> API‑integraties & automatisatie
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 ring-1 ring-black/10">
              <FaCheckCircle className="text-[#0362c8]" /> Vibe Coding (supersnel bouwen)
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

        {/* WHY CUSTOM CODE */}
        <section className="mb-20 grid gap-10 md:grid-cols-2 items-start animate-slide-up">
          <div className="rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-lg">
            <img
              src="/assets/img/webdev.webp"
              alt="Custom webdevelopment visual"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Waarom kiezen voor eigen code?</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Met maatwerk bouw je exact wat je nodig hebt—geen thema‑beperkingen,
              geen plug‑in‑conflicten. Je krijgt <strong>volledige controle</strong> over
              performance, SEO, security en UX. Resultaat: sneller laden, hogere
              conversies en schaalbaarheid zonder “paywalls”.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Geen plugin‑lock‑in of onnodige bloat — pure performance
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Volledig aanpasbaar aan processen en integraties
              </li>
              <li className="flex gap-2">
                <FaCheckCircle className="mt-1 text-[#0362c8]" />
                Schaalbaar fundament voor toekomstige features en groei
              </li>
            </ul>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Wat we bouwen — van site tot webapp</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "High‑performance websites",
                text:
                  "Snel, SEO‑proof en volledig on‑brand. Headless of traditioneel, met focus op Core Web Vitals en conversie.",
              },
              {
                title: "Customer portals",
                text:
                  "Logins voor klanten/partners, facturen, documenten, ticketing, betalingen, notificaties en rollenbeheer.",
              },
              {
                title: "CPQ & prijscalculators",
                text:
                  "Configure‑Price‑Quote flows, offertes op maat (zoals Offr3D), PDF/Peppol‑export en goedkeuringsstromen.",
              },
              {
                title: "Boekings‑ & planningstools",
                text:
                  "Kalenders, resource management, beschikbaarheden, betalingen en reminders. Koppelingen met agenda’s.",
              },
              {
                title: "Dashboards & analytics",
                text:
                  "Realtime KPI’s, rapporten en datavisualisaties. Koppelingen met GA4, Piwik Pro of externe databronnen.",
              },
              {
                title: "PWA & mobiele webapps",
                text:
                  "Installable webapps met offline modus, pushnotificaties en device‑integraties. Licht, snel en platformonafhankelijk.",
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
        </section>

        {/* VIBE CODING */}
        <section className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Vibe Coding — snel schakelen, strak resultaat</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Met <strong>Vibe Coding</strong> combineren we herbruikbare component‑libraries,
            beproefde patrooncode en AI‑assisted development om features{" "}
            <strong>razendsnel</strong> te leveren. Geen rommel, wel strak geteste code,
            duidelijke naming en versiebeheer. Ideaal voor MVP’s, pilots en
            acceleratie van bestaande projecten.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex gap-2">
              <FaCheckCircle className="mt-1 text-[#0362c8]" />
              Recordtempo zonder concessies aan kwaliteit of security
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="mt-1 text-[#0362c8]" />
              Snelle iteraties met korte feedbacklussen en A/B‑testen
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="mt-1 text-[#0362c8]" />
              Schaalbare codebase klaar voor teamuitbreiding
            </li>
          </ul>
        </section>

        {/* TECH STACK */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Onze stack</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-600 dark:text-slate-300">
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-semibold text-lg mb-2">Frontend</h3>
              <p>React (Vite), TypeScript, Tailwind CSS, Zustand/Redux, Recharts.</p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-semibold text-lg mb-2">Backend</h3>
              <p>Laravel / PHP, Node.js (waar nodig), MySQL, REST/JSON, Webhooks.</p>
            </div>
            <div className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
              <h3 className="font-semibold text-lg mb-2">Ops & kwaliteit</h3>
              <p>JWT‑auth, RBAC, audits, logging, CI/CD, Docker (project‑afhankelijk), OWASP best practices.</p>
            </div>
          </div>
        </section>

        {/* COMPARISON BLOCK */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Maatwerk vs. WordPress: wat past bij jou?</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-4xl">
            Kies je voor snelheid en eenvoud, of voor volledige vrijheid en schaalbaarheid?
            Hieronder een eerlijke vergelijking om je keuze te versnellen.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-slate-200 dark:border-slate-700 text-sm text-left">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th className="px-4 py-3 font-semibold">Kenmerk</th>
                  <th className="px-4 py-3 font-semibold">Maatwerk (React/Laravel)</th>
                  <th className="px-4 py-3 font-semibold">WordPress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-4 py-3">Performance & Core Web Vitals</td>
                  <td className="px-4 py-3">Uitstekend — geen bloat, volledig onder controle</td>
                  <td className="px-4 py-3">Goed tot wisselend — afhankelijk van thema/plugins</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Aanpasbaarheid</td>
                  <td className="px-4 py-3">Volledig vrij — elk proces en UI‑patroon kan</td>
                  <td className="px-4 py-3">Beperkt door thema’s en plugin‑mogelijkheden</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Integraties</td>
                  <td className="px-4 py-3">Diepe API‑integraties, custom workflows</td>
                  <td className="px-4 py-3">Veel plugins, soms workarounds nodig</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Schaalbaarheid</td>
                  <td className="px-4 py-3">Voor complexe apps en snelle groei</td>
                  <td className="px-4 py-3">Voor basis tot middelgrote sites</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Time‑to‑market</td>
                  <td className="px-4 py-3">Snel met Vibe Coding (MVP→product)</td>
                  <td className="px-4 py-3">Zeer snel voor eenvoudige sites</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Totale kost op lange termijn</td>
                  <td className="px-4 py-3">Voorspelbaar, geen “paywalls”, minder onderhoudsrisico</td>
                  <td className="px-4 py-3">Lager instapbudget, maar kans op premium plugin‑kosten</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-slate-600 dark:text-slate-300">
            We adviseren steeds op maat: soms is WordPress perfect, maar
            <strong> bij ambities rond automatisatie, portals of unieke flows</strong> is maatwerk de
            meest rendabele keuze.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-20 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Van idee naar impact — snel en schaalbaar</h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300 mb-8">
            Vertel ons wat je wil bereiken. We schetsen een lean plan met een MVP‑pad,
            duidelijke milestones en een onderhoudsstrategie die rendeert.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-[#0362c8] px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#024a96]"
          >
            Vraag je gratis technische scan aan
          </Link>
        </section>

        

        {/* FAQ */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Veelgestelde vragen over webdevelopment</h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-300">
            <div>
              <h3 className="font-semibold text-lg mb-2">1. Wanneer kies ik beter voor maatwerk dan voor WordPress?</h3>
              <p>
                Als je processen, integraties of UI‑patronen nodig hebt die buiten de grenzen van thema’s en plugins vallen.
                Denk aan portals, CPQ, workflows, speciale rechten of zware performance‑eisen. Dan verdient maatwerk zich meestal snel terug.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">2. Hoe snel kunnen jullie een MVP opleveren met Vibe Coding?</h3>
              <p>
                Vaak binnen enkele weken, afhankelijk van scope. Vibe Coding versnelt de bouw dankzij beproefde componenten,
                patrooncode en strakke testing — zonder in te boeten aan kwaliteit of security.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">3. Hoe zit het met security en privacy (GDPR)?</h3>
              <p>
                We werken met JWT‑auth, rol‑ & rechtenbeheer, inputvalidatie, logging en versleuteling waar nodig.
                GDPR‑compliant datastromen, data‑minimalisatie en duidelijke retention policies zijn standaard.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">4. Kunnen jullie koppelen met mijn bestaande tools?</h3>
              <p>
                Ja. We bouwen API‑integraties met CRM, ERP, betaalproviders, mailingtools, analytics of boekhoudpakketten.
                Ook webhooks en server‑side events zijn mogelijk voor realtime flows.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">5. Hoe houden we onderhoud beheersbaar?</h3>
              <p>
                Heldere code, documentatie, versiebeheer en een update‑ritme op maat. We voorzien monitoring en
                optioneel een SLA voor doorontwikkeling en support.
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
                "name": "Wanneer kies ik beter voor maatwerk dan voor WordPress?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bij portals, CPQ, workflows, speciale rechten, zware integraties of hoge performance-eisen. Maatwerk geeft volledige controle en verdient zich vaak snel terug."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe snel kunnen jullie een MVP opleveren met Vibe Coding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vaak binnen enkele weken, afhankelijk van scope. Vibe Coding versnelt dankzij beproefde componenten, patrooncode en strakke testing."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe zit het met security en privacy (GDPR)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We gebruiken JWT-auth, RBAC, inputvalidatie, logging en versleuteling waar nodig. GDPR-compliance, data-minimalisatie en retention policies zijn standaard."
                }
              },
              {
                "@type": "Question",
                "name": "Kunnen jullie koppelen met mijn bestaande tools?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ja, via API-integraties, webhooks en server-side events koppelen we met CRM, ERP, betaalproviders, mailingtools, analytics of boekhoudpakketten."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe houden we onderhoud beheersbaar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Door heldere code, documentatie, versiebeheer, monitoring en een update-ritme op maat. Optioneel SLA voor support en doorontwikkeling."
                }
              }
            ]
          })}
        </script>

        {/* PERSONA VAULT – SaaS 2025 highlight */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative mb-20 overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-6 sm:p-10 shadow-xl backdrop-blur-xl
             dark:border-white/10 dark:bg-slate-900/50"
>
  {/* decor: zachte blobs & hairline gradients */}
  <span className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
  <span className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
  <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

  {/* kop + badge + lead */}
  <div className="relative z-10 max-w-3xl">
    <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-50/70 px-3 py-1 text-xs font-semibold text-sky-700
                    dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
      Beta – Gratis uitproberen
    </div>

    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
      Persona Vault <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">voor teams die met AI werken</span>
    </h2>

    <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
      Beheer <strong>AI‑persona’s</strong>, prompts en versies op één plek. Bouw bibliotheken,
      werk samen in <strong>gedeelde workspaces</strong> en behoud controle met revisies &amp; visuele diff‑vergelijkingen.
      Klaar voor groei met een <strong>API‑ready</strong> backend.
    </p>
  </div>

  {/* content: features + mini mock / screenshot */}
  <div className="relative z-10 mt-8 grid items-start gap-8 md:grid-cols-2">
    {/* features */}
    <div className="order-2 md:order-1">
      <ul className="grid gap-3 sm:grid-cols-2">
        {[
          "Persona’s & prompts aanmaken en organiseren",
          "Revisiegeschiedenis met side‑by‑side diff",
          "Gedeelde workspaces voor teams & klanten",
          "Collecties, tags en snelle zoekfilters",
          "Rollen & permissies (team rights)",
          "API‑ready voor toekomstige integraties",
        ].map((feat) => (
          <motion.li
            key={feat}
            whileHover={{ x: 4 }}
            className="flex items-start gap-2 rounded-xl border border-white/30 bg-white/60 p-3 shadow-sm backdrop-blur
                       dark:border-white/10 dark:bg-white/5"
          >
            <FaCheckCircle className="mt-0.5 shrink-0 text-sky-500" />
            <span className="text-sm text-slate-700 dark:text-slate-300">{feat}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA's */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="/persona-vault"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white
                     bg-gradient-to-r from-sky-600 to-indigo-600 shadow-lg ring-1 ring-white/10
                     hover:scale-[1.02] hover:shadow-xl transition-all"
        >
          Schrijf je gratis in
        </a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold
                     text-sky-800 bg-white/90 ring-1 ring-sky-200 hover:bg-white transition
                     dark:text-sky-200 dark:bg-white/5 dark:ring-white/10"
        >
          Meer info
        </a>
      </div>
    </div>

    {/* mini “screenshot” / mock – vervang evt. door echte afbeelding */}
    <motion.div
      className="order-1 md:order-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative rounded-2xl border border-white/40 bg-white/80 p-3 shadow-xl backdrop-blur
                      dark:border-white/10 dark:bg-slate-900/60">
        {/* Titelbalk mock */}
        <div className="flex items-center gap-2 rounded-lg bg-slate-100/80 p-2 dark:bg-white/5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">Persona Vault – Workspace</span>
        </div>

        {/* Body mock (cards + diff) */}
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3 shadow-sm
                          dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Persona’s</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {["Support Bot", "Sales Coach", "UX Writer", "Dev Tutor"].map((p) => (
                <div key={p} className="rounded-lg border border-slate-200/60 bg-white/80 p-2 text-xs
                                        dark:border-white/10 dark:bg-white/5">
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3 shadow-sm
                          dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Diff‑vergelijking</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] leading-relaxed">
              <div className="rounded-lg bg-rose-50/80 p-2 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300">
                – “Tone: formal”<br />– “Max length: 200”
              </div>
              <div className="rounded-lg bg-emerald-50/80 p-2 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                + “Tone: friendly”<br />+ “Max length: 160”
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ondertitel */}
      <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
        App nog in beta – schrijf je in voor gratis toegang en updates!
      </p>
    </motion.div>
  </div>
</motion.section>


      </main>
    </>
  );
};

export default Webdevelopment;
