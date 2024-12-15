import React from 'react';

const About = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">About Us</h2>
      <p className="text-center text-gray-600 mb-4">
        We are a team of passionate individuals committed to delivering innovative solutions.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-medium text-blue-700">Our Mission:</p>
        <p className="text-gray-700">
          To create technology that solves real-world problems and improves the lives of people worldwide.
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <p className="font-medium text-blue-700">Our Vision:</p>
        <p className="text-gray-700">
          To be at the forefront of technological innovation and contribute to the digital transformation of industries.
        </p>
      </div>
    </div>
  );
};

export default About;
