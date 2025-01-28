import React from "react";
import BlogData from "../components/data/BlogData";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#ac00b7] text-white h-52 lg:h-[70vh]">
        <img
          src="/assets/gallery/k14.jpeg"
          alt="About us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-8 flex flex-col items-center lg:pt-48">
          <nav className="flex space-x-4 text-sm">
            <Link
              to="/"
              className="text-white hover:text-white font-bold"
            >
              Home
            </Link>
            <span className="text-white hover:text-white font-bold">/</span>
            <Link
              to="/blog"
              className="text-white hover:text-white font-bold"
            >
              Blog
            </Link>
          </nav>
          <h1 className="text-4xl font-bold mt-4 text-white hover:text-white">
            Our Blogs
          </h1>
        </div>
      </div>
      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BlogData.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#ac00b7]">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                  <p className="text-gray-700 mb-4">{blog.shortDescription}</p>
                  <button className="text-white  bg-[#ac00b7] w-full rounded-full px-4 py-2 hover:underline">
                    <Link to={`/blog-detail/${blog.id}`}>Read More</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
