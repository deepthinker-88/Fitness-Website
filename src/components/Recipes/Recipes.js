import "../WorkoutApi/WorkoutApi.css";
import "./Recipes.css";
import Footer from "../Footer/Footer";
import React from "react";
import { useState } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showSavedRecipes, setShowSavedRecipes] = useState(false);
  const [savedRecipeItems, setSavedRecipeItems] = useState([]);
  const [showSavedList, setShowSavedList] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [showRecipeMessage, setShowRecipeMessage] = useState("");
  const [showSavedRecipeButton, setShowSavedRecipeButton] = useState(true);
  const [deleteRecipe, setDeleteRecipe] = useState(true);
  const handleFindRecipe = async () => {
    setHasSearched(true);
    setRecipes([]);
    const url = fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const response = await url;
    const json = await response.json();

    setRecipes(json.meals);
    setShowSaveButton(true);
  };

  const handleSavedRecipes = async () => {
    if (recipes.length > 0) {
      setShowSavedRecipes(true);
      setSavedRecipeItems((prev) => [...prev, ...recipes]);
      setShowSavedRecipes((prev) => !prev);
      setRecipes([]);
    }
  };

  const handleFetchedDataStyling = () => {
    setHighlight(true);
  };
  const handleShoWSavedRecipeMessage = () => {
    setShowSavedRecipeButton(false);
    setTimeout(() => {
      setShowRecipeMessage("Recipe Saved");
      setTimeout(() => {
        setShowRecipeMessage("");
      }, 2000);
    });
  };

  const handleDeleteRecipe = (savedRecipe) => {
    const deleteRecipe = savedRecipeItems.filter(
      (recipe) => recipe !== savedRecipe
    );
    setSavedRecipeItems(deleteRecipe);
    if(deleteRecipe.length === 0){
      setShowSaveButton(false)
    }
  };

  return (
    <>
      <section className="recipe-info">
        <h2>Let's start finding some great recipes for you</h2>
        <p>Recipe Finder</p>
        <button
          onClick={() => {
            handleFindRecipe();
            handleFetchedDataStyling();
          }}
        >
          Click here to generate some Recipes
        </button>

        {recipes && recipes.length > 0 ? (
          <section className="recipe-instructions">
            <article className={highlight ? "highlight" : ""}>
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
            </article>
          </section>
        ) : (
          hasSearched && <p>No recipes found</p>
        )}

        {showSaveButton && (
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
                YouTube Link : <a href={recipe.strYoutube}>Video Recipe Link</a>
              </p>
              {showSavedRecipeButton && (
                <button
                  onClick={() => {
                    handleShoWSavedRecipeMessage(recipe);
                  }}
                >
                  Add Recipe to Custom Workouts
                </button>
              )}
              {showRecipeMessage && <p>{showRecipeMessage}</p>}
              <section>
                <button onClick={() => handleDeleteRecipe(recipe)}>
                  Delete Recipe
                </button>
              </section>
            </div>
          ))}
        </>
      )}
    </>
  );
}
