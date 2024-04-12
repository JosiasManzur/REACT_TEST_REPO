import './App.css';
import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import JobSearchFilter from './components/JobSearchFilter'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      ) : (
        <JobSearchFilter onLogout={handleLogout} /> 
      )}
    </div>
  ); 
};

export default App;
