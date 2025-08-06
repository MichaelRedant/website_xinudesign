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
  { src: "/assets/logos/link-intact.svg", name: "Link" },
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
  return (
    <section className="py-24 bg-white animate-fadeInUp">
      <div className="overflow-x-hidden">
        <div className="flex items-center gap-8 animate-marquee w-max">
          {tools.concat(tools).map((tool, index) => (
            <div
              key={`${tool.src}-${index}`}
              className="relative group flex items-center"
            >
              <img src={tool.src} alt={tool.name} className="h-12 w-auto" />
              <GlassPane className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 -translate-y-1 px-3 py-1 text-xs text-gray-800 whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out pointer-events-none">
                {tool.name}
              </GlassPane>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
