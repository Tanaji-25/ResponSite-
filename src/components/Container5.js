// Container5.js (Buttons for Interaction)
import React from 'react';

const Container5 = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-xl mb-8 text-center hover:scale-105 transition-all duration-300">
      <div className="flex justify-center space-x-8">
        <button className="px-8 py-4 bg-black text-white rounded-lg shadow-lg hover:bg-gold hover:scale-105 transition-all duration-300">Button A</button>
        <button className="px-8 py-4 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gold hover:scale-105 transition-all duration-300">Button B</button>
      </div>
    </div>
  );
};

export default Container5;
