import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/werk", label: "Werk" },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-5 py-4">
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors ${
            scrolled ? "text-[#0362c8]" : "text-black"
          }`}
        >
          XINUDESIGN
        </Link>
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative px-0 py-2 font-medium transition-colors hover:text-[#509ef1] before:content-[''] before:absolute before:left-0 before:-top-1 before:h-[2px] before:w-0 before:transition-all before:duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:before:w-full hover:after:w-full ${
                    scrolled
                      ? "text-gray-800 before:bg-[#0362c8] after:bg-[#0362c8]"
                      : "text-black before:bg-black after:bg-black"
                  } ${isActive ? "before:w-full after:w-full" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
