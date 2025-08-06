import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const baseUrl = "https://www.xinudesign.be";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, "../src/content/blogs");

let entries = "";

try {
  const files = await fs.readdir(blogDir);
  for (const file of files) {
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue;

    const slug = file.replace(/\.mdx?$/, "");
    const content = await fs.readFile(path.join(blogDir, file), "utf8");
    const { data } = matter(content);
    const lastmod = data.date || new Date().toISOString().split("T")[0];

    entries += `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }
} catch (err) {
  console.warn("⚠️ Geen blogbestanden gevonden:", err.message);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

await fs.writeFile(path.join(__dirname, "../public/sitemap-blogs.xml"), xml);
console.log("✅ sitemap-blogs.xml gegenereerd");
