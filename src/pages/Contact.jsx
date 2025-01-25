import React from "react";
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

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white h-[50vh]">
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
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 hover:text-slate-900 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-4">
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
                  className="mt-1 text-indigo-800 font-semibold border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 text-indigo-800 font-semibold border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              {/* Service Field */}
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="service">
                  Service<span className="text-red-600">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={""}
                  onChange={""}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Full House Cleaning">
                    Full House Cleaning
                  </option>
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
                  className="mt-1 text-indigo-800 font-semibold border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:px-24 px-6 py-12">
            {/* Contact Information */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-600 text-2xl" />
                <span>
                  <strong>Address:</strong> 1234 Street Name, City, State,
                  Country
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-900 text-2xl" />
                <span>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-500 text-2xl" />
                <span>
                  <strong>Whatsapp:</strong> +1 (123) 456-7890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 text-2xl" />
                <span>
                  <strong>Email:</strong> contact@example.com
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
            <h3 className="text-2xl font-bold text-gray-900 my-6">
              Social Media Links
            </h3>
            <ul className="flex flex-row space-x-5 text-gray-900">
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
        <h3 className="text-4xl py-2 font-bold text-gray-900 mb-4 text-center">
          Our Location
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093647!2d144.95373531531906!3d-37.81627937975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8c3e3267e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1618228012765!5m2!1sen!2sau"
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
