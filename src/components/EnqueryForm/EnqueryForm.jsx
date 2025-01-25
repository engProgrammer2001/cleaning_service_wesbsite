import React from "react";

const EnqueryForm = () => {
  return (
    <div className="relative mx-auto w-full h-auto my-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/home/bg1.jpg')" }} // Replace with your image path
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contact Form Aligned to the Left */}
      <div className="relative z-10 flex flex-col justify-start items-start w-full h-full text-slate-800 py-16 px-4 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-2 text-center text-white">
          Book Your Appointment
        </h1>

        {/* Form Section */}
        <form className="w-full max-w-lg text-yellow-500 font-bold p-8 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Your Number
            </label>
            <input
              type="number"
              id="number"
              placeholder="+91 XXXXXXXXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Choose Date
            </label>
            <input
              type="date"
              id="date"
              placeholder="DD/MM/YYYY"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnqueryForm;
