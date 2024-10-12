import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="mb-32" data-aos="zoom-in">
      <div className=" flex justify-center mb-7">
        <h1 className=" text-xl lg:text-2xl font-bold text-white">My Skills</h1>
      </div>
      <div className=" lg:p-2 lg:px-44 lg:mx-7">
        <div className="rounded-2xl lg:p-5 w-full">
          <div className=" text-center p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 m-auto gap-10 lg:p-4 p-1 lg:gap-y-20 place-items-center">
              <div className=" flex items-center justify-center flex-col">
                <TiHtml5 className="text-5xl text-[#f75421] duration-[0.3s] hover:scale-110" />

                <p className=" mt-1 font-sans text-white">HTML</p>
              </div>
              <div className=" flex items-center justify-center flex-col">
                <FaCss3Alt className="text-5xl text-[#2d53e5] duration-[0.3s] hover:scale-110" />

                <p className=" mt-1 font-sans text-white">CSS</p>
              </div>
              <div className=" flex items-center justify-center flex-col">
                <RiTailwindCssFill className="text-5xl text-[#00ffff] duration-[0.3s] hover:scale-110" />

                <p className=" mt-1 font-sans text-white">Tailwind</p>
              </div>
              <div className=" flex items-center justify-center flex-col">
                <FaReact className="text-5xl text-[#00d8ff] duration-[0.3s] hover:scale-110" />

                <p className=" mt-1 font-sans text-white">React</p>
              </div>

              <div className=" flex items-center justify-center flex-col">
                <SiJavascript className="text-5xl text-[#ffff00] duration-[0.3s] hover:scale-110" />

                <p className=" mt-1 font-sans text-white">JavaScript</p>
              </div>

              <div className=" flex items-center justify-center flex-col">
                <FaGitAlt className="text-5xl text-[#f4511e] duration-[0.3s] hover:scale-110" />

                <p className=" mt-1 font-sans text-white">Git</p>
              </div>
              <div className=" flex items-center justify-center flex-col">
                <FaGithub className="text-5xl text-white duration-[0.3s] hover:scale-110" />
                <p className=" mt-1 font-sans text-white">Git-Hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
