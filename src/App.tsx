import { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import RegionSection from "./components/RegionSection";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";


const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Cv = lazy(() => import("./pages/Cv"));
const PersonaVault = lazy(() => import("./pages/PersonaVault"));
const LokaleSeoPage = lazy(() => import("./pages/LokaleSeoPage"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const SeoSea = lazy(() => import("./pages/SeoSea"));
const DataStrategy = lazy(() => import("./pages/DataStrategy"));
const Webdesign = lazy(() => import("./pages/Webdesign"));
const Webdevelopment = lazy(() => import("./pages/Webdevelopment"));
const UiUx = lazy(() => import("./pages/UiUx"));
const LokaleSeo = lazy(() => import("./pages/LokaleSeo"));

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <div aria-hidden className="h-[4.5rem]" /> {/* spacer = zelfde hoogte als header */}
      <div className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/persona-vault" element={<PersonaVault />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/diensten/seo-sea" element={<SeoSea />} />
            <Route
              path="/diensten/data-gedreven-strategie"
              element={<DataStrategy />}
            />
            <Route path="/diensten/webdesign" element={<Webdesign />} />
            <Route
              path="/diensten/webdevelopment"
              element={<Webdevelopment />}
            />
            <Route path="/diensten/ui-ux" element={<UiUx />} />
            <Route path="/diensten/lokale-seo" element={<LokaleSeo />} />
            <Route path="/diensten/:city" element={<LokaleSeoPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </div>
      <RegionSection />
      <Footer />
    </div>
  );
}
