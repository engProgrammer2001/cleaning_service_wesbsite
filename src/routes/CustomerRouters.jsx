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
import PaintingServiceDetails from "../components/PaintingServiceDetails/PaintingServiceDetails";
import paintingServices from "../components/data/PaintingService";
import PestControl from "../pages/PestControl";
import PestControlDetails from "../components/PestControlDetails/PestControlDetails";
import PestControlData from "../components/data/PestControlData";
import CivilWork from "../pages/CivilWord";
import CivilWorkDetails from "../components/CivilWorkDetails/CivilWorkDetails";
import CivilWordData from "../components/data/CivilWordData";
import MerblePolicing from "../pages/MarblePolicing";
import MerblePolicingDetails from "../components/MerblePolicingDetails/MerblePolicingDetails";
import marblePolishingService from "../components/data/marblePolishingService";
import BirdNetting from "../pages/BirdNetting";
import SwimmingPoolCleaningService from "../pages/SwimmingPoolCleaningService";
import ElectricianServices from "../pages/electricianServices";
import PlumberServices from "../pages/PumberService";
import ElectricianServicesData from "../components/data/electricianServicesData";
import ElectricianServicesDetails from "../components/electricianServicesDetails/electricianServicesDetails";
import PumberServiceDetails from "../components/PumberServiceDetails/PumberServiceDetails";
import PlumberServicesData from "../components/data/plumberServices";

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
        <Route path="/painting-service" element={<PaintingService />} />
        <Route
          path="/painting-service-details/:id"
          element={
            <PaintingServiceDetails paintingServices={paintingServices} />
          }
        />

        <Route path="/pest-control-service" element={<PestControl />} />
        <Route
          path="/pest-control-service-details/:id"
          element={<PestControlDetails PestControlData={PestControlData} />}
        />

        <Route path="/civil-work-service" element={<CivilWork />} />
        <Route
          path="/civil-work-service/:id"
          element={<CivilWorkDetails CivilWordData={CivilWordData} />}
        />

        <Route path="/merble-policing-service" element={<MerblePolicing />} />
        <Route
          path="/merble-policing-service/:id"
          element={
            <MerblePolicingDetails
              marblePolishingService={marblePolishingService}
            />
          }
        />

        <Route path="/bird-netting-service-details" element={<BirdNetting />} />
        <Route
          path="/swimming-pool-cleaning"
          element={<SwimmingPoolCleaningService />}
        />

        <Route path="/electrician-service" element={<ElectricianServices />} />
        <Route
          path="/electrician-service-details/:id"
          element={
            <ElectricianServicesDetails
              ElectricianServicesData={ElectricianServicesData}
            />
          }
        />

        <Route path="/plumber-service" element={<PlumberServices />} />
        <Route path="/plumber-service-details/:id" element={<PumberServiceDetails PlumberServicesData={PlumberServicesData} />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
