const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
    },
    recipeUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Recipe', recipeSchema);