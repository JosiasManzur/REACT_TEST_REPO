import React, { useState, useEffect } from 'react';
import './ViewProfile.css';
import { FaUser } from 'react-icons/fa';
import LogoutButton from './utility/LogoutButton';

const ViewProfile = ({ onBack, onLogout, userType }) => {
  // State variables to manage profile fields

  // Student Profile Fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentUsername, setStudentUsername] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [studentConfirmPassword, setStudentConfirmPassword] = useState('');

  // Company Profile Fields
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyUsername, setCompanyUsername] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [companyConfirmPassword, setCompanyConfirmPassword] = useState('');

  const [isSaving, setIsSaving] = useState(false); // State variable to manage saving state

  useEffect(() => {
    // Retrieve user profile data from localStorage or API
    const userProfileData = JSON.parse(localStorage.getItem('userProfileData'));
    if (userProfileData) {
      // Set profile data based on user type
      if (userProfileData.userType === 'student') {
        setFirstName(userProfileData.firstName);
        setLastName(userProfileData.lastName);
        setEmail(userProfileData.email);
        setPhoneNumber(userProfileData.phoneNumber);
        setStudentUsername(userProfileData.studentUsername);
        setStudentPassword(userProfileData.studentPassword);
        setStudentConfirmPassword(userProfileData.studentConfirmPassword);
      } else if (userProfileData.userType === 'company') {
        setCompanyName(userProfileData.companyName);
        setContactPerson(userProfileData.contactPerson);
        setContactPhone(userProfileData.contactPhone);
        setContactEmail(userProfileData.contactEmail);
        setCompanyWebsite(userProfileData.companyWebsite);
        setCompanyUsername(userProfileData.companyUsername);
        setCompanyPassword(userProfileData.companyPassword);
        setCompanyConfirmPassword(userProfileData.companyConfirmPassword);
      }
    }
  }, []);

  const handleSaveChanges = () => {
    // Perform save action here, you can update this logic as needed
    setIsSaving(true); // Set saving state to true
    setTimeout(() => {
      setIsSaving(false); // Reset saving state after a delay (simulating save action)
      // Show confirmation popup (you can replace this with your own popup implementation)
      alert('Changes saved successfully!');
    }, 2000); // Simulating a delay for the save action, adjust as needed
  };

  return (
    <div className="view-profile-container">
      <div className="custom-shape-divider-top-1714074621">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="profile-header">
        <div className="title">
          <FaUser className="user-icon" />
          <h2>Profile</h2>
        </div>
        <div className="header-buttons">
          <button className="back-button" onClick={onBack}>
            Back
          </button>
          <LogoutButton onLogout={onLogout} />
        </div>
      </div>
      <div className="profile-content">
        {userType === 'student' && (
          <div className="student-profile">
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
            <input
              type="text"
              placeholder="Username"
              value={studentUsername}
              onChange={(e) => setStudentUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={studentPassword}
              onChange={(e) => setStudentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={studentConfirmPassword}
              onChange={(e) => setStudentConfirmPassword(e.target.value)}
            />
          </div>
        )}
        {userType === 'company' && (
          <div className="company-profile">
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
            <input
              type="text"
              placeholder="Username"
              value={companyUsername}
              onChange={(e) => setCompanyUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={companyPassword}
              onChange={(e) => setCompanyPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={companyConfirmPassword} 
              onChange={(e) => setCompanyConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <div className="save-changes-button-container">
          <button
            className={`save-changes-button${isSaving ? ' saving' : ''}`}
            onClick={handleSaveChanges}
            disabled={isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
