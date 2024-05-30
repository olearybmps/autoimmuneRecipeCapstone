import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
// import Filter from '../components/Filter';

const Dinner = () => {
    // State for selected filters
    const [filters, setFilters] = useState([]);

    const handleFilterChange = (selectedFilters) => {
        // Handler function to update filters state with selected filters
        setFilters(selectedFilters);
    };

    return (
        <div className="dinner-page">
            <h2>Dinner Recipes</h2>
            {/*
                Render the Filter component
                - Pass handleFilterChange function as onFilterChange prop
                - Allows Filter component to notify Dinner component when selected filters change
            */}
            {/* <Filter onFilterChange={handleFilterChange} /> */}
            {/*
                Render RecipeList component
                - Pass "dinner" as mealType prop to specify the type of recipes to fetch
                - Pass current filters state as filters prop
                - Allows the RecipeList component to fetch/display recipes based on selected filters
            */}
            <RecipeList mealType="Dinner" filters={filters} />
        </div>
    );
};

export default Dinner;
