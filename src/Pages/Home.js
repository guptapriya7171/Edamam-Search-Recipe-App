import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import API from "../Utils";
import styles from "../Styles/home.module.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = API.APP_ID;
  const APP_KEY = API.APP_KEY;
  //const input="Pizza";
  const API_URL = `${API.ROOT_URL}/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    const loadData = async () => {
      //data is stored as array in hits key
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data);
    };
    loadData();
  }, [input]);

  return (
    <div className={styles.home}>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        className={styles.search}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={styles.list}>
        {recipes.map((r, id) => (
          <Card
            key={id}
            title={r.recipe.label}
            image={r.recipe.image}
            url={r.recipe.url}
            // dishType={r.recipe.dishType[0]}
            // mealType={r.recipe.mealType[0]}
            // cuisineType={r.recipe.cuisineType[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
