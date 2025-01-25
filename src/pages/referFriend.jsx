import React, { useState } from "react";
import GallerySlider from "../components/GallerySlider/GallerySlider";

const ReferFriend = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    registeredPhone: "",
    email: "",
    friendName: "",
    friendPhone: "",
    location: "",
    friendLocation: "",
    date: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic here
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[50vh] flex items-center justify-center">
        <img
          src="/assets/refer/refer.png"
          alt="Refer Friend Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          style={{ filter: "blur(1px)" }}
        />
        <h1 className="relative text-3xl md:text-5xl font-bold">
          Refer a Friend
        </h1>
      </div>
      <div className="flex flex-col my-8 md:flex-row items-center md:items-start justify-between gap-4 p-4">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 p-2">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900">
            Professional Home Cleaning Services Refer
          </h1>
          <p className="text-gray-700">
            Transform your living spaces with our exceptional home cleaning
            services. We specialize in thorough and efficient cleaning, ensuring
            every corner of your home sparkles. Whether it’s a one-time deep
            clean, regular maintenance, or post-renovation cleaning, our skilled
            team is here to make your home a haven of cleanliness and comfort.
          </p>
          <p className="text-gray-700">
            Exciting Offer! Refer our services to your friends, family, or
            anyone you know, and both you and the referred person will receive a
            <strong>10% discount</strong> on your next cleaning service. This
            offer is valid for a limited period of <strong>one month</strong>,
            so don’t miss out on the chance to save while enjoying a spotless
            home.
          </p>
          <p className="text-gray-700">
            Why choose our services? We use eco-friendly products, offer
            flexible scheduling to suit your busy lifestyle, and ensure 100%
            satisfaction with our meticulous attention to detail. Your health
            and happiness are our top priorities, and our dedicated team works
            tirelessly to deliver results you can see and feel.
          </p>
          <p className="text-gray-700">
            Experience the joy of walking into a perfectly clean and fresh home,
            without lifting a finger. Book our services today and take the first
            step toward a cleaner, healthier living environment. Let us take
            care of the cleaning, so you can focus on what truly matters to you.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Comprehensive cleaning services tailored to your needs.</li>
            <li>
              Eco-friendly and safe cleaning products for a healthier home.
            </li>
            <li>Flexible scheduling options to fit your busy lifestyle.</li>
            <li>
              100% satisfaction guarantee with meticulous attention to detail.
            </li>
            <li>
              Exclusive referral program offering 10% off for both you and your
              friends.
            </li>
          </ul>
        </div>

        {/* Right Side: Images */}
        <div className="w-full md:w-1/2 flex flex-wrap gap-4 justify-center">
          {/* First Row */}
          <div className="w-full flex justify-center gap-4">
            <img
              src="https://media.istockphoto.com/id/1365606525/photo/shot-of-a-bucket-of-cleaning-supplies.jpg?s=612x612&w=0&k=20&c=_Xz3e-_WGlQC2zXstHaK_AI9N76LNag_KbRioNlM1hQ="
              alt="Placeholder 1"
              className="w-1/2 rounded shadow"
            />
            <img
              src="https://www.healthyhomesutah.com/wp-content/uploads/Professional-House-Cleaning-Services-in-North-Ogden-Utah.jpg"
              alt="Placeholder 2"
              className="w-1/2 rounded shadow"
            />
          </div>

          {/* Second Row */}
          <div className="w-full flex justify-center gap-4">
            <img
              src="https://nebula.wsimg.com/ac7d6f193fe43774daeb26b695c50718?AccessKeyId=45796D6E8BD20ECEBF25&disposition=0&alloworigin=1"
              alt="Placeholder 3"
              className="w-1/2 rounded shadow"
            />
            <img
              src="https://media.istockphoto.com/id/1292647902/photo/the-warning-signs-cleaning-in-process-the-floor-of-the-building-and-janitorial-car-parked-in.jpg?s=612x612&w=0&k=20&c=ehX_KYmkrb8xTsnD1idUwFKB8CP5JyioHIewOUx40Ts="
              alt="Placeholder 4"
              className="w-1/2 rounded shadow"
            />
          </div>
        </div>
      </div>
      {/* Form Section */}
      <div className="p-6 md:p-12 bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-4xl font-semibold mb-6 text-center text-slate-700">
            Refer Your Friend
          </h2>
          <hr className="my-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Your Registered Phone Number *
              </label>
              <input
                type="tel"
                name="registeredPhone"
                value={formData.registeredPhone}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Your Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Your Friend's Name *
              </label>
              <input
                type="text"
                name="friendName"
                value={formData.friendName}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Your Friend's Phone Number *
              </label>
              <input
                type="tel"
                name="friendPhone"
                value={formData.friendPhone}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Friend's Location
              </label>
              <input
                type="text"
                name="friendLocation"
                value={formData.friendLocation}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
              />
            </div>
            <div className="my-1">
              <label className="block text-lg font-medium text-gray-700">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              >
                <option value="">Select a Service</option>
                <option value="consulting">Consulting</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 w-full rounded-full text-white px-6 py-2 text-lg font-medium hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="my-8">
        <GallerySlider />
      </div>
    </div>
  );
};

export default ReferFriend;
