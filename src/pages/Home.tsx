import Hero from "../components/Hero";
import Intro from "../components/Intro";
import ToolsMarquee from "../components/ToolsMarquee";
import NewSection from "../components/NewSection";
import Specializations from "../components/Specializations";
import ProjectSection from "../components/ProjectSection";
import Seo from "../components/Seo";

const Home: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xinudesign",
    url: "https://www.xinudesign.be/",
    logo: "https://www.xinudesign.be/apple-touch-icon.png",
  };
  return (
    <>
      <Seo
        title="Webdevelopment & Marketing | Xinudesign"
        description="Freelance webdeveloper en marketeer voor kmo's in Vlaanderen. Websites die scoren in Google."
        canonical="https://www.xinudesign.be/"
        jsonLd={jsonLd}
      />
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
