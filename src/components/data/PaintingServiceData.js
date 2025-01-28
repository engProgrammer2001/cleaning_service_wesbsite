import { FaPaintRoller, FaHome, FaBrush, FaTint, FaTools, FaTree } from "react-icons/fa";

const PaintingServiceData = [
  {
    id: 1,
    title: "Painting Service",
    icon: <FaPaintRoller />, // General painting
    path: "/painting-service",
  },
  {
    id: 2,
    title: "Repainting",
    icon: <FaBrush />, 
    path: "/painting-service-details/2",
  },
  {
    id: 3,
    title: "Interior Painting",
    icon: <FaHome />, // Icon for interior painting
    path: "/painting-service-details/3",
  },
  {
    id: 4,
    title: "Exterior Painting",
    icon: <FaTree />, // Icon for exterior painting
    path: "/painting-service-details/4",
  },
  {
    id: 5,
    title: "Waterproofing",
    icon: <FaTint />, // Icon for waterproofing
    path: "/services/waterproofing",
  },
  {
    id: 6,
    title: "Grouting",
    icon: <FaTools />, // Icon for grouting
    path: "/services/grouting",
  },
  {
    id: 7,
    title: "Wood Polishing",
    icon: <FaPaintRoller />, // Icon for wood polishing
    path: "/services/wood-polishing",
  },
];

export default PaintingServiceData;
