// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 flex justify-between items-center shadow-xl rounded-lg mb-12 hover:scale-105 transition-all duration-300">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Dynamic Innovation, Bold Design
      </h1>
      <nav>
        <ul className="flex space-x-12 text-lg font-medium">
          <li><a href="/" className="px-4 py-2 hover:bg-gold hover:text-black transition-all duration-300">Home</a></li>
          <li><a href="/about" className="px-4 py-2 hover:bg-gold hover:text-black transition-all duration-300">About</a></li>
          <li><a href="/contact" className="px-4 py-2 hover:bg-gold hover:text-black transition-all duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
