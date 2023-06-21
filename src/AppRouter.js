import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/Homepage';
import RecipesPage from './pages/Recipes/Recipespage';
import AboutPage from './pages/About/About';
import AddRecipePage from './pages/Recipes/addRecipe';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route exact path="/recipes/addRecipe" element={<AddRecipePage />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
