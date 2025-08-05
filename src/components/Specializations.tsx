const items = [
  {
    title: "Digitale marketing",
    description: "SEO, automation, advertising",
  },
  {
    title: "Webontwikkeling",
    description: "React, WordPress, Laravel",
  },
  {
    title: "AI-toepassingen",
    description: "Eigen GPT\u2019s, data-gedreven campagnes",
  },
  {
    title: "3D-printing",
    description: "X3DPrints als subdienst",
  },
];

export default function Specializations() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">Specialisaties</h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="p-6 border rounded-lg">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
