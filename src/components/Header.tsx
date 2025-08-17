import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { services as serviceLinks } from "../data/services";
import { AnimatePresence, motion } from "framer-motion";

const NAV = [
  { to: "/persona-vault", label: "Persona Vault" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/cv", label: "Over mij" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop hover/focus
  const servicesTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Framer-motion variants
  const dropIn = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } },
    exit: { opacity: 0, y: 6, transition: { duration: 0.12, ease: "easeIn" } },
  };

  const mobileIn = {
    hidden: { opacity: 0, y: -12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" } },
  };

  // helpers voor hover-intent (desktop)
  const openServices = () => {
    if (servicesTimer.current) window.clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    if (servicesTimer.current) window.clearTimeout(servicesTimer.current);
    servicesTimer.current = window.setTimeout(
      () => setServicesOpen(false),
      100,
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all
                  ${scrolled ? "backdrop-blur-md bg-white/75 border-white/40 shadow-sm" : "bg-white/90 border-transparent"}
                 `}
      style={{ height: "4.5rem" }} // h-18 equivalent (72px) voor gelijke hoogte
      role="banner"
    >
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 select-none h-full"
          aria-label="Ga naar home"
        >
          <img
            src="/assets/xinu.webp"
            alt=""
            className="h-10 w-auto md:h-12"
            draggable={false}
          />
          <span
            className={`text-2xl md:text-3xl font-extrabold tracking-wide transition-colors
                        ${scrolled ? "text-[#0362c8]" : "text-[#0a0f1c]"}
                       `}
          >
            XINUDESIGN
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {/* Services (dropdown) */}
          <li
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
            onFocus={openServices}
            onBlur={closeServices}
          >
            <button
              className={`flex items-center gap-1 py-2 font-medium transition-colors
                          ${scrolled ? "text-slate-800" : "text-slate-900"}
                          hover:text-[#2d7ff9]
                         `}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
            >
              Services
              <FaChevronDown
                className={`text-[13px] transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  id="services-menu"
                  variants={dropIn}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-0 mt-2 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white/95 shadow-xl backdrop-blur-sm"
                >
                  {serviceLinks.map(({ to, name }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        className="block px-4 py-2.5 text-sm text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Andere items */}
          {NAV.map(({ to, label }) => (
            <li key={to} className="h-[2.25rem] flex items-center">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative py-1 font-medium transition-colors
                   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all
                   hover:after:w-full after:bg-current
                   ${isActive ? "after:w-full text-[#2d7ff9]" : scrolled ? "text-slate-800" : "text-slate-900"}
                  `
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* Contact CTA */}
          <li>
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-semibold
                         text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow
                         hover:shadow-md hover:scale-[1.02] active:scale-100 transition-all"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          className="md:hidden p-2"
          onClick={() => setMenuOpen((s) => !s)}
        >
          {menuOpen ? (
            <FaTimes className="text-2xl text-slate-900" />
          ) : (
            <FaBars className="text-2xl text-slate-900" />
          )}
        </button>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileIn}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden absolute inset-x-0 top-full z-40 rounded-b-2xl border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-lg"
          >
            <div className="px-4 py-6">
              {/* Services (accordion) */}
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-2 font-semibold">
                  <span>Services</span>
                  <FaChevronDown className="transition-transform group-open:rotate-180" />
                </summary>
                <ul className="mt-2 space-y-1 pl-1">
                  {serviceLinks.map(({ to, name }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded px-3 py-2 text-sm text-slate-800 hover:bg-slate-50"
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>

              {/* andere links */}
              <ul className="mt-4 space-y-1">
                {NAV.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded px-3 py-2 font-medium text-slate-900 hover:bg-slate-50"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2">
                  <NavLink
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center rounded-xl px-4 py-2.5 font-semibold
                               text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow
                               hover:shadow-md hover:scale-[1.01] active:scale-100 transition-all"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
