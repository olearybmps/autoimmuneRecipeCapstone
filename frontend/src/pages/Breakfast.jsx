import React from 'react';
import RecipeList from '../components/RecipeList';

const Breakfast = () => {
    return (
        <div>
            <h2>Breakfast Recipes</h2>
            <RecipeList mealType="breakfast" />
        </div>
    );
};

export default Breakfast;
