import type { IconType } from "react-icons";
import {
  SiAdobe,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAutodesk,
  SiCanva,
  SiCss3,
  SiFigma,
  SiGoogle,
  SiGoogleads,
  SiGoogleanalytics,
  SiHtml5,
  SiLaravel,
  SiMatomo,
  SiMysql,
  SiOpenai,
  SiPhp,
  SiReact,
  SiShopify,
  SiVuedotjs,
  SiWix,
  SiWordpress,
} from "react-icons/si";
import { useState } from "react";
import GlassPane from "./GlassPane";

interface Tool {
  name: string;
  Icon: IconType;
}

const ICON_SIZE = 48;

const tools: Tool[] = [
  { name: "Adobe", Icon: SiAdobe },
  { name: "Adobe After Effects", Icon: SiAdobeaftereffects },
  { name: "Adobe Illustrator", Icon: SiAdobeillustrator },
  { name: "Adobe Photoshop", Icon: SiAdobephotoshop },
  { name: "Fusion 360", Icon: SiAutodesk },
  { name: "Canva", Icon: SiCanva },
  { name: "Google Ads", Icon: SiGoogleads },
  { name: "Google Analytics", Icon: SiGoogleanalytics },
  { name: "Google Gemini", Icon: SiGoogle },
  { name: "Adobe InDesign", Icon: SiAdobeindesign },
  { name: "Laravel", Icon: SiLaravel },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "PHP", Icon: SiPhp },
  { name: "Shopify", Icon: SiShopify },
  { name: "Piwik Pro", Icon: SiMatomo },
  { name: "SQL Database", Icon: SiMysql },
  { name: "Vue", Icon: SiVuedotjs },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Figma", Icon: SiFigma },
  { name: "React", Icon: SiReact },
  { name: "WordPress", Icon: SiWordpress },
  { name: "Wix", Icon: SiWix },
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
            key={`${tool.name}-${index}`}
            className="relative group flex shrink-0 items-center cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <tool.Icon
              size={ICON_SIZE}
              className="tool-icon transition-transform duration-300 ease-out group-hover:scale-125"
              aria-label={tool.name}
              role="img"
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
