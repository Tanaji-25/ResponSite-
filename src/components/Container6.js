import React, { useState } from 'react';

const tabs = [
  { id: 1, title: 'Features', content: 'Our platform provides cutting-edge technology and innovative features to enhance your productivity.' },
  { id: 2, title: 'Benefits', content: 'Experience top-notch performance, reliability, and scalability for your business needs.' },
  { id: 3, title: 'Contact Us', content: 'Get in touch with our 24/7 customer support to answer any of your queries and provide assistance.' },
];

const Container6 = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-4 text-center">Explore More</h3>
      
      {/* Tabs Header */}
      <div className="flex justify-around border-b border-teal-300 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-white text-lg px-4 py-2 transition-all duration-300 ${
              activeTab === tab.id ? 'border-b-4 border-teal-300 font-bold' : 'opacity-75 hover:opacity-100'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-white text-center text-lg">
        <p>{tabs.find((tab) => tab.id === activeTab).content}</p>
      </div>
    </div>
  );
};

export default Container6;
