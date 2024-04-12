import React, { useState, useEffect } from 'react';
import './LoginScreen.css';
import ublogo from '../images/ub_logo.png';

const LoginScreen = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      // Redirect to job search filter or any other authenticated route
      onLoginSuccess();
    }
  }, [onLoginSuccess]);

  const handleLogin = () => {
    // Mock login logic
    if (username === 'student' && password === 'ubjobs2024') {
      // Successful login
      localStorage.setItem('isLoggedIn', 'true'); // Store login state
      onLoginSuccess();
    } else {
      // Failed login
      setErrorMessage('Invalid username or password. Please try again.');
    }
    // Clear fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={ublogo} alt="UB Logo"/>
        <h2 className="login-title">UB Job Portal</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
