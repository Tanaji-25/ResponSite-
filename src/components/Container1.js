import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Container1 = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-xl mb-8 hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <Swiper className="rounded-lg overflow-hidden w-full max-w-screen-xl mx-auto">
        {/* Slide 1 - Product Dashboard Screenshot */}
        <SwiperSlide>
          <img 
            src="https://www.titanui.com/wp-content/uploads/2020/04/05/Modern-Dashboard-UI-Presentation-Template-XD-PSD.jpg" 
            alt="Slide 1" 
            className="w-full rounded-lg shadow-lg" 
          />
          <div className="absolute bottom-2 left-2 text-white font-light text-sm bg-opacity-60 bg-black p-0.5 rounded">
             Modern Dashboard
          </div>

        </SwiperSlide>

        {/* Slide 2 - Web Application Features */}
        <SwiperSlide>
          <img 
            src="https://media.licdn.com/dms/image/C5612AQFP4N39UBG5iA/article-cover_image-shrink_600_2000/0/1636784947683?e=2147483647&v=beta&t=iiF0S4fghPcf0LkQK5IKPqm19kSg6gLSPCQqsg3ZMaE" 
            alt="Slide 2" 
            className="w-full rounded-lg shadow-lg" 
          />
          <div className="absolute bottom-2 left-2 text-white font-light text-sm bg-opacity-60 bg-black p-0.5 rounded">          
            Powerful Web Features
          </div>
        </SwiperSlide>

        {/* Slide 3 - Product Interface */}
        <SwiperSlide>
          <img 
            src="https://www.zazz.io/blog/wp-content/uploads/2023/12/Zazz-Blog-quality-1-1.jpg" 
            alt="Slide 3" 
            className="w-full rounded-lg shadow-lg" 
          />
          <div className="absolute bottom-2 left-2 text-white font-light text-sm bg-opacity-60 bg-black p-0.5 rounded">
            Seamless User Interface
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Container1;
