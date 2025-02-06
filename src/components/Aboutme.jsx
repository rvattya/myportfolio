import React from "react";
import Typewriter from "typewriter-effect";
import image from '../assets/image.png'


const Aboutme = () => {
  const scrolltosection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div id="aboutme"
        className="bg-gradient-to-b from-blue-900 via-cyan-500 to-[#060648] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Side - Text Content */}
        <div className="pl-5 flex flex-col items-center text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Hello! I'm a
            <span className="text-yellow-400">
              <Typewriter
                options={{
                  strings: ["Website Developer", "Digital Marketer", "Freelancer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-white">
            A highly motivated and result-oriented Digital Marketing Specialist & MERN Stack Developer with
            3 years of experience in digital marketing and 1 year of experience in full-stack development.
            Expertise in SEO, paid advertising, social media marketing, and CRM integration.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-white">
            Proficient in designing, developing, and deploying web applications with the MERN stack.
            Passionate about creating seamless user experiences and optimizing marketing campaigns for
            maximum reach and ROI.
          </p>

          <div className="mt-8">
            <button
              onClick={() => scrolltosection("contact")}
              className="relative px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 
             rounded-lg shadow-lg transition-all duration-300 ease-in-out 
             hover:scale-105 hover:shadow-[0px_0px_20px_rgba(99,102,241,0.8)] 
             active:scale-95 active:shadow-none 
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 before:opacity-0 
             before:transition-opacity before:duration-500 hover:before:opacity-100"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute -z-10 w-48 h-48 bg-yellow-400 rounded-full blur-3xl opacity-50 right-10 top-10"></div>
          <img
            src={image}
            alt="Profile"
            className=" rounded-lg drop-shadow-[0_10px_20px_rgba(255,223,0,0.6)]"

          />
        </div>

      </div>
    </>
  );
};

export default Aboutme;
