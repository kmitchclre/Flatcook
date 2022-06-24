import React, { useState } from "react";
import "./CreateRecipe.css";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const { id, recipe_name, img_url, ingredients, description } = recipe;
  let navigate = useNavigate();
  const [showIngredients, setShowIngredients] = useState(false);

  const [showDescription, setShowDescriptin] = useState(false);

  const deleteRecipe = () => {
    fetch("http://localhost:9292/recipes/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => navigate(0));
  };

  return (
    <div className="card">
      <img src={img_url} />
      <h2>{recipe_name}</h2>
      <h3>Ingridents: </h3>
      {!showIngredients && (
        <button onClick={() => setShowIngredients(true)}>
          View ingredients
        </button>
      )}
      {showIngredients && <p>{ingredients}</p>}
      <br />
      <h4>Steps:</h4>
      {!showDescription && (
        <button onClick={() => setShowDescriptin(true)}>View steps</button>
      )}
      {showDescription && <p>{description}</p>}
      <button onClick={deleteRecipe}>Delete Recipe</button>
    </div>
  );
}

export default RecipeCard;
