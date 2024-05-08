import React, { useState } from 'react';
import './css/LogoutButton.css'; 

const LogoutButton = ({ onLogout }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Perform logout action
    localStorage.removeItem('isLoggedIn'); // Clear login state
    onLogout();
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowModal(false);
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className="logout-button">
        Logout
      </button>
      {showModal && (
        <div className="logout-modal">
          <div className="logout-modal-content">
            <h3>Are you sure you want to log out?</h3>
            <div className="logout-modal-buttons">
              <button onClick={handleConfirmLogout}>Yes</button>
              <button onClick={handleCancelLogout}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutButton; 
