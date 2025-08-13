export interface Service {
  name: string;
  description: string;
  to: string;
}

export const services: Service[] = [
  {
    name: "SEO / SEA",
    description:
      "Zorg dat je gevonden wordt op Google, met AI-gestuurde zoekanalyse, slimme optimalisaties en gerichte campagnes.",
    to: "/diensten/seo-sea",
  },
  {
    name: "Data-gedreven Strategie",
    description:
      "Zet je data om in actie. Met duidelijke dashboards en inzichten bouwen we samen een strategie die werkt.",
    to: "/diensten/data-gedreven-strategie",
  },
  {
    name: "Webdesign",
    description:
      "Een frisse website die werkt op elk scherm. Visueel sterk, gebruiksvriendelijk en makkelijk aanpasbaar via een CMS.",
    to: "/diensten/webdesign",
  },
  {
    name: "Webdevelopment",
    description:
      "We bouwen schaalbare, performante webapplicaties op maat van jouw noden – met moderne technologie én een tikkeltje 'vibe coding'.",
    to: "/diensten/webdevelopment",
  },
  {
    name: "UI/UX",
    description:
      "Sterk design begint bij een fijne ervaring. We ontwerpen gebruiksvriendelijke interfaces met Figma die logisch aanvoelen én er goed uitzien.",
    to: "/diensten/ui-ux",
  },
  {
    name: "Lokale SEO",
    description:
      "Word beter zichtbaar in je regio met slimme, lokaal geoptimaliseerde landingspagina’s en vindbare content.",
    to: "/diensten/lokale-seo",
  },
];
