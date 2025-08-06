export default function CvSection() {
  return (
    <section className="px-4 py-24 bg-white animate-fadeInUp">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">CV</h2>
        <p className="mt-4 text-gray-700">
          Beknopte samenvatting van ervaring en vaardigheden.
        </p>
        <a
          href="/cv.pdf"
          className="inline-block px-6 py-3 mt-6 text-white transition-transform bg-blue-600 rounded hover:bg-blue-700 hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
