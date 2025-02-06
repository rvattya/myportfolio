import React from 'react'
import { motion } from "framer-motion";


const Skills = () => {
  const skillsData = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Digital Marketing", level: 95 },
    { name: "PPC", level: 95 },
    { name: "SEO ", level: 90 },
    { name: "SMM ", level: 90 },
  ];
  return (
    <>
    <section id='skills' className='bg-gradient-to-b from-[#6665E7] via-cyan-500 to-blue-800 py-12 px-6 md:px-16 lg:px-24'>
    <div className="max-w-3xl mx-auto py-10">
      <h2 className=" text-yellow-500 text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-lg font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5 }}
                className="h-full bg-[#54148c] rounded-full"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    </>
  )
}

export default Skills