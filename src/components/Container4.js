import React, { useState } from 'react';

const Container4 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`p-6 bg-gradient-to-r from-indigo-600 to-teal-500 rounded-lg shadow-xl mb-8 transition-all duration-500 transform ${
        isHovered ? 'scale-105 shadow-2xl' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
      <p className="text-white mb-4">
        Our platform is designed with cutting-edge technology to provide you with an outstanding experience. We offer features that are both innovative and efficient.
      </p>

      {/* Features List */}
      <div className="text-white mb-6">
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="text-teal-300 mr-3">✅</span> Fast and seamless performance.
          </li>
          <li className="flex items-center">
            <span className="text-teal-300 mr-3">✅</span> Fully responsive design for all devices.
          </li>
          <li className="flex items-center">
            <span className="text-teal-300 mr-3">✅</span> Robust security features.
          </li>
        </ul>
      </div>

      {/* Button */}
      <div className="text-center">
        <button className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-teal-600 hover:text-white transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Container4;
