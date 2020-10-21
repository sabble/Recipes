import React from "react";
import "./App.css";

function Recipes({ name, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1>{name}</h1>
      <p>calories: {Math.round(calories)}</p>
      <img src={image} alt=""></img>
      <ul className="ingredients">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
