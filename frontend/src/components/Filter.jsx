import React, { useState } from 'react';
import './Filter.css';

// Array of filter options
const filterOptions = [
    'alcohol-cocktail',
    'alcohol-free',
    'celery-free',
    'crustacean-free',
    'dairy-free',
    'DASH',
    'egg-free',
    'fish-free',
    'fodmap-free',
    'gluten-free',
    'immuno-supportive',
    'keto-friendly',
    'kidney-friendly',
    'kosher',
    'low-potassium',
    'low-sugar',
    'lupine-free',
    'Mediterranean',
    'mollusk-free',
    'mustard-free',
    'No-oil-added',
    'paleo',
    'peanut-free',
    'pecatarian',
    'pork-free',
    'red-meat-free',
    'sesame-free',
    'shellfish-free',
    'soy-free',
    'sugar-conscious',
    'sulfite-free',
    'tree-nut-free',
    'vegan',
    'vegetarian',
    'wheat-free',
];

// Filter component receives onFilterChange function as prop from Breakfast.jsx component
const Filter = ({ onFilterChange }) => {
    // Store selected filters
    const [selectedFilters, setSelectedFilters] = useState([]);
    // Control visibility of filters
    const [showFilters, setShowFilters] = useState(false);

    // Handle filter toggle
    const handleFilterToggle = (filter) => {
        setSelectedFilters((prevFilters) => {
            // Check if filter already selected
            const updatedFilters = prevFilters.includes(filter)
                ? // Remove filter if selected
                  prevFilters.filter((f) => f !== filter)
                : // Add filter if not selected
                  [...prevFilters, filter];

            // Call onFilterChange function with new filters
            onFilterChange(updatedFilters);
            // Update state
            return updatedFilters;
        });
    };

    return (
        <div className="filter-container">
            <div className="filter-header">
                {/* Title for filter section */}
                <h3>Diet & Allergy Filters</h3>
                {/* Filter toggle button */}
                <button onClick={() => setShowFilters(!showFilters)}>
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
            </div>
            {/* Conditionally render filter checkboxes based on showFilters state */}
            {showFilters && (
                <ul className="filter-list">
                    {/* Map over filterOptions, render each filter */}
                    {filterOptions.map((filter) => (
                        <li key={filter}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.includes(filter)}
                                    onChange={() => handleFilterToggle(filter)}
                                />
                                {filter}
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Filter;
