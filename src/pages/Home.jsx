import React from "react";
import Hero from "../components/Hero/Hero";
import AboutComponents from "../components/AboutComponents/AboutComponents";
import Service from "../components/Service/Service";
import PaintingService from "../components/PaintingService/PaintingService";
import Faq from "../components/Faq/Faq";
import Testimonials from "../components/Testimonials/Testimonials";
import EnqueryForm from "../components/EnqueryForm/EnqueryForm";
import GallerySlider from "../components/GallerySlider/GallerySlider";
import TimeFrame from "../components/TimeFrame/TimeFrame";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutComponents />
      <Service />
      <PaintingService />
      <EnqueryForm />
      <div>
        <div>
          <TimeFrame />
        </div>
        <div>
          <Faq />
        </div>
      </div>
      {/* testimonial section  */}
      <div className="bg-blue-100 p-6 my-4">
        <h2 className="text-center text-3xl text-[#ac00b7] font-bold underline">
          What Our Clients Say
        </h2>
        <div className="flex flex-col lg:flex-row my-10 gap-6">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img
              src="/assets/gallery/k11.jpeg"
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
