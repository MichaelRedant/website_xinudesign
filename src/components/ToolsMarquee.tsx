import { useState } from "react";
import GlassPane from "./GlassPane";

interface Tool {
  src: string;
  name: string;
}

const tools: Tool[] = [
  { src: "/assets/logos/adobe.svg", name: "Adobe" },
  { src: "/assets/logos/adobe-after-effects.svg", name: "Adobe After Effects" },
  { src: "/assets/logos/adobe-illustrator.svg", name: "Adobe Illustrator" },
  { src: "/assets/logos/adobe-photoshop.svg", name: "Adobe Photoshop" },
  { src: "/assets/logos/autodesk.svg", name: "Fusion 360" },
  { src: "/assets/logos/canva.svg", name: "Canva" },
  { src: "/assets/logos/google-ads.svg", name: "Google Ads" },
  { src: "/assets/logos/google-analytics.svg", name: "Google Analytics" },
  { src: "/assets/logos/google-gke.svg", name: "Google Gemini" },
  { src: "/assets/logos/indesign.svg", name: "Adobe InDesign" },
  { src: "/assets/logos/laravel.svg", name: "Laravel" },
  { src: "/assets/logos/openai.svg", name: "OpenAI" },
  { src: "/assets/logos/php.svg", name: "PHP" },
  { src: "/assets/logos/power-bi.svg", name: "Power BI" },
  { src: "/assets/logos/shopify.svg", name: "Shopify" },
  { src: "/assets/logos/piwik.png", name: "Piwik pro" },
  { src: "/assets/logos/sql-database-generic.svg", name: "SQL Database" },
  { src: "/assets/logos/visual-studio-code.svg", name: "Visual Studio Code" },
  { src: "/assets/logos/vscode.png", name: "Visual Studio" },
  { src: "/assets/logos/vue.svg", name: "Vue" },
  { src: "/assets/logos/html.png", name: "HTML" },
  { src: "/assets/logos/css.png", name: "CSS" },
  { src: "/assets/logos/figma.png", name: "Figma" },
  { src: "/assets/logos/react.png", name: "React" },
  { src: "/assets/logos/wp.png", name: "WordPress" },
  { src: "/assets/logos/windows.svg", name: "Microsoft 365" },
  { src: "/assets/logos/wix.svg", name: "Wix" },
];

export default function ToolsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 bg-white overflow-x-hidden" data-aos="fade-up">
      <div
        className="flex items-center gap-8 animate-marquee w-max"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {tools.concat(tools).map((tool, index) => (
          <div
            key={`${tool.src}-${index}`}
            className="relative group flex shrink-0 items-center cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={tool.src}
              alt={tool.name}
              className="h-12 w-auto transition-transform duration-300 ease-out group-hover:scale-125"
              loading="lazy"
              width={48}
              height={48}
            />
            <GlassPane className="absolute bottom-full left-1/2 mb-3 -translate-x-1/2 translate-y-2 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap opacity-0 scale-95 pointer-events-none transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 rounded-lg shadow-lg z-50">
              {tool.name}
            </GlassPane>
          </div>
        ))}
      </div>
    </section>
  );
}
