import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { services as serviceLinks } from "../data/services";

const navItems = [
  /* { to: "/", label: "Home" },
  { to: "/about", label: "Over" },
  { to: "/services", label: "Services" },
  { to: "/werk", label: "Werk" }, */
  { to: "/persona-vault", label: "Persona Vault" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/cv", label: "Mijn cv" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between max-w-[1400px] mx-auto px-4 md:px-8 py-6">
        {/* ─────────────── Logo + tekst samen ─────────────── */}
        <Link to="/" className="flex items-center gap-3 select-none">
          <img
            src="/assets/xinu.webp"
            alt="Xinudesign logo"
            className="h-12 w-auto"
            draggable={false}
          />
          <span
            className={`font-bold tracking-wide transition-colors ${
              scrolled ? "text-[#0362c8] text-3xl" : "text-black text-3xl"
            }`}
          >
            XINUDESIGN
          </span>
        </Link>

        {/* ─────────────── Mobile menu button ─────────────── */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <FaTimes
              className={`text-2xl ${scrolled ? "text-gray-800" : "text-black"}`}
            />
          ) : (
            <FaBars
              className={`text-2xl ${scrolled ? "text-gray-800" : "text-black"}`}
            />
          )}
        </button>

        {/* ─────────────── Navigatie desktop ─────────────── */}
        <ul className="hidden md:flex gap-12">
          <li className="relative group">
            <button
              className={`flex items-center gap-1 py-2 font-medium transition-colors ${
                scrolled ? "text-gray-800" : "text-black"
              } hover:text-[#509ef1]`}
            >
              Services
              <FaChevronDown className="text-sm transition-transform group-hover:rotate-180" />
            </button>
            <ul className="absolute left-0 mt-2 w-56 flex-col rounded-md bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-200">
              {serviceLinks.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative py-2 font-medium transition-colors
                   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all
                   before:absolute before:left-0 before:-top-1    before:h-[2px] before:w-0 before:transition-all
                   hover:before:w-full hover:after:w-full
                   ${
                     scrolled
                       ? "text-gray-800 before:bg-[#0362c8] after:bg-[#0362c8]"
                       : "text-black   before:bg-black     after:bg-black"
                   }
                   hover:text-[#509ef1] ${isActive ? "before:w-full after:w-full" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ─────────────── Mobile dropdown ─────────────── */}
        {menuOpen && (
          <ul
            className={`absolute top-full left-0 right-0 flex flex-col items-center gap-6 py-6 mt-2 rounded-b-xl shadow-lg backdrop-blur-md ${
              scrolled ? "bg-white/90" : "bg-white/80"
            }`}
          >
            <li className="w-full text-center">
              <span className="font-medium text-gray-800">Services</span>
              <ul className="mt-2 flex flex-col gap-2">
                {serviceLinks.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="text-gray-800"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-gray-800"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
