// JobPostings.js
import React from 'react';

const JobPostings = ({ filteredJobPostings, viewMode }) => (
  <div className={`job-postings ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
    {filteredJobPostings.map((job) => (
      <div key={job.id} className="job-posting">
        <h3 className="job-title">{job.title}</h3>
        <p className="job-employer">{job.employer}</p>
        <p className="job-location">{job.location}</p>
        <p className="job-description">{job.description}</p>
        <p className="job-category">Category: {job.category}</p>
        <p className="job-time">{job.timeCreated}</p>
      </div>
    ))}
  </div>
);

export default JobPostings;
