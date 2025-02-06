import React, { useState } from "react";

const Header = ({ onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const scrolltosection= (id)=>{
    document.getElementById(id).scrollIntoView({behavior:"smooth"});

  };

  return (
    <div className="bg-gradient-to-r from-blue-900  to-[#6665E7] text-white p-4 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-8">
        {/* Logo / Menu Toggle */}
        <div className="text-2xl font-bold cursor-pointer md:hidden" onClick={onMenuClick}>
          RAHUL JATAV
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-6 md:ml-auto">
          <button  onClick={()=>scrolltosection("aboutme")} className="hover:text-yellow-400 transition">
            About Me
          </button>
          <button  onClick={()=>scrolltosection("skills")} className="hover:text-yellow-400 transition">
            Skills
          </button>
          <button onClick={()=>scrolltosection("education")}  className="hover:text-yellow-400 transition">
            Education
          </button>
          <button onClick={()=>scrolltosection("experience")}  className="hover:text-yellow-400 transition">
            Experience
          </button>
          <button onClick={()=>scrolltosection("projects")}  className="hover:text-yellow-400 transition">
            Projects
          </button>
          <button onClick={()=>scrolltosection("resume")}  className="hover:text-yellow-400 transition">
            Resume
          </button>
          <button onClick={()=>scrolltosection("testimonial")}  className="hover:text-yellow-400 transition">
            Testimonial
          </button>
          <button onClick={()=>scrolltosection("contact")}  className="hover:text-yellow-400 transition">
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="md:hidden bg-[#1d1d50] p-4 absolute w-full left-0 top-[64px] shadow-lg z-10">
          <button  onClick={()=>scrolltosection("aboutme")} className="block py-2 text-white hover:text-yellow-400">About Me</button>
          <button  onClick={()=>scrolltosection("skills")} className="block py-2 text-white hover:text-yellow-400">Skills</button>
          <button  onClick={()=>scrolltosection("education")} className="block py-2 text-white hover:text-yellow-400">Education</button>
          <button  onClick={()=>scrolltosection("experience")} className="block py-2 text-white hover:text-yellow-400">Experience</button>
          <button  onClick={()=>scrolltosection("projects")} className="block py-2 text-white hover:text-yellow-400">Projects</button>
          <button  onClick={()=>scrolltosection("resume")} className="block py-2 text-white hover:text-yellow-400">Resume</button>
          <button  onClick={()=>scrolltosection("testimonial")} className="block py-2 text-white hover:text-yellow-400">Testimonial</button>
          <button  onClick={()=>scrolltosection("contact")} className="block py-2 text-white hover:text-yellow-400">Contact</button>
        </div>
      )}
    </div>
  );
};

export default Header;
