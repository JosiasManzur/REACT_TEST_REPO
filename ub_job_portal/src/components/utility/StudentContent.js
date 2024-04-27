// StudentContent.js
import React from 'react';
import Filter from './Filter';
import JobPostings from './JobPostings';

const StudentContent = ({ filterCategory, filterLocation, filterCategoryOptions, filterLocationOptions, 
  viewMode, onCategoryChange, onLocationChange, toggleViewMode, filteredJobPostings }) => (
  <div className="student-content">
    <Filter
      filterCategory={filterCategory}
      filterLocation={filterLocation}
      filterCategoryOptions={filterCategoryOptions}
      filterLocationOptions={filterLocationOptions}
      viewMode={viewMode}
      onCategoryChange={onCategoryChange}
      onLocationChange={onLocationChange}
      toggleViewMode={toggleViewMode}
    />
    <JobPostings
      filteredJobPostings={filteredJobPostings}
      viewMode={viewMode}
    />
  </div>
);

export default StudentContent;
