import { IoIosMail } from "react-icons/io";
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub, FaHashnode } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="p-8 text-center space-y-4">
      <h2 className="text-2xl font-bold">Have a project in mind?</h2>
      <p>Feel free to reach out to me here: </p>
      <div className="flex justify-center gap-2 text-2xl">
        <a href="mailto:ndianguimichelle@gmail.com" className="hover:text-[#9edce1]">
          <IoIosMail />
        </a>
        <a href="github.com/MuthoniMN" className="hover:text-[#9edce1]">
          <FaSquareGithub />
        </a>
        <a href="linkedin.com/in/michelle-ndiangui" className="hover:text-[#9edce1]">
          <FaLinkedin />
        </a>
        <a href="x.com/codebymitch" className="hover:text-[#9edce1]">
          <FaSquareXTwitter />
        </a>
        <a href="mitchcodes.hashnode.dev" className="hover:text-[#9edce1]">
          <FaHashnode />
        </a>
      </div>
    </section>
  );
}
