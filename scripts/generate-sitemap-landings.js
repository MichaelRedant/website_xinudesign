import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const baseUrl = "https://www.xinudesign.be";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const landingsDir = path.join(__dirname, "../src/content/landings");

let entries = "";

try {
  const files = await fs.readdir(landingsDir);
  for (const file of files) {
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue;

    const slug = file.replace(/\.mdx?$/, "");
    const content = await fs.readFile(path.join(landingsDir, file), "utf8");
    const { data } = matter(content);

    if (!data.slug || !data.canonical) {
      console.warn(`⚠️ ${file} mist verplichte frontmatter (slug/canonical)`);
      continue;
    }

    const stats = await fs.stat(path.join(landingsDir, file));
    const lastmod = data.lastmod || stats.mtime.toISOString().split("T")[0];
    const loc = data.canonical || `${baseUrl}/lokale-seo/${slug}`;

    entries += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  }
} catch (err) {
  console.warn("⚠️ Geen landingsbestanden gevonden:", err.message);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

await fs.writeFile(path.join(__dirname, "../public/sitemap-landings.xml"), xml);
console.log("✅ sitemap-landings.xml gegenereerd");
