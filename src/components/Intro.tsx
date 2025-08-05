const services = [
  {
    title: "Webdesign & development",
    description: "Responsive sites, webshops en op maat gemaakte apps",
    icon: "/assets/logos/css.svg",
  },
  {
    title: "SEO & marketing",
    description: "Zoekmachineoptimalisatie, campagnes en analytics",
    icon: "/assets/logos/google-analytics.svg",
  },
  {
    title: "Branding & design",
    description: "Logo's, huisstijlen en visuele content",
    icon: "/assets/logos/adobe-illustrator.svg",
  },
  {
    title: "Training & support",
    description: "Workshops en begeleiding voor teams",
    icon: "/assets/logos/openai.svg",
  },
];

export default function Intro() {
  return (

    <section className="px-4 py-16 mx-auto text-center max-w-5xl animate-fadeInUp">

      <h2 className="text-3xl font-semibold">Xinudesign in een notendop</h2>
      <p className="mt-4 text-gray-700">
        Van strategie tot uitvoering: alle digitale diensten onder \u00e9\u00e9n
        dak.
      </p>
      <div className="grid gap-6 mt-12 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 transition-transform bg-white border rounded-lg hover:-translate-y-1"
          >
            <img src={service.icon} alt="" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-medium">{service.title}</h3>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
