import bgPhoto from "../assets/bg-photo.png";
import profilePic from "../assets/mohammmed.jpg";

export default function About() {
  return (
    <section id="about" className="min-h-screen overflow-hidden">
      <div className=" flex flex-col justify-center items-center mb-4  space-y-3">
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          Get To Know
        </h2>
        <h1 className=" text-xl xl:text-2xl font-bold text-white">About Me</h1>
      </div>
      <div className=" flex flex-col lg:flex-row gap-4 p-2">
        <div className=" flex justify-center mx-5 lg:w-1/3 relative items-center">
          <img
            alt={bgPhoto}
            loading="lazy"
            width="250"
            height="500"
            decoding="async"
            className=" rounded-full h-32 w-32 lg:h-60 lg:w-60  "
            src={bgPhoto}
          />
          <img
            alt={profilePic}
            loading="lazy"
            width="250"
            height="500"
            decoding="async"
            className=" rounded-full h-32 w-32 lg:h-60 lg:w-60 object-cover absolute lg:translate-x-3 duration-500 ease-in-out cursor-pointer lg:-translate-y-3 lg:hover:translate-y-0 lg:hover:translate-x-0 border-white border-2"
            src={profilePic}
          />
        </div>
        <div className=" flex flex-col justify-center lg:w-2/3 lg:p-6">
          <div className=" rounded-xl lg:p-4 m-1 max-md:my-5 max-md:text-center">
            <div className="text-white mb-2 lg:ml-7 lg:text-2xl font-bold">
              <h1>I CREATE</h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700">
                WEBSITES
              </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700">
                TAILORED FOR
              </h1>
              <h1>YOUR SUCCESS</h1>
            </div>
            <p className="text-sm lg:text-lg flex-wrap p-1 lg:p-7 text-white leading-relaxed __classNameName_d64469">
              With a strong foundation in web fundamentals, I specialize in
              crafting bespoke sites that attract customers and empower small
              businesses. Let's work together to elevate your online presence
              and bring your vision to life.
            </p>
          </div>
          <div className=" max-md:text-center mb-2 lg:ml-10 ">
            <a
              href="#contact"
              className="text-white bg-sky-600 p-2 lg:p-4 rounded-full px-4 hover:bg-sky-500 font-bold"
            >
              Get In Touch!
            </a>
          </div>
        </div>
      </div>
      <div className=" h-1 bg-white mt-12 opacity-50 rounded-full mx-1"></div>
    </section>
  );
}
