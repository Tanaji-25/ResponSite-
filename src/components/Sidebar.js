// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gradient-to-b from-teal-600 to-indigo-700 text-white w-64 p-4 hidden md:block shadow-xl">
      <ul className="space-y-6">
        <li><a href="/" className="px-4 py-2 hover:bg-gold hover:text-black transition-all duration-300">Dashboard</a></li>
        <li><a href="/profile" className="px-4 py-2 hover:bg-gold hover:text-black transition-all duration-300">Profile</a></li>
        <li><a href="/settings" className="px-4 py-2 hover:bg-gold hover:text-black transition-all duration-300">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
