import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateRecipe.css";

function CreateNewRecipe() {
  const [recipe, setRecipe_name] = useState("");
  const [img, setImg] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [cookbook_id, setCookBook_id] = useState("default");
  let navigate = useNavigate();

  const [cookbooks, setCookBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/cookbooks")
      .then((r) => r.json())
      .then((data) => setCookBooks(data));
  }, []);

  function handleRecipeChange(e) {
    setRecipe_name(e.target.value);
  }

  function handleImageChange(e) {
    setImg(e.target.value);
  }

  function handleIngredientChange(e) {
    setIngredients(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleRecipeId(e) {
    setCookBook_id(e.target.value);
    console.log(cookbook_id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipeObj = {
      recipe_name: recipe,
      img_url: img,
      ingredients: ingredients,
      description: description,
      cookbook_id: cookbook_id,
    };

    fetch("http://localhost:9292/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipeObj),
    })
      .then((r) => r.json())
      // .then((data) => console.log);
      .then(navigate("/CookBooksPage/" + cookbook_id));
  }

  return (
    <>
      <br />
      <h5>Add a new Recipe</h5>
      <br />
      <form onSubmit={handleSubmit} className="form">
        <label className="input-label" htmlFor="recipe-name">
          Recipe Name:
        </label>
        <input
          name="event-type"
          type="string"
          placeholder="Recipe type..."
          value={recipe}
          onChange={handleRecipeChange}
        ></input>
        <br />
        <br />
        <label className="input-label" htmlFor="recipe-image">
          Image
        </label>
        <input
          name="recipe-image"
          type="string"
          placeholder="Image of food..."
          value={img}
          onChange={handleImageChange}
        ></input>
        <br />
        <br />
        <label className="input-label" htmlFor="recipe-ingredients">
          Ingridents
        </label>
        <input
          name="recipe-ingredients"
          type="string"
          placeholder="List of ingredients..."
          value={ingredients}
          onChange={handleIngredientChange}
        ></input>
        <br />
        <br />
        <label className="input-label" htmlFor="recipe-description">
          Description
        </label>
        <input
          name="recipe-description"
          type="string"
          placeholder="Description of recipe.."
          value={description}
          onChange={handleDescriptionChange}
        ></input>
        <br />
        <br />
        <label className="input label" htmlFor="cookbook-id">
          {/* Recipe ID */}
        </label>
        <select
          name="recipe-id"
          value={cookbook_id}
          onChange={(e) => setCookBook_id(e.target.value)}
        >
          <option disabled value="default">
            Select a Cookbook
          </option>
          {cookbooks.map((cookbook) => {
            return (
              <option key={cookbook.id} value={cookbook.id}>
                {cookbook.cookbook_name}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <button className="form-input" type="submit">
          Create Recipe
        </button>
      </form>
    </>
  );
}

export default CreateNewRecipe;
