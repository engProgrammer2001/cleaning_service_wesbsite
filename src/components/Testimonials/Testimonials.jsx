import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { FaStar, FaRegStar } from "react-icons/fa";
import TestimonialsData from "../data/TestimonialsData";

// Import SwiperCore and register the modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Testimonials = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-slate-700" />);
      }
    }
    return <div className="flex space-x-1 mb-2">{stars}</div>;
  };
  return (
    <div className="testimonial-section lg:py-0 text-white">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {TestimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="flex flex-col bg-slate-300 p-6 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {testimonial.name}
              </h3>
              {renderStars(testimonial.rating)}
              <p className="text-lg text-gray-600 italic mb-4">
                {testimonial.message}
              </p>
              <span className="text-sm text-gray-500">
                Service: {testimonial.service}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
