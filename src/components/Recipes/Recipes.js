import "./Recipes.css";
import Footer from "../Footer/Footer";
import React from "react";
import { useState } from "react";
export default function Recipes() {
  const [recipes, setRecipes] = useState("");
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);

  const handleFindRecipe = async () => {
    const url = fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const response = await url;
    const json = await response.json();
    setRecipes(json.meals);
    setShowSaveButton(true);
  };

  const handleSavedRecipes = async () => {
    setShowSavedRecipes(true);
  };

  return (
    <section className="recipe-info">
      <h2>Let's start finding some great recipes for you</h2>
      <p>Recipe Finder</p>
      <button onClick={handleFindRecipe}>
        Click here to generate some Recipes
      </button>
      <br></br>
      <br></br>
      <br></br>

      {recipes && recipes.length > 0 ? (
        <section className="recipe-instructions">
          {recipes.map((recipe) => {
            return (
              <div key={recipe.idMeal} class="food-list">
                <br></br>
                <img
                  src={recipe.strMealThumb}
                  alt="food-image"
                  width="150"
                  class="responsive"
                ></img>
                <h1>{recipe.strMeal}</h1>
                <p>{recipe.strInstructions}</p>
                <p className="youtube-link">
                  {" "}
                  YouTube Link : <a href= {recipe.strYoutube}>Video Recipe Link</a>
                </p>
              </div>
            );
          })}
        </section>
      ) : (
        <p>No recipes found</p>
      )}

      {showSaveButton && (
        <button onClick={handleSavedRecipes}>
          {showSavedRecipes ? "Recipe Saved" : "Save Recipe"}
        </button>
      )}
    </section>
  );
}
