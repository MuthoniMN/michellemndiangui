import { Libre_Franklin } from 'next/font/google'

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

import Hero from "./hero-section"
import Projects from "./projects"
import Experience from "./experience"
import Blogs from "./blogs"
import Skills from "./skills"
import Contact from "./contact"

export function LandingPage() {
  return (
    <div className={"flex flex-col min-h-[100dvh]" + libre_franklin.className }>
      <main className="flex-1">
        <Hero />
        <Projects />
        <Blogs />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
