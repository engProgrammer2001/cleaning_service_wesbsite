import React from "react";
import birdNettingService from "../components/data/Birdnetting";
import { Link } from "react-router-dom";

const BirdNetting = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[50vh]">
        <img
          src="/assets/pestcontrol/pestcontrol.webp"
          alt="Pest Control Background"
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
              to="/pest-control"
              className="text-slate-800 hover:text-slate-900 font-bold"
            >
              Pest Control
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4 text-slate-800 hover:text-slate-900">
            All Pest Control Services
          </h1>
        </div>
      </div>
      <div className="px-4 py-6 md:px-10 lg:px-20">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {birdNettingService.title}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {birdNettingService.shortDescription}
        </p>

        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            birdNettingService.image,
            birdNettingService.image1,
            birdNettingService.image2,
            birdNettingService.image3,
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Bird Netting ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Description Section */}
        <div className="space-y-6 text-gray-700">
          {[
            birdNettingService.description,
            birdNettingService.description1,
            birdNettingService.description2,
          ].map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Benefits
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {birdNettingService.benefits.map((benefit, index) => (
              <li key={index} className="text-gray-700">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BirdNetting;
