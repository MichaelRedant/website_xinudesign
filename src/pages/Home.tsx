import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import NewSection from "../components/NewSection";
import Specializations from "../components/Specializations";
import ProjectSection from "../components/ProjectSection";
import Seo from "../components/Seo";

const ToolsMarquee = lazy(() => import("../components/ToolsMarquee"));

const Home: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xinudesign",
    url: "https://www.xinudesign.be/",
    logo: "https://www.xinudesign.be/apple-touch-icon.png",
  };
  const toolsRef = useRef<HTMLDivElement | null>(null);
  const [showTools, setShowTools] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowTools(true);
        observer.disconnect();
      }
    });
    if (toolsRef.current) {
      observer.observe(toolsRef.current);
    }
    return () => observer.disconnect();
  }, []);
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
      <div ref={toolsRef}>
        {showTools && (
          <Suspense fallback={null}>
            <ToolsMarquee />
          </Suspense>
        )}
      </div>
      <NewSection />
      <Specializations />
      <ProjectSection />
    </>
  );
};

export default Home;
