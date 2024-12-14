// Container3.js
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Container3 = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-xl mb-8 flex justify-between items-center hover:scale-105 transition-all duration-300">
      <FaArrowLeft size={30} className="text-white hover:text-gray-300 cursor-pointer transition duration-300" />
      <div className="text-white">Image/Slider Here</div>
      <FaArrowRight size={30} className="text-white hover:text-gray-300 cursor-pointer transition duration-300" />
    </div>
  );
};

export default Container3;
