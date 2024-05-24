import React from 'react';
import RecipeList from '../components/RecipeList';

const Breakfast = () => {
    return (
        <div>
            <h1>Breakfast Recipes</h1>
            <RecipeList mealType="breakfast" />
        </div>
    );
};

export default Breakfast;
