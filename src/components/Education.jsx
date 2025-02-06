import React from 'react'

const Education = () => {
  return (
  <>
  <section id='education' className='bg-gradient-to-b from-blue-800 via-cyan-500 to-[#6665E7] py-12 px-6 md:px-16 lg:px-24'>
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-yellow-500 mb-6">My Education</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800">High school (10th) 2015 - 85%</h3>
        <p className="text-gray-600">Govt. high school kachnariya(465674)</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800">Higher secondary (12th MATHS) 2017 -80%</h3>
        <p className="text-gray-600">Govt. boys h.sec. School biaora (465674)</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800">GRADUATION in BA</h3>
        <p className="text-gray-600">Barkatullah Academy - 2020-2022</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800">Certified Digital Marketing Course</h3>
        <p className="text-gray-600">Digital Mind Web Solution Indore - 2021</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800">Certified MERN-stack developer Course</h3>
        <p className="text-gray-600">TestBook - 2024</p>
      </div>
    </div>
  </div>
</section>

  </>
  )
}

export default Education