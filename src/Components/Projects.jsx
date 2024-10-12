import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen my-5">
      <div className="flex flex-col justify-center items-center mb-4 space-y-1">
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          some of my work
        </h2>
        <h1 className="text-xl xl:text-2xl font-bold text-white">Projects</h1>
      </div>
      <div className="flex justify-center lg:px-16 xl:px-28 my-8 xl:my-16 ">
        <div className="flex max-lg:flex-col justify-between max-lg:items-center max-lg:justify-center max-lg:space-y-5 w-full lg:space-x-5">
          <div className="group ">
            <div className="bg-gradient-to-tl from-gray-700 to-gray-900 lg:m-1 rounded-sm rounded-t-xl space-y-2 w-full h-full pb-2 z-50 border-2 border-gray-600 hover:border-gray-500">
              <div className="rounded-t-xl overflow-hidden">
                <img
                  alt="Project"
                  loading="lazy"
                  width="500"
                  height="400"
                  className="rounded-t-xl h-full w-full transition-[0.5s] group-hover:scale-105"
                  src="./src/assets/projects/dashboard.PNG"
                />
              </div>
              <div className="mx-2 font-bold text-sky-700 brightness-200">
                DashBoard
              </div>
              <div className="flex flex-wrap">
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  HTML
                </b>
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  tailwindcss
                </b>
              </div>
              <div className="flex justify-end gap-5 mx-4 pt-2 font-bold text-slate-100">
                <a
                  href="https://mohammed3atef.github.io/Dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-600 p-1 rounded-md px-2 text-sm lg:text-md hover:bg-sky-500"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/Mohammed3Atef/Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="github"
                    loading="lazy"
                    width="30"
                    height="30"
                    className="cursor-pointer text-white"
                    src="https://arjun-ruby.vercel.app/git.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="group ">
            <div className="bg-gradient-to-tl from-gray-700 to-gray-900 lg:m-1 rounded-sm rounded-t-xl space-y-2 w-full h-full pb-2 z-50 border-2 border-gray-600 hover:border-gray-500">
              <div className="rounded-t-xl overflow-hidden">
                <img
                  alt="Project"
                  loading="lazy"
                  width="500"
                  height="400"
                  className="rounded-t-xl h-full w-full transition-[0.5s] group-hover:scale-105"
                  src="./src/assets/projects/game.PNG"
                />
              </div>
              <div className="mx-2 font-bold text-sky-700 brightness-200">
                Game Rock Paper or Scissors
              </div>
              <div className="flex flex-wrap">
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  HTML
                </b>
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  tailwindcss
                </b>
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  JavaScript
                </b>
              </div>
              <div className="flex justify-end gap-5 mx-4 pt-2 font-bold text-slate-100 ">
                <a
                  href="https://mohammed3atef.github.io/Game_Rock-Paper_or_Scissors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-600 p-1 rounded-md px-2 text-sm lg:text-md hover:bg-sky-500"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/Mohammed3Atef/Game_Rock-Paper_or_Scissors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="github"
                    loading="lazy"
                    width="30"
                    height="30"
                    className="cursor-pointer text-white"
                    style={{ color: "transparent" }}
                    src="https://arjun-ruby.vercel.app/git.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="group ">
            <div className="bg-gradient-to-tl from-gray-700 to-gray-900 lg:m-1 rounded-sm rounded-t-xl space-y-2 w-full h-full pb-2 z-50 border-2 border-gray-600 hover:border-gray-500">
              <div className="rounded-t-xl overflow-hidden">
                <img
                  alt="Project"
                  loading="lazy"
                  width="500"
                  height="400"
                  className="rounded-t-xl h-full w-full  transition-[0.5s] group-hover:scale-105"
                  src="./src/assets/projects/librery.PNG"
                />
              </div>
              <div className="mx-2 font-bold text-sky-700 brightness-200">
                My Library
              </div>
              <div className="flex flex-wrap">
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  HTML
                </b>
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  tailwindcss
                </b>
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  JavaScript
                </b>
              </div>
              <div className="flex justify-end gap-5 mx-4 pt-2 font-bold text-slate-100">
                <a
                  href="https://mohammed3atef.github.io/Library/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-600 p-1 rounded-md px-2 text-sm lg:text-md hover:bg-sky-500"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/Mohammed3Atef/Library"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="github"
                    loading="lazy"
                    width="30"
                    height="30"
                    className="cursor-pointer text-white"
                    style={{ color: "transparent" }}
                    src="https://arjun-ruby.vercel.app/git.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="group ">
            <div className="bg-gradient-to-tl from-gray-700 to-gray-900 lg:m-1 rounded-sm rounded-t-xl space-y-2 w-full h-full pb-2 z-50 border-2 border-gray-600 hover:border-gray-500">
              <div className="rounded-t-xl overflow-hidden">
                <img
                  alt="Project"
                  loading="lazy"
                  width="500"
                  height="400"
                  className="rounded-t-xl h-full w-full transition-[0.5s] group-hover:scale-105"
                  src="./src/assets/projects/fashion.png"
                />
              </div>
              <div className="mx-2 font-bold text-sky-700 brightness-200">
                Fashionesta
              </div>
              <div className="flex flex-wrap">
                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  React
                </b>

                <b className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
                  tailwindcsscss
                </b>
              </div>
              <div className="flex justify-end gap-5 mx-4 pt-2 font-bold text-slate-100">
                <a
                  href="https://fashionesta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-600 p-1 rounded-md px-2 text-sm lg:text-md hover:bg-sky-500"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/Mohammed3Atef/Fashionesta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="github"
                    loading="lazy"
                    width="30"
                    height="30"
                    className="cursor-pointer text-white"
                    src="https://arjun-ruby.vercel.app/git.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
