import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import Filter from '../components/Filter';

const Lunch = () => {
    // State for selected filters
    const [filters, setFilters] = useState([]);

    const handleFilterChange = (selectedFilters) => {
        // Handler function to update filters state with selected filters
        setFilters(selectedFilters);
    };

    return (
        <div className="lunch-page">
            <h2>Lunch Recipes</h2>
            {/*
                Render the Filter component
                - Pass handleFilterChange function as onFilterChange prop
                - Allows Filter component to notify Lunch component when selected filters change
            */}
            <Filter onFilterChange={handleFilterChange} />
            {/*
                Render RecipeList component
                - Pass "lunch" as mealType prop to specify the type of recipes to fetch
                - Pass current filters state as filters prop
                - Allows the RecipeList component to fetch/display recipes based on selected filters
            */}
            <RecipeList mealType="Lunch" filters={filters} />
        </div>
    );
};

export default Lunch;
