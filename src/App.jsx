import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Testimonial from './components/Testimonial';
import Experience from './components/Experience';



export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    < >
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white w-[75%] sm:w-[60%] md:w-[20%] z-30 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-100 md:translate-x-0'
          }`}>
        <button
          className="absolute top-4 right-4 text-white text-2xl md:hidden"
          onClick={toggleSidebar}
        >
          &times;
        </button>
        <Sidebar onClose={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-[20%] bg-gray-100 ">
        {/* Fixed Header */}
        <div className="fixed w-full md:w-[80%] top-0 left-0 md:left-[20%] z-20 bg-[#1a1a40] text-white">
          <Header onMenuClick={toggleSidebar} />
        </div>

        {/* Main Content Area */}
        <div className="mt-16  md:p-6 overflow-auto  h-full">
          <div className="w-full md: mx-auto ">
            <Aboutme />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Resume />
            <Testimonial />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
