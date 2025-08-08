import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const baseUrl = "https://www.xinudesign.be";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const date = new Date().toISOString();

const sitemapFiles = [
  "sitemap-static.xml",
  "sitemap-blogs.xml",
  "sitemap-landings.xml",
];

const entries = sitemapFiles
  .map(
    (file) => `
  <sitemap>
    <loc>${baseUrl}/${file}</loc>
    <lastmod>${date}</lastmod>
  </sitemap>
`,
  )
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;

await fs.writeFile(path.join(__dirname, "../public/sitemap.xml"), xml);
console.log("✅ sitemap.xml (index) gegenereerd");
