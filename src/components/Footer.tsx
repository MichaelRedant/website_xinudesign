export default function Footer() {
  return (
    <footer className="px-4 py-8 text-gray-200 bg-gray-900 animate-fadeInUp">
      <div className="flex flex-col items-center max-w-5xl mx-auto space-y-4 md:flex-row md:justify-between md:space-y-0">
        <span>© {new Date().getFullYear()} Xinudesign</span>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
          <a href="mailto:info@xinudesign.be" className="hover:underline">
            info@xinudesign.be
          </a>
          <a
            href="https://www.linkedin.com/in/michael-redant"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/michael-redant"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/michael-redant"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/michael-redant"
            className="hover:underline"
          >
            Facebook
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-white transition-transform bg-blue-600 rounded hover:bg-blue-700 hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
