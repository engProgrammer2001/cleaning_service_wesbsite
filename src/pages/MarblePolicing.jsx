import React from "react";
import { Link, useNavigate } from "react-router-dom";
import marblePolishingService from "../components/data/marblePolishingService";

const MerblePolicing = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/merble-policing-service/${id}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-60 lg:h-[70vh]">
        <img
          src="/assets/gallery/k16.jpeg"
          alt="Pest Control Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-8 flex flex-col items-center lg:pt-48">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-white hover:text-gray-100 font-bold">
              Home
            </Link>
            <span className="text-slate-800 font-bold">/</span>
            <Link
              to="/merble-policing-service"
              className="text-white hover:text-gray-100 font-bold"
            >
              Marble Policing
            </Link>
          </nav>
          <h1 className="text-2xl lg:text-4xl font-bold mt-4 text-white hover:text-gray-100">
            All Merble Policing Services
          </h1>
        </div>
      </div>
      {/* Services */}
      <div className="p-5 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {marblePolishingService.map((service) => (
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
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerblePolicing;
