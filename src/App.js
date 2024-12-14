import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Container4 from './components/Container4';
import Container5 from './components/Container5';
import Container6 from './components/Container6';

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />
      
      {/* Main Content Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Containers */}
        <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Container1 />
          <Container2 />
          <Container3 />
          <Container4 />
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

export default App;
