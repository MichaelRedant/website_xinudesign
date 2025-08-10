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

let generatedContent = "";
let generatedFaqs = [];

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

          content: `Geef JSON met de keys 'content' en 'faqs'. 'content' bevat ongeveer 800 karakters verdeeld over drie paragrafen over webdevelopment, adverteren via Google en Meta en online marketing voor kmo's in ${city}. 'faqs' is een array met drie relevante veelgestelde vragen en antwoorden over deze diensten in ${city}.`,
        },
      ],
    }),
  });
  const data = await res.json();

  const parsed = JSON.parse(data.choices?.[0]?.message?.content ?? "{}");
  generatedContent = parsed.content?.trim() ?? "";
  generatedFaqs = Array.isArray(parsed.faqs) ? parsed.faqs : [];
} catch {
  generatedContent = `**Sterke websites die scoren in ${city}.**\nWe bouwen snelle, SEO‑klare sites en versterken je zichtbaarheid met lokale signalen (NAP, reviews, GMB & structured data). Zo groei je organisch én met gerichte campagnes.`;
  generatedFaqs = [
    {
      q: `Werken jullie ook op locatie in ${city}?`,
      a: "We werken remote als bijberoep.",
    },
    {
      q: `Hoe lang duurt een webproject in ${city}?`,
      a: "Gemiddeld 2–4 weken afhankelijk van de scope.",
    },
    {
      q: `Helpen jullie met lokale advertenties in ${city}?`,
      a: "Ja, we zetten gerichte Google- en Meta-campagnes op.",
    },
  ];
}

const faqYaml = generatedFaqs
  .map(
    (f) =>
      `  - q: "${f.q.replace(/"/g, '\\"')}"\n    a: "${f.a.replace(/"/g, '\\"')}"`,
  )
  .join("\n");

const content = tpl
  .replace(/{{City}}/g, city)
  .replace(/{{slug}}/g, slug)
  .replace(/YYYY-MM-DD/g, today)

  .replace(/{{content}}/, generatedContent)
  .replace(/{{faqs}}/, faqYaml);

await fs.writeFile(destPath, content);
console.log(`✅ Landingspagina aangemaakt: ${destPath}`);
