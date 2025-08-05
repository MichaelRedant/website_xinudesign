import Hero from "./components/Hero";
import Intro from "./components/Intro";
import NewSection from "./components/NewSection";
import Specializations from "./components/Specializations";
import ProjectSection from "./components/ProjectSection";
import CvSection from "./components/CvSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Intro />
      <NewSection />
      <Specializations />
      <ProjectSection />
      <CvSection />
      <Footer />
    </>
  );
}
