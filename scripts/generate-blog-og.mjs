import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Paden */
const BLOGS_DIR = path.join(__dirname, "../src/content/blogs");
const OUT_DIR = path.join(__dirname, "../public/assets/img/blogs");

/** OG-afmetingen */
const WIDTH = 1200;
const HEIGHT = 630;

/** Paletten (SaaS-ish), consistent met landings */
const PALETTES = [
  ["#2563eb", "#7c3aed"], // blue → purple
  ["#0ea5e9", "#6366f1"], // sky → indigo
  ["#06b6d4", "#3b82f6"], // cyan → blue
  ["#22c55e", "#14b8a6"], // green → teal
];

/** Helpers */
function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return h | 0;
}
function pickPalette(key) {
  const i = Math.abs(hashCode(key)) % PALETTES.length;
  return PALETTES[i];
}
function escapeXml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Wrap vlakke tekst op X breedte in tspan-regels met optionele clamp + ellipsis.
 */
function wrapLines(
  text,
  maxWidthPx,
  fontSizePx,
  approxCharWidth = 0.60,
  maxLines = 3,
  addEllipsis = true
) {
  const maxChars = Math.max(10, Math.floor(maxWidthPx / (fontSizePx * approxCharWidth)));
  const words = String(text || "").trim().split(/\s+/).filter(Boolean);
  const lines = [];
  let i = 0;

  while (i < words.length && lines.length < maxLines) {
    let line = words[i++];
    // vul de huidige regel
    while (i < words.length && (line + " " + words[i]).length <= maxChars) {
      line += " " + words[i++];
    }

    // laatste regel → clamp met ellipsis
    if (i < words.length && lines.length === maxLines - 1 && addEllipsis) {
      let remainder = "";
      let j = i;
      while (
        j < words.length &&
        (line + " " + (remainder ? remainder + " " : "") + words[j]).length <= maxChars - 1
      ) {
        remainder = (remainder + " " + words[j]).trim();
        j++;
      }
      if (remainder) line = (line + " " + remainder).trim();
      if (line.length >= maxChars) line = line.slice(0, Math.max(0, maxChars - 1)).trim();
      lines.push(line + "…");
      return lines;
    }

    lines.push(line);
  }

  return lines.slice(0, maxLines);
}


/** SVG generator voor blog OG */
function svgForBlog({ title, subtitle, author, gradStart, gradEnd }) {
  // layout-constanten
  const paddingX = 80;
  const titleY = 260;
  const titleFont = 74;
  const titleLineGap = 8;

  const subFont = 34;
  const subLineGap = 6;

  const contentWidth = WIDTH - paddingX * 2;

  // Bold 900 titels zijn visueel breder → iets hogere approxCharWidth
  const TITLE_MAX_LINES = 3;
  const SUB_MAX_LINES = 3;

  const titleLines = wrapLines(title, contentWidth, titleFont, 0.60, TITLE_MAX_LINES, true);
  const subLines = wrapLines(subtitle || "", contentWidth, subFont, 0.58, SUB_MAX_LINES, true);

  // Hoogte die de titel inneemt
  const titleBlockHeight =
    titleLines.length * (titleFont + titleLineGap) - titleLineGap;

  // 🔧 BELANGRIJK: subY dynamisch (geen overlap met meeregelende titel)
  const subY = titleY + titleBlockHeight + 24; // extra lucht

  // Footerpositie: onderaan, maar mee opschuiven indien nodig
  const authorBase = subLines.length
    ? subY + subLines.length * (subFont + subLineGap)
    : titleY + titleBlockHeight;
  const authorY = Math.min(HEIGHT - 80, authorBase + 80);

  // <tspan>-regels bouwen
  const titleTspans = titleLines
    .map((l, i) => `<tspan x="${paddingX}" dy="${i === 0 ? 0 : titleFont + titleLineGap}">${escapeXml(l)}</tspan>`)
    .join("");
  const subTspans = subLines
    .map((l, i) => `<tspan x="${paddingX}" dy="${i === 0 ? 0 : subFont + subLineGap}">${escapeXml(l)}</tspan>`)
    .join("");

  return `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${gradStart}"/>
      <stop offset="100%" stop-color="${gradEnd}"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="30" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- achtergrond -->
  <rect width="100%" height="100%" fill="url(#g)"/>

  <!-- abstracte blobs -->
  <circle cx="200" cy="120" r="140" fill="#ffffff15" filter="url(#glow)"/>
  <circle cx="${WIDTH - 180}" cy="${HEIGHT - 80}" r="180" fill="#00000012"/>

  <!-- content -->
  <g fill="#fff" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Ubuntu,Helvetica,Arial">
    <!-- label -->
    <rect x="${paddingX}" y="120" rx="10" ry="10" width="240" height="46" fill="#ffffff22"/>
    <text x="${paddingX + 16}" y="152" font-weight="700" font-size="24" opacity="0.95">Xinudesign • Blog</text>

    <!-- title -->
    <text x="${paddingX}" y="${titleY}" font-weight="900" font-size="${titleFont}">
      ${titleTspans}
    </text>

    <!-- subtitle -->
    ${
      subLines.length
        ? `<text x="${paddingX}" y="${subY}" font-weight="600" font-size="${subFont}" opacity="0.95">
      ${subTspans}
    </text>`
        : ""
    }

    <!-- footer -->
    <text x="${paddingX}" y="${authorY}" font-weight="600" font-size="28" opacity="0.9">
      ${escapeXml(author || "Xinudesign")}
    </text>
    <text x="${WIDTH - paddingX}" y="${authorY}" font-weight="600" font-size="28" opacity="0.9" text-anchor="end">
      xinudesign.be
    </text>
  </g>
</svg>`;
}

