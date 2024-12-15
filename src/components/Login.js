import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Sample credentials
  const sampleEmail = 'admin@gmail.com';
  const samplePassword = '12345';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (email === sampleEmail && password === samplePassword) {
      onLogin(); // Update login state
      navigate('/'); // Redirect to main page
    } else {
      setError('Invalid email or password'); // Show error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-teal-400">
      {/* Form Card */}
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-4">
          Use the sample credentials to log in:
        </p>
        <div className="bg-gray-100 p-3 mb-4 text-sm rounded-lg">
          <p><strong>Email:</strong> admin@gmail.com</p>
          <p><strong>Password:</strong>12345</p>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g., admin@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
