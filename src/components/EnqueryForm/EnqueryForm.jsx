import React from "react";
import BookYourAppointment from "../BookYourAppointment/BookYourAppointment";

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
      <div className="relative z-10 flex flex-col justify-start items-start min-w-3xl h-full text-slate-800 py-16  lg:px-8">
        <BookYourAppointment />
      </div>
    </div>
  );
};

export default EnqueryForm;
