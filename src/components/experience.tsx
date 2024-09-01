export default function Experience(){
  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
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
                    <h3 className="text-xl font-bold">Web Developer</h3>
                    <p className="text-muted-foreground">Actron Ventures</p>
                    <p className="text-muted-foreground">
                      Designed and develop websites for local businesses 
                    </p>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </section>

  )
}
