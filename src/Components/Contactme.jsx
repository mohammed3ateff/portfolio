import React from "react";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="max-h-screen flex flex-col justify-center items-center"
    >
      <div
        className="flex flex-col justify-center items-center mb-4 space-y-1"
        style={{ opacity: 1, transform: "none" }}
      >
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          Get in Touch
        </h2>
        <h1 className="text-xl xl:text-2xl font-bold text-white">Contact</h1>
      </div>
      <div className="flex justify-center lg:px-16 xl:px-28 my-8 xl:my-16">
        <form
          className="flex flex-col space-y-4 text-slate-100"
          action="https://formsubmit.co/muhammedatef57@gmail.com"
          method="POST"
        >
          <div className="flex flex-col justify-start w-full my-1 lg:text-lg">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              className="form-input text-black w-96 max-sm:w-full rounded-xl p-2"
              required
              name="name"
            />
          </div>
          <div className="flex flex-col justify-start w-full my-1 lg:text-lg">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              className="form-input text-black w-96 max-sm:w-full rounded-xl p-2"
              required
              name="email"
            />
          </div>
          <div className="flex flex-col justify-start w-full my-1 lg:text-lg">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input text-black lg:w-96 rounded-xl p-2 h-56"
              required
            ></textarea>
          </div>
          <div className="z-[60]">
            <button
              type="submit"
              className="bg-sky-600 p-1 rounded-md px-2 max-sm:text-sm hover:bg-sky-500"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
