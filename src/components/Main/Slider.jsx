import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";

const Data_Images = [
  { href: banner1 },
  { href: banner2 }
];

function Slider() {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="carousel-container"
      >
        {Data_Images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.href} alt={`Slide ${index}`} className="slide img-fluid w-100 rounded" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
