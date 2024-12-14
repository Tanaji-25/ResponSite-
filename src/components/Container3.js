// Container3.js (Interactive Element with Arrows)
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Container3 = () => {
  return (
    <div className="p-6 bg-blue-200 rounded-lg shadow-md mb-6 flex justify-between items-center">
      <FaArrowLeft size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer transition duration-300" />
      <div>Image/Slider Here</div>
      <FaArrowRight size={24} className="text-gray-700 hover:text-gray-900 cursor-pointer transition duration-300" />
    </div>
  );
};

export default Container3;
