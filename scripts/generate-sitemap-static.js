import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const baseUrl = "https://www.xinudesign.be";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const date = new Date().toISOString().split("T")[0];

const staticRoutes = ["/", "/cv", "/contact", "/persona-vault"];

const entries = staticRoutes.map((route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`).join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

await fs.writeFile(path.join(__dirname, "../public/sitemap-static.xml"), xml);
console.log("✅ sitemap-static.xml gegenereerd");
