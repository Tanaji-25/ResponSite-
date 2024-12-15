import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Container4 from './components/Container4';
import Container5 from './components/Container5';
import Container6 from './components/Container6';
import Login from './components/Login';
import Profile from './components/Profile'; // Profile page import
import Settings from './components/Settings'; // Settings page import
import Home from './components/Home'; // Home page import
import Contact from './components/Contact'; // Contact page import
import About from './components/About'; // About page import
import PrivateRoute from './components/PrivateRoute'; // PrivateRoute import

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <div className="flex flex-col h-screen">
                <Header onLogout={handleLogout} />
                <div className="flex flex-1">
                  <Sidebar onLogout={handleLogout} />
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
            </PrivateRoute>
          }
        />

        {/* Profile Page */}
        <Route
          path="/profile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <div className="flex flex-col h-screen">
                <Header onLogout={handleLogout} />
                <div className="flex flex-1">
                  <Sidebar onLogout={handleLogout} />
                  <div className="flex-1 p-4">
                    <Profile />
                  </div>
                </div>
              </div>
            </PrivateRoute>
          }
        />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <div className="flex flex-col h-screen">
                <Header onLogout={handleLogout} />
                <div className="flex flex-1">
                  <Sidebar onLogout={handleLogout} />
                  <div className="flex-1 p-4">
                    <Home />
                  </div>
                </div>
              </div>
            </PrivateRoute>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <div className="flex flex-col h-screen">
                <Header onLogout={handleLogout} />
                <div className="flex flex-1">
                  <Sidebar onLogout={handleLogout} />
                  <div className="flex-1 p-4">
                    <About />
                  </div>
                </div>
              </div>
            </PrivateRoute>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <div className="flex flex-col h-screen">
                <Header onLogout={handleLogout} />
                <div className="flex flex-1">
                  <Sidebar onLogout={handleLogout} />
                  <div className="flex-1 p-4">
                    <Contact />
                  </div>
                </div>
              </div>
            </PrivateRoute>
          }
        />

        {/* Settings Page */}
        <Route
          path="/settings"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <div className="flex flex-col h-screen">
                <Header onLogout={handleLogout} />
                <div className="flex flex-1">
                  <Sidebar onLogout={handleLogout} />
                  <div className="flex-1 p-4">
                    <Settings />
                  </div>
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
