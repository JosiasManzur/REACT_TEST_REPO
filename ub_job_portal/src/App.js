import React, { useState, useEffect } from "react";
import "./App.css";
import LoginScreen from "./components/LoginScreen";
import ScreenController from "./components/ScreenController";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState("");

    // Check for authentication status on initial mount
    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(isAuthenticated);
    }, []);

    // Function to handle successful login
    const handleLoginSuccess = (type) => {
        localStorage.setItem("isLoggedIn", "true"); // Store login status in local storage
        localStorage.setItem("userType", type); // Store user type in local storage
        setIsLoggedIn(true);
        setUserType(type);
    };

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn"); // Remove login status from local storage
        localStorage.removeItem("userType"); // Remove user type from local storage
        setIsLoggedIn(false);
        setUserType("");
    };

    // Check for inactivity on initial mount
    useEffect(() => {
        // Function to handle user activity timeout and automatically logout
        const handleInactivityTimeout = () => {
            // Set timeout to logout after 30 minutes of inactivity (adjust as needed)
            const timeoutInMilliseconds = 30 * 60 * 1000;
            let inactivityTimeout;

            const resetTimeout = () => {
                clearTimeout(inactivityTimeout);
                inactivityTimeout = setTimeout(
                    handleLogout,
                    timeoutInMilliseconds
                );
            };

            resetTimeout();

            // Reset timeout on user activity
            const handleActivity = () => {
                resetTimeout();
            };

            document.addEventListener("mousemove", handleActivity);
            document.addEventListener("keypress", handleActivity);

            // Cleanup event listeners
            return () => {
                document.removeEventListener("mousemove", handleActivity);
                document.removeEventListener("keypress", handleActivity);
            };
        };

        handleInactivityTimeout(); // Call the function to initiate the timeout
    }, []);

    return (
        <div>
            {!isLoggedIn ? (
                <LoginScreen onLoginSuccess={handleLoginSuccess} />
            ) : (
                <ScreenController
                    onLogout={handleLogout}
                    userType={userType}
                    clearUserType={() => setUserType("")}
                />
            )}
        </div>
    );
};

export default App;
