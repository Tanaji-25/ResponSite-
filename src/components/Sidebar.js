import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-indigo-900 via-teal-700 to-purple-900 text-white p-6 space-y-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `block px-6 py-3 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
              : 'text-gray-200 hover:text-white'
          }`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `block px-6 py-3 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
              : 'text-gray-200 hover:text-white'
          }`
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `block px-6 py-3 rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
              : 'text-gray-200 hover:text-white'
          }`
        }
      >
        Settings
      </NavLink>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="block px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-500 hover:text-white transition-all duration-300 text-gray-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
