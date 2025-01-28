import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    data: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", number: "", email: "", data: "", service: "" });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md lg:max-w-5xl">
        <form onSubmit={handleSubmit}>
          {/* Name and Number Fields on Large Devices in a Single Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 mb-2 text-lg font-bold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Number Field */}
            <div>
              <label className="block text-gray-700 mb-2 text-lg font-bold" htmlFor="number">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          {/* Email and Service Fields on Large Devices in a Single Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 mb-2 text-lg font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Service Field */}
            <div>
              <label className="block text-gray-700 mb-2 text-lg font-bold" htmlFor="service">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a service</option>
                <option value="Full House Cleaning">Full House Cleaning</option>
                <option value="Bathroom Cleaning">Bathroom Cleaning</option>
                <option value="Kitchen cleaning">Kitchen cleaning</option>
                <option value="Carpet cleaning">Carpet cleaning</option>
                <option value="Sofa cleaning">Sofa cleaning</option>
                <option value="Matress cleaning">Matress cleaning</option>
                <option value="Balcony cleaning">Balcony cleaning</option>
                <option value="Chair cleaning">Chair cleaning</option>
                <option value="Office cleaning">Office cleaning</option>
                <option value="Swiming pool cleaning">
                  Swiming pool cleaning
                </option>
                <option value="Windows cleaning">Windows cleaning</option>
              </select>
            </div>
          </div>

          {/* Data Field (Message) */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-lg font-bold" htmlFor="data">
              Additional Information
            </label>
            <textarea
              id="data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter additional details"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#ac00b7] text-white p-3 rounded-full font-semibold  transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