/** FS helpers */
async function ensureDir(p) {
  try { await fs.mkdir(p, { recursive: true }); } catch {}
}

async function main() {
  await ensureDir(OUT_DIR);
  const files = await fs.readdir(BLOGS_DIR);

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const mdPath = path.join(BLOGS_DIR, file);
    const raw = await fs.readFile(mdPath, "utf8");
    const parsed = matter(raw);
    const data = parsed.data || {};

    const title = data.title || "";
    const excerpt = data.excerpt || data.description || "";
    const author = data.author || "Xinudesign";
    const slug = data.slug || file.replace(/\.md$/, "");

    if (!title || !slug) {
      console.warn(`⏭️  Skipping ${file} (missing title or slug)`);
      continue;
    }

    const [start, end] = pickPalette(slug);
    const svg = svgForBlog({
      title,
      subtitle: excerpt,
      author,
      gradStart: start,
      gradEnd: end,
    });

    const outSvgAbs = path.join(OUT_DIR, `${slug}.svg`);
    const outPngAbs = path.join(OUT_DIR, `${slug}.png`);
    const targetRelSvg = `/assets/img/blogs/${slug}.svg`;
    const targetRelPng = `/assets/img/blogs/${slug}.png`;

    // (Re)schrijven
    await fs.writeFile(outSvgAbs, svg, "utf8");

    // PNG afgeleide (voor scrapers die geen SVG slikken)
    const png = await sharp(Buffer.from(svg)).png({ quality: 92 }).toBuffer();
    await fs.writeFile(outPngAbs, png);

    // Frontmatter auto-aanvullen als image ontbreekt
    if (!data.image) {
      const fmStart = raw.indexOf("---");
      const fmEnd = raw.indexOf("---", fmStart + 3);
      if (fmStart === 0 && fmEnd > 0) {
        const before = raw.slice(0, fmEnd + 3);
        const after = raw.slice(fmEnd + 3);
        const injection =
          before.endsWith("\n") ? `image: "${targetRelPng}"\n` : `\nimage: "${targetRelPng}"\n`;
        const updated = before.replace(/---\s*$/, `${injection}---`) + after;
        await fs.writeFile(mdPath, updated, "utf8");
      }
    }

    console.log(`✅ OG gegenereerd: ${targetRelSvg} + ${targetRelPng}`);
  }

  console.log("🏁 Klaar.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
