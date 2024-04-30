import React, { useState } from 'react';
import './AdminContent.css';

const AdminContent = () => {
  const [userAccounts, setUserAccounts] = useState([
    { id: 1, type: 'student', username: 'student1', email: 'student1@example.com' },
    { id: 2, type: 'company', username: 'company1', email: 'company1@example.com' },
    { id: 3, type: 'student', username: 'student2', email: 'student2@example.com' },
    { id: 4, type: 'company', username: 'company2', email: 'company2@example.com' },
  ]);

  const [jobListings, setJobListings] = useState([
    { id: 1, title: 'Software Developer', employer: 'Tech Solutions Ltd.', location: 'Orange Walk' },
    { id: 2, title: 'Web Developer', employer: 'WebWorks', location: 'Belize' },
    { id: 3, title: 'Data Analyst', employer: 'Data Analytics Inc.', location: 'Cayo' },
    { id: 4, title: 'UX/UI Designer', employer: 'Design Studios', location: 'Belize' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const deleteUserAccount = (id) => {
    setModalOpen(true);
    setItemToDelete({ type: 'user', id });
  };

  const deleteJobListing = (id) => {
    setModalOpen(true);
    setItemToDelete({ type: 'job', id });
  };

  const confirmDelete = () => {
    if (itemToDelete.type === 'user') {
      setUserAccounts(userAccounts.filter((account) => account.id !== itemToDelete.id));
    } else if (itemToDelete.type === 'job') {
      setJobListings(jobListings.filter((listing) => listing.id !== itemToDelete.id));
    }
    setModalOpen(false);
  };

  return (
    <div className="admin-content">
      <h3>Admin Account:</h3>
      <div className="user-accounts">
        <h4>User Accounts</h4>
        <ul>
          {userAccounts.map((account) => (
            <li key={account.id}>
              {account.type === 'student' ? (
                <span className="user-type">Student:</span>
              ) : (
                <span className="user-type">Company:</span>
              )}
              <span className="user-username">{account.username}</span>
              <span className="user-email">{account.email}</span>
              <button className="delete-button" onClick={() => deleteUserAccount(account.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="job-listings">
        <h4>Job Listings</h4>
        <ul>
          {jobListings.map((listing) => (
            <li key={listing.id}>
              <span className="job-title">{listing.title}</span>
              <span className="job-employer">{listing.employer}</span>
              <span className="job-location">{listing.location}</span>
              <button className="delete-button" onClick={() => deleteJobListing(listing.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this {itemToDelete.type === 'user' ? 'user account' : 'job listing'}?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={() => setModalOpen(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContent;
