import React, { useState } from 'react';
import './css/AdminContent.css';

const AdminContent = () => {
  const [userAccounts, setUserAccounts] = useState([
    { id: 1, type: 'student', username: 'student1', email: 'student1@example.com', profilePicture: 'https://i.redd.it/80jykz32log21.png' },
    { id: 2, type: 'company', username: 'company1', email: 'company1@example.com', profilePicture: 'https://64.media.tumblr.com/4d9f911a9310776d716e492e8fd03cad/tumblr_p1oxc3f1jS1tlgv32o1_540.pnj' },
    { id: 3, type: 'student', username: 'student2', email: 'student2@example.com', profilePicture: 'https://i.pinimg.com/originals/46/e4/38/46e438a93cc58647274205fd7f5d8811.gif' },
    { id: 4, type: 'company', username: 'company2', email: 'company2@example.com', profilePicture: 'https://i.pinimg.com/originals/36/db/6c/36db6cad5d391fb538fc1dd844819338.png' },
    { id: 5, type: 'student', username: 'student3', email: 'student3@example.com', profilePicture: 'https://as2.ftcdn.net/v2/jpg/03/36/20/81/500_F_336208121_46dU8WqdYpCtOEErQgQRmz4iLTQD7ox1.jpg' },
    { id: 6, type: 'company', username: 'company3', email: 'company3@example.com', profilePicture: 'https://images.nightcafe.studio/jobs/7UbkiJUXr6smK6pM7bFE/7UbkiJUXr6smK6pM7bFE--1--tfe5i.jpg?tr=w-1600,c-at_max' },
    { id: 7, type: 'student', username: 'student4', email: 'student4@example.com', profilePicture: 'https://cdnb.artstation.com/p/assets/images/images/018/262/883/large/lucas-gomes-paisagem03.jpg?1558740462' },
    { id: 8, type: 'company', username: 'company4', email: 'company4@example.com', profilePicture: 'https://cdna.artstation.com/p/assets/images/images/018/262/798/original/lucas-gomes-globin-slayer.gif?1558740088' },
    { id: 9, type: 'student', username: 'student5', email: 'student5@example.com', profilePicture: 'https://static.vecteezy.com/system/resources/previews/024/542/163/original/landscape-8bit-pixel-art-summer-natural-landscape-mountain-scenery-arcade-video-game-background-vector.jpg' },
    { id: 10, type: 'company', username: 'company5', email: 'company5@example.com', profilePicture: 'https://pa1.aminoapps.com/6416/1f0d19b3f22edb00f60769d603669d4411a513e4_hq.gif' }
  ]);

  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      title: 'Software Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'Tech Solutions Ltd.',
      location: 'Orange Walk',
      category: 'Information Technology',
      timeCreated: 'April 19, 2024, 09:15 AM',
    },
    {
      id: 2, 
      title: 'Database Administrator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'Data Management Inc.',
      location: 'Corozal',
      category: 'Database',
      timeCreated: 'April 18, 2024, 01:30 PM',
    },
    {
      id: 3,
      title: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'WebWorks',
      location: 'Belize',
      category: 'Web Development',
      timeCreated: 'April 17, 2024, 04:45 PM',
    },
    {
      id: 4,
      title: 'Software Engineer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'Innovative Solutions',
      location: 'Cayo',
      category: 'Engineering',
      timeCreated: 'April 16, 2024, 10:00 AM',
    },
    {
      id: 5,
      title: 'Network Administrator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'NetPros',
      location: 'Stann Creek',
      category: 'Information Technology',
      timeCreated: 'April 15, 2024, 08:15 PM',
    },
    {
      id: 6,
      title: 'Full Stack Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'Digital Solutions',
      location: 'Toledo',
      category: 'Web Development',
      timeCreated: 'April 14, 2024, 11:30 AM',
    },
    {
      id: 7,
      title: 'UI/UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'Designers Inc.',
      location: 'Orange Walk',
      category: 'Web Development',
      timeCreated: 'April 13, 2024, 02:45 PM',
    },
    {
      id: 8,
      title: 'System Administrator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'SysAdmins Inc.',
      location: 'Corozal',
      category: 'Information Technology',
      timeCreated: 'April 12, 2024, 06:00 PM',
    }, 
    {
      id: 9,
      title: 'Mobile App Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'Mobile Solutions Ltd.',
      location: 'Belize',
      category: 'Mobile Development',
      timeCreated: 'April 11, 2024, 12:30 PM',
    },
    {
      id: 10,
      title: 'Data Analyst',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      employer: 'Data Analytics Inc.',
      location: 'Cayo',
      category: 'Data Analytics', 
      timeCreated: 'April 10, 2024, 05:45 PM',
    },
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
              <img src={account.profilePicture} alt="Profile" className="user-picture" />
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
