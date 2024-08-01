
import React, { useState } from 'react';

import { recipes } from './data.js';
import './App.css'; 
import RecipeList from './components/recipelist.js';
import RecipeDetail from './components/recipedetail.js';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="app">
      <div className="left-panel">
        <RecipeList recipes={recipes} onRecipeSelect={handleRecipeSelect} />
      </div>
      <div className="right-panel">
        <RecipeDetail recipe={selectedRecipe} />
      </div>
    </div>
  );
}

export default App;
