// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent p-6 flex justify-between items-center shadow-xl backdrop-blur-lg">
      <h1 className="text-4xl font-bold text-white">My Dynamic Website</h1>
      <nav>
        <ul className="hidden md:flex space-x-8">
          <li><a href="/" className="text-lg font-semibold text-white hover:text-yellow-400 transition duration-300 transform hover:scale-105">Home</a></li>
          <li><a href="/about" className="text-lg font-semibold text-white hover:text-yellow-400 transition duration-300 transform hover:scale-105">About</a></li>
          <li><a href="/contact" className="text-lg font-semibold text-white hover:text-yellow-400 transition duration-300 transform hover:scale-105">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
