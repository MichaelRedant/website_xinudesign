import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const slug = process.argv[2];
if (!slug) {
  console.error("Gebruik: node scripts/new-landing.js <slug>");
  process.exit(1);
}

const city = slug
  .split("-")
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatePath = path.join(__dirname, "templates/landing.md");
const destPath = path.join(__dirname, "../src/content/landings", `${slug}.md`);

const tpl = await fs.readFile(templatePath, "utf8");
const today = new Date().toISOString().split("T")[0];
const content = tpl
  .replace(/{{City}}/g, city)
  .replace(/{{slug}}/g, slug)
  .replace(/YYYY-MM-DD/g, today);

await fs.writeFile(destPath, content);
console.log(`✅ Landingspagina aangemaakt: ${destPath}`);
