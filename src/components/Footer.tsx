import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/michael-redant",
    color: "text-primary hover:text-hover",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/michael-redant",
    color: "text-text hover:text-hover",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/michael-redant",
    color: "text-secondary hover:text-hover",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/michael-redant",
    color: "text-blue-700 hover:text-blue-900",
  },
];

export default function Footer() {
  return (
    <footer className="px-4 py-8 text-gray-200 bg-gray-900" data-aos="fade-up">
      <div className="flex flex-col items-center max-w-5xl mx-auto space-y-4 md:flex-row md:justify-between md:space-y-0">
        <span>© {new Date().getFullYear()} Xinudesign</span>
        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
          <a href="mailto:info@xinudesign.be" className="hover:underline">
            info@xinudesign.be
          </a>
          {socialLinks.map(({ name, icon: Icon, url, color }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={color}
            >
              <span className="sr-only">{name}</span>
              <Icon className="w-5 h-5" />
            </a>
          ))}
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
