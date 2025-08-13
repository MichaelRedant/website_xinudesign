import React from "react";

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import GlassPane from "./GlassPane";
import { Link } from "react-router-dom";
import { services } from "../data/services";

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
      className="relative w-full overflow-hidden py-24"
      data-aos="fade-up"
    >
      <div />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent to-white dark:to-black" />
      <div className="relative max-w-5xl px-4 mx-auto">
        <GlassPane className="p-8 text-center">
          <h2 className="text-3xl font-semibold">Xinudesign in een notendop</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
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
            {services.map(({ name, description, to }) => (
              <Link
                key={to}
                to={to}
                className="block p-6 transition-transform bg-white/80 dark:bg-black/20 border rounded-lg hover:-translate-y-1"
              >
                <h3 className="text-xl font-medium">{name}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </GlassPane>
      </div>
    </section>
  );
}
