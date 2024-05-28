import React, { useState, useEffect } from 'react';

const UserRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/recipes');
            console.log('Response:', response);
            const data = await response.json();
            console.log('Data:', data);
            setRecipes(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div>
            <h2>User Recipes</h2>
            <div>
                {recipes.map((recipe) => (
                    <div key={recipe._id}>
                        <h3>{recipe.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserRecipes;
