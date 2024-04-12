import React from 'react';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Perform logout action
    localStorage.removeItem('isLoggedIn'); // Clear login state
    onLogout();
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
