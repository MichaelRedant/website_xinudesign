import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ToolsMarquee from "./components/ToolsMarquee";
import NewSection from "./components/NewSection";
import Specializations from "./components/Specializations";
import ProjectSection from "./components/ProjectSection";
import CvSection from "./components/CvSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: false });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <ToolsMarquee />
      <NewSection />
      <Specializations />
      <ProjectSection />
      <CvSection />
      <Footer />
    </>
  );
}
