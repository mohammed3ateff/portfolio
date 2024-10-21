import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  const [activeLink, setActiveLink] = useState("#");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <section className="min-h-screen flex flex-col justify-end z-40">
      <div className="bg-white h-[467px]">
        <div className="flex justify-center my-14 text-2xl md:text-5xl  relative">
          <div className="inline relative">
            Mohammed Atef
            <img
              src="https://cdn.prod.website-files.com/6517f6cdafa18ec4281f8b18/6543406c7f651b3fcb79d784_Group%20655.svg"
              loading="lazy"
              alt=""
              className="w-[100%] inline-block absolute bottom-[-40%] lg:bottom-[-55%] top-auto inset-x-[0%]"
            />
          </div>
        </div>
        <div className="px-4 lg:px-28 mt-5">
          <ul className="flex justify-center items-center font-medium p-3.5 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("#")}
                className={`block py-2 px-3 md:p-0 rounded md:bg-transparent  ${
                  activeLink === "#"
                    ? "text-blue-700 "
                    : "text-black  hover:text-blue-700 "
                }`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleLinkClick("#about")}
                className={`block py-2 px-3 md:p-0 rounded md:bg-transparent  ${
                  activeLink === "#about"
                    ? "text-blue-700 "
                    : "text-black  hover:text-blue-700 "
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => handleLinkClick("#skills")}
                className={`block py-2 px-3 md:p-0 rounded md:bg-transparent ${
                  activeLink === "#skills"
                    ? "text-blue-700 "
                    : "text-black  hover:text-blue-700 "
                }`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleLinkClick("#projects")}
                className={`block py-2 px-3 md:p-0 rounded md:bg-transparent  ${
                  activeLink === "#projects"
                    ? "text-blue-700 "
                    : "text-black  hover:text-blue-700 "
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className={`block py-2 px-3 md:p-0 rounded md:bg-transparent  ${
                  activeLink === "#contact"
                    ? "text-blue-700 "
                    : "text-black  hover:text-blue-700 "
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex justify-center items-center mt-10 space-x-4 lg:space-x-10 opacity-95">
            <div>
              <a href="https://github.com/mohammed3ateff/" target="_blank ">
                <FaGithub className="text-5xl duration-[0.3s] hover:scale-110" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mohammed-atef-142724167/"
                target="_blank"
              >
                <IoLogoLinkedin className="text-5xl  text-[#0a66c2] duration-[0.3s] hover:scale-110" />
              </a>
            </div>
            <div>
              <a href="https://wa.me/201203388446" target="_blank">
                <IoLogoWhatsapp className="text-5xl text-[#00e676] duration-[0.3s] hover:scale-110" />
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-20 text-sm text-gray-800 font-light">
            <p> 2024 ©</p>
          </div>
        </div>
      </div>
    </section>
  );
}
