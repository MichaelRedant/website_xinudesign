import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import PersonaVault from "./pages/PersonaVault";
import LokaleSeoPage from "./pages/LokaleSeoPage";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/persona-vault" element={<PersonaVault />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lokale-seo/:city" element={<LokaleSeoPage />} />
      </Routes>
      <Footer />
    </>
  );
}
