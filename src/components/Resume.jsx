import React from 'react'
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  const handleDownload = () => {
    // Replace the URL with the actual link to your resume file
    const resumeUrl = "https://example.com/your-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Your_Resume.pdf";
    link.click();
  };
  return (
    <>
    <section id='resume' className='py-10 px-6 md:px-20 bg-gradient-to-b from-blue-800 via-cyan-500 to-[#6665E7]'>
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">Resume</h2>
        <p className="text-lg text-white font-bold mb-6">
        Explore my journey, skills, and accomplishments by downloading my resume.  
        Get an insight into my expertise in web development, digital marketing, and project execution.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center relative px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 
             rounded-lg shadow-lg transition-all duration-300 ease-in-out 
             hover:scale-105 hover:shadow-[0px_0px_20px_rgba(99,102,241,0.8)] 
             active:scale-95 active:shadow-none 
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 before:opacity-0 
             before:transition-opacity before:duration-500 hover:before:opacity-100"
          >
            <FaDownload className="mr-2" /> Download Resume
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Resume