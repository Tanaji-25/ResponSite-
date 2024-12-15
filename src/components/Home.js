import React from 'react';

const Home = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">Welcome to the Home Page</h2>
      <p className="text-center text-gray-600 mb-4">
        This is the home page of the application. You can add more content, widgets, or features here.
      </p>
      <div className="bg-gray-200 p-4 rounded-lg">
        <p className="font-medium text-blue-700">Here are some sample features of the home page:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>User profile management</li>
          <li>View your dashboard</li>
          <li>Access settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
