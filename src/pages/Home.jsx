import React from "react";
import Hero from "../components/Hero/Hero";
import AboutComponents from "../components/AboutComponents/AboutComponents";
import Service from "../components/Service/Service";
import PaintingService from "../components/PaintingService/PaintingService";
import Faq from "../components/Faq/Faq";
import Testimonials from "../components/Testimonials/Testimonials";
import EnqueryForm from "../components/EnqueryForm/EnqueryForm";
import GallerySlider from "../components/GallerySlider/GallerySlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutComponents />
      <Service />
      <PaintingService />
      <EnqueryForm />
      <Faq />
      {/* testimonial section  */}
      <div className="bg-blue-100 p-6 my-4">
        <h2 className="text-center text-3xl text-slate-800 font-bold underline">
          What Our Clients Say
        </h2>
        <div className="flex flex-col lg:flex-row my-10 gap-6">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img
              src="https://img.freepik.com/free-photo/professional-cleaning-service-person-using-vacuum-cleaner-office_23-2150520631.jpg"
              alt="Placeholder"
              className="max-h-full max-w-full object-cover rounded-lg"
            />
          </div>
          {/* Right Side - Testimonials */}
          <div className="lg:w-1/2 w-full bg-gray-700 p-6 rounded-lg text-white">
            <Testimonials />
          </div>
        </div>
      </div>
      <GallerySlider />
    </div>
  );
};

export default Home;
