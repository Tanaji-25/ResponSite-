// Container1.js (Image Carousel)
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Container1 = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg shadow-xl mb-8 hover:scale-105 transition-all duration-300">
      <Swiper className="rounded-lg overflow-hidden">
        <SwiperSlide><img src="https://via.placeholder.com/600" alt="Slide 1" className="w-full rounded-lg shadow-lg" /></SwiperSlide>
        <SwiperSlide><img src="https://via.placeholder.com/600" alt="Slide 2" className="w-full rounded-lg shadow-lg" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Container1;
