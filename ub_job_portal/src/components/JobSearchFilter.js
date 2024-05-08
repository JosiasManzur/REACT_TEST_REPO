import React, { useState, useEffect, useMemo } from 'react';
import Header from './utility/Header';
import StudentContent from './utility/StudentContent';
import CompanyContent from './utility/CompanyContent';
import AdminContent from './utility/AdminContent';
import './utility/css/JobSearchFilter.css';
import ViewProfile from './ViewProfile'; // Import the ViewProfile component

const JobSearchFilter = ({ onLogout, clearUserType }) => {
  const [userType, setUserType] = useState('');
  const [viewProfileVisible, setViewProfileVisible] = useState(false);

  useEffect(() => {
    const userTypeFromStorage = localStorage.getItem('userType');
    if (userTypeFromStorage) {
      setUserType(userTypeFromStorage); 
    }
    const viewProfileFromStorage = localStorage.getItem('viewProfileVisible');
    if (viewProfileFromStorage) {
      setViewProfileVisible(JSON.parse(viewProfileFromStorage)); 
    }
  }, []); 

  const handleLogout = () => {
    clearUserType(); 
    setViewProfileVisible(false); 
    localStorage.setItem('viewProfileVisible', JSON.stringify(false));
    onLogout();
  };

  const handleViewProfileClick = () => {
    setViewProfileVisible(true);
    localStorage.setItem('viewProfileVisible', JSON.stringify(true));
  };

  const handleBack = () => {
    setViewProfileVisible(false); 
    localStorage.setItem('viewProfileVisible', JSON.stringify(false));
  };

  const jobPostings = useMemo(() => [
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
  ], []);

  // Filter options and view mode state
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterCategoryOptions, setFilterCategoryOptions] = useState([]);
  const [filterLocationOptions, setFilterLocationOptions] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    // Extract unique categories and locations from job postings
    const categories = new Set(jobPostings.map((job) => job.category));
    const locations = new Set(jobPostings.map((job) => job.location));
    setFilterCategoryOptions(['All', ...categories]);
    setFilterLocationOptions(['All', ...locations]);
  }, [jobPostings]);

  // Handle filter change for category
  const handleCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  // Handle filter change for location
  const handleLocationChange = (e) => {
    setFilterLocation(e.target.value);
  };

  // Toggle between grid and list view
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  // Filter job postings based on category and location
  const filteredJobPostings = jobPostings.filter((job) => {
    if (filterCategory !== 'All' && filterLocation !== 'All') {
      return job.category === filterCategory && job.location === filterLocation;
    } else if (filterCategory !== 'All') {
      return job.category === filterCategory;
    } else if (filterLocation !== 'All') {
      return job.location === filterLocation;
    } else {
      return true;
    }
  });

  if (viewProfileVisible) {
    return <ViewProfile onLogout={handleLogout} onBack={handleBack} userType={userType} />;
  }

  return (
    <div className="job-search-container">
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
      <Header userType={userType} onViewProfileClick={handleViewProfileClick} onLogout={handleLogout} />
      {userType === 'student' && (
        <StudentContent
          filterCategory={filterCategory}
          filterLocation={filterLocation}
          filterCategoryOptions={filterCategoryOptions}
          filterLocationOptions={filterLocationOptions}
          viewMode={viewMode}
          onCategoryChange={handleCategoryChange}
          onLocationChange={handleLocationChange}
          toggleViewMode={toggleViewMode}
          filteredJobPostings={filteredJobPostings}
        />
      )}
      {userType === 'company' && <CompanyContent />}
      {userType === 'admin' && <AdminContent />}
    </div>
  );
};

export default JobSearchFilter;
