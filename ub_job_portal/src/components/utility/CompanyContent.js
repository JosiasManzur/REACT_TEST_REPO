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

    const [editFormData, setEditFormData] = useState({
        title: "",
        description: "",
        location: "",
        category: "",
        file: null,
    });

    const [jobListings, setJobListings] = useState([]);
    const [errorMessages, setErrorMessages] = useState({});
    const [selectedListing, setSelectedListing] = useState(null);
    const [selectedListingIndex, setSelectedListingIndex] = useState(null);
    const [applicantsModalOpen, setApplicantsModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (
            file &&
            (file.type === "application/pdf" ||
                file.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
        ) {
            setFormData({ ...formData, file: file });
            setEditFormData({ ...editFormData, file: file });
            setErrorMessages({ ...errorMessages, file: "" }); // Clear file error message
        } else {
            setFormData({ ...formData, file: null });
            setEditFormData({ ...editFormData, file: null });
            setErrorMessages({
                ...errorMessages,
                file: "Please upload a PDF or Word document",
            });
        }
    };

    const handleInputChange = (event, isEditForm) => {
        const { name, value } = event.target;
        if (isEditForm) {
            setEditFormData({ ...editFormData, [name]: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handlePostJob = () => {
        const errors = {};
        if (!formData.title) {
            errors.title = "Title is required";
        }
        if (!formData.description) {
            errors.description = "Description is required";
        }
        if (!formData.location) {
            errors.location = "Location is required";
        }
        if (!formData.category) {
            errors.category = "Category is required";
        }
        if (!formData.file) {
            errors.file = "File is required";
        }
        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
            return;
        }

        // Post job logic
        const newJobListing = {
            title: formData.title,
            description: formData.description,
            location: formData.location,
            category: formData.category,
            file: formData.file, // Ensure file data is included
        };
        setJobListings([...jobListings, newJobListing]);
        setFormData({
            title: "",
            description: "",
            location: "",
            category: "",
            file: null,
        });
        setErrorMessages({});
        // Clear file input field
        document.getElementById("file-upload").value = "";
    };

    const handleCancel = () => {
        setFormData({
            title: "",
            description: "",
            location: "",
            category: "",
            file: null,
        });
        setEditFormData({
            title: "",
            description: "",
            location: "",
            category: "",
            file: null,
        });
        setErrorMessages({});
    };

    const handleViewApplicants = (listing) => {
        setSelectedListing(listing);
        setApplicantsModalOpen(true);
    };

    const handleEditListing = (listing, index) => {
        setSelectedListing(listing);
        setSelectedListingIndex(index);
        setEditFormData({
            title: listing.title,
            description: listing.description,
            location: listing.location,
            category: listing.category,
            file: listing.file, // Assign current file to editFormData
        });
        setEditModalOpen(true);
    };

    const handleSaveChanges = () => {
        const errors = {};
        if (!editFormData.title) {
            errors.title = "Title is required";
        }
        if (!editFormData.description) {
            errors.description = "Description is required";
        }
        if (!editFormData.location) {
            errors.location = "Location is required";
        }
        if (!editFormData.category) {
            errors.category = "Category is required";
        }
        if (!editFormData.file) {
            errors.file = "File is required";
        }
        if (Object.keys(errors).length > 0) {
            setErrorMessages(errors);
            return;
        }

        // Update job listing logic
        const updatedJobListings = jobListings.map((listing, index) => {
            if (index === selectedListingIndex) {
                return {
                    ...listing,
                    title: editFormData.title,
                    description: editFormData.description,
                    location: editFormData.location,
                    category: editFormData.category,
                    file: editFormData.file,
                };
            }
            return listing;
        });

        setJobListings(updatedJobListings);
        setEditModalOpen(false);
        setErrorMessages({});
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
                    onChange={(e) => handleInputChange(e, false)}
                />
                {errorMessages.title && (
                    <p className="error-message">{errorMessages.title}</p>
                )}
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => handleInputChange(e, false)}
                ></textarea>
                {errorMessages.description && (
                    <p className="error-message">{errorMessages.description}</p>
                )}
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => handleInputChange(e, false)}
                />
                {errorMessages.location && (
                    <p className="error-message">{errorMessages.location}</p>
                )}
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={(e) => handleInputChange(e, false)}
                />
                {errorMessages.category && (
                    <p className="error-message">{errorMessages.category}</p>
                )}
                <input
                    type="file"
                    id="file-upload"
                    name="file"
                    onChange={handleFileChange}
                />
                {errorMessages.file && (
                    <p className="error-message">{errorMessages.file}</p>
                )}
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
                    {/* Job listing items */}
                    {jobListings.map((listing, index) => (
                        <li key={index}>
                            <span className="job-title">{listing.title}</span>
                            <span>{listing.location}</span>
                            <span>{listing.category}</span>
                            <span>{listing.file.name}</span>
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
                                    onClick={() =>
                                        handleEditListing(listing, index)
                                    }
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
                        {/* Applicant list */}
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
                            value={editFormData.title}
                            onChange={(e) => handleInputChange(e, true)}
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={editFormData.description}
                            onChange={(e) => handleInputChange(e, true)}
                        ></textarea>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={editFormData.location}
                            onChange={(e) => handleInputChange(e, true)}
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={editFormData.category}
                            onChange={(e) => handleInputChange(e, true)}
                        />
                        {editFormData.file && (
                            <p>Current file: {editFormData.file.name}</p> // Display current file name
                        )}
                        <input
                            type="file"
                            id="file-upload"
                            name="file"
                            onChange={handleFileChange}
                        />
                        {errorMessages.file && (
                            <p className="error-message">
                                {errorMessages.file}
                            </p>
                        )}
                        <div className="job-posting-buttons">
                            <button
                                className="save-changes"
                                onClick={handleSaveChanges}
                            >
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
