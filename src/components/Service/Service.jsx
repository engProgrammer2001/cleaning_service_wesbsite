import React from "react";
import { useNavigate } from "react-router-dom";

import ServicesData from "../data/ServiceData";

const Service = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-90 "
      >
        <source src="/assets/video/kv1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#061326] opacity-50"></div>

      {/* Content */}
      <div className="relative p-4 max-w-7xl mx-auto">
        <div className="my-8">
          <h2 className="text-3xl text-[#ac00b7] font-bold">
            Popular Residential Cleaning Services in Bangalore
          </h2>
          <p className="my-4 text-slate-100 text-lg">
            Kunamy Solutions provides world-class home cleaning services with a
            flexible pricing option. We have a group of certified home cleaners
            in Bangalore.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              className="common-blue-bg text-center p-4 rounded-lg cursor-pointer hover:bg-blue-600"
              onClick={() => handleRedirect(service.path)}
            >
              <div className="flex bg-gray-100 p-6 text-[#00a5ea] justify-center items-center rounded-full text-7xl mb-2">
                {service.icon}
              </div>
              <div className="font-medium text-2xl text-white">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
