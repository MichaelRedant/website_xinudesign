import type { IconType } from "react-icons";
import Seo from "../components/Seo";
import {
  FaShareAlt,
  FaTag,
  FaSearch,
  FaCodeBranch,
  FaFolderOpen,
  FaUsersCog,
  FaFlask,
  FaCalendarAlt,
  FaRocket,
} from "react-icons/fa";

const features: { icon: IconType; title: string; text: string }[] = [
  {
    icon: FaShareAlt,
    title: "1-Click Share Links",
    text: "Spin up read-only links for clients and teammates—no login required.",
  },
  {
    icon: FaTag,
    title: "Smart Tagging",
    text: "Auto-suggest tags and filter personas & prompts at scale.",
  },
  {
    icon: FaSearch,
    title: "Instant Fuzzy Search",
    text: "Spot the right prompt in <120 ms, even with typos.",
  },
  {
    icon: FaCodeBranch,
    title: "Version Control & Diff",
    text: "Track every tweak, rollback any time, compare side-by-side.",
  },
  {
    icon: FaFolderOpen,
    title: "Collections",
    text: "Bundle prompts, personas & examples into reusable playbooks.",
  },
  {
    icon: FaUsersCog,
    title: "Workspaces",
    text: "Separate teams, roles and projects—granular permissions included.",
  },
];

export default function PersonaVault() {
  return (
    <>
      <Seo
        title="Persona Vault | Xinudesign"
        description="Beheer AI-persona's en prompts centraal met de Persona Vault."
        canonical="https://www.xinudesign.be/persona-vault"
        keywords={[
          "Persona Vault",
          "AI personas",
          "prompt management",
          "AI prompts",
          "tagging",
          "version control",
          "workspace",
          "collaboration",
        ]}
      />
      <main className="px-4 py-24 bg-gradient-to-b from-white to-sky-50 dark:from-gray-900 dark:to-gray-800">
        {/* ───── Hero ───── */}
        <section
          className="mx-auto max-w-6xl text-center space-y-8"
          data-aos="fade-up"
        >
          <div className="flex justify-center">
            <img
              src="https://www.xinudesign.be/vault/logo-light.svg"
              alt="Persona Vault Logo"
              className="h-27 w-27 rounded-full bg-white shadow-lg p-8"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
            Your AI Persona & Prompt Vault
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300">
            Centralize, version and deploy your{" "}
            <strong>AI personas & prompts</strong> in a single, secure
            workspace—built for product, marketing and dev teams.
          </p>

          <div className="flex flex-col items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <Badge icon={FaFlask} text="Free public beta" />
            <Badge icon={FaCalendarAlt} text="Live roadmap & monthly drops" />
          </div>

          <a
            href="/vault/"
            className="inline-flex items-center gap-2 px-8 py-4 mt-4 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 hover:scale-105 transition"
          >
            <FaRocket />
            Launch Persona Vault
          </a>
        </section>

        {/* ───── Features ───── */}
        <section
          className="mx-auto mt-28 grid gap-10 max-w-6xl md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="p-8 rounded-2xl bg-white/70 dark:bg-slate-900/50 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition"
            >
              <Icon className="mb-5 text-4xl text-blue-600 dark:text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">
                {title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">{text}</p>
            </article>
          ))}
        </section>

        {/* ───── Product Peek ───── */}
        <section
          className="mt-32 mx-auto max-w-6xl text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            A 60-second look inside
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto">
            Draft a persona, add smart tags, share a link, track every
            iteration—
            <br className="hidden md:inline" />
            all from one streamlined dashboard.
          </p>

          <img
            src="/assets/img/screenshot.webp"
            alt="Persona Vault dashboard"
            className="rounded-2xl shadow-2xl mx-auto w-full"
            loading="lazy"
            width={1624}
            height={916}
          />
        </section>

        {/* ───── Social Proof ───── */}
        <section
          className="mt-32 mx-auto max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            Built for high-velocity teams
          </h2>
          <blockquote className="italic text-slate-600 dark:text-slate-400">
            “Now every engineer works with the same up-to-date prompt set.
            Roll-back and diff viewer saved us from shipping broken personas
            twice.”
            <br />
            <span className="mt-3 block font-semibold text-blue-700 dark:text-blue-400">
              — Pieter-Jan, Lead Developer @ ScaleTech
            </span>
          </blockquote>
        </section>

        {/* ───── OSS / SEO footer ───── */}
        <section
          className="mt-32 text-center"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <a
            href="https://github.com/MichaelRedant/persona-vault"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-slate-800 text-white rounded hover:bg-slate-900 transition"
          >
            View source on GitHub
          </a>
          <p className="mt-6 text-xs text-slate-500 dark:text-slate-400 max-w-3xl mx-auto px-4 leading-relaxed">
            Persona Vault is an open-source side-project by Xinudesign. Manage
            AI personas, prompts and playground snippets with full
            version-history and API access. Try the beta on&nbsp;
            <a href="/vault/" className="underline text-blue-600">
              xinudesign.be/vault
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}

function Badge({ icon: Icon, text }: { icon: IconType; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/60 rounded-full px-3 py-1 backdrop-blur-sm">
      <Icon className="text-blue-600" />
      {text}
    </span>
  );
}
