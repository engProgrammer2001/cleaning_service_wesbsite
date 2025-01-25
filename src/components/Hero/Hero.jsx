import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h2>
        <button className="bg-blue-600 text-white px-6 py-3 text-lg rounded-md hover:bg-blue-800 transition duration-300">
          Explore More
        </button>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <img
            src="/assets/slider/slider1.jpg"
            alt="Slider 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slider/slider2.jpg"
            alt="Slider 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slider/slider3.jpg"
            alt="Slider 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
