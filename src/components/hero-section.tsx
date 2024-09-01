import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero(){
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6">
              <div className="flex flex-col justify-center items-center space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Michelle Ndiangui</h1>
                  <h2 className="text-xl font-medium text-muted-foreground">Software Engineer</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I'm a passionate software engineer with a strong background in full-stack web development. I love
                    building innovative and user-friendly applications that solve real-world problems.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>
                    <Link
                      href="#"
                      prefetch={false}
                    >
                      View Resume
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <Link
                      href="#contact"
                      prefetch={false}
                    >
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
          </div>
        </section>

  )
}
