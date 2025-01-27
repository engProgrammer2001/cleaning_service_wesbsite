import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Toggles the main menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggles the Services submenu
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Closes both main menu and submenu
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSubmenuOpen(false);
  };
  return (
    <nav className="common-blue-bg relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <div className="text-2xl font-bold">
          <Link to={"/"}>
            <img src="/assets/logo/logo.png" className="w-24" alt="Logo" />
          </Link>
        </div>
        {/* Toggle button for mobile */}
        <button className="md:hidden text-3xl" onClick={toggleMenu}>
          ☰
        </button>
        {/* Main Menu */}
        <ul
          className={`fixed md:static top-0 left-0 w-full md:h-auto common-blue-bg md:bg-transparent md:flex md:items-center md:space-x-6 md:py-0 px-3 font-semibold py-10 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-500`}
        >
          {/* Close button for mobile */}
          <li className="md:hidden text-right pr-4">
            <button onClick={toggleMenu} className="text-2xl text-slate-800">
              ✖
            </button>
          </li>
          <li className="py-2 md:py-0  px-3">
            <Link to="/" className="hover:text-slate-700" onClick={closeMenus}>
              Home
            </Link>
          </li>
          {/* Services with Submenu */}
          <li className="relative py-2 md:py-0 px-3 font-semibold">
            <button
              className="hover:text-slate-700 flex items-center"
              onClick={toggleSubmenu}
            >
              Services ▼
            </button>
            <ul
              className={`absolute common-blue-bg border border-slate-800 text-sm mt-2 rounded shadow-md w-56 z-50 ${
                isSubmenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/cleaning-service"
                  className="block px-4 border-b border-gray-900 py-2 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Cleaning Service
                </Link>
              </li>
              <li>
                <Link
                  to="/painting-service"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Painting Service
                </Link>
              </li>
              <li>
                <Link
                  to="/pest-control-service"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Pest control Service
                </Link>
              </li>
              <li>
                <Link
                  to="/civil-work-service"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Civil works
                </Link>
              </li>
              <li>
                <Link
                  to="/merble-policing-service"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Marble polishing
                </Link>
              </li>
              <li>
                <Link
                  to="/bird-netting-service-details"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Bird netting
                </Link>
              </li>
              <li>
                <Link
                  to="/plumber-service"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Plumber
                </Link>
              </li>
              <li>
                <Link
                  to="/electrician-service"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Electrician
                </Link>
              </li>
              <li>
                <Link
                  to="/swimming-pool-cleaning"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-blue-600 text-left"
                  onClick={closeMenus}
                >
                  Swimming Pool Cleaing
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-2 md:py-0 px-3 font-semibold">
            <Link
              to="/about"
              className="hover:text-slate-700"
              onClick={closeMenus}
            >
              About Us
            </Link>
          </li>
          <li className="py-2 md:py-0 px-3 font-semibold">
            <Link
              to="/blog"
              className="hover:text-slate-700"
              onClick={closeMenus}
            >
              Blog
            </Link>
          </li>
          <li className="py-2 md:py-0 px-3 font-semibold">
            <Link
              to="/gallery"
              className="hover:text-slate-700"
              onClick={closeMenus}
            >
              Our Work Gallery
            </Link>
          </li>
          <li className="py-2 md:py-0 px-3 font-semibold">
            <Link
              to="/refer-friend"
              className="hover:text-slate-700"
              onClick={closeMenus}
            >
              Refer a Friend
            </Link>
          </li>
          <li className="py-2 md:py-0 px-3 font-semibold">
            <Link
              to="/contact"
              className="hover:text-slate-700"
              onClick={closeMenus}
            >
              Contact Us
            </Link>
          </li>
          <li className="border p-2 border-gray-700 rounded-lg">
            <Link to="tel: 9538556080">+91 9538556080</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
