import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import Filter from '../components/Filter';

const Breakfast = () => {
    // Store selected filters
    const [filters, setFilters] = useState([]);

    const handleFilterChange = (selectedFilters) => {
        // Update filters state with selected filters
        setFilters(selectedFilters);
    };

    return (
        <div className="breakfast-page">
            <h2>Breakfast Recipes</h2>
            {/* 
                Render the Filter component
                Pass handleFilterChange function as onFilterChange prop
                Allows Filter component to notify Breakfast component when selected filters change
            */}
            <Filter onFilterChange={handleFilterChange} />
            {/* 
                Render the RecipeList component
                Pass "breakfast" as mealType prop to specify type of recipes to fetch
                Pass current filters state as filters prop
                Allows RecipeList component to fetch and display recipes based on selected filters
            */}
            <RecipeList mealType="breakfast" filters={filters} />
        </div>
    );
};

export default Breakfast;
