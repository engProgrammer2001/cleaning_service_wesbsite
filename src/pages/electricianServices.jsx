import React from "react";
import CleaningServiceData from "../components/data/CleaningServiceData";
import { Link, useNavigate } from "react-router-dom";
import ElectricianServicesData from "../components/data/electricianServicesData";

const ElectricianServices = () => {
  const navigate = useNavigate();

  // Navigate to details page with the correct id
  const handleClick = (id) => {
    navigate(`/electrician-service-details/${id}`);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-60 lg:h-[70vh]">
        <img
          src="/assets/ElectronincServices/Electrician Services1.jpg"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-8 flex flex-col items-center lg:pt-48">
          <nav className="flex space-x-4 text-sm">
            <Link
              to="/"
              className="text-slate-800 hover:text-slate-900 font-bold"
            >
              Home
            </Link>
            <span className="text-slate-800 font-bold">/</span>
            <Link
              to="/electrician-service"
              className="text-slate-800 hover:text-slate-900 font-bold"
            >
              Electroninc Service
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4 text-slate-800 hover:text-slate-900">
            All Electroninc Services
          </h1>
        </div>
      </div>
      {/* Service List */}
      <div className="p-5 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {ElectricianServicesData.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">
                {service.shortDescription}
              </p>
            </div>
            <div className="p-4">
              <button
                onClick={() => handleClick(service.id)}
                className="w-full bg-[#ac00b7] hover:bg-[#7d0086] text-white font-bold py-2 px-4 rounded-full"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ElectricianServices;
