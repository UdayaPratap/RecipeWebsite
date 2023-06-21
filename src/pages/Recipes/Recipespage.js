import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Recipespage.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Link className='link' to={`/recipes/${recipe.id}`}>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
      </Link>
    </div>
  );
};

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recipes-page">
      <h1>Recipes</h1>
      <Link to="/addRecipe" className="cta-button">Add new delicacy</Link>
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
