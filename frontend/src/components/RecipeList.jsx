import React, { useState, useEffect } from 'react';

const APP_ID = import.meta.env.VITE_EDAMAM_API_ID;
const APP_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

const RecipeList = ({ mealType, filters = [] }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        console.log('Current Filters:', filters);
        const fetchRecipes = async () => {
            try {
                const filtersQuery = filters.length
                    ? filters.map((filter) => `health=${filter}`).join('&')
                    : '';
                const url = `${BASE_URL}?type=public&q=${encodeURIComponent(
                    mealType
                )}&app_id=${APP_ID}&app_key=${APP_KEY}&${filtersQuery}`;

                console.log('Fetching URL:', url);

                const response = await fetch(url);
                const data = await response.json();

                console.log('API Response:', data);

                setRecipes(data.hits || []);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [mealType, filters]);

    return (
        <div>
            {recipes.length ? (
                <ul>
                    {recipes.map((recipe) => (
                        <li key={recipe.recipe.uri}>
                            <h3>{recipe.recipe.label}</h3>
                            <img
                                src={recipe.recipe.image}
                                alt={recipe.recipe.label}
                            />
                            <p>
                                Calories: {Math.round(recipe.recipe.calories)}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;
