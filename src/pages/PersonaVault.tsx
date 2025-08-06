import type { IconType } from "react-icons";
import { FaShareAlt, FaTag, FaSearch } from "react-icons/fa";

const features: { icon: IconType; title: string; text: string }[] = [
  {
    icon: FaShareAlt,
    title: "Share personas",
    text: "Easily share personas and prompts with others.",
  },
  {
    icon: FaTag,
    title: "Tag-based filtering",
    text: "Organize your vault items with flexible tags.",
  },
  {
    icon: FaSearch,
    title: "Instant search",
    text: "Find the right persona or prompt in seconds.",
  },
];

const PersonaVault: React.FC = () => {
  return (
    <main className="px-4 py-24 bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <section
        className="max-w-5xl mx-auto text-center space-y-6"
        data-aos="fade-up"
      >
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            Logo
          </div>
        </div>
        <h1 className="text-4xl font-bold text-blue-800">Persona Vault</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          A lightweight personal vault to manage and share personas and prompts.
        </p>
      </section>

      <section
        className="max-w-5xl mx-auto grid gap-8 mt-16 md:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {features.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="p-6 rounded-xl bg-white/70 dark:bg-black/30 backdrop-blur-md shadow-xl border border-white/20"
          >
            <Icon className="mb-4 text-3xl text-blue-600" />
            <h3 className="mb-2 text-xl font-semibold text-blue-700">
              {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{text}</p>
          </div>
        ))}
      </section>

      <section
        className="mt-24 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a
          href="https://github.com/MichaelRedant/persona-vault"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-white transition-transform bg-blue-600 rounded hover:bg-blue-700 hover:scale-105"
        >
          View on GitHub
        </a>
      </section>
    </main>
  );
};

export default PersonaVault;
