// Container2.js (Featured Section)
import React from 'react';
import { FaBolt, FaMobileAlt, FaRocket } from 'react-icons/fa';

const Container2 = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-xl mb-8 hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-semibold text-white mb-4">Featured Section</h2>
      <p className="text-white mb-4">
        Explore the cutting-edge features that make our platform stand out.
      </p>
      <ul className="space-y-4">
        <li className="flex items-center text-white">
          <FaBolt className="text-yellow-400 mr-4" size={24} />
          <span>Lightning-fast performance with state-of-the-art technology.</span>
        </li>
        <li className="flex items-center text-white">
          <FaMobileAlt className="text-green-400 mr-4" size={24} />
          <span>Fully responsive design for seamless mobile experience.</span>
        </li>
        <li className="flex items-center text-white">
          <FaRocket className="text-purple-400 mr-4" size={24} />
          <span>Boost your productivity with innovative tools and features.</span>
        </li>
      </ul>
    </div>
  );
};

export default Container2;
