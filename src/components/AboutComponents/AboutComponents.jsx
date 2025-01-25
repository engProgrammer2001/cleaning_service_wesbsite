import React from "react";

const AboutComponents = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:p-12 bg-blue-50">
      {/* Left Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left space-y-4 p-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
          About Us
        </h1>
        <p className="text-gray-600">
          Along with cleaning services Clean Fanatics offers various home
          services like pest control, marble polishing, grouting, waterproofing,
          and civil work services.Top-class reliable Full Home Cleaning services
          at your convenience in Bangalore, India.{" "}
          <span className="text-lg text-yellow-500">
            * Trained professionals * Best prices.
          </span>
        </p>
        <p className="text-gray-600">
          kunamy is one of the best on-demand home servicing platform and we are
          currently operating in Bengaluru, We undertake some of the services
          like
          <ul class="list-disc pl-6 space-y-2 mt-4 text-left">
            <li class="text-sm">Full House Cleaning</li>
            <li class="text-sm">Bathroom Cleaning</li>
            <li class="text-sm">Kitchen Cleaning</li>
            <li class="text-sm">Carpet Cleaning</li>
            <li class="text-sm">Sofa Cleaning</li>
            <li class="text-sm">Mattress Cleaning</li>
            <li class="text-sm">Balcony Cleaning</li>
            <li class="text-sm">Chair Cleaning</li>
            <li class="text-sm">Office Cleaning</li>
            <li class="text-sm">Swimming Pool Cleaning</li>
            <li class="text-sm">Windows Cleaning</li>
          </ul>
        </p>
      </div>

      {/* Right Image */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="flex justify-center">
          <img
            src="/assets/gallery/k4.jpeg"
            alt="cleaning service"
            className="rounded-lg shadow-lg max-w-full h-96"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/gallery/k9.jpeg"
            alt=""
            className="rounded-lg shadow-lg max-w-full h-96"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/gallery/k2.jpeg"
            alt="bathroom clean images"
            className="rounded-lg shadow-lg max-w-full h-96"
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/gallery/k5.jpeg"
            alt="fourth images"
            className="rounded-lg shadow-lg max-w-full h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutComponents;
