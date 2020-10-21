import React from "react";
import Recipies from "./Recipes";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const APP_ID = "cde48f85";
  const APP_KEY = "0735dfa3042f06c321299ce2dc5b6c2d";

  const [recipes, setResipes] = useState([]);
  const [search, setSearch] = useState("");
     const [query, setQuery] = useState("milk");

  useEffect(() => {
    getingData();
  }, [query]);

  const getingData = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    console.log(data.hits);
    setResipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}></input>
        <button className='search-btn' type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipies
            name={recipe.recipe.label}
            key={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
