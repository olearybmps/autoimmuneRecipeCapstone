import React, { useState, useEffect } from 'react';

const UserRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [recipeData, setRecipeData] = useState({
        title: '',
        description: '',
        source: '',
        ingredients: '',
        imageURL: '',
        recipeUrl: '',
    });

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

    const handleChange = (e) => {
        const { name, value } = event.target;
        setRecipeData({ ...recipeData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            });
            if (response.ok) {
                setRecipeData({
                    title: '',
                    description: '',
                    source: '',
                    ingredients: '',
                    imageURL: '',
                    recipeUrl: '',
                });
                fetchRecipes();
            }
        } catch (error) {
            console.error('Error submitting recipe:', error);
        }
    };

    return (
        <div>
            <h2>User Recipes</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={recipeData.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="description"
                    value={recipeData.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input
                    type="text"
                    name="source"
                    value={recipeData.source}
                    onChange={handleChange}
                    placeholder="Source"
                />
                <input
                    type="text"
                    name="ingredients"
                    value={recipeData.ingredients}
                    onChange={handleChange}
                    placeholder="Ingredients"
                />
                <input
                    type="text"
                    name="imageURL"
                    value={recipeData.imageURL}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
                <input
                    type="text"
                    name="recipeUrl"
                    value={recipeData.recipeUrl}
                    onChange={handleChange}
                    placeholder="Recipe URL"
                />
                <button type="submit">Submit Recipe</button>
            </form>
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
