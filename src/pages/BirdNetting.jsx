import React from "react";
import birdNettingService from "../components/data/Birdnetting";
import { Link } from "react-router-dom";
import { FcCellPhone } from "react-icons/fc";

const BirdNetting = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#ac00b7] text-white h-60 lg:h-[70vh]">
        <img
          src="/assets/BirdNetting/Bird Netting4.jpg"
          alt="Pest Control Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-8 flex flex-col items-center lg:pt-48">
          <nav className="flex space-x-4 text-sm">
            <Link to="/" className="text-white hover:text-gray-100 font-bold">
              Home
            </Link>
            <span className="text-white hover:text-gray-100 font-bold">/</span>
            <Link
              to="/bird-netting-service-details"
              className="text-white hover:text-gray-100 font-bold"
            >
              Bird Netting
            </Link>
          </nav>
          <h1 className="text-2xl lg:text-4xl font-bold mt-4 text-white hover:text-gray-100">
            All Bird Netting Services
          </h1>
        </div>
      </div>
      <div className="px-4 py-6 md:px-10 lg:px-20">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-center text-[#ac00b7] mb-4">
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
        <div className="space-y-6 ">
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
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {birdNettingService.benefits.map((benefit, index) => (
              <li key={index} className="text-[#ac00b7]">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row p-6 lg:p-10 gap-6 items-center justify-center">
          {/* Image Section */}
          <div className="w-full lg:w-7/12 p-2">
            <img
              src={birdNettingService.image3}
              alt={birdNettingService.title}
              className="w-full max-h-96 object-cover mb-6 rounded-lg"
            />
          </div>

          {/* Call Button Section */}
          <div className="w-full lg:w-7/12 relative">
            {/* Green background layer */}
            <div className="absolute inset-0 bg-[#ac00b7] rounded-lg"></div>
            {/* Image with reduced opacity */}
            <img
              src="/assets/call-image/bg.jpg"
              alt="Call Now"
              className="w-full max-h-80 object-cover opacity-20 rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Call icons here */}
              <div className="text-center items-center justify-center">
                <div className="flex items-center justify-center">
                  <FcCellPhone className="bg-blue-100 p-1 rounded-full text-8xl" />
                </div>
                <h2 className="text-white font-bold text-3xl my-3">
                  Best Solution For {birdNettingService.title}
                </h2>
                <Link
                  to="tel:+91 9538556080"
                  className="text-white font-bold text-xl bg-black bg-opacity-50 px-4 py-2 rounded"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirdNetting;
