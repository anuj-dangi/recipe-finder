import React, { useState, useEffect } from 'react';
import Axios from "axios";

import "../css/header.css";

const Header = ({ recipeList, setRecipeList }) => {
  const [timeoutId, setTimeoutId] = useState();

  const fetchRecipe = async (searchString) => {
    try {
      if (!searchString || searchString.trim() === "") {
        const response = await Axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        const meals = response.data.meals.map(meal => ({ ...meal, random: true }));
        setRecipeList(meals);
      } else {
        const response = await Axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`
        );
        if (response.data.meals) {
          const meals = response.data.meals.map(meal => ({ ...meal, random: false }));
          setRecipeList(meals);
        }
      }
    } catch (error) {
      console.log("Error fetching recipe, Error: ", error);
    }
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    setTimeoutId(timeout);
  };

  useEffect(() => {
    fetchRecipe("");
  }, []);

  return (
    <div className="header">
      <div className="appName">
        <img className="appIcon" src="/hamburger.svg" alt="logo" />
        Recipe Finder
      </div>
      <div className="searchComponent">
        <img src="/search-icon.svg" alt="search" />
        <input
          className="searchInput"
          placeholder="Search Recipe"
          onChange={onTextChange}
        />
      </div>
    </div>
  );
};

export default Header;
