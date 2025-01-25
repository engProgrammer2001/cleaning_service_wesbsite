import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import BlogData from "../components/data/BlogData";
import Gallery from "../pages/Gallery";
import ReferFriend from "../pages/referFriend";
import Contact from "../pages/Contact";
import CleaningService from "../pages/CleaningService";
import CleaningServiceDetails from "../components/CleaningServiceDetails/CleaningServiceDetails";
import CleaningServiceData from "../components/data/CleaningServiceData";
import PaintingService from "../pages/PaintingService";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog-detail/:id"
          element={<BlogDetails BlogData={BlogData} />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/refer-friend" element={<ReferFriend />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cleaning-service" element={<CleaningService />} />
        <Route
          path="/cleaning-service-details/:id"
          element={
            <CleaningServiceDetails CleaningServiceData={CleaningServiceData} />
          }
        />
        <Route path="/painting-service" element={<PaintingService/>} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
