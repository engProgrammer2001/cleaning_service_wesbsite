import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLock,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="py-8 relative common-black-bg">
        <div className="container mx-auto px-4">
          {/* First Row with 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#ac00b7]">
                About Us
              </h3>
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
              <h3 className="text-2xl font-semibold mb-4 text-[#ac00b7]">
                Our Services
              </h3>
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
              <h3 className="text-2xl font-semibold mb-4 text-[#ac00b7]">
                Quick Links
              </h3>
              <ul className="text-lg space-y-4">
                <li>
                  <Link to="/" className="hover:text-[#ac00b7]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#ac00b7]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#ac00b7]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#ac00b7]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#ac00b7]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="hover:text-[#ac00b7]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#ac00b7]">
                Contact
              </h3>
              <p className="text-lg">
                <span className="font-semibold text-[#ac00b7]">Address : </span>
                Residing At No. 17, 4th Cross, Church Road, Murgeshpalya,
                Bangalore-560017. Hereinafter called as the 'OWNERS/LESSORS' of
                the One Part
              </p>
              <p className="text-lg">
                <span className="font-semibold text-[#ac00b7]">Email : </span>
                info@kunamy.com
              </p>
              <p className="text-lg">
                <span className="font-semibold text-[#ac00b7]">Phone :</span>{" "}
                +91 9538556080
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
                  href="https://www.youtube.com/@omprakashbridalmehandi5927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full transform transition-all duration-100 hover:scale-110"
                >
                  <FaYoutube className="text-3xl text-red-600 cursor-pointer" />
                </a>
              </div>
              <div className="flex items-center space-x-2 border mt-11 border-gray-700 rounded p-2">
                <FaLock className="text-[#ac00b7] text-4xl" />
                <span className="font-bold">
                  SSL Encryption <br /> secure connection
                </span>
              </div>
              <div className="flex items-center space-x-2 border mt-11 border-gray-700 rounded p-2">
                <FaLock className="text-[#ac00b7] text-4xl" />
                <span className="font-bold">
                  Certificate No. - IN-KA27493048473215X
                </span>
              </div>
            </div>
          </div>
          {/* Service location */}
          <div className="my-8">
            <p className="text-lg text-[#ac00b7] space-x-5">
              Bannerghatta road | Banashankari | Bellandur | BTM layout |
              Electronic City | Frazer town | HBR layout | Hebbal | Hosur road |
              HRBR layout | HSR layout | Indranagar | Jayanagar | JP nagar |
              Kadugodi | Kasturi Nagar | Karamangala | Madiwala | Marathahalli |
              Richmond town | Sarjapur | Whitefield | Yelahanka | RT Nagar | RR
              nagar | Kalyan Nagar | Chikkbanavara | Kengeri | Horamavu |
              Vijayanagar | Yeshwantpur | Jalahalli | Santinagar | Hennur |
              Sadashiva nagar | Basavanagudi | Malleshwaram | Uttarahalli |
              Dasharahalli | Ulsoor | Benson town | Basaveshwara nagar | Jakkur
              | Sahakar Nagar | Mathikere | Banaswadi | KR puram | Balaji nagar
              | Sanjay nagar | Mahadevapura | Nagarbhavi
            </p>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved. Developed
              by
              <a
                href="https://divywebb.com/"
                className="text-[#ac00b7] font-bold"
              >
                Divy Webb Creation
              </a>
            </p>
          </div>
        </div>

        {/* Fixed WhatsApp and Call Icons */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50">
          <a
            href="https://wa.link/m5e3qg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 animate-bounce"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </a>
          <a
            href="tel:+919538556080"
            className="bg-blue-500 p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 animate-bounce"
          >
            <FaPhone className="text-white text-2xl" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
