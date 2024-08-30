import Link from "next/link"
import Image from "next/image"
import { Button } from "../components/ui/button"

export default function Navbar(){
  return (
    <header className="px-4 lg:px-6 mt-4 h-14 flex items-center">
        <Link href="#" className="flex w-[120px] h-[120px] items-center justify-center rounded-full" prefetch={false}>
          <Image src="/avatar.jpeg" alt="Michelle Ndiangui" width={90} height={90} className="w-[75px] h-[75px]" style={{ borderRadius: "50%" }}/>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#blogs" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blogs
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#work" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Experience
          </Link>
          <Link href="#education" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Education
          </Link>
          <Button>
            <Link href="#contact">
              Contact Michelle
            </Link>
          </Button>

        </nav>
      </header>

  )
}
