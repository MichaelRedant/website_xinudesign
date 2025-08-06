export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <video
        src="/assets/video/ai_video.mp4"
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative z-10 flex flex-col items-center px-4 text-center text-white"
        data-aos="fade-up"
      >
        <img
          src="/assets/img/profile.jpg"
          alt="Michaël Redant"
          className="w-32 h-32 mb-6 rounded-full shadow-lg object-cover animate-float"
        />
        <h1 className="text-4xl font-bold md:text-6xl">Michaël Redant</h1>
        <p className="mt-4 text-xl md:text-S2xl">
          Marketeer &amp; Webdeveloper
        </p>
        <a
          href="#contact"
          className="px-8 py-3 mt-6 text-lg font-medium text-white transition-transform bg-blue-600 rounded-full hover:scale-105"
        >
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
}
