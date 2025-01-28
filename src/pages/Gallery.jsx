import React, { useState } from "react";
import GallerySlider from "../components/GallerySlider/GallerySlider";

const Gallery = () => {
  const businessImages = [
    {
      id: 2,
      src: "/assets/gallery/k2.jpeg",
      alt: "Team Meeting",
    },
    {
      id: 3,
      src: "/assets/gallery/k17.jpeg",
      alt: "Product Showcase",
    },
    {
      id: 4,
      src: "/assets/gallery/k4.jpeg",
      alt: "Client Interaction",
    },
    {
      id: 5,
      src: "/assets/gallery/k5.jpeg",
      alt: "Company Event",
    },
    {
      id: 6,
      src: "/assets/gallery/k6.jpeg",
      alt: "Workspace",
    },
    {
      id: 7,
      src: "/assets/gallery/k7.jpeg",
      alt: "Workspace",
    },
    {
      id: 8,
      src: "/assets/gallery/k8.jpeg",
      alt: "BathRoom Cleaning",
    },
    {
      id: 9,
      src: "/assets/gallery/k9.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 10,
      src: "/assets/gallery/k10.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 11,
      src: "/assets/gallery/k11.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 12,
      src: "/assets/gallery/k12.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 13,
      src: "/assets/gallery/k13.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 14,
      src: "/assets/gallery/k14.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 15,
      src: "/assets/gallery/k9.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 16,
      src: "/assets/gallery/k15.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 18,
      src: "/assets/gallery/k16.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 19,
      src: "/assets/gallery/k18.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 20,
      src: "/assets/gallery/k20.jpg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 19,
      src: "/assets/gallery/k18.jpeg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 20,
      src: "/assets/gallery/k20.jpg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 21,
      src: "/assets/gallery/k21.jpg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 22,
      src: "/assets/gallery/k22.jpg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 23,
      src: "/assets/gallery/k23.jpg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 24,
      src: "/assets/gallery/k24.jpg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 25,
      src: "/assets/gallery/k27.jpg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 26,
      src: "/assets/gallery/k26.jpg",
      alt: "Swimming Pool Cleaning",
    },
    {
      id: 27,
      src: "/assets/gallery/k27.jpg",
      alt: "Swimming Pool Cleaning",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === businessImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? businessImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="bg-gray-100 py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#ac00b7]">
          Our Business Gallery
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Take a look at some moments from our workplace, events, and projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {businessImages.map((image, index) => (
            <div key={image.id} className="relative group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl mx-auto p-4">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 z-50"
                onClick={closeModal}
              >
                ✖
              </button>
              {/* Previous Button */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 z-50"
                onClick={showPrevImage}
              >
                ◀
              </button>
              {/* Next Button */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 z-50"
                onClick={showNextImage}
              >
                ▶
              </button>
              {/* Image */}
              <img
                src={businessImages[selectedImageIndex].src}
                alt={businessImages[selectedImageIndex].alt}
                className="w-full h-auto max-h-[80vh] rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <GallerySlider />
      </div>
    </>
  );
};

export default Gallery;
