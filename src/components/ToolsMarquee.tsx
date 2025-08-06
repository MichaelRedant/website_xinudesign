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
  { src: "/assets/logos/autodesk.svg", name: "Autodesk" },
  { src: "/assets/logos/canva.svg", name: "Canva" },
  { src: "/assets/logos/css.svg", name: "CSS" },
  { src: "/assets/logos/google-ads.svg", name: "Google Ads" },
  { src: "/assets/logos/google-analytics.svg", name: "Google Analytics" },
  { src: "/assets/logos/google-gke.svg", name: "Google GKE" },
  { src: "/assets/logos/indesign.svg", name: "Adobe InDesign" },
  { src: "/assets/logos/laravel.svg", name: "Laravel" },
  { src: "/assets/logos/openai.svg", name: "OpenAI" },
  { src: "/assets/logos/php.svg", name: "PHP" },
  { src: "/assets/logos/power-bi.svg", name: "Power BI" },
  { src: "/assets/logos/shopify.svg", name: "Shopify" },
  { src: "/assets/logos/sql-database-generic.svg", name: "SQL Database" },
  { src: "/assets/logos/visual-studio-code.svg", name: "Visual Studio Code" },
  { src: "/assets/logos/vue.svg", name: "Vue" },
  { src: "/assets/logos/windows.svg", name: "Windows" },
  { src: "/assets/logos/wix.svg", name: "Wix" },
];

export default function ToolsMarquee() {
  const [paused, setPaused]     = useState(false);
  const [hoveredIdx, setIdx]    = useState<number | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      {/* x verbergen → geen scrollbar, y zichtbaar → tooltip kan uitsteken */}
      <div className="overflow-x-hidden overflow-y-visible">
        <div
          className="flex items-center gap-14 w-max animate-marquee"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {tools.concat(tools).map((t, i) => (
            <div
              key={`${t.src}-${i}`}
              className="relative flex items-center justify-center"
              onMouseEnter={() => { setPaused(true);  setIdx(i);   }}
              onMouseLeave={() => { setPaused(false); setIdx(null); }}
            >
              {/* ① logo vergroot; parent div laat voldoende ruimte */}
              <img
                src={t.src}
                alt={t.name}
                className={`h-12 w-auto transition-transform duration-300 ${
                  hoveredIdx === i ? 'scale-125' : ''
                }`}
              />

              {/* ② tooltip boven logo  */}
              {hoveredIdx === i && (
                <GlassPane className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-1.5 text-sm text-white dark:text-white whitespace-nowrap z-[999] animate-fadeIn">
                  {t.name}
                </GlassPane>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}