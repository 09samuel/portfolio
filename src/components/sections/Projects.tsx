import ProjectCard from "../ProjectCard"
import { projectsData } from "../../data/projects"

export default function ProjectSection() {
  return (
    <section id="projects" className="w-full px-6 py-36 md:px-12 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">
        
        <div className="mb-12">
          <h2 className="inline-block font-heading text-3xl sm:text-4xl tracking-tighter text-black border-black pb-2">
            Projects
          </h2>
        </div>

        {/* Projects Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 auto-rows-fr">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}