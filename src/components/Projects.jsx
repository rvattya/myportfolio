import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Projects = () => {
  const projects = [
    {
      title: "Meta Ads & Google Ads Campaign Management",
      description: "Managed high-budget ad campaigns, optimizing ROI and increasing audience engagement effectively.",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*Z-02xqTC74A3LcK1"
    },
    {
      title: "LMS Learning Website in WordPress",
      description: "Developed an LMS website with CRM and WhatsApp API integration for seamless learning management.",
      image: "https://vattyastech.com/wp-content/uploads/2025/02/Screenshot-2025-02-05-144824.png"
    },
    {
      title: "Social Media Marketing & SEO Strategies",
      description: "Boosted website traffic and engagement through strategic SEO and social media campaigns.",
      image: "https://searchengineland.com/wp-content/seloads/2014/08/seo-idea-lightbulbs-ss-1920.jpg"
    },
    {
      title: "Packer Mover Website",
      description: "Designed a feature-rich website for easy booking and customer inquiries.",
      image: "https://vattyastech.com/wp-content/uploads/2025/02/Screenshot-2025-02-05-144918.png"
    },
    {
      title: "Stechnotech Website",
      description: "Developed a custom WordPress site with LMS integration for online courses.",
      image: "https://vattyastech.com/wp-content/uploads/2025/02/Screenshot-2025-02-05-145016.png"
    },
    {
      title: "Play School Website",
      description: "Created an interactive website with engaging UI for better parent-teacher communication.",
      image: "https://vattyastech.com/wp-content/uploads/2025/02/Screenshot-2025-02-05-144955.png"
    },
    {
      title: "E-commerce Website (On-Working)",
      description: "Developing a secure WooCommerce platform with payment gateway integration.",
      image: "https://i.ytimg.com/vi/zDWEUtSE6S8/maxresdefault.jpg"
    },
    {
      title: "College Listing Portal (On-Working)",
      description: "Creating a portal for easy college discovery and admission inquiries.",
      image: "https://market-resized.envatousercontent.com/previews/files/437928791/preview/01_home.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=b2fb6bc6a14beecc27ec2f56748c7c71150c7af881c84245c4518bca9a099d22"
    },
    {
      title: "Real Estate Multi-Vendor Website (On-Working)",
      description: "Building a platform for vendors to list and manage real estate properties efficiently.",
      image: "https://themewagon.com/wp-content/uploads/2018/07/Real_estate_FET-1.jpg"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-blue-950 via-cyan-500 to-[#060648] py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">Projects</h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={3} // Show 3 slides at a time
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 slide on mobile
            768: { slidesPerView: 2 }, // 2 slides on tablets
            1024: { slidesPerView: 3 }, // 3 slides on desktops
          }}
          className="project-slider"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
