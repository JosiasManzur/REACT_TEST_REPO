// StudentContent.js
import React, { useState, useEffect, useMemo } from "react";
import Filter from "./Filter";
import JobPostings from "./JobPostings";

const StudentContent = () => {
    const jobPostings = useMemo(
        () => [
            {
                id: 1,
                title: "Software Developer",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "Tech Solutions Ltd.",
                location: "Orange Walk",
                category: "Information Technology",
                timeCreated: "April 19, 2024, 09:15 AM",
            },
            {
                id: 2,
                title: "Database Administrator",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "Data Management Inc.",
                location: "Corozal",
                category: "Database",
                timeCreated: "April 18, 2024, 01:30 PM",
            },
            {
                id: 3,
                title: "Web Developer",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "WebWorks",
                location: "Belize",
                category: "Web Development",
                timeCreated: "April 17, 2024, 04:45 PM",
            },
            {
                id: 4,
                title: "Software Engineer",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "Innovative Solutions",
                location: "Cayo",
                category: "Engineering",
                timeCreated: "April 16, 2024, 10:00 AM",
            },
            {
                id: 5,
                title: "Network Administrator",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "NetPros",
                location: "Stann Creek",
                category: "Information Technology",
                timeCreated: "April 15, 2024, 08:15 PM",
            },
            {
                id: 6,
                title: "Full Stack Developer",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "Digital Solutions",
                location: "Toledo",
                category: "Web Development",
                timeCreated: "April 14, 2024, 11:30 AM",
            },
            {
                id: 7,
                title: "UI/UX Designer",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "Designers Inc.",
                location: "Orange Walk",
                category: "Web Development",
                timeCreated: "April 13, 2024, 02:45 PM",
            },
            {
                id: 8,
                title: "System Administrator",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "SysAdmins Inc.",
                location: "Corozal",
                category: "Information Technology",
                timeCreated: "April 12, 2024, 06:00 PM",
            },
            {
                id: 9,
                title: "Mobile App Developer",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "Mobile Solutions Ltd.",
                location: "Belize",
                category: "Mobile Development",
                timeCreated: "April 11, 2024, 12:30 PM",
            },
            {
                id: 10,
                title: "Data Analyst",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                employer: "Data Analytics Inc.",
                location: "Cayo",
                category: "Data Analytics",
                timeCreated: "April 10, 2024, 05:45 PM",
            },
        ],
        []
    );

    // Filter options and view mode state
    const [filterCategory, setFilterCategory] = useState("All");
    const [filterLocation, setFilterLocation] = useState("All");
    const [filterCategoryOptions, setFilterCategoryOptions] = useState([]);
    const [filterLocationOptions, setFilterLocationOptions] = useState([]);
    const [viewMode, setViewMode] = useState("grid");

    useEffect(() => {
        // Extract unique categories and locations from job postings
        const categories = new Set(jobPostings.map((job) => job.category));
        const locations = new Set(jobPostings.map((job) => job.location));
        setFilterCategoryOptions(["All", ...categories]);
        setFilterLocationOptions(["All", ...locations]);
    }, [jobPostings]);

    // Handle filter change for category
    const onCategoryChange = (e) => {
        setFilterCategory(e.target.value);
    };

    // Handle filter change for location
    const onLocationChange = (e) => {
        setFilterLocation(e.target.value);
    };

    // Toggle between grid and list view
    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
    };

    // Filter job postings based on category and location
    const filteredJobPostings = jobPostings.filter((job) => {
        if (filterCategory !== "All" && filterLocation !== "All") {
            return (
                job.category === filterCategory &&
                job.location === filterLocation
            );
        } else if (filterCategory !== "All") {
            return job.category === filterCategory;
        } else if (filterLocation !== "All") {
            return job.location === filterLocation;
        } else {
            return true;
        }
    });

    return (
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
};

export default StudentContent;
