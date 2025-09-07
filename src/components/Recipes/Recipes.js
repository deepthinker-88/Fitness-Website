import "./Recipes.css";
import Footer from "../Footer/Footer";
import React from "react";
import { useState } from "react";
import ViewRecipes from "../ViewRecipes/ViewRecipes";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const [savedRecipeItems, setSavedRecipeItems] = useState([]);
  const [showSavedList, setShowSavedList] = useState(false);

  const handleFindRecipe = async () => {
    setRecipes([]);
    const url = fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const response = await url;
    const json = await response.json();

    setRecipes(json.meals);
    setShowSaveButton(true);
  };

  const handleSavedRecipes = async () => {
    if(recipes.length > 0){
    setShowSavedRecipes(true);
    setSavedRecipeItems((prev) => [...prev, ...recipes]);
    setShowSavedRecipes((prev) => !prev);
    setRecipes([]);
    }
  };

  return (
    <>
      <section className="recipe-info">
        <h2>Let's start finding some great recipes for you</h2>
        <p>Recipe Finder</p>
        <button onClick={handleFindRecipe}>
          Click here to generate some Recipes
        </button>

        {recipes && recipes.length > 0 ? (
          <section className="recipe-instructions">
            {recipes.map((recipe) => {
              return (
                <div key={recipe.idMeal} class="food-list">
                  
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
                    YouTube Link :{" "}
                    <a href={recipe.strYoutube}>Video Recipe Link</a>
                  </p>
                </div>
              );
            })}
          </section>
        ) : (
          <p>No recipes found</p>
        )}


        {showSaveButton &&(
          <button onClick={handleSavedRecipes}>Save Recipe</button>
        )}
      </section>
      
        {savedRecipeItems.length > 0 && (
          <button
            onClick={() => setShowSavedList((prev) => !prev)}
            className="saved-recipes"
          >
            {showSavedList ? "Hide Saved Recipes" : "Show Saved Recipes"}
          </button>
        )}

        {showSavedList && (
          <>
            {savedRecipeItems.map((recipe) => (
              <div key={recipe.idMeal} className="food-list saved-recipes">
                
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
                  YouTube Link :{" "}
                  <a href={recipe.strYoutube}>Video Recipe Link</a>
                </p>
              </div>
            ))}
          </>
        )}
      </>
    
  );
}
