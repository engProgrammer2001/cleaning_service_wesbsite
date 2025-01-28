import React, { useState } from "react";
import FormServiceData from "../data/FormServiceData";

const BookYourAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    date: "",
    timing: "",
    service: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "8a72b8b3-3dc1-4144-8cac-35e2252d592a",
        ...formData,
      }),
    });

    if (response.ok) {
      setSuccessMessage("Your appointment request has been sent successfully!");
      setFormData({
        name: "",
        number: "",
        date: "",
        timing: "",
        service: "",
        email: "",
        message: "",
      });
      setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2 text-center text-[#ac00b7]">
        Book Your Appointment
      </h1>

      {/* Success Message */}
      {successMessage && (
        <div className="text-center text-green-500 font-semibold mb-4">
          {successMessage}
        </div>
      )}
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl text-yellow-500 font-bold p-8 bg-[#ac00b7] rounded-lg shadow-lg"
      >
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
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Number Field */}
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
            value={formData.number}
            onChange={handleChange}
            placeholder="+91 XXXXXXXXXX"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Date Field */}
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
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Timing Field */}
        <div className="mb-4">
          <label
            htmlFor="timing"
            className="block text-sm font-semibold mb-2 text-white"
          >
            Choose Timing
          </label>
          <input
            type="time"
            id="timing"
            value={formData.timing}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Service Field */}
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-sm font-semibold mb-2 text-white"
          >
            Choose Service
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            {FormServiceData.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-[#ac00b7] font-semibold py-3 px-6 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookYourAppointment;
