import React from 'react';

const RecipeList = ({ recipes, onRecipeSelect }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} onClick={() => onRecipeSelect(recipe)}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
