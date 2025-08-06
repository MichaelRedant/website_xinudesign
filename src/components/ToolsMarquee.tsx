const logos = [
  "/assets/logos/adobe.svg",
  "/assets/logos/adobe-after-effects.svg",
  "/assets/logos/adobe-illustrator.svg",
  "/assets/logos/adobe-photoshop.svg",
  "/assets/logos/autodesk.svg",
  "/assets/logos/canva.svg",
  "/assets/logos/css.svg",
  "/assets/logos/google-ads.svg",
  "/assets/logos/google-analytics.svg",
  "/assets/logos/google-gke.svg",
  "/assets/logos/indesign.svg",
  "/assets/logos/laravel.svg",
  "/assets/logos/link-intact.svg",
  "/assets/logos/openai.svg",
  "/assets/logos/php.svg",
  "/assets/logos/power-bi.svg",
  "/assets/logos/shopify.svg",
  "/assets/logos/sql-database-generic.svg",
  "/assets/logos/visual-studio-code.svg",
  "/assets/logos/vue.svg",
  "/assets/logos/windows.svg",
  "/assets/logos/wix.svg",
];

export default function ToolsMarquee() {
  return (
    <section className="py-24 bg-white animate-fadeInUp">
      <div className="overflow-hidden">
        <div className="flex items-center gap-8 animate-marquee w-max">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt="" className="h-12 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
