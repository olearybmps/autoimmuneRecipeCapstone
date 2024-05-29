const Recipe = require('../models/recipeModel');

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    // Log data to node.js
    console.log('Recipes:', recipes);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


// Create a recipe
const createRecipe = async (req, res) => {
    try {
        if (Array.isArray(req.body)) {
            // Handle multiple recipes
            const recipes = await Recipe.insertMany(req.body);
            res.status(201).json(recipes);
        } else {
            // Handle a single recipe
            const recipe = new Recipe(req.body);
            await recipe.save();
            res.status(201).json(recipe);
        }
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ error: 'Invalid recipe data' });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(400).json({ error: 'Invalid recipe data' });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};