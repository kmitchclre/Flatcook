import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { useParams } from "react-router-dom";

function Recipes() {
  const { cookbookId } = useParams();
  const [recipes, setRecipies] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${cookbookId}`)
      .then((r) => r.json())
      .then((data) => setRecipies(data));
  }, []);

  const recipeCards = recipes.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });
  return <ul className="cards">{recipeCards}</ul>;
}

export default Recipes;
