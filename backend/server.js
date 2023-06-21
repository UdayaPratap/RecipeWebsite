const express = require('express');
const cors=require('cors');
const Recipe = require('./models/recipe');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API endpoint to fetch recipes
app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});
//API to add recipes
app.post("/api/recipes", async (req, res) => {
  try {
    console.log("recipe is" + req);
    const { title, description } = req.body; // Assuming the request body contains title and description

    // Create a new recipe using the Recipe model
    const recipe = new Recipe({ title, description });

    // Save the recipe to the database
    await recipe.save();

    res.status(201).json(recipe); // Return the saved recipe as the response
  } catch (error) {
    console.error('Error creating recipe', error);
    res.status(500).json({ error: 'Failed to create recipe' });
  }
});


const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
