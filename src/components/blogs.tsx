import Blog from "./blog";
import { TBlog } from "../types/blogs";
import { blogs } from "../database/blogs"

export default function Blogs(){
  return (
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
            {blogs.data.map((blog: TBlog) => <Blog key={blog.title} title={blog.title} description={blog.description} img={blog.img} link={blog.link} categories={blog.categories} />)}
            </div>
        </div>
      </section>

)
}
