import React, { useState, useEffect, useRef } from 'react';
import './UserRecipes.css';

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
    const [editRecipeId, setEditRecipeId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    // Reference to title input field; to place focus
    const titleInputRef = useRef(null);

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
        const { name, value } = e.target;
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
                setShowForm(false);
                fetchRecipes();
            }
        } catch (error) {
            console.error('Error submitting recipe:', error);
        }
    };

    const handleEdit = (recipe) => {
        setRecipeData(recipe);
        setEditRecipeId(recipe._id);
        setShowForm(true);
        setTimeout(() => {
            titleInputRef.current.focus();
        }, 0);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:3000/api/recipes/${editRecipeId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(recipeData),
                }
            );
            if (response.ok) {
                setEditRecipeId(null);
                setRecipeData({
                    title: '',
                    description: '',
                    source: '',
                    ingredients: '',
                    imageURL: '',
                    recipeUrl: '',
                });
                setShowForm(false);
                fetchRecipes();
            }
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/recipes/${id}`,
                {
                    method: 'DELETE',
                }
            );
            if (response.ok) {
                fetchRecipes();
            }
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    const handleCreateRecipe = () => {
        setEditRecipeId(null);
        setRecipeData({
            title: '',
            description: '',
            source: '',
            ingredients: '',
            imageURL: '',
            recipeUrl: '',
        });
        setShowForm(true);
    };

    const handleCancelForm = () => {
        setEditRecipeId(null);
        setRecipeData({
            title: '',
            description: '',
            source: '',
            ingredients: '',
            imageURL: '',
            recipeUrl: '',
        });
        setShowForm(false);
    };

    return (
        <div className="user-recipes">
            <h2>User Recipes</h2>
            {!showForm && (
                <button onClick={handleCreateRecipe}>Create Recipe</button>
            )}
            {showForm && (
                <form onSubmit={editRecipeId ? handleUpdate : handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={recipeData.title}
                            onChange={handleChange}
                            required
                            ref={titleInputRef}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={recipeData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="source">Source:</label>
                        <input
                            type="text"
                            id="source"
                            name="source"
                            value={recipeData.source}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <textarea
                            id="ingredients"
                            name="ingredients"
                            value={recipeData.ingredients}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageURL">Image URL:</label>
                        <input
                            type="url"
                            id="imageURL"
                            name="imageURL"
                            value={recipeData.imageURL}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipeUrl">Recipe URL:</label>
                        <input
                            type="url"
                            id="recipeUrl"
                            name="recipeUrl"
                            value={recipeData.recipeUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">
                        {editRecipeId ? 'Update Recipe' : 'Create Recipe'}
                    </button>
                    <button type="button" onClick={handleCancelForm}>
                        Cancel
                    </button>
                </form>
            )}
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <div key={recipe._id} className="recipe-item">
                        <h3>{recipe.title}</h3>
                        <img src={recipe.imageURL} alt={recipe.title} />
                        <p>{recipe.description}</p>
                        <h4>Ingredients:</h4>
                        <p>{recipe.ingredients}</p>
                        <p>
                            <a
                                href={recipe.recipeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Recipe
                            </a>
                        </p>
                        <button onClick={() => handleEdit(recipe)}>Edit</button>
                        <button onClick={() => handleDelete(recipe._id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserRecipes;
