import React, { useState, useEffect } from 'react';
import './SignUpScreen.css';

const SignUpScreen = ({ onSignup, onSignupSuccess, onCancel }) => {
  const [signupType, setSignupType] = useState('student');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
        // Redirect to login screen after success message
        onSignupSuccess();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, onSignupSuccess]);

  const clearFormFields = () => {
    // Clear all form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setCompanyName('');
    setContactPerson('');
    setContactPhone('');
    setContactEmail('');
    setCompanyWebsite('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
    // No need to clear success message here
  };

  const validateFields = () => {
    // Check if any required field is empty based on signup type
    if (
      (signupType === 'student' && (
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        phoneNumber === ''
      )) ||
      (signupType === 'company' && (
        companyName === '' ||
        contactPerson === '' ||
        contactPhone === '' ||
        contactEmail === '' ||
        companyWebsite === ''
      )) ||
      username === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setErrorMessage('Please fill in all fields.');
      return false;
    }
  
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false;
    }
  
    // Validation passed
    return true;
  };

  const handleSignup = () => {
    if (!validateFields()) {
      return;
    }
  
    // Perform signup logic
    onSignup();
  
    // Display success message
    setSuccessMessage('Signup successful! Redirecting to login screen...');
    // Clear form fields after successful signup
    clearFormFields();
  }; 

  const handleCancel = () => {
    // Clear form fields and invoke the onCancel function
    clearFormFields();
    onCancel();
  };

  return (
    <div className="signup-container">
      {successMessage ? (
        <div className="success-message">{successMessage}</div>
      ) : (
        <>
          <h2 className="signup-title">Sign Up</h2>
          <div className="signup-options">
            <button
              className={`signup-option ${signupType === 'student' ? 'active' : ''}`}
              onClick={() => {
                setSignupType('student');
                clearFormFields();
              }}
            >
              Student
            </button>
            <button
              className={`signup-option ${signupType === 'company' ? 'active' : ''}`}
              onClick={() => {
                setSignupType('company');
                clearFormFields();
              }}
            >
              Company
            </button>
          </div>
          <div className="signup-form">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {signupType === 'student' && (
              <>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </>
            )}
            {signupType === 'company' && (
              <>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Contact Person"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Contact Phone"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Contact Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Company Website"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
              </>
            )}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="button-group">
              <button className="signup-button" onClick={handleSignup}>
                Sign Up
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignUpScreen;
