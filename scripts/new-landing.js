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

let generated = "";
try {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY niet ingesteld");
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Je schrijft overtuigende marketingteksten in het Nederlands.",
        },
        {
          role: "user",
          content: `Schrijf drie unieke paragrafen over webdevelopment, adverteren via Google en Meta en algemene online marketing voor kmo's in ${city}. Spreek de lezer direct aan en benadruk lokale groei.`,
        },
      ],
    }),
  });
  const data = await res.json();
  generated = data.choices?.[0]?.message?.content?.trim() ?? "";
} catch {
  generated = `**Sterke websites die scoren in ${city}.**\nWe bouwen snelle, SEO‑klare sites en versterken je zichtbaarheid met lokale signalen (NAP, reviews, GMB & structured data). Zo groei je organisch én met gerichte campagnes.`;
}

const content = tpl
  .replace(/{{City}}/g, city)
  .replace(/{{slug}}/g, slug)
  .replace(/YYYY-MM-DD/g, today)
  .replace(/{{content}}/, generated);

await fs.writeFile(destPath, content);
console.log(`✅ Landingspagina aangemaakt: ${destPath}`);
