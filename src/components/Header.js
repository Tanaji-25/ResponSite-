// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav>
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-gray-200 transition duration-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-200 transition duration-300">About</a></li>
          <li><a href="/contact" className="hover:text-gray-200 transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
