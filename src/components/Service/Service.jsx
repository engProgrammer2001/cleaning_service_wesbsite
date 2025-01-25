import React from "react";
import { useNavigate } from "react-router-dom";

import ServicesData from "../data/ServiceData";

const Service = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="my-8">
        <h2 className="text-3xl text-slate-800 font-bold">
          Popular Residential Cleaning Services in Bangalore
        </h2>
        <p className="my-4 text-slate-800 text-lg">
          Kunamy Solutions provides world-class home cleaning services with a
          flexible pricing option. We have a group of certified home cleaners in
          Bangalore.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {ServicesData.map((service) => (
          <div
            key={service.id}
            className="bg-blue-100 text-slate-800 text-center p-4 rounded-lg cursor-pointer hover:bg-blue-200"
            onClick={() => handleRedirect(service.path)}
          >
            <div className="flex justify-center items-center text-yellow-500 text-5xl mb-2">
              {service.icon}
            </div>
            <div className="font-medium text-lg">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
