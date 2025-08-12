import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const LANDINGS_DIR = path.join(__dirname, "../src/content/landings");
const OUT_DIR = path.join(__dirname, "../public/assets/img/landingpages");

// palettes voor variatie per stad (SaaS-ish)
const PALETTES = [
  ["#2563eb", "#7c3aed"], // blue → purple
  ["#0ea5e9", "#6366f1"], // sky → indigo
  ["#06b6d4", "#3b82f6"], // cyan → blue
  ["#22c55e", "#14b8a6"], // green → teal
];

const WIDTH = 1200;
const HEIGHT = 630;

function pickPalette(key) {
  const i = Math.abs(hashCode(key)) % PALETTES.length;
  return PALETTES[i];
}
function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return h | 0;
}

function svgFor(city, gradStart, gradEnd, subtitle = "Webdesign • SEO • Ads") {
  // System font stack (veilig), wil je exact lettertype → embed @font-face met base64
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
  <circle cx="200" cy="100" r="120" fill="#ffffff15" filter="url(#glow)"/>
  <circle cx="${WIDTH - 160}" cy="${HEIGHT - 80}" r="160" fill="#00000010"/>

  <!-- content -->
  <g fill="#fff">
    <text x="80" y="350" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Ubuntu,Helvetica,Arial" font-weight="800" font-size="88">
      ${escapeXml(city)}
    </text>
    <text x="80" y="420" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Ubuntu,Helvetica,Arial" font-weight="600" font-size="36" opacity="0.95">
      ${escapeXml(subtitle)}
    </text>
    <text x="80" y="${HEIGHT - 80}" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,Ubuntu,Helvetica,Arial" font-weight="600" font-size="28" opacity="0.9">
      xinudesign.be
    </text>
  </g>
</svg>`;
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function ensureDir(p) {
  try { await fs.mkdir(p, { recursive: true }); } catch {}
}

async function main() {
  await ensureDir(OUT_DIR);
  const files = await fs.readdir(LANDINGS_DIR);

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const mdPath = path.join(LANDINGS_DIR, file);
    const raw = await fs.readFile(mdPath, "utf8");
    const { data } = matter(raw);

    const city = data.city || "";
    const slug = data.slug || file.replace(/\.md$/, "");
    if (!city || !slug) continue;

    // doelpad (zoals je frontmatter verwacht)
    const targetRel = `/assets/img/landingpages/${slug}.png`;
    const targetAbs = path.join(OUT_DIR, `${slug}.png`);

    // overslaan als er al een custom image bestaat
    try {
      await fs.access(targetAbs);
      continue; // bestaat al
    } catch {}

    const [start, end] = pickPalette(slug);
    const svg = svgFor(city, start, end);

    const png = await sharp(Buffer.from(svg))
      .png({ quality: 90 })
      .toBuffer();
    await fs.writeFile(targetAbs, png);

    // optioneel: frontmatter automatisch aanvullen met image als het ontbreekt
    if (!data.image) {
      const updated = raw.replace(
        /(?<=\n---\n[\s\S]*?)(\n---)/,
        `image: "${targetRel}"$1`,
      );
      await fs.writeFile(mdPath, updated, "utf8");
    }

    console.log(`✅ Image gegenereerd voor ${city}: ${targetRel}`);
  }

  console.log("Klaar.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
