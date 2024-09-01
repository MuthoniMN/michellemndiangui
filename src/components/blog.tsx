import { Badge } from "./ui/badge";
import Image from "next/image";
import { TBlog } from "../types/blogs";

export default function Blog(props: TBlog){
  return (
    <div className="grid gap-1 items-center">
      <Image src={props.img} alt={props.title} width={300} height={300} className="mx-auto"/>
      <h3 className="text-xl font-bold">{props.title}</h3>
      <p className="text-muted-foreground">
        {props.description}
      </p>
      <div className="flex gap-2">
      {props.categories.map(category => (<Badge key={category} variant="secondary">{category}</Badge>))}
      </div>
    </div>
  )
}
