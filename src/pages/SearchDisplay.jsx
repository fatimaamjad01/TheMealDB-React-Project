import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchDisplay() {
 
  const location = useLocation();
  const meal = location.state?.meal;
  console.log(meal);
  if (!meal) return <div>No meal selected!</div>;
  return (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {meal.map((mealItem) => (
              <Link to={`/meal/${mealItem.strMeal}`} key={mealItem.idMeal}>
                <div className="overflow-hidden rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer p-4 bg-gray-800">
      <img
        src={mealItem.strMealThumb}
        alt={mealItem.strMeal}
        className="w-72 mx-auto "
      />
      <h2 className="text-2xl font-semibold mt-4 ">{mealItem.strMeal}</h2>
      </div>
              </Link>
            ))}
      
    </div>
  );
}

export default SearchDisplay;
