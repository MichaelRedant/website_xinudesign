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
  color: string;
}

const ICON_SIZE = 48;

const tools: Tool[] = [
  { name: "Adobe", Icon: SiAdobe, color: "#FF0000" },
  {
    name: "Adobe After Effects",
    Icon: SiAdobeaftereffects,
    color: "#9999FF",
  },
  {
    name: "Adobe Illustrator",
    Icon: SiAdobeillustrator,
    color: "#FF9A00",
  },
  {
    name: "Adobe Photoshop",
    Icon: SiAdobephotoshop,
    color: "#31A8FF",
  },
  { name: "Fusion 360", Icon: SiAutodesk, color: "#0696D7" },
  { name: "Canva", Icon: SiCanva, color: "#00C4CC" },
  { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4" },
  { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#E37400" },
  { name: "Google Gemini", Icon: SiGoogle, color: "#4285F4" },
  { name: "Adobe InDesign", Icon: SiAdobeindesign, color: "#FF3366" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Shopify", Icon: SiShopify, color: "#7AB55C" },
  { name: "Piwik Pro", Icon: SiMatomo, color: "#3152A0" },
  { name: "SQL Database", Icon: SiMysql, color: "#4479A1" },
  { name: "Vue", Icon: SiVuedotjs, color: "#4FC08D" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "Wix", Icon: SiWix, color: "#0C6EFC" },
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
              color={tool.color}
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
