// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gradient-to-b from-gray-800 to-black text-white w-64 p-6 hidden md:block rounded-2xl shadow-xl">
      <ul className="space-y-6">
        <li><a href="/" className="text-lg font-medium hover:text-yellow-400 transition duration-300">Dashboard</a></li>
        <li><a href="/profile" className="text-lg font-medium hover:text-yellow-400 transition duration-300">Profile</a></li>
        <li><a href="/settings" className="text-lg font-medium hover:text-yellow-400 transition duration-300">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
