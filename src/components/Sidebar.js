// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-60 p-6 hidden md:block shadow-md">
      <ul className="space-y-6">
        <li><a href="/" className="hover:text-gray-300 transition duration-300">Dashboard</a></li>
        <li><a href="/profile" className="hover:text-gray-300 transition duration-300">Profile</a></li>
        <li><a href="/settings" className="hover:text-gray-300 transition duration-300">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
