import { Badge } from "./ui/badge";

export default function Skills() {
  const skills = [
    {
      category: "Front-end",
      skills: ["HTML/CSS", "JS", "ReactJS", "NextJS", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Back-end",
      skills: ["Node", "Express", "NestJS","Python", "PHP"]
    },
    {
      category: "Databases and ORMs",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "TypeORM", "Mongoose", "Prisma"]
    },
    {
      category: "Testing",
      skills: ["Jest", "Pytest", "Postman"]
    },
    {
      category: "Documentation",
      skills: ["Postman", "Gitbook", "Mintlify", "Swagger"]
    }
  ]
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have a diverse set of technical skills that I have developed over the years, allowing me to tackle a
              wide range of web development projects.
            </p>
          </div>
        </div>
          <div className="flex flex-col max-h-[250px] w-full flex-wrap px-8 justify-center space-y-4">
          { skills.map(skill => ( 
             <div key={skill.category} className="grid gap-1">
              <h3 className="text-xl font-bold">{skill.category}</h3>
              <div className="flex gap-2">
                { skill.skills.map(val => ( <Badge key={val} variant="secondary">{val}</Badge>))}
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  )
}
