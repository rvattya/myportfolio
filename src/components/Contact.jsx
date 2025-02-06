import React from 'react'
import { IoCallSharp,IoMail,IoLocation  } from "react-icons/io5";


const Contact = () => {
  return (
    <>

      <section id='contact' >
        <div className="bg-gradient-to-b from-blue-900 via-cyan-500 to-[#060648] text-white py-10 px-5 md:px-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Contact Us</h2>
              <p className="text-white">
              Whether you're looking to develop a high-performing website, enhance your digital marketing strategy, or 
              collaborate on an exciting project, I'm here to help! Let's turn your ideas into reality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-yellow-500 text-2xl mr-4"><IoLocation /></span>
                  <p>Near Canara Bank, Biaora Rajgarh, MP(465674)</p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-2xl mr-4"><IoCallSharp />
                  </span>
                  <p>+91 93406 10359 | +91 7566470980</p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-2xl mr-4"><IoMail /> </span>
                  <p>rahuljatav4578@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Contact Number</label>
                  <input
                    type="tel"
                    className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    placeholder="000 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Type your Message</label>
                  <textarea
                    className="w-full border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full items-center justify-center relative px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 
             rounded-lg shadow-lg transition-all duration-300 ease-in-out 
             hover:scale-105 hover:shadow-[0px_0px_20px_rgba(99,102,241,0.8)] 
             active:scale-95 active:shadow-none 
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 before:opacity-0 
             before:transition-opacity before:duration-500 hover:before:opacity-100"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact