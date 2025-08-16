import { useState } from "react";

import Header from './components/Header';
import RecipeListContainer from "./components/Recipe"

function App() {

  const [recipeList, setRecipeList] = useState();

  return(
    <>
      <Header recipeList={recipeList} setRecipeList={setRecipeList}></Header>
      <RecipeListContainer recipeList={recipeList} setRecipeList={setRecipeList}></RecipeListContainer>
    </>
  )
}

export default App;
