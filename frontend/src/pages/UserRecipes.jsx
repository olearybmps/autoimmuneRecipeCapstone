// Import necessary dependencies from React
import React, { useState, useEffect, useRef } from 'react';
import './UserRecipes.css';

// Define UserRecipes component
const UserRecipes = () => {
    // Store recipe list
    const [recipes, setRecipes] = useState([]);
    // Data for current recipe: create or edit
    const [recipeData, setRecipeData] = useState({
        title: '',
        description: '',
        source: '',
        ingredients: '',
        imageURL: '',
        recipeUrl: '',
    });
    // Store Id
    const [editRecipeId, setEditRecipeId] = useState(null);
    // State for toggle form visibility
    const [showForm, setShowForm] = useState(false);
    // Reference to title input field; to place focus
    const titleInputRef = useRef(null);

    // Fetch recipes
    useEffect(() => {
        fetchRecipes();
    }, []); // Dependencies array: run once

    // Define asynchronous function to fetch database recipes
    const fetchRecipes = async () => {
        try {
            // Make request
            const response = await fetch('http://localhost:3000/api/recipes');
            // Log response to browser console
            console.log('Response:', response);

            // Parse response data as JSON
            const data = await response.json();
            // Log data to browser console
            console.log('Data:', data);
            // Update state with fetched data
            setRecipes(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    // Handle change in form input fields
    const handleChange = (e) => {
        // Capture name and value of input field
        const { name, value } = e.target;
        // Update state with new value
        setRecipeData({ ...recipeData, [name]: value });
    };

    // Handle form submit: create recipe
    const handleSubmit = async (e) => {
        // Stop default action
        e.preventDefault();
        try {
            // Send post request to server
            const response = await fetch('http://localhost:3000/api/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Convert to JSON string in body of request
                body: JSON.stringify(recipeData),
            });
            // Check server response; reset form if ok
            if (response.ok) {
                setRecipeData({
                    title: '',
                    description: '',
                    source: '',
                    ingredients: '',
                    imageURL: '',
                    recipeUrl: '',
                });
                // Hide form on submit
                setShowForm(false);
                // Return updated recipe list
                fetchRecipes();
            }
        } catch (error) {
            console.error('Error submitting recipe:', error);
        }
    };

    // Handle edit button event
    const handleEdit = (recipe) => {
        // Update state with selected recipe
        setRecipeData(recipe);
        // Update state with id to identify recipe
        setEditRecipeId(recipe._id);
        // Show form
        setShowForm(true);
        // Immediately put focus in title field displaying form
        setTimeout(() => {
            titleInputRef.current.focus();
        }, 0);
    };

    // Handle form submit: update recipe
    const handleUpdate = async (e) => {
        // Stop default action
        e.preventDefault();
        try {
            // Send put request to server
            const response = await fetch(
                `http://localhost:3000/api/recipes/${editRecipeId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // Convert to JSON string in body of request
                    body: JSON.stringify(recipeData),
                }
            );
            // Check server response; reset form if ok
            if (response.ok) {
                // Reset state Id to null
                setEditRecipeId(null);
                // Reset to initial values
                setRecipeData({
                    title: '',
                    description: '',
                    source: '',
                    ingredients: '',
                    imageURL: '',
                    recipeUrl: '',
                });
                // Hide form on submit
                setShowForm(false);
                // Return updated recipe list
                fetchRecipes();
            }
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    // Handle delete recipe
    const handleDelete = async (id) => {
        try {
            // Send delete request to server
            const response = await fetch(
                `http://localhost:3000/api/recipes/${id}`,
                {
                    method: 'DELETE',
                }
            );
            // Check server response; reset form if ok
            if (response.ok) {
                // Return updated recipe list
                fetchRecipes();
            }
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    // Handle create new recipe event
    const handleCreateRecipe = () => {
        // Ensure form set for new recipe
        setEditRecipeId(null);
        // Ensure state contains all empty form fields
        setRecipeData({
            title: '',
            description: '',
            source: '',
            ingredients: '',
            imageURL: '',
            recipeUrl: '',
        });
        // Show form
        setShowForm(true);
    };

    // Handle cancel event
    const handleCancelForm = () => {
        // Reset Id back to null
        setEditRecipeId(null);
        // Ensure state contains all empty form fields
        setRecipeData({
            title: '',
            description: '',
            source: '',
            ingredients: '',
            imageURL: '',
            recipeUrl: '',
        });
        // Hide form
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
