import React, { useState, useEffect } from 'react';

const UserRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('/api/recipes');
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div>
            <h2>User Recipes</h2>
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div key={recipe._id} className="recipe-item">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <p>{recipe.source}</p>
                        <img src={recipe.imageURL} alt={recipe.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserRecipes;
