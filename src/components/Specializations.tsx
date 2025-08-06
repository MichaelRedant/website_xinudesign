const items = [
  {
    title: "Digitale marketing",
    description: "SEO, automation, advertising",
    icon: "/assets/logos/google-analytics.svg",
  },
  {
    title: "Webontwikkeling",
    description: "React, WordPress, Laravel",
    icon: "/assets/logos/laravel.svg",
  },
  {
    title: "AI-toepassingen",
    description: "Eigen GPT\u2019s, data-gedreven campagnes",
    icon: "/assets/logos/power-bi.svg",
  },
  {
    title: "3D-printing",
    description: "X3DPrints als subdienst",
    icon: "/assets/logos/autodesk.svg",
  },
];

export default function Specializations() {
  return (
    <section className="px-4 py-24 bg-white" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">Specialisaties</h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 text-center transition-transform border rounded-lg hover:-translate-y-1"
            >
              <img src={item.icon} alt="" className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
