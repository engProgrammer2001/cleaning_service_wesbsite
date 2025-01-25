import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import { Autoplay } from "swiper/modules";

const GallerySlider = () => {
  const images = [
    "https://media.istockphoto.com/id/1417833187/photo/professional-cleaner-vacuuming-a-carpet.jpg?b=1&s=612x612&w=0&k=20&c=-hIxa-9UCDsDzdNrdRQI67WZvhrU34PKejODkGMi-jA=",
    "https://st3.depositphotos.com/20363444/35577/i/450/depositphotos_355770670-stock-photo-cropped-view-cleaner-rubber-gloves.jpg",
    "https://hellocleaners.co.uk/wp-content/uploads/2019/07/office-cleaning-hello-cleaners.jpeg",
    "https://static01.nyt.com/images/2020/03/20/opinion/20Land/20Land-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454568.jpg?semt=ais_hybrid",
    "https://w0.peakpx.com/wallpaper/677/741/HD-wallpaper-rozy-reinik-ug-haftungsbeschr%EF%BF%BDnkt-cleaning-service-hamburg-cleaning-service-frankfurt-english-speaking-cleaners-deep-cleaning-services-thumbnail.jpg",
  ];

  return (
    <>
      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-center text-4xl text-slate-800 font-bold underline">
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
