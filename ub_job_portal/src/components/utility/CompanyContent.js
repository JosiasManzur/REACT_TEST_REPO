import React, { useState } from "react";
import "./css/CompanyContent.css";

const CompanyContent = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        category: "",
        file: null,
    });

    const [jobListings, setJobListings] = useState([]);

    const [applicantsModalOpen, setApplicantsModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedListing, setSelectedListing] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (
            file &&
            (file.type === "application/pdf" ||
                file.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
        ) {
            setFormData({ ...formData, file: file });
        } else {
            setFormData({ ...formData, file: null });
            alert("Please upload a PDF or Word document");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePostJob = () => {
        if (
            !formData.title ||
            !formData.description ||
            !formData.location ||
            !formData.category
        ) {
            alert("Please fill in all required fields");
            return;
        }
        // Add validation for file if required

        // Post job logic
        const newJobListing = {
            title: formData.title,
            description: formData.description,
            location: formData.location,
            category: formData.category,
        };
        setJobListings([...jobListings, newJobListing]);
        setFormData({
            title: "",
            description: "",
            location: "",
            category: "",
            file: null,
        });
    };

    const handleCancel = () => {
        setFormData({
            title: "",
            description: "",
            location: "",
            category: "",
            file: null,
        });
    };

    const handleViewApplicants = (listing) => {
        setSelectedListing(listing);
        setApplicantsModalOpen(true);
    };

    const handleEditListing = (listing) => {
        setSelectedListing(listing);
        setEditModalOpen(true);
    };

    return (
        <div className="company-content">
            <div className="job-posting-section">
                <h4>Post a Job</h4>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                ></textarea>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleInputChange}
                />
                <input type="file" name="file" onChange={handleFileChange} />
                <div className="job-posting-buttons">
                    <button className="save-changes" onClick={handlePostJob}>
                        Post Job
                    </button>
                    <button className="cancel-changes" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
            <div className="job-listing-section">
                <h4>Your Job Listings</h4>
                <ul>
                    {jobListings.map((listing, index) => (
                        <li key={index}>
                            <span className="job-title">{listing.title}</span>
                            <span>{listing.location}</span>
                            <span>{listing.category}</span>
                            <div className="card-buttons">
                                <button
                                    className="view-applicants-button"
                                    onClick={() =>
                                        handleViewApplicants(listing)
                                    }
                                >
                                    View Applicants
                                </button>
                                <button
                                    className="edit-listing-button"
                                    onClick={() => handleEditListing(listing)}
                                >
                                    Edit Listing
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Applicants Modal */}
            {applicantsModalOpen && (
                <div className="company-modal">
                    <div className="company-modal-content">
                        <h2>Applicants for {selectedListing.title}</h2>
                        {/* Add applicant list here */}
                        <button onClick={() => setApplicantsModalOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
            {/* Edit Modal */}
            {editModalOpen && (
                <div className="company-modal">
                    <div className="company-modal-content">
                        <h2>Edit Listing</h2>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={selectedListing.title}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={selectedListing.description}
                            onChange={handleInputChange}
                        ></textarea>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={selectedListing.location}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={selectedListing.category}
                            onChange={handleInputChange}
                        />
                        <input
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                        />
                        <div className="job-posting-buttons">
                            <button className="save-changes">
                                Save Changes
                            </button>
                            <button
                                className="cancel-changes"
                                onClick={() => setEditModalOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyContent;
