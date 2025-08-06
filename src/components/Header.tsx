import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  /* { to: "/", label: "Home" },
  { to: "/about", label: "Over" },
  { to: "/services", label: "Services" },
  { to: "/werk", label: "Werk" }, */
  { to: "/cv", label: "Mijn cv" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-8 py-6">
        {/* ─────────────── Logo + tekst samen ─────────────── */}
        <Link to="/" className="flex items-center gap-3 select-none">
          <img
            src="/assets/xinu.png"
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

        {/* ─────────────── Navigatie ─────────────── */}
        <ul className="hidden md:flex gap-12">
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
      </div>
    </nav>
  );
}
