import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Array of images for the slider
const images = [
  'https://spec.nith.ac.in/BLOGS/a1%20(5).jpg',
  'https://techcrunch.com/wp-content/uploads/2015/09/ideas_1.png',
  'https://media.licdn.com/dms/image/v2/D4E12AQGiyKCFBqBVWw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727817903406?e=2147483647&v=beta&t=oHYrHmAwy_sETHKK7E-RdMMz7MjMwiVxQVAdcmkNlWI',
  'https://www.maxiomtech.com/wp-content/uploads/2024/05/person-using-ar-technology-their-daily-occupation.jpg',
];

const Container3 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-xl mb-8 flex justify-between items-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
      {/* Left Arrow */}
      <FaArrowLeft
        size={30}
        onClick={handlePreviousImage}
        className="text-white hover:text-gray-200 cursor-pointer transition duration-300"
      />

      {/* Current Image Box (Increased Size) */}
      <div className="flex justify-center items-center w-full mx-4 h-80"> {/* Box Height Increased */}
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Right Arrow */}
      <FaArrowRight
        size={30}
        onClick={handleNextImage}
        className="text-white hover:text-gray-200 cursor-pointer transition duration-300"
      />
    </div>
  );
};

export default Container3;
