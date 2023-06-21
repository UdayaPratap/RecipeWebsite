const mongoose = require('../db/db');

// Create a Recipe schema
const recipeSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Create a Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
