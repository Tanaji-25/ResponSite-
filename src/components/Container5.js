// Container5.js (Buttons for Interaction)
import React from 'react';

const Container5 = () => {
  return (
    <div className="p-6 bg-orange-200 rounded-lg shadow-md mb-6 flex-grow h-full text-center">
      <div className="flex justify-center space-x-6">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">Button A</button>
        <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300">Button B</button>
      </div>
    </div>
  );
};

export default Container5;
