import React from "react";
import { Link, useParams } from "react-router-dom";
import GallerySlider from "../GallerySlider/GallerySlider";
import ContactForm from "../ContactForm/ContactForm";

const BlogDetails = ({ BlogData }) => {
  const { id } = useParams();
  const blog = BlogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center flex justify-center items-center text-3xl text-slate-800 min-h-screen">
        <h2>Blog not found</h2>
        <span className="ml-2">
          <Link to="/" className="text-blue-600 underline">
            Go Home
          </Link>
        </span>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-zinc-800 text-white h-[50vh]">
        <img
          src="/assets/blog-details/blog-details.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Blog Hero"
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
              to="/blog-detail"
              className="text-slate-800 hover:text-slate-900 font-bold"
            >
              Blog-Details
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4 text-slate-800 hover:text-slate-900">
            Blog Details
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-4 py-8">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/5 bg-gray-100 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center text-slate-800">
            All Blogs
          </h3>
          <ul className="space-y-4">
            {BlogData.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/blog-detail/${item.id}`}
                  className="text-blue-600 hover:underline block mb-2 bg-blue-100 p-3 rounded-lg shadow-sm"
                >
                  {item.title.split(" ").slice(0, 10).join(" ")}...
                </Link>
                <img
                  className="rounded-lg w-full h-auto"
                  src={item.secondImage}
                  alt={item.title}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-4/5 bg-white p-6 rounded-md shadow-md">
          <div className="mb-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800 flex justify-between">
            {blog.title}
            <span className="text-sm text-gray-500">{blog.date}</span>
          </h1>
          <p className="text-gray-600 mb-6 text-sm italic">
            By <span className="font-medium">{blog.author}</span>
          </p>

          {/* Benefits Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Benefits
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {blog.benifits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          {/* nonInclusions Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Non Inclusions
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {blog.nonInclusions.map((nonInclusion, index) => (
                <li key={index}>{nonInclusion}</li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">{blog.description}</p>
        </div>
      </div>
      <div>
        <GallerySlider />
      </div>
      {/* contact Form  */}
      <div className="my-10">
        <h1 className="text-center text-slate-700 text-3xl font-bold">Contact Today</h1>
        <ContactForm />
      </div>
    </>
  );
};

export default BlogDetails;
