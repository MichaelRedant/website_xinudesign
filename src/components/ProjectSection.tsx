import { useState } from "react";
import GlassPane from "./GlassPane";
import Modal from "./Modal";

interface Project {
  title: string;
  shortDescription: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Persona Vault",
    shortDescription: "Placeholdertekst over dit subdomeinproject.",
    description:
      "Een moderne tool waarmee je persona's veilig kan beheren en delen.",
    link: "https://personavault.xinudesign.be",
  },
  {
    title: "Xinudesign Website",
    shortDescription: "Deze website toont mijn diensten en stijl.",
    description:
      "Portfolio site gebouwd met React, Tailwind en een vleugje futurisme.",
    link: "https://xinudesign.be",
  },
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      className="px-4 py-24 bg-gradient-to-b from-white to-blue-50"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Projecten</h2>
        <div className="grid max-w-5xl gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <GlassPane
              key={project.title}
              className="p-6 transition-transform cursor-pointer hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.shortDescription}</p>
            </GlassPane>
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <h3 className="text-2xl font-semibold">{selectedProject.title}</h3>
          <p className="mt-4 text-gray-700">{selectedProject.description}</p>
          <a
            href={selectedProject.link}
            className="inline-block mt-6 text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            Bekijk project
          </a>
        </Modal>
      )}
    </section>
  );
}
