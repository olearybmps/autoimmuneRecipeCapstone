const express = require('express');
const router = express.Router();
const {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
} = require('../controllers/recipeController');

// Get all recipes
router.get('/', getAllRecipes);

// Get a recipe by ID
router.get('/:id', getRecipeById);

// Create a recipe
router.post('/', createRecipe);

// Update a recipe
router.put('/:id', updateRecipe);

// Delete a recipe
router.delete('/:id', deleteRecipe);

module.exports = router;
