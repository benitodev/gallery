import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperCarrusel.css";
import { Pagination } from "swiper";
import { useEffect } from "react";
import imageService from "../../services/images";

const MainImageCarrusel = () => {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    const getRandomImages = async () => {
      const randomImages = await imageService.getRandom();
      setImageData(randomImages);
    };
    getRandomImages();
  }, []);
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="relative flex items-center min-h-screen "
      >
        <span className="w-full absolute z-30 px-1 text-mainTitle t-stroke-shadow leading-10 font-normal main-title ">
          Proffesional gallery
        </span>
        {imageData.length > 0 &&
          imageData.map((item) => (
            <SwiperSlide>
              <img
                src={item.image.url}
                alt={item.name}
                className="brightness-50"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MainImageCarrusel;
