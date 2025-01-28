import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import { Autoplay } from "swiper/modules";

const GallerySlider = () => {
  const images = [
    "/assets/gallery/k21.jpg",
    "/assets/gallery/k20.jpg",
    "/assets/gallery/k23.jpg",
    "/assets/gallery/k22.jpg",
    "/assets/gallery/k24.jpg",
    "/assets/gallery/k26.jpg",
    "/assets/gallery/k27.jpg",
    "/assets/gallery/k28.jpg",
  ];

  return (
    <>
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl text-[#ac00b7] font-bold underline">
          Some Latest Complete Work{" "}
        </h1>
      </div>
      <div className="w-full h-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default GallerySlider;
