import React from "react";

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

interface Activity {
  id: number;
  name: string;
  description: string;
}

const activities: Activity[] = [

  {
    id: 3,
    name: "SEO / SEA",
    description:
      "Zorg dat je gevonden wordt op Google, met AI-gestuurde zoekanalyse, slimme optimalisaties en gerichte campagnes.",
  },

  {
    id: 5,
    name: "Data-gedreven Strategie",
    description:
      "Zet je data om in actie. Met duidelijke dashboards en inzichten bouwen we samen een strategie die werkt.",
  },
  {
    id: 6,
    name: "Webdesign",
    description:
      "Een frisse website die werkt op elk scherm. Visueel sterk, gebruiksvriendelijk en makkelijk aanpasbaar via een CMS.",
  },
  {
    id: 7,
    name: "Webdevelopment",
    description:
      "We bouwen schaalbare, performante webapplicaties op maat van jouw noden – met moderne technologie én een tikkeltje 'vibe coding'.",
  },
  {
    id: 8,
    name: "UI/UX",
    description:
      "Sterk design begint bij een fijne ervaring. We ontwerpen gebruiksvriendelijke interfaces met Figma die logisch aanvoelen én er goed uitzien.",
  },
  {
    id: 9,
    name: "Lokale SEO",
    description:
      "Word beter zichtbaar in je regio met slimme, lokaal geoptimaliseerde landingspagina’s en vindbare content.",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/michael-redant",
    color: "text-primary hover:text-hover",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/michael-redant",
    color: "text-text hover:text-hover",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/michael-redant",
    color: "text-secondary hover:text-hover",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/michael-redant",
    color: "text-blue-700 hover:text-blue-900",
  },
];

export default function Intro() {
  return (
    <section
      className="px-4 py-24 mx-auto text-center bg-white max-w-5xl"
      data-aos="fade-up"
    >
      <img
        src="/assets/xinu.png"
        alt="Xinudesign"
        className="w-24 h-24 mx-auto mb-6"
      />
      <h2 className="text-3xl font-semibold">Xinudesign in een notendop</h2>
      <p className="mt-4 text-gray-700">
        Van strategie tot uitvoering: alle digitale diensten onder één dak.
      </p>
      <div className="flex justify-center mt-6 space-x-3">
        {socialLinks.map(({ name, icon: Icon, url, color }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 bg-white border rounded-full ${color}`}
          >
            <span className="sr-only">{name}</span>
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-6 transition-transform bg-white border rounded-lg hover:-translate-y-1"
          >
            <h3 className="text-xl font-medium">{activity.name}</h3>
            <p className="mt-2 text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
