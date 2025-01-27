import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLock } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-8 relative common-black-bg">
        <div className="container mx-auto px-4">
          {/* First Row with 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              {/* Logo */}
              <div>
                <NavLink to="/">
                  <img
                    src="/assets/logo/logo.png"
                    alt="Logo"
                    className="w-24 rounded-full cursor-pointer"
                  />
                </NavLink>
              </div>
              <p className="text-lg">
                Kunamy Cleaning Services offers a wide range of professional
                cleaning services to keep your home and office spotless. From
                full house cleaning to specialized services such as sofa and
                carpet cleaning, we ensure the highest quality and customer
                satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
              <ul className="text-lg space-y-2">
                <li className="text-lg font-bold underline">
                  Cleaning Services
                </li>
                <li>Full House Cleaning</li>
                <li>Bathroom Cleaning</li>
                <li>Kitchen Cleaning</li>
                <li>Carpet Cleaning</li>
                <li>Sofa Cleaning</li>
                <li>Matress Cleaning</li>
                <li>Balcony Cleaning</li>
                <li>Chair Cleaning</li>
                <li>Office Cleaning</li>
                <li>Swimming Pool Cleaning</li>
                <li>Windows Cleaning</li>
                <li className="text-lg font-bold underline">
                  Painting Services
                </li>
                <li>Interior Painting</li>
                <li>Exterior Painting</li>
                <li>Wood Polishing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-lg space-y-4">
                <li>
                  <Link to="/" className="hover:text-yellow-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-yellow-500">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-yellow-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-yellow-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-conditions"
                    className="hover:text-yellow-500"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="text-lg">
                <span className="font-semibold text-orange-400">
                  Address :{" "}
                </span>
                B nagasandra,challaghatta,yemlur (post) Bangalore,Karnataka,
                560073
              </p>
              <p className="text-lg">
                <span className="font-semibold text-orange-400">Email : </span>
                info@kunamy.com
              </p>
              <p className="text-lg">
                <span className="font-semibold text-orange-400">Phone :</span>{" "}
                +91 7899643609
              </p>
              <h2 className="py-3 font-bold text-lg underline">
                Social Media Links:
              </h2>
              <div className="flex space-x-4 items-start mt-2">
                <a
                  href="https://www.facebook.com/kunamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
                >
                  <FaFacebook className="text-3xl text-blue-500 cursor-pointer" />
                </a>
                <a
                  href="https://www.instagram.com/kunamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
                >
                  <FaInstagram className="text-3xl text-red-400 cursor-pointer" />
                </a>
                <a
                  href="https://www.youtube.com/c/kunamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
                >
                  <FaYoutube className="text-3xl text-red-600 cursor-pointer" />
                </a>
              </div>
              <div className="flex items-center space-x-2 border mt-11 border-gray-700 rounded p-2">
                <FaLock className="text-blue-500 text-4xl" />
                <span className="font-bold">
                  SSL Encryption <br /> secure connection
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved. Developed
              by
              <a
                href="https://divywebb.com/"
                className="text-orange-400 font-bold"
              >
                Divy Webb Creation
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
