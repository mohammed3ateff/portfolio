import React from "react";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoFirebase } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";

import messengerApp from "../assets/messengerApp.jpg";
import dashboard from "../assets/dashboard.jpg";
import dashboardMobile from "../assets/dashboard-mobile.jpg";
import library from "../assets/library.jpg";
import libraryMobile from "../assets/library-mobile.jpg";
import fashion from "../assets/fashion.jpg";
import fashionMobile from "../assets/fashion-mobile.jpg";
import game from "../assets/game.jpg";
import gameMobile from "../assets/game-mobile.jpg";

export default function ProjectsTest() {
  return (
    <div id="projects" className="grid  gap-[3rem] lg:gap-20 mb-32">
      <div
        className="flex flex-col justify-center items-center mb-4 space-y-1"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          some of my work
        </h2>
        <h1 className="text-xl xl:text-2xl font-bold text-white">Projects</h1>
      </div>

      <article
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col items-center gap-8 border-b-2 border-b-[#00ffd1] pb-8
        md:hover:border-b-[#00ffd1] md:hover:border-b-2
        md:grid md:grid-cols-[1fr_1fr] md:gap-10  md:duration-[0.5s]
        md:px-0 md:py-8 md:border-y-transparent md:hover:border-t-2 hover:border-t-[#00ffd1]"
      >
        <div className="projectInfo flex flex-col items-center justify-between gap-6">
          <div className="projectTitle text-[#00ffd1] text-[1.6rem] text-center tracking-[1px] rounded-md">
            Messenger App
          </div>
          <div className="description text-base text-center text-white">
            This project is a feature-rich Messenger App built using React and
            Tailwind CSS, integrating Firebase for authentication and real-time
            data management. The application allows users to sign up and log in
            using email and password authentication, and it securely stores user
            data in Firestore.
          </div>
          <div className="languagesView flex flex-1 flex-wrap justify-evenly gap-4">
            <RiTailwindCssFill className="text-5xl text-[#00ffff] duration-[0.3s] hover:scale-110" />
            <FaReact className="text-5xl text-[#00d8ff] duration-[0.3s] hover:scale-110" />
            <IoLogoFirebase className="text-5xl text-[#ed7e1f] duration-[0.3s] hover:scale-110" />
          </div>
          <div className="buttonsView flex flex-1 flex-wrap justify-evenly gap-4">
            <a
              href="https://github.com/Mohammed3Atef/Messenger-App"
              target="_blank"
              rel="noreferrer"
              className="code flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer  duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1]  hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="projectIcon text-[#00ffd1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path>
              </svg>
              <div>Code</div>
            </a>
            <a
              href="https://messenger-app-rose.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="website  flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1] hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="projectIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
              </svg>
              <div>See website</div>
            </a>
          </div>
        </div>
        <div className="imgView relative h-min ">
          {/* <img
            src={libraryMobile}
            alt="pr"
            className="h-3/5 absolute bottom-[-1rem] right-[-1rem] rounded-[10px]"
          /> */}
          <img
            src={messengerApp}
            alt="pr"
            className=" flex flex-1 w-full transition-transform duration-[1s] ease-[ease,border-color] delay-[0.7s] rounded-[10px]"
          />
        </div>
      </article>
      <article
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" flex flex-col-reverse items-center gap-8 border-b-2 border-b-[#00ffd1] pb-8
        md:hover:border-b-[#00ffd1] md:hover:border-b-2
        md:grid md:grid-cols-[1fr_1fr] md:gap-10  md:duration-[0.5s]
        md:px-0 md:py-8 md:border-y-transparent md:hover:border-t-2 hover:border-t-[#00ffd1] "
      >
        <div className="imgView relative h-min bg-[#9ca3af1c] p-2">
          <img
            src={dashboardMobile}
            alt="pr"
            className="h-3/5 absolute bottom-[-1rem] right-[-1rem] rounded-[10px]"
          />
          <img
            src={dashboard}
            alt="pr"
            className=" flex flex-1 w-full transition-transform duration-[1s] ease-[ease,border-color] delay-[0.7s] rounded-[10px]"
          />
        </div>
        <div className="projectInfo flex flex-col items-center justify-between gap-6">
          <div className="projectTitle text-[#00ffd1] text-[1.6rem] text-center tracking-[1px] rounded-md">
            Dashboard
          </div>
          <div className="description text-base text-center text-white">
            This project is a modern, responsive dashboard designed using HTML
            and Tailwind CSS. The dashboard features a sleek, dark theme and is
            optimized for various screen sizes, ensuring a seamless user
            experience on both desktop and mobile devices.
          </div>
          <div className="languagesView flex flex-1 flex-wrap justify-evenly gap-4">
            <TiHtml5 className="text-5xl text-[#f75421] duration-[0.3s] hover:scale-110" />

            <RiTailwindCssFill className="text-5xl text-[#00ffff] duration-[0.3s] hover:scale-110" />
          </div>
          <div className="buttonsView flex flex-1 flex-wrap justify-evenly gap-4">
            <a
              href="https://github.com/Mohammed3Atef/Dashboard"
              target="_blank"
              rel="noreferrer"
              className="code flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer  duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1]  hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="projectIcon text-[#00ffd1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path>
              </svg>
              <div>Code</div>
            </a>
            <a
              href="https://mohammed3atef.github.io/Dashboard/"
              target="_blank"
              rel="noreferrer"
              className="website  flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1] hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="projectIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
              </svg>
              <div>See website</div>
            </a>
          </div>
        </div>
      </article>
      <article
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col items-center gap-8 border-b-2 border-b-[#00ffd1] pb-8
        md:hover:border-b-[#00ffd1] md:hover:border-b-2
        md:grid md:grid-cols-[1fr_1fr] md:gap-10  md:duration-[0.5s]
        md:px-0 md:py-8 md:border-y-transparent md:hover:border-t-2 hover:border-t-[#00ffd1]"
      >
        <div className="projectInfo flex flex-col items-center justify-between gap-6">
          <div className="projectTitle text-[#00ffd1] text-[1.6rem] text-center tracking-[1px] rounded-md">
            My Library
          </div>
          <div className="description text-base text-center text-white">
            This project is a personal library management app developed using
            JavaScript and Tailwind CSS. The application allows users to add
            books, including the title, author, and number of pages, and to
            track their reading status. The app features a responsive and modern
            design, making it easy to use on any device.
          </div>
          <div className="languagesView flex flex-1 flex-wrap justify-evenly gap-4">
            <RiTailwindCssFill className="text-5xl text-[#00ffff] duration-[0.3s] hover:scale-110" />
            <SiJavascript className="text-5xl text-[#ffff00] duration-[0.3s] hover:scale-110" />
          </div>
          <div className="buttonsView flex flex-1 flex-wrap justify-evenly gap-4">
            <a
              href="https://github.com/Mohammed3Atef/Library"
              target="_blank"
              rel="noreferrer"
              className="code flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer  duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1]  hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="projectIcon text-[#00ffd1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path>
              </svg>
              <div>Code</div>
            </a>
            <a
              href="https://mohammed3atef.github.io/Library/"
              target="_blank"
              rel="noreferrer"
              className="website  flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1] hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="projectIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
              </svg>
              <div>See website</div>
            </a>
          </div>
        </div>
        <div className="imgView relative h-min ">
          <img
            src={libraryMobile}
            alt="pr"
            className="h-3/5 absolute bottom-[-1rem] right-[-1rem] rounded-[10px]"
          />
          <img
            src={library}
            alt="pr"
            className=" flex flex-1 w-full transition-transform duration-[1s] ease-[ease,border-color] delay-[0.7s] rounded-[10px]"
          />
        </div>
      </article>
      <article
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col-reverse items-center gap-8 border-b-2 border-b-[#00ffd1] pb-8
        md:hover:border-b-[#00ffd1] md:hover:border-b-2
        md:grid md:grid-cols-[1fr_1fr] md:gap-10  md:duration-[0.5s]
        md:px-0 md:py-8 md:border-y-transparent md:hover:border-t-2 hover:border-t-[#00ffd1]"
      >
        <div className="imgView relative h-min ">
          <img
            src={fashionMobile}
            alt="pr"
            className="h-3/5 absolute bottom-[-1rem] right-[-1rem] rounded-[10px]"
          />
          <img
            src={fashion}
            alt="pr"
            className=" flex flex-1 w-full transition-transform duration-[1s] ease-[ease,border-color] delay-[0.7s] rounded-[10px]"
          />
        </div>
        <div className="projectInfo flex flex-col items-center justify-between gap-6">
          <div className="projectTitle text-[#00ffd1] text-[1.6rem] text-center tracking-[1px] rounded-md">
            Fashionesta
          </div>
          <div className="description text-base text-center text-white">
            This project is a Fashion App developed using React and Tailwind
            CSS, designed to fetch and display data from the Easy Order API. The
            app features a sleek, modern design and provides a comprehensive
            interface for browsing and managing fashion products.
          </div>
          <div className="languagesView flex flex-1 flex-wrap justify-evenly gap-4">
            <FaReact className="text-5xl text-[#00d8ff] duration-[0.3s] hover:scale-110" />

            <RiTailwindCssFill className="text-5xl text-[#00ffff] duration-[0.3s] hover:scale-110" />
          </div>
          <div className="buttonsView flex flex-1 flex-wrap justify-evenly gap-4">
            <a
              href="https://github.com/Mohammed3Atef/Fashionesta"
              target="_blank"
              rel="noreferrer"
              className="code flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer  duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1]  hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="projectIcon text-[#00ffd1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path>
              </svg>
              <div>Code</div>
            </a>
            <a
              href="https://fashionesta.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="website  flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1] hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="projectIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
              </svg>
              <div>See website</div>
            </a>
          </div>
        </div>
      </article>
      <article
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col items-center gap-8 border-b-2 border-b-[#00ffd1] pb-8
        md:hover:border-b-[#00ffd1] md:hover:border-b-2
        md:grid md:grid-cols-[1fr_1fr] md:gap-10  md:duration-[0.5s]
        md:px-0 md:py-8 md:border-y-transparent md:hover:border-t-2 hover:border-t-[#00ffd1]"
      >
        <div className="projectInfo flex flex-col items-center justify-between gap-6">
          <div className="projectTitle text-[#00ffd1] text-[1.6rem] text-center tracking-[1px] rounded-md">
            Rock Paper Scissors Game
          </div>
          <div className="description text-base text-center text-white">
            This project is a classic Rock Paper Scissors game developed using
            HTML, CSS, and JavaScript. The game allows users to play against the
            computer, with rounds continuing until either the player or the
            computer wins five times. The game features a beautiful, responsive
            design, ensuring an engaging user experience on any device.
          </div>
          <div className="languagesView flex flex-1 flex-wrap justify-evenly gap-4">
            <TiHtml5 className="text-5xl text-[#f75421] duration-[0.3s] hover:scale-110" />
            <FaCss3Alt className="text-5xl text-[#2d53e5] duration-[0.3s] hover:scale-110" />
            <SiJavascript className="text-5xl text-[#ffff00] duration-[0.3s] hover:scale-110" />
          </div>
          <div className="buttonsView flex flex-1 flex-wrap justify-evenly gap-4">
            <a
              href="https://github.com/Mohammed3Atef/Library"
              target="_blank"
              rel="noreferrer"
              className="code flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer  duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1]  hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="projectIcon text-[#00ffd1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path>
              </svg>
              <div>Code</div>
            </a>
            <a
              href="https://mohammed3atef.github.io/Library/"
              target="_blank"
              rel="noreferrer"
              className="website  flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1] hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="projectIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
              </svg>
              <div>See website</div>
            </a>
          </div>
        </div>
        <div className="imgView relative h-min ">
          <img
            src={gameMobile}
            alt="pr"
            className="h-3/5 absolute bottom-[-1rem] right-[-1rem] rounded-[10px]"
          />
          <img
            src={game}
            alt="pr"
            className=" flex flex-1 w-full transition-transform duration-[1s] ease-[ease,border-color] delay-[0.7s] rounded-[10px]"
          />
        </div>
      </article>
    </div>
  );
}
