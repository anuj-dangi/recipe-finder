import React, { useState } from 'react';
import "../css/recipe.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const RecipeListContainer = ({ recipeList }) => {

  const [openIngredients, setOpenIngredients] = useState(false);
  const [openRecipe, setOpenRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Open Ingredients dialog
  const handleOpenIngredients = (recipe) => {
    setSelectedRecipe(recipe);
    setOpenIngredients(true);
  };

  // Open Recipe Instructions dialog
  const handleOpenRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setOpenRecipe(true);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
    setOpenIngredients(false);
    setOpenRecipe(false);
  };

  // Helper: extract ingredients + measures
  const getIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  return (
    <div className="recipeListContainer">
      {recipeList && recipeList.map((recipeObj) => (
        <div key={recipeObj.idMeal} className="recipeContainer">
          <img className="coverImage" src={recipeObj.strMealThumb} alt={recipeObj.strMeal} />
          <span className="recipeName">{recipeObj.strMeal}</span>

          <span className="ingredientsText" onClick={() => handleOpenIngredients(recipeObj)}>
            See Ingredients
          </span>

          <span className="seeMoreText" onClick={() => handleOpenRecipe(recipeObj)}>
            See Complete Recipe
          </span>

          <span className="seeVideo" onClick={() => window.open(recipeObj.strYoutube, "_blank")}>
            See Video
          </span>
        </div>
      ))}

      {/* Ingredients Dialog */}
      <Dialog open={openIngredients} onClose={handleClose} maxWidth="sm" fullWidth>
        {selectedRecipe && (
          <>
            <DialogTitle>{selectedRecipe.strMeal} - Ingredients</DialogTitle>
            <DialogContent>
              <table className="ingredientsTable">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {getIngredients(selectedRecipe).map((item, index) => (
                    <tr key={index}>
                      <td>{item.ingredient}</td>
                      <td>{item.measure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Complete Recipe Dialog */}
      <Dialog open={openRecipe} onClose={handleClose} maxWidth="sm" fullWidth>
        {selectedRecipe && (
          <>
            <DialogTitle>{selectedRecipe.strMeal} - Instructions</DialogTitle>
            <DialogContent>
              <p>{selectedRecipe.strInstructions}</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default RecipeListContainer;
