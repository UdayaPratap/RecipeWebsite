import React from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const { id } = useParams();

  // Fetch the recipe data based on the id
  // You can use the same fetch logic as in the RecipesPage component to fetch the recipe data

  return (
    <div>
      {/* Display the recipe details */}
      <h2>Recipe Title</h2>
      <p>Recipe Description</p>
    </div>
  );
};

export default Recipe;
