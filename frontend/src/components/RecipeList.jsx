import React, { useState, useEffect } from 'react';
import './RecipeList.css';

// API variables
const APP_ID = import.meta.env.VITE_EDAMAM_API_ID;
const APP_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

// RecipeList component receives mealType and filters as props
const RecipeList = ({ mealType, filters = [] }) => {
    // Store recipes
    const [recipes, setRecipes] = useState([]);
    // Store loading status
    const [loading, setLoading] = useState(true);
    // Store error during API request
    const [error, setError] = useState(null);

    // Fetch recipes when mealType or filters change
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                // Initiate status to true before making API request
                setLoading(true);

                // Construct query string for selected filters
                const filtersQuery = filters.length
                    ? filters.map((filter) => `health=${filter}`).join('&')
                    : '';

                // Construct API URL
                const url = `${BASE_URL}?type=public&q=${encodeURIComponent(
                    mealType
                )}&app_id=${APP_ID}&app_key=${APP_KEY}&${filtersQuery}`;

                // API request
                const response = await fetch(url);
                const data = await response.json();

                // Update recipe state with fetched data
                setRecipes(data.hits || []);
                // Set to false after API request complete
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                // Set error state with an error message
                setError('Failed to fetch recipes. Please try again.');
                // Set loading status to false in case of an error
                setLoading(false);
            }
        };

        // Call fetchRecipes function
        fetchRecipes();
    }, [mealType, filters]); // Dependencies array: run if mealType and filters change

    // Render loading message if loading is true
    if (loading) {
        return <p>Loading recipes...</p>;
    }

    // Render error message if there is an error
    if (error) {
        return <p className="error-message">{error}</p>;
    }

    // Render recipe list or a message if no recipes are found
    return (
        <div className="recipe-list-container">
            {recipes.length ? (
                <ul className="recipe-list">
                    {/* Map over recipes and render each recipe item */}
                    {recipes.map((recipe) => (
                        <li key={recipe.recipe.uri} className="recipe-item">
                            <h3>{recipe.recipe.label}</h3>
                            <img
                                src={recipe.recipe.image}
                                alt={recipe.recipe.label}
                            />
                            <p>Source: {recipe.recipe.source}</p>
                            <h4>Ingredients:</h4>
                            <ul>
                                {recipe.recipe.ingredientLines.map(
                                    (ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    )
                                )}
                            </ul>
                            <a
                                href={recipe.recipe.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Recipe
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recipes found matching the selected filters.</p>
            )}
        </div>
    );
};

export default RecipeList;
