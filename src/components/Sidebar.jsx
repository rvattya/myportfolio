import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub,FaUserGraduate, FaLaptopCode, FaGlobe  } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import profile from "../assets/profile.jpg";

const Sidebar = () => {
    const [fullprofile, setFullrofile]=useState(false);

    const openprofile= ()=>{
setFullrofile(true);
    };
    const closeprofile=()=>{
setFullrofile(false)
    };
  return (
    <>
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-blue-950 via-cyan-500 to-[#060648] p-6 flex flex-col items-center text-white h-full">
        {/* Profile Section */}
        <div className="text-center">
          <div className="rounded-full border-4 border-yellow-400 w-40 h-40 overflow-hidden mx-auto cursor-pointer"  onClick={openprofile}>
            <img src={profile} alt="Profile" className="w-full h-full object-cover " />
          </div>
          <h2 className="text-2xl mt-4 font-bold">Rahul Jatav</h2>
          <h1 className="font-bold mt-2">
            <span className="text-yellow-400">W</span>ebsite Developer &{" "}
            <span className="text-yellow-400">D</span>igital Marketer
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full border-b border-gray-600 my-4"></div>

        {/* Personal Details */}
        <div className="w-full">
          <h2 className="text-lg font-bold text-yellow-400 mb-2">Personal Details</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <IoCall className="text-yellow-400" /> 
              <h2>+91 9340610359 </h2>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="text-yellow-400" /> 
              <h2>rahuljatav4578@gmail.com</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-yellow-400" /> 
              <h2>Biaora, Rajgarh MP, India</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaUserGraduate className="text-yellow-400" /> 
              <h2>Bachelor's in Art`s</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-yellow-400" /> 
              <h2>English, Hindi</h2>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-b border-gray-600 my-4"></div>

        {/* Social Media Icons */}
        <div className="w-full flex justify-center space-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=100073655337394"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/r_vattya/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-jatav-783a99193/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://github.com/rvattya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
     {fullprofile && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="relative">  
    <button  className=" top-4 right-4 text-white text-2xl" onClick={closeprofile}>X</button>
    <img src={profile} alt="Rahul Jatav" className="w-80 h-80 object-cover rounded-lg"/>
  </div>
</div>
)}

    </>
  );
};

export default Sidebar;
