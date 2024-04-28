import React, { useState } from 'react';
import './LoginScreen.css';
import ublogo from '../images/ub_logo.png';
import SignUpScreen from './SignUpScreen';
import JobSearchFilter from './JobSearchFilter'; // Import JobSearchFilter component

const LoginScreen = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = () => {
    // Mock login logic
    const credentials = [
      { username: 'student', password: 'student123', type: 'student' },
      { username: 'company', password: 'company123', type: 'company' },
      { username: 'admin', password: 'admin123', type: 'admin' }
    ]; 

    const user = credentials.find(cred => cred.username === username && cred.password === password);
    
    if (user) {
      // Successful login
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userType', user.type);
      setUserType(user.type); // Set the user type
      onLoginSuccess(user.type); // Pass user type to onLoginSuccess
    } else {
      // Failed login
      setErrorMessage('Invalid username or password. Please try again.');
    }
    // Clear fields
    setUsername('');
    setPassword('');
  };

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  const handleSignupSuccess = () => {
    // Handle sign up success logic, for example, redirecting to login screen
    setShowSignUp(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={ublogo} alt="UB Logo" className="ub-logo" />
        {!showSignUp ? (
          <>
            <h2 className="login-title">University of Belize Job Portal</h2>
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
            <p className="signup-text">
              Don't have an account?{' '}
              <button className="signup-link" onClick={handleSignUp}>
                Sign Up 
              </button> 
            </p>
          </>
        ) : (
          <SignUpScreen onSignup={handleSignUp} onSignupSuccess={handleSignupSuccess} onCancel={() => setShowSignUp(false)} />
        )}
      </div>
      {/* Render JobSearchFilter component only if user is logged in */}
      {localStorage.getItem('isLoggedIn') === 'true' && <JobSearchFilter onLogout={() => localStorage.setItem('isLoggedIn', 'false')} userType={userType} />}
    </div>
  );
};

export default LoginScreen;