import { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import RegionSection from "./components/RegionSection";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Cv = lazy(() => import("./pages/Cv"));
const PersonaVault = lazy(() => import("./pages/PersonaVault"));
const LokaleSeoPage = lazy(() => import("./pages/LokaleSeoPage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <div className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/persona-vault" element={<PersonaVault />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/diensten/:city" element={<LokaleSeoPage />} />
          </Routes>
        </Suspense>
      </div>
      <RegionSection />
      <Footer />
    </div>
  );
}
