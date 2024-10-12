import React, { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("#");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="mx-auto fixed w-full bg-[#00000082] bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="w-full md:block md:w-auto">
          <ul className="flex justify-center items-center font-medium p-3.5 rounded-lg bg-[#00000082] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("#")}
                className={`block py-2 px-3 md:p-0 rounded md:bg-transparent  ${
                  activeLink === "#"
                    ? "text-blue-700 "
                    : "text-white  hover:text-blue-700 "
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
                    : "text-white  hover:text-blue-700 "
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
                    : "text-white  hover:text-blue-700 "
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
                    : "text-white  hover:text-blue-700 "
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
                    : "text-white  hover:text-blue-700 "
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
