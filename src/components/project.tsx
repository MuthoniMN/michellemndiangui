import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { TProject } from "../types/projects"

const Project = (props: TProject) => {
  const { title, description, languages, githubLink, demoLink } = props
  return  (
    <div className="grid w-[50%] gap-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
      <div className="flex gap-2">
      {
        languages && languages.map(lang => (<Badge key={lang}>{lang}</Badge>))
      }
      </div>
      <div className="flex gap-2 w-full justify-between">
        <div className="flex gap-2">
          <Button variant="outline">
            <a href={githubLink} className="text-2xl">
              <FaGithub />
            </a>
          </Button>
          <Button variant="outline">
            <a href={demoLink} className="text-2xl">
              <FaGlobe />
            </a>
          </Button>
        </div>
        <Button>
          <Link href={demoLink}>
            <span className="flex items-center justify-between gap-2">View Preview<GoArrowUpRight className="text-2xl font-bold" /></span> 
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Project;
