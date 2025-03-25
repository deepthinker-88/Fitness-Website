import "./Recipes.css";
import React from "react";
import { useState } from "react";
export default function Recipes() {
  const [recipes, setRecipes] = useState("");

  const handleFindRecipe = async () => {
    const url = fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const response = await url;
    const json = await response.json();
    setRecipes(json.meals);
  };
  return (
    <section>
      <h2>Let's start finding some great recipes for you</h2>
      <p>Recipe Finder</p>
      <button onClick={handleFindRecipe}>
        Click here to generate some Recipes
      </button>
      <br></br>
      <br></br>
      <br></br>

      {recipes && recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.idMeal}>
                <h1>{recipe.strMeal}</h1>
                <p>{recipe.strInstructions}</p>
                <img
                  src={recipe.strMealThumb}
                  alt="food-image"
                  width="150"
                ></img>
              </div>
            );
          })}
        </ul>
      ) : (
        <p>No recipes found</p>
      )}
    </section>
  );
}
