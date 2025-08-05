export default function Footer() {
  return (
    <footer className="px-4 py-8 text-gray-200 bg-gray-900 animate-fadeInUp">
      <div className="flex flex-col items-center max-w-5xl mx-auto space-y-4 md:flex-row md:justify-between md:space-y-0">
        <span>© {new Date().getFullYear()} Xinudesign</span>
        <div className="flex items-center space-x-4">
          <a href="mailto:info@xinudesign.be" className="hover:underline">
            info@xinudesign.be
          </a>
          <a href="https://linkedin.com" className="hover:underline">
            LinkedIn
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
