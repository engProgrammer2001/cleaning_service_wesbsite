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
    <nav className="bg-blue-100 text-slate-800 relative z-50">
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
          className={`fixed md:static top-0 left-0 w-full md:h-auto bg-blue-100 md:bg-transparent md:flex md:items-center md:space-x-6 md:py-0 px-3 font-semibold py-10 transform ${
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
              className={`absolute bg-blue-100 border border-slate-800 text-sm mt-2 rounded shadow-md w-56 z-50 ${
                isSubmenuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/cleaning-service"
                  className="block px-4 border-b border-gray-900 py-2 hover:bg-gray-200 text-left"
                  onClick={closeMenus}
                >
                  Cleaning Service
                </Link>
              </li>
              <li>
                <Link
                  to="/painting-service"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-gray-200 text-left"
                  onClick={closeMenus}
                >
                  Painting Service
                </Link>
              </li>
              <li>
                <Link
                  to="/pest-service"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-gray-200 text-left"
                  onClick={closeMenus}
                >
                  Pest control Service
                </Link>
              </li>
              <li>
                <Link
                  to="/civil-works"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-gray-200 text-left"
                  onClick={closeMenus}
                >
                  Civil works
                </Link>
              </li>
              <li>
                <Link
                  to="/marble-polishing "
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-gray-200 text-left"
                  onClick={closeMenus}
                >
                  Marble polishing
                </Link>
              </li>
              <li>
                <Link
                  to="/bird-netting"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-gray-200 text-left"
                  onClick={closeMenus}
                >
                  Bird netting
                </Link>
              </li>
              <li>
                <Link
                  to="/plumber"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-gray-200 text-left"
                  onClick={closeMenus}
                >
                  Plumber
                </Link>
              </li>
              <li>
                <Link
                  to="/ electrician"
                  className="block px-4 py-2 border-b border-gray-900 hover:bg-gray-200 text-left"
                  onClick={closeMenus}
                >
                  Electrician
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
