import React from "react";

interface Activity {
  id: number;
  name: string;
  description: string;
}

const activities: Activity[] = [
  {
    id: 1,
    name: "Content Creatie",
    description:
      "Creëer efficiënte en creatieve inhoud met behulp van AI-tools zoals GPT en DALL-E.",
  },
  {
    id: 2,
    name: "Automatisering",
    description:
      "Automatiseer je campagnes en workflows met slimme AI-integraties.",
  },
  {
    id: 3,
    name: "SEO / SEM",
    description:
      "Boost je online zichtbaarheid met AI-gestuurde analyses en optimalisaties.",
  },
  {
    id: 4,
    name: "Workshops en Trainingen",
    description:
      "Leer hoe je AI-tools kunt inzetten voor marketing en contentcreatie.",
  },
  {
    id: 5,
    name: "Data-gedreven Strategieën",
    description:
      "Transformeer data in actie met visuele inzichten en strategische plannen.",
  },
  {
    id: 6,
    name: "Webdesign",
    description:
      "Beheer eenvoudig je website met een krachtig Content Management Systeem.",
  },
  {
    id: 7,
    name: "Webdevelopment",
    description:
      "Bouw krachtige, schaalbare webapplicaties met moderne technologieën.",
  },
  {
    id: 8,
    name: "UI/UX",
    description:
      "Ontwerp intuïtieve en aantrekkelijke gebruikerservaringen met Figma.",
  },
  {
    id: 9,
    name: "Lokale SEO",
    description:
      "Verhoog je zichtbaarheid met geoptimaliseerde lokale landingspagina's.",
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/michael-redant",
    label: "LinkedIn",
    abbreviation: "IN",
  },
  {
    href: "https://github.com/michael-redant",
    label: "GitHub",
    abbreviation: "GH",
  },
  {
    href: "https://www.instagram.com/michael-redant",
    label: "Instagram",
    abbreviation: "IG",
  },
  {
    href: "https://www.facebook.com/michael-redant",
    label: "Facebook",
    abbreviation: "FB",
  },
];

export default function Intro() {
  return (
    <section className="px-4 py-24 mx-auto text-center bg-white max-w-5xl animate-fadeInUp">
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
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-xs font-bold text-gray-700 bg-white border rounded-full hover:bg-gray-100"
          >
            <span className="sr-only">{link.label}</span>
            {link.abbreviation}
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
