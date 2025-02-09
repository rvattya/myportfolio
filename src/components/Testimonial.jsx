import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Raj Arif Patel",
      role: "Founder, Raj Infra",
      feedback:
        "Their expertise in real estate marketing and branding has significantly increased our project visibility. The strategic campaigns and digital presence they created helped us attract more investors and buyers effortlessly.",
    },
    {
      name: "Dhirendra Choudhery",
      role: "Founder, Stechnotech",
      feedback:
        "From web development to digital marketing, their comprehensive solutions have been invaluable for our agency’s growth. Their technical expertise and creative approach set them apart in the industry.",
    },
    {
      name: "Vardhman Jain",
      role: "Founder, CKM Learning",
      feedback:
        "They played a key role in bringing our e-learning platform to life with an intuitive and scalable web solution. Their understanding of the education sector helped us provide a seamless learning experience to our students.",
    },
    {
      name: "Rajesh Dangi",
      role: "Owner, D2R Construction",
      feedback:
        "Their ability to create a strong online presence for our construction business has helped us gain more credibility and reach potential clients effortlessly. Their web solutions truly reflect the professionalism of our work.",
    },
    {
      name: "Nand Kishore Sahu",
      role: "Owner, Sahu Transport",
      feedback:
        "Their digital marketing strategies have transformed our logistics business by expanding our reach and streamlining client interactions. The results-driven approach has helped us grow consistently.",
    },
  ];

  return (
    <section
      id="testimonial"
      className="bg-gradient-to-b from-[#6665E7] via-cyan-500 to-blue-800 py-10 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">
          Testimonials
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Show 3 testimonials at a time
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 slide on small screens
            768: { slidesPerView: 2 }, // 2 slides on tablets
            1024: { slidesPerView: 3 }, // 3 slides on large screens
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-b from-purple-700 via-cyan-400 to-blue-800 text-white shadow-lg rounded-lg p-6 flex flex-col items-center border hover:shadow-xl transition">
                <h3 className="text-lg font-bold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-white">{testimonial.role}</p>
                <p className="text-white mt-4 text-center">
                  {testimonial.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
