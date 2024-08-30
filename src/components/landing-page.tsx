import { Libre_Franklin } from 'next/font/google'

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

import Hero from "./hero-section"
import { Badge } from "@/components/ui/badge"

export function LandingPage() {
  return (
    <div className={"flex flex-col min-h-[100dvh]" + libre_franklin.className }>
      <main className="flex-1">
        <Hero />
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a diverse background in the tech industry, with experience in various roles and industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Software Engineer</h3>
                      <p className="text-muted-foreground">Acme Inc. | 2020 - Present</p>
                      <p className="text-muted-foreground">
                        Developed and maintained full-stack web applications using React, Node.js, and PostgreSQL.
                        Collaborated with cross-functional teams to deliver high-quality software solutions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Web Developer</h3>
                      <p className="text-muted-foreground">XYZ Corp. | 2018 - 2020</p>
                      <p className="text-muted-foreground">
                        Designed and developed responsive websites and web applications using HTML, CSS, and JavaScript.
                        Collaborated with designers and project managers to deliver engaging user experiences.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Intern</h3>
                      <p className="text-muted-foreground">Tech Startup | 2017 - 2018</p>
                      <p className="text-muted-foreground">
                        Gained hands-on experience in full-stack web development, participating in the development of a
                        SaaS platform using React, Node.js, and MongoDB.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Work Experience"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
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
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Ecommerce Platform</h3>
                  <p className="text-muted-foreground">
                    Developed a full-featured ecommerce platform using React, Node.js, and MongoDB. Implemented features
                    like shopping cart, checkout, and order management.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Task Management App</h3>
                  <p className="text-muted-foreground">
                    Built a task management application using React, Firebase, and Tailwind CSS. Implemented features
                    like task creation, assignment, and real-time updates.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Personal Portfolio</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Weather App</h3>
                  <p className="text-muted-foreground">
                    Built a weather application using React, OpenWeatherMap API, and Tailwind CSS. Implemented features
                    like real-time weather updates, location search, and responsive design.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">API</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blogs" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Blogs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out my latest blog posts on various topics related to web development and technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Mastering React Hooks</h3>
                  <p className="text-muted-foreground">
                    Dive into the world of React Hooks and learn how to leverage them to build more efficient and
                    maintainable web applications.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Hooks</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Optimizing Web Performance</h3>
                  <p className="text-muted-foreground">
                    Explore various techniques and best practices to optimize the performance of your web applications,
                    ensuring a smooth and fast user experience.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Performance</Badge>
                    <Badge variant="secondary">Optimization</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Intro to TypeScript</h3>
                  <p className="text-muted-foreground">
                    Learn the fundamentals of TypeScript and how it can improve the maintainability and scalability of
                    your web applications.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Serverless with AWS</h3>
                  <p className="text-muted-foreground">
                    Explore the world of serverless computing and how you can leverage AWS services to build scalable
                    and cost-effective web applications.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Serverless</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Cloud Computing</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a diverse set of technical skills that I've developed over the years, allowing me to tackle a
                  wide range of web development projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Front-end</h3>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
