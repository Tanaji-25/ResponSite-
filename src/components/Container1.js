// Container1.js (Image Carousel)
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Container1 = () => {
  return (
    <div className="p-6 bg-red-200 rounded-lg shadow-md flex-grow mb-6 h-full">
      <Swiper className="rounded-lg overflow-hidden">
        <SwiperSlide><img src="https://via.placeholder.com/600" alt="Slide 1" className="w-full rounded-lg" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/600" alt="Slide 2" className="w-full rounded-lg" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Container1;
