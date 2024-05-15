// Header.js
import React from "react";
import LogoutButton from "./LogoutButton";
import { FaUser } from "react-icons/fa";

const Header = ({ userType, onViewProfileClick, onLogout }) => (
    <div className="header-container">
        {(userType === "student" || userType === "company") && (
            <button
                className="view-profile-button"
                onClick={onViewProfileClick}
            >
                <FaUser className="user-icon" />
                <span className="view-profile-text">View Profile</span>
            </button>
        )}
        <LogoutButton onLogout={onLogout} />
    </div>
);

export default Header;
