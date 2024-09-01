import Project from "./project";
import { TProject } from "../types/projects";
import { projects } from "../database/projects";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent projects that showcase my technical skills and problem-solving abilities.
            </p>
          </div>
        </div>
          <div className="flex flex-col max-h-[600px] px-4 flex-wrap justify-center space-y-4 gap-x-8">
            {
              projects.data.map((project: TProject) => (<Project key={project.title} title={project.title} description={project.description} languages={project.languages} githubLink={project.githubLink} demoLink={project.demoLink} type={project.type} />))
            }
          </div>
      </div>
    </section>
  )
}
