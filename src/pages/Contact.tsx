import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import GlassPane from "../components/GlassPane";
import Seo from "../components/Seo";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formStartRef = useRef<number>(Date.now()); // tijdsval voor bots

  // ====== FAQ (jouw eigen tekst) ======
  const faqs = useMemo(
    () => [
      {
        q: "Wie is Xinudesign?",
        a: "Xinudesign is het freelance webdevelopment- en marketingbureau van Michaël Redant, gevestigd in Borsbeke (Herzele). We helpen kmo’s en zelfstandigen groeien met webdesign, SEO/SEA en conversieoptimalisatie.",
      },
      {
        q: "Welke diensten bieden jullie aan?",
        a: "Snelle, SEO‑geoptimaliseerde websites, maatwerk webapps, Google Ads & Meta Ads campagnes en conversiegerichte landingspagina’s. We optimaliseren ook bestaande sites voor snelheid, vindbaarheid en conversie.",
      },
      {
        q: "Werken jullie samen met partners?",
        a: "Ja. Voor webdesign werken we nauw samen met Pixapop Webdesign. Zo combineren we sterke techniek met strak visueel design.",
      },
      {
        q: "Wat maakt jullie aanpak uniek?",
        a: "Techniek × marketing × data. We sturen op KPI’s en dashboards, zodat je precies weet wat elke euro oplevert.",
      },
      {
        q: "Hoe verloopt een samenwerking?",
        a: "Kennismaking → doelen & scope → offerte & planning → realisatie met updates → lancering → doorlopende optimalisatie.",
      },
      {
        q: "Welke regio’s bedienen jullie?",
        a: "Heel Vlaanderen en Brussel. Remote werkt prima; op locatie komen kan in o.a. Herzele, Aalst, Lede, Zottegem, Erpe‑Mere, Geraardsbergen, Ninove, Wetteren, Dendermonde en Zwalm.",
      },
      {
        q: "Bieden jullie onderhoud aan?",
        a: "Ja. Veiligheidsupdates, performance‑checks, SEO‑monitoring en kleine contentupdates via onderhoudspakketten.",
      },
      {
        q: "Kan ik enkel SEO of advertising afnemen?",
        a: "Zeker. Losse SEO‑audits, campagnes of CRO‑trajecten zijn mogelijk zonder volledig webdesignproject.",
      },
    ],
    []
  );

  // ====== Structured Data (JSON‑LD) ======
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Person + LocalBusiness + ContactPoint + Website SearchAction
  const jsonLdBundle = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Michaël Redant",
      url: "https://www.xinudesign.be",
      email: "mailto:michael@xinudesign.be",
      telephone: "+32-496-90-85-03",
      sameAs: [
        "https://www.linkedin.com/in/michael-redant",
        "https://github.com/michael-redant",
        "https://www.instagram.com/michael-redant",
      ],
      worksFor: { "@type": "Organization", name: "Xinudesign" },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Xinudesign",
      url: "https://www.xinudesign.be",
      image: "https://www.xinudesign.be/apple-touch-icon.png",
      email: "mailto:michael@xinudesign.be",
      telephone: "+32-496-90-85-03",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Provincieweg 34a",
        addressLocality: "Borsbeke",
        postalCode: "9552",
        addressCountry: "BE",
      },
      areaServed: [
        "Herzele",
        "Aalst",
        "Lede",
        "Zottegem",
        "Erpe-Mere",
        "Geraardsbergen",
        "Ninove",
        "Wetteren",
        "Dendermonde",
        "Zwalm",
      ],
      // We vermelden geen openingsuren omdat die niet publiek opgegeven zijn.
      // Doorlopende bereikbaarheid via e‑mail/telefoon en op afspraak.
      isAccessibleForFree: true,
      hasMap: "https://maps.google.com/?q=Provincieweg+34a+9552+Borsbeke",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "michael@xinudesign.be",
          telephone: "+32-496-90-85-03",
          areaServed: "BE",
          availableLanguage: ["nl", "en", "fr"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Xinudesign",
      url: "https://www.xinudesign.be",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.xinudesign.be/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    faqSchema,
  ];

  // UTM + referer + tijdsval (anti-spam)
  const captureTracking = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      referrer: document.referrer || "",
      time_on_page_sec: Math.max(0, Math.round((Date.now() - formStartRef.current) / 1000)),
    };
  };

  // Client‑side validatie (extra bovenop required attributes)
  const validate = (data: FormData) => {
    const next: Record<string, string> = {};
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const consent = String(data.get("consent") || "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Ongeldig e‑mailadres.";
    if (phone && !/^\+?[0-9\s().-]{6,}$/.test(phone)) next.phone = "Controleer je telefoonnummer.";
    if (consent !== "yes") next.consent = "Vink aan dat we je mogen contacteren.";

    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setSending(true);
    setErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot + tijdsval
    if (String(data.get("website") || "").trim() !== "") {
      setStatus("Er liep iets mis. Probeer later opnieuw.");
      setSending(false);
      return;
    }
    const t = captureTracking();
    Object.entries(t).forEach(([k, v]) => data.set(k, String(v)));

    // validatie
    const v = validate(data);
    if (Object.keys(v).length) {
      setErrors(v);
      setSending(false);
      return;
    }

    try {
      const res = await fetch("/contact.php", { method: "POST", body: data });
      const result = await res.json();

      if (result?.success) {
        setStatus("Bedankt! Je bericht is verzonden. Ik neem snel contact op.");
        // Optional: conversie events
        try {
          // @ts-expect-error: gtag may not be defined on the window object
          window.gtag?.("event", "lead", { method: "contact_form" });
          // @ts-expect-error: fbq may not be defined on the window object
          window.fbq?.("track", "Lead");
        } catch { /* empty */ }
        form.reset();
        formStartRef.current = Date.now();
      } else {
        setStatus("Er liep iets mis. Probeer later opnieuw.");
      }
    } catch {
      setStatus("Er liep iets mis. Probeer later opnieuw.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact | Xinudesign"
        description="Contacteer Xinudesign (Michaël Redant) voor webdesign, SEO/SEA en datagedreven marketing. Samen groeien we digitaal."
        canonical="https://www.xinudesign.be/contact"
        // Meerdere JSON‑LD blokken toegestaan — Seo component moet dit als array doorzetten.
        jsonLd={jsonLdBundle}
      />

      <main className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-24 px-6">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Laten we samenwerken
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Nieuwe website, betere vindbaarheid of een slimme advertising‑strategie?
            Met Xinudesign haal je techniek, marketing en data onder één dak.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* FORM */}
          <GlassPane className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Naam */}
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Naam*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  E‑mail*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={`w-full rounded-md border p-3 focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Telefoon (optioneel, maar nuttig voor conversie) */}
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">
                  Telefoon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+32 496 90 85 03"
                  className={`w-full rounded-md border p-3 focus:outline-none focus:ring-2 ${
                    errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              {/* Bedrijf */}
              <div>
                <label htmlFor="company" className="block mb-1 font-medium">
                  Bedrijf
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Onderwerp */}
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">
                  Onderwerp
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Kies een onderwerp
                  </option>
                  <option value="webdesign">Webdesign / Webapp</option>
                  <option value="seo">SEO / Technische SEO</option>
                  <option value="ads">Google Ads / Meta Ads</option>
                  <option value="cxo">CRO / Landingspagina’s</option>
                  <option value="other">Anders</option>
                </select>
              </div>

              {/* Budget (indicatief) */}
              <div>
                <label htmlFor="budget" className="block mb-1 font-medium">
                  Indicatief budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Kies een range
                  </option>
                  <option value="<1k">&lt; €1.000</option>
                  <option value="1-3k">€1.000 – €3.000</option>
                  <option value="3-5k">€3.000 – €5.000</option>
                  <option value=">5k">&gt; €5.000</option>
                </select>
              </div>

              {/* Bericht */}
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Bericht*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Beschrijf kort je doel, timing en gewenste resultaten."
                />
              </div>

              {/* Best contactmoment (UX) */}
              <div>
                <label htmlFor="contact_time" className="block mb-1 font-medium">
                  Beste moment om je te contacteren
                </label>
                <select
                  id="contact_time"
                  name="contact_time"
                  className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Kies een moment
                  </option>
                  <option value="morning">Voormiddag</option>
                  <option value="afternoon">Namiddag</option>
                  <option value="evening">Avond</option>
                </select>
              </div>

              {/* GDPR / toestemming */}
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  value="yes"
                  className="mt-1 h-5 w-5 rounded border-gray-300"
                />
                <label htmlFor="consent" className="text-sm">
                  Ik geef toestemming om mijn gegevens te gebruiken om mijn vraag te beantwoorden.
                </label>
              </div>
              {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}

              {/* Honeypot + tracking (hidden) */}
              <div className="hidden">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                <input name="utm_source" readOnly />
                <input name="utm_medium" readOnly />
                <input name="utm_campaign" readOnly />
                <input name="utm_term" readOnly />
                <input name="utm_content" readOnly />
                <input name="referrer" readOnly />
                <input name="time_on_page_sec" readOnly />
              </div>

              <button
                disabled={isSending}
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 py-3 px-4 font-semibold text-white shadow-lg hover:scale-[1.02] transition-transform disabled:opacity-60"
                aria-live="polite"
              >
                {isSending ? "Versturen…" : "Bericht versturen"}
              </button>

              {status && (
                <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300" role="status">
                  {status}
                </p>
              )}
            </form>
          </GlassPane>

          {/* CONTACT INFO + SOCIALS */}
          <div className="space-y-6">
            <GlassPane className="p-6 flex items-start space-x-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-semibold">E‑mail</h3>
                <p>
                  <a href="mailto:michael@xinudesign.be" className="underline">
                    michael@xinudesign.be
                  </a>
                </p>
              </div>
            </GlassPane>

            <GlassPane className="p-6 flex items-start space-x-4">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-semibold">Telefoon</h3>
                <p>
                  <a href="tel:+32496908503" className="underline">
                    +32 496 90 85 03
                  </a>
                </p>
              </div>
            </GlassPane>

            <GlassPane className="p-6 flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <h3 className="font-semibold">Adres</h3>
                <p>Provincieweg 34a, 9552 Borsbeke, België</p>
              </div>
            </GlassPane>

            {/* SOCIALS */}
            <GlassPane className="p-6">
              <h3 className="font-semibold mb-4">Volg mij</h3>
              <div className="flex space-x-4 text-2xl text-blue-600">
                <a href="https://github.com/michael-redant" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/michael-redant" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/michael-redant" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/michael-redant" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </div>
            </GlassPane>
          </div>
        </div>

        {/* FAQ SECTION */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <GlassPane key={idx} className="p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.a}</p>
              </GlassPane>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
