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
 * Wrap vlakke tekst op X breedte in tspan-regels.
 * We houden het simpel: bepalen van max chars per regel op basis van fontSize en beschikbare breedte.
 */
function wrapLines(text, maxWidthPx, fontSizePx, approxCharWidth = 0.55) {
  // ruwe schatting: charWidth ≈ fontSize * approxCharWidth
  const maxChars = Math.max(10, Math.floor(maxWidthPx / (fontSizePx * approxCharWidth)));
  const words = (text || "").trim().split(/\s+/);
  const lines = [];
  let line = "";

  for (const w of words) {
    if ((line + " " + w).trim().length <= maxChars) {
      line = (line ? line + " " : "") + w;
    } else {
      if (line) lines.push(line);
      // woord dat op zich langer is dan maxChars? hard-split
      if (w.length > maxChars) {
        let idx = 0;
        while (idx < w.length) {
          lines.push(w.slice(idx, idx + maxChars));
          idx += maxChars;
        }
        line = "";
      } else {
        line = w;
      }
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 5); // veiligheidslimiet
}

/** SVG generator voor blog OG */
function svgForBlog({ title, subtitle, author, gradStart, gradEnd }) {
  // layout-constanten
  const paddingX = 80;
  const titleY = 260;
  const titleFont = 74;
  const subY = titleY + 120;
  const subFont = 34;
  const authorY = HEIGHT - 80;
  const authorFont = 28;
  const contentWidth = WIDTH - paddingX * 2;

  const titleLines = wrapLines(title, contentWidth, titleFont, 0.53);
  const subLines = wrapLines(subtitle || "", contentWidth, subFont, 0.6);

  // bouw <tspan>-regels
  const titleTspans = titleLines
    .map((l, i) => `<tspan x="${paddingX}" dy="${i === 0 ? 0 : titleFont + 8}">${escapeXml(l)}</tspan>`)
    .join("");
  const subTspans = subLines
    .map((l, i) => `<tspan x="${paddingX}" dy="${i === 0 ? 0 : subFont + 6}">${escapeXml(l)}</tspan>`)
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
    <text x="${paddingX}" y="${authorY}" font-weight="600" font-size="${authorFont}" opacity="0.9">
      ${escapeXml(author || "Xinudesign")}
    </text>
    <text x="${WIDTH - paddingX}" y="${authorY}" font-weight="600" font-size="${authorFont}" opacity="0.9" text-anchor="end">
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

    // Skip als er al iets is? We genereren gewoon opnieuw voor voorspelbaar resultaat.
    await fs.writeFile(outSvgAbs, svg, "utf8");

    // PNG afgeleide (handig voor social scrapers die geen SVG slikken)
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
