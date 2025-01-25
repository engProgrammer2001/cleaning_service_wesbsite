import React, { useState } from "react";
import GallerySlider from "../components/GallerySlider/GallerySlider";

const Gallery = () => {
  const businessImages = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/1365606525/photo/shot-of-a-bucket-of-cleaning-supplies.jpg?s=612x612&w=0&k=20&c=_Xz3e-_WGlQC2zXstHaK_AI9N76LNag_KbRioNlM1hQ=",
      alt: "Office Space",
    },
    {
      id: 2,
      src: "https://www.healthyhomesutah.com/wp-content/uploads/Professional-House-Cleaning-Services-in-North-Ogden-Utah.jpg",
      alt: "Team Meeting",
    },
    {
      id: 3,
      src: "https://nebula.wsimg.com/ac7d6f193fe43774daeb26b695c50718?AccessKeyId=45796D6E8BD20ECEBF25&disposition=0&alloworigin=1",
      alt: "Product Showcase",
    },
    {
      id: 4,
      src: "https://media.istockphoto.com/id/1292647902/photo/the-warning-signs-cleaning-in-process-the-floor-of-the-building-and-janitorial-car-parked-in.jpg?s=612x612&w=0&k=20&c=ehX_KYmkrb8xTsnD1idUwFKB8CP5JyioHIewOUx40Ts=",
      alt: "Client Interaction",
    },
    {
      id: 5,
      src: "https://www.nsg-inc.com/wp-content/uploads/2020/09/Why-Should-I-Change-My-Commercial-Janitorial-Service.jpg",
      alt: "Company Event",
    },
    {
      id: 6,
      src: "https://hmhhospitalityservices.com/wp-content/uploads/2024/10/hmh-gallery-9-1067x800.webp",
      alt: "Workspace",
    },
    {
      id: 7,
      src: "https://img.freepik.com/premium-photo/close-up-housekeeper-holding-modern-washing-vacuum-cleaner-cleaning-dirty-sofa-with-professionally-detergent-professional-springclean-home-concept_130111-3787.jpg?semt=ais_hybrid",
      alt: "Workspace",
    },
    {
      id: 8,
      src: "https://eu-images.contentstack.com/v3/assets/blt9ca8222b5acaa556/blt6cc2bba866b78356/6539fb431e99383321db122c/how-to-give-yourtoilet-a-daily-clean.jpeg?width=954&height=636&format=jpg&quality=80",
      alt: "BathRoom Cleaning",
    },
    {
      id: 9,
      src: "https://5.imimg.com/data5/KG/DC/GQ/SELLER-5976783/swimming-pool-cleaning-services-500x500.jpg",
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
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
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
                className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer"
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
