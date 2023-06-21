import React, { useState } from 'react';
import './addRecipe.css';
const AddRecipePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const recipeData = {
      title,
      description,
      // Add any additional fields you have in your recipe schema
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipeData),
      });
  
      if (response.ok) {
        // Recipe added successfully, you can perform any additional logic here
        console.log('Recipe added');
        // Reset the form fields
        setTitle('');
        setDescription('');
        // Redirect to the recipes page
        window.location.href = '/recipes';
      } else {
        console.error('Error adding recipe');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="add-recipe-page">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:<br/>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:<br/>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </label>
        <button className="cta-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRecipePage;
