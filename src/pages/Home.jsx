import React from "react";
import SearchBar from "../section/Home/SearchBar.jsx";
import LatestMeal from "../section/Home/LatestMeal.jsx";
import PopularIngredient from "../section/Home/PopularIngredient.jsx";
import RandomMeal from "../section/Home/RandomMeal.jsx";
import RandomIngredient from "../section/Home/RandomIngredient.jsx";
import Country from "../section/Home/Country.jsx";
function Home() {
  return (
    <>
      <SearchBar />
      <LatestMeal />
      <PopularIngredient />
      <RandomMeal />
      <RandomIngredient />
      <Country />
    </>
  );
}

export default Home;
