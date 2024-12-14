// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-800 via-teal-600 to-purple-600 text-white p-12 flex justify-between items-center shadow-xl mb-6 hover:scale-105 transition-all duration-300">
      <h1 className="text-3xl font-extrabold tracking-tight">
        <span className="text-gold">Innovating</span> the Future, One Step at a Time
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
