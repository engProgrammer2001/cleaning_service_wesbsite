import React from "react";
import { Link, useParams } from "react-router-dom";
import { FcCellPhone } from "react-icons/fc";
import GallerySlider from "../GallerySlider/GallerySlider";

const PaintingServiceDetails = ({ paintingServices }) => {
  const { id } = useParams();
  const service = paintingServices.find((item) => item.id === parseInt(id));

  return (
    <div>
      <div className="flex flex-col lg:flex-row p-6 lg:p-10 gap-6">
        {/* Left Section: Service Details */}
        <div className="w-full lg:w-7/12 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {service.title}
          </h1>
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-h-96 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-700 leading-relaxed mb-4">
            {service.shortDescription}
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Full Description
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {service.description}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            {service.description1}
          </p>
          <img
            src={service.image2}
            alt={service.title}
            className="w-full max-h-96 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-600 leading-relaxed">
            {service.description2}
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
            Benefits
          </h3>
          <ul className="list-disc pl-6 text-gray-600">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="mb-2">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        {/* Right Section: All Service Titles */}
        <div className="w-full lg:w-5/12 bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            All Services
          </h2>
          <ul>
            {paintingServices.map((item) => (
              <li
                key={item.id}
                className={`mb-4 p-4 rounded-lg border-2 cursor-pointer transition duration-200 hover:bg-blue-100 ${
                  item.id === service.id
                    ? "bg-gray-200 border-gray-400"
                    : "border-gray-300"
                }`}
              >
                <Link to={`/painting-service-details/${item.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-6 lg:p-10 gap-6 items-center justify-center">
        {/* Image Section */}
        <div className="w-full lg:w-7/12 p-6">
          <img
            src={service.image3}
            alt={service.title}
            className="w-full max-h-96 object-cover mb-6 rounded-lg"
          />
        </div>

        {/* Call Button Section */}
        <div className="w-full lg:w-7/12 relative">
          {/* Green background layer */}
          <div className="absolute inset-0 bg-[#28a745] rounded-lg"></div>
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
                Best Solution For {service.title}
              </h2>
              <Link
                to="tel:+91 1234567890"
                className="text-white font-bold text-xl bg-black bg-opacity-50 px-4 py-2 rounded"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Image gallery section */}
      <div className="my-4">
        <GallerySlider />
      </div>
    </div>
  );
};

export default PaintingServiceDetails;
