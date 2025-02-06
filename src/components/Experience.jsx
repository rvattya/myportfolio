import React from 'react'

const Experience = () => {
    const experiences = [
        {
          role: "Sales and Marketing",
          company: "Asort India Pvt. Ltd ",
          duration: " may-2017 - dec-2019",
          description: "Direct sales and marketing strategies implemented to increase product awareness and customer engagement.Built and managed a strong sales team, driving revenue growth through effective marketing campaigns.Developed client relationships and provided consultation on product benefits and market positioning."
        },
        {
          role: "Digital Marketing Specialist",
          company: "Stechnotech ( digital marketing agency) Bhopal",
          duration: " Feb-2022 - Present",
          description: "Managed and optimized digital ad campaigns across Google Ads, Meta Ads, and LinkedIn Ads to enhance brand visibility.Performed SEO strategies, including keyword research, on-page & off-page SEO, and technical optimization.Developed and executed social media marketing strategies to boost engagement and lead generation.Analyzed campaign performance using analytics tools and continuously optimized strategies for better ROI."
        },
        {
          role: "Social Media Marketing and PPC ads ",
          company: "Raj Infra Indore",
          duration: " jan-2023 - Present",
          description: "Managed a monthly budget of ₹40,000 in Meta Ads for lead generation and brand awareness.Created high-performing social media ad campaigns for real estate projects, increasing inquiries and conversions.Implemented audience targeting strategies to maximize engagement and reduce cost per lead (CPL).Regularly monitored ad performance and adjusted campaigns for better reach and conversions. "
        },
        {
          role: "PPC Ads Specialist ",
          company: "Counselling Wala (Counselling Consultancy ) Bhopal",
          duration: " april-2023 - Aug 2024",
          description: "Managed high-budget ad campaigns with ₹1,00,000 per month in Google Ads and ₹40,000 in Meta Ads.Optimized PPC campaigns for better conversion rates while reducing cost per acquisition (CPA).Conducted A/B testing on ad creatives, landing pages, and targeting strategies to improve ad performance.Utilized data analytics to track campaign success and refine bidding strategies for maximum ROI."
        },
        {
          role: "Digital Marketing Specialist and website developer",
          company: "CKM Learning ",
          duration: "July-2023 - Oct-2024",
          description: "Designed, developed, and customized WordPress websites for businesses across various industries.Integrated SEO best practices into website development for better search engine rankings.Managed website maintenance, security, and performance optimization.Developed marketing automation strategies to streamline lead generation and customer engagement."
        },
        {
          role: "internship in web Development (MERN)",
          company: "Neetu Infotech Bhopal",
          duration: "July-2024 - Jan-2025",
          description: "Worked on building and deploying full-stack web applications using MongoDB, Express.js, React.js, and Node.js.Developed dynamic and responsive web pages with React.js for enhanced user experience.Implemented authentication and authorization using JWT for secure user access.Optimized database queries and server-side logic for improved application performance.Collaborated with senior developers to debug issues and enhance project efficiency."
        }
      ];
    
      
  return (
   <>
   
   <div id='experience' className='bg-gradient-to-b from-[#6665E7] via-cyan-500 to-blue-800'>
   <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">Working Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-lg p-5 rounded-2xl border-l-4 border-blue-800">
            <h3 className="text-xl font-semibold text-gray-700">{exp.role}</h3>
            <p className="text-gray-600">{exp.company} | {exp.duration}</p>
            <p className="text-gray-500 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
   </>
  )
}

export default Experience