import React from "react";
import { Link } from "react-router-dom";
import AboutComponents from "../components/AboutComponents/AboutComponents";
import CountUpSection from "../components/CountUpSection/CountUpSection";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[50vh]">
        <img
          src="https://www.santacleaningservices.com/img/service/2-1.jpg"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-8 flex flex-col items-center lg:pt-48">
          <nav className="flex space-x-4 text-sm">
            <Link
              to="/"
              className="text-slate-800 hover:text-slate-900 font-bold"
            >
              Home
            </Link>
            <span className="text-slate-800 font-bold">/</span>
            <Link
              to="/contact"
              className="text-slate-800 hover:text-slate-900 font-bold"
            >
              About Us
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4 text-slate-800 hover:text-slate-900">
            Know About Company
          </h1>
        </div>
      </div>
      <AboutComponents />
      <CountUpSection/>
      <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-100 text-slate-700 p-4">
        <h1 className="text-center text-2xl font-bold">Kunamy Vission & Mission</h1>
        <p className="text-center text-sm">
          Home Cleaning | Home Painting | Home Services
        </p>
      </header>

      {/* Vision Section */}
      <section className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUA00mFkwYpfwkmxmpQT11y1RRETmvKh56kqqRU9Q4w6dFiimKLTlIqWaaFCFuxDuGP0w&usqp=CAU"
            alt="Vision"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Kunamy, our vision is to create a harmonious living experience
              by providing top-notch home cleaning, painting, and related
              services. We aim to make every home a beautiful, clean, and
              stress-free environment that truly feels like a sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 ">
          {/* Image */}
          <img
            src="https://www.awpem.com/assets/img/about/mission-awpem.png"
            alt="Mission"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to deliver exceptional and reliable home services
              that enhance your lifestyle. From deep cleaning to professional
              painting, we ensure unparalleled quality, trust, and customer
              satisfaction, making your home the perfect space for you and your
              loved ones.
            </p>
          </div>
        </div>
      </section>

      
    </div>
    </div>
  );
};

export default About;
