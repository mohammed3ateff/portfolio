import React from "react";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export default function BrifDefinition() {
  const texts = ["Mohammed Atef", "Frontend Developer", "Civil Engineer"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, typingSpeed, currentIndex, texts]);

  return (
    <section id="home" className="py-28">
      <div className="grid grid-cols-1">
        <div
          className="col-span-8 place-self-center text-center"
          style={{ opacity: 1, transform: "none" }}
        >
          <h1 className="text-white mb-4 text-3xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
              Hello, I'm
            </span>
            <br />
            <strong
              style={{ fontSize: "1em", display: "inline-block" }}
              className="index-module_type__E-SaG from-blue-100 to-blue-500 bg-clip-text bg-gradient-to-r text-transparent"
            >
              {displayText}
            </strong>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Step into my little corner of the coding galaxy!
          </p>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 "
              fdprocessedid="cqiic"
            >
              <a href="/resume.pdf" download="" rel="noreferrer">
                Download Resume
              </a>
            </button>
          </div>
          <div className="flex justify-center items-center mt-7 space-x-4 lg:space-x-10 opacity-95">
            <div>
              <a href="https://github.com/Mohammed3Atef" target="_blank">
                <FaGithub className="text-5xl text-white duration-[0.3s] hover:scale-110" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mohammed-atef-142724167/"
                target="_blank"
              >
                <IoLogoLinkedin className="text-5xl text-[#0a66c2] duration-[0.3s] hover:scale-110" />
              </a>
            </div>
            <div>
              <a href="https://wa.me/201203388446" target="_blank">
                <IoLogoWhatsapp className="text-5xl text-[#00e676] duration-[0.3s] hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
