import React, { useState } from 'react';
import RecipeList from '../components/RecipeList';
import Filter from '../components/Filter';

const Breakfast = () => {
    const [filters, setFilters] = useState([]);

    const handleFilterChange = (selectedFilters) => {
        setFilters(selectedFilters);
    };

    return (
        <div>
            <h2>Breakfast Recipes</h2>
            <Filter onFilterChange={handleFilterChange} />
            <RecipeList mealType="breakfast" filters={filters} />
        </div>
    );
};

export default Breakfast;
