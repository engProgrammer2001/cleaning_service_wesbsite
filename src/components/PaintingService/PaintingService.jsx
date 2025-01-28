import React from "react";
import { useNavigate } from "react-router-dom";
import PaintingServiceData from "../data/PaintingServiceData";

const PaintingService = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="">
        <h2 className="text-3xl text-[#ac00b7] font-bold">
          Popular Painting Services in Bangalore
        </h2>
        <p className="my-4 text-slate-800 text-lg">
          Kunamy Solutions provides world-class home painting services with a
          flexible pricing option. We have a team of certified painters in
          Bangalore, ensuring a flawless and vibrant finish for your home.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {PaintingServiceData.map((service) => (
          <div
            key={service.id}
            className="common-blue-bg text-center p-4 rounded-lg cursor-pointer hover:bg-blue-200"
            onClick={() => handleRedirect(service.path)}
          >
            <div className="flex justify-center items-center bg-gray-100 p-6 text-[#00a5ea] rounded-full text-5xl mb-2">
              {service.icon}
            </div>
            <div className="font-medium text-2xl">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintingService;
