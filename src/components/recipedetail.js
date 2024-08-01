
import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <div>Select a recipe to see details</div>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <p><strong>Author:</strong> {recipe.author}</p>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
