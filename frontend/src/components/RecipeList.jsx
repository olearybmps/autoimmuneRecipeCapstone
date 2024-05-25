import React, { useState, useEffect } from 'react';

const APP_ID = import.meta.env.VITE_EDAMAM_API_ID;
const APP_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

const RecipeList = ({ mealType }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(
                    `${BASE_URL}?type=public&q=${encodeURIComponent(
                        mealType
                    )}&app_id=${APP_ID}&app_key=${APP_KEY}`
                );
                const data = await response.json();
                console.log(data);
                setRecipes(data.hits);
                console.log(recipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [mealType]);

    return (
        <div>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.recipe.uri}>
                        <h3>{recipe.recipe.label}</h3>
                        <img
                            src={recipe.recipe.image}
                            alt={recipe.recipe.label}
                        />
                        <p>Calories: {Math.round(recipe.recipe.calories)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
