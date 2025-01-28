import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FormServiceData from "../components/data/FormServiceData";

const Contact = () => {
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
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
      {/* Hero Section */}
      <div className="relative bg-slate-500 text-white h-[50vh]">
        <img
          src="https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139102.jpg?t=st=1736578107~exp=1736581707~hmac=aa5f090b7c60df4e534add4223e015e84526629f4bab23d965f7c26e3969d8cc&w=1800"
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-8 flex flex-col items-center lg:pt-40">
          <nav className="flex space-x-4 text-sm">
            <a href="/" className="text-gray-300 hover:text-white font-bold">
              Home
            </a>
            <span className="text-gray-300 font-bold">/</span>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white font-bold"
            >
              Contact Us
            </a>
          </nav>
          <h1 className="text-4xl font-bold mt-4 text-white">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Form */}
          <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-[#ac00b7] hover:text-[#7e1186] mb-6">
              Get in Touch
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 text-indigo-800 font-semibold border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 text-indigo-800 font-semibold border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Service Field */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold mb-2 text-gray-700"
                >
                  Choose Service<span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a service</option>
                  {FormServiceData.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 text-indigo-800 font-semibold border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ac00b7] text-white py-2 px-4 rounded-md hover:bg-[#7a0083]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:px-24 px-6 py-12">
            {/* Contact Information */}
            <h2 className="text-3xl font-bold text-[#ac00b7] mb-6">
              Contact Information
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-600 text-2xl" />
                <span>
                  <strong>Address:</strong> Residing At No. 17, 4th Cross,
                  Church Road, Murgeshpalya, Bangalore-560017. Hereinafter
                  called as the 'OWNERS/LESSORS' of the One Part
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-900 text-2xl" />
                <span>
                  <strong>Phone:</strong> +91 9538556080
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-500 text-2xl" />
                <span>
                  <strong>Whatsapp:</strong> +91 9538556080
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 text-2xl" />
                <span>
                  <strong>Email:</strong> info@example.com
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-yellow-500 text-2xl" />
                <span>
                  <strong>Working Hours:</strong> Mon - Fri, 9 AM - 6 PM
                </span>
              </li>
            </ul>

            {/* Social Media Links */}
            <h3 className="text-2xl font-bold text-[#ac00b7] my-6">
              Social Media Links
            </h3>
            <ul className="flex flex-row space-x-5 text-[#ac00b7]">
              <li>
                <Link
                  to="/instagram"
                  className="text-3xl text-red-500 hover:text-red-500"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  to="/facebook"
                  className="text-3xl text-blue-500 hover:text-blue-600"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  to="/youtube"
                  className="text-3xl text-red-500 hover:text-red-600"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link
                  to="/linkedin"
                  className="text-3xl text-blue-500 hover:text-blue-700"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-gray-100 p-4">
        <h3 className="text-4xl py-2 font-bold text-[#ac00b7] mb-4 text-center">
          Our Location
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4110.989916537394!2d77.6525704750762!3d12.957326687356714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1738049370462!5m2!1sen!2sin"
          title="Google Maps"
          width={"100%"}
          className="w-full h-96 shadow-lg rounded-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
