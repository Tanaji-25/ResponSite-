// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-800 via-teal-600 to-purple-600 text-white p-6 md:p-12 flex flex-wrap justify-between items-center shadow-xl hover:scale-105 transition-all duration-300">
      <h1 className="text-3xl md:text-3xl font-extrabold tracking-tight mb-4 md:mb-0">
        <span className="text-gold">Innovating</span> the Future, One Step at a Time
      </h1>
      <nav>
        <ul className="flex flex-wrap space-x-6 md:space-x-12 text-sm md:text-lg font-medium">
          <li><a href="/" className="px-2 py-1 md:px-4 md:py-2 hover:bg-gold hover:text-black transition-all duration-300">Home</a></li>
          <li><a href="/about" className="px-2 py-1 md:px-4 md:py-2 hover:bg-gold hover:text-black transition-all duration-300">About</a></li>
          <li><a href="/contact" className="px-2 py-1 md:px-4 md:py-2 hover:bg-gold hover:text-black transition-all duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
