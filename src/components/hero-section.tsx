import Link from "next/link"

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
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Resume
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
          </div>
        </section>

  )
}
