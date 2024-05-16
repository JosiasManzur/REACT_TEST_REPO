import React, { useState } from "react";
import "./css/JobPostings.css";

const JobPostings = ({ filteredJobPostings, viewMode }) => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleJobClick = (job) => {
        setShowSuccessMessage(false); // Reset success message when closing modal
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };

    const handleApply = () => {
        // Add selected job to the list of applied jobs
        setAppliedJobs([...appliedJobs, selectedJob]);
        // Show confirmation message
        setShowSuccessMessage(true);
        // Close the modal after 2 seconds
        setTimeout(() => {
            setSelectedJob(null);
        }, 2000);
    };

    return (
        <div>
            <h4>Jobs Applied To</h4>
            <div className="applied-jobs">
                {appliedJobs.map((job) => (
                    <div className="applied-posting" key={job.id}>
                        <h3 className="job-title">{job.title}</h3>
                        <p className="job-employer">Employer: {job.employer}</p>
                        <p className="job-location">Location: {job.location}</p>
                        <p className="job-category">Category: {job.category}</p>
                    </div>
                ))}
            </div>

            <h4>Job Listings</h4>
            <div
                className={`job-postings ${
                    viewMode === "grid" ? "grid-view" : "list-view"
                }`}
            >
                {filteredJobPostings.map((job) => (
                    <div
                        key={job.id}
                        className="job-posting"
                        onClick={() => handleJobClick(job)}
                    >
                        <h3 className="job-title">{job.title}</h3>
                        <p className="job-employer">{job.employer}</p>
                        <p className="job-location">{job.location}</p>
                        <p className="job-description">{job.description}</p>
                        <p className="job-category">Category: {job.category}</p>
                        <p className="job-time">{job.timeCreated}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedJob && (
                <div className="modal">
                    <div className="modal-content">
                        {showSuccessMessage ? (
                            <div className="success-message">
                                You have successfully applied for the job!
                            </div>
                        ) : (
                            <>
                                <h2>{selectedJob.title}</h2>
                                <p>{selectedJob.description}</p>
                                <p>{selectedJob.location}</p>
                                <p>{selectedJob.category}</p>
                                <button
                                    className="apply-button"
                                    onClick={handleApply}
                                >
                                    Apply
                                </button>
                                <button
                                    className="cancel-button"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                                {selectedJob.resumePdf && (
                                    <a
                                        href={selectedJob.resumePdf}
                                        download
                                        className="download-button"
                                    >
                                        Download PDF
                                    </a>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobPostings;
