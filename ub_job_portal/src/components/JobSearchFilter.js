import React, { useState, useEffect } from 'react';
import './JobSearchFilter.css';
import LogoutButton from './LogoutButton';

const JobSearchFilter = ({ onLogout }) => {
  // Sample job postings data
  const jobPostings = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Tech Solutions Ltd.',
      location: 'Orange Walk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Information Technology',
    },
    {
      id: 2,
      title: 'Database Administrator',
      company: 'Data Management Inc.',
      location: 'Corozal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Database',
    },
    {
      id: 3,
      title: 'Web Developer',
      company: 'WebWorks',
      location: 'Belize',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Web Development',
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'Innovative Solutions',
      location: 'Cayo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Engineering',
    },
    {
      id: 5,
      title: 'Network Administrator',
      company: 'NetPros',
      location: 'Stann Creek',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Information Technology',
    },
    {
      id: 6,
      title: 'Full Stack Developer',
      company: 'Digital Ventures',
      location: 'Toledo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Web Development',
    },
    {
      id: 7,
      title: 'Software Architect',
      company: 'Architects Inc.',
      location: 'Orange Walk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Engineering',
    },
    {
      id: 8,
      title: 'IT Support Specialist',
      company: 'Support Pros',
      location: 'Corozal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Information Technology',
    },
    {
      id: 9,
      title: 'Database Analyst',
      company: 'Data Solutions',
      location: 'Belize',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Database',
    },
    {
      id: 10,
      title: 'Frontend Developer',
      company: 'Frontend Designs',
      location: 'Cayo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Web Development',
    },
    {
      id: 11,
      title: 'System Administrator',
      company: 'SysAdmins Inc.',
      location: 'Stann Creek',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Information Technology',
    },
    {
      id: 12,
      title: 'DevOps Engineer',
      company: 'DevOps Solutions',
      location: 'Toledo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Engineering',
    },
    {
      id: 13,
      title: 'Software Tester',
      company: 'Testers Ltd.',
      location: 'Orange Walk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Information Technology',
    },
    {
      id: 14,
      title: 'Database Developer',
      company: 'DB Developers',
      location: 'Corozal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Database',
    },
    {
      id: 15,
      title: 'Backend Developer',
      company: 'Backend Solutions',
      location: 'Belize',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Web Development',
    },
    {
      id: 16,
      title: 'Electrical Engineer',
      company: 'Electrical Innovations',
      location: 'Cayo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Engineering',
    },
    {
      id: 17,
      title: 'Software Support Specialist',
      company: 'Software Pros',
      location: 'Stann Creek',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Information Technology',
    },
    {
      id: 18,
      title: 'UI/UX Designer',
      company: 'Designers Inc.',
      location: 'Toledo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Web Development',
    },
    {
      id: 19,
      title: 'Network Engineer',
      company: 'Network Solutions',
      location: 'Orange Walk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Engineering',
    },
    {
      id: 20,
      title: 'IT Manager',
      company: 'IT Solutions',
      location: 'Corozal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      category: 'Information Technology',
    },
  ];  

  // Filter options
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterLocation, setFilterLocation] = useState('All');
  const [filterCategoryOptions, setFilterCategoryOptions] = useState([]);
  const [filterLocationOptions, setFilterLocationOptions] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Extract unique categories and locations from job postings
  useEffect(() => {
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

  return (
    <div className="job-search-container">
      <h2 className="job-search-title">Job Search Results</h2>
      <div className="logout-container">
        <LogoutButton onLogout={onLogout} />
      </div>
      <div className="filter-container">
        <div className="filter-option">
          <label htmlFor="categoryFilter">Filter by Category:</label>
          <select id="categoryFilter" value={filterCategory} onChange={handleCategoryChange}>
            {filterCategoryOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="filter-option">
          <label htmlFor="locationFilter">Filter by Location:</label>
          <select id="locationFilter" value={filterLocation} onChange={handleLocationChange}>
            {filterLocationOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="filter-option">
          <button className="view-mode-toggle" onClick={toggleViewMode}>
            {viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
          </button>
        </div>
      </div>
      <div className={`job-postings ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
        {filteredJobPostings.map((job) => (
          <div key={job.id} className="job-posting">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <p className="job-location">{job.location}</p>
            <p className="job-description">{job.description}</p>
            <p className="job-category">Category: {job.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSearchFilter;
