// Filter.js
import React from "react";

const Filter = ({
    filterCategory,
    filterLocation,
    filterCategoryOptions,
    filterLocationOptions,
    viewMode,
    onCategoryChange,
    onLocationChange,
    toggleViewMode,
}) => (
    <div className="filter-container">
        <div className="filter-option">
            <label htmlFor="categoryFilter">Filter by Category:</label>
            <select
                id="categoryFilter"
                value={filterCategory}
                onChange={onCategoryChange}
            >
                {filterCategoryOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
        <div className="filter-option">
            <label htmlFor="locationFilter">Filter by Location:</label>
            <select
                id="locationFilter"
                value={filterLocation}
                onChange={onLocationChange}
            >
                {filterLocationOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
        <div className="filter-option">
            <button className="view-mode-toggle" onClick={toggleViewMode}>
                {viewMode === "grid"
                    ? "Switch to List View"
                    : "Switch to Grid View"}
            </button>
        </div>
    </div>
);

export default Filter;
