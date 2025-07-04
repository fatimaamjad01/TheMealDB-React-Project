import React from "react";
import { useLocation } from "react-router-dom";

function SearchDisplay() {
  const location = useLocation();
  const meal = location.state?.meal;
  if (!meal) return <div>No meal selected!</div>;
  return (
    <div className="text-center py-10 bg-black">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-72 mx-auto "
      />
      <h2 className="text-2xl font-semibold mt-4 ">{meal.strMeal}</h2>
      <p className="mt-2">{meal.strInstructions}</p>
    </div>
  );
}

export default SearchDisplay;
