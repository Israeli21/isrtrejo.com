import ProjectCard from "../components/ProjectCard";
import { projects } from "../../server/data/projects";

import ProjectFolder from "../components/ProjectFolder";

// export function Projects() {
//   return (
//     <section id="projects" className="min-h-screen bg-black w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-white py-20">
//       <h2 className="text-4xl md:text-5xl font-bold mb-12">
//         My Projects
//       </h2>
//       <ProjectFolder projects={projects} />
//     </section>
//   )
// }

export function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        My Projects
      </h2>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}