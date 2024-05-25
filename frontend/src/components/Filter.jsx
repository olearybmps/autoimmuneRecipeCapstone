import React, { useState } from 'react';

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

const Filter = ({ onFilterChange }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterToggle = (filter) => {
        setSelectedFilters((prevFilters) => {
            const updatedFilters = prevFilters.includes(filter)
                ? prevFilters.filter((f) => f !== filter)
                : [...prevFilters, filter];

            onFilterChange(updatedFilters);
            return updatedFilters;
        });
    };

    return (
        <div>
            <h3>Diet & Allergy Filters</h3>
            <ul>
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
        </div>
    );
};

export default Filter;
