import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-800 via-teal-600 to-purple-600 text-white p-6 md:p-12 flex flex-wrap justify-between items-center shadow-xl">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 md:mb-0 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-400 to-purple-400">
        <span className="text-gold">Innovating</span> the Future, One Step at a Time
      </h1>
      <nav>
        <ul className="flex flex-wrap space-x-6 md:space-x-12 text-sm md:text-lg font-medium">
          <li>
            <NavLink
              to="/home"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
