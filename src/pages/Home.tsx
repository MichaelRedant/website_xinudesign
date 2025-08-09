import Hero from "../components/Hero";
import Intro from "../components/Intro";
import ToolsMarquee from "../components/ToolsMarquee";
import NewSection from "../components/NewSection";
import Specializations from "../components/Specializations";
import ProjectSection from "../components/ProjectSection";
import RegionSection from "../components/RegionSection";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Intro />
      <ToolsMarquee />
      <NewSection />
      <Specializations />
      <ProjectSection />

    </>
  );
};

export default Home;
