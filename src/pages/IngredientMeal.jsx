import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function IngredientMeal() {
  const { ingredientId } = useParams();
  const [meals, setMeals] = useState([]);

  // Fetch meals related to the ingredient
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
      });
  }, [ingredientId]);

  return (
    <div className="bg-black text-white p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/" className="text-red-500 hover:text-red-700 text-lg ">
            &lt; Back
          </Link>
          <h1 className="text-3xl font-semibold ml-4">
            {ingredientId} Dishes
          </h1>
        </div>
        <div className="text-center mb-6">
          <img
            src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
             ingredientId
            )}.png`}
            alt={ingredientId}
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Display Meals */}
        {meals.length === 0 ? (
          <p className="text-center text-xl mt-8">
            No dishes found for {ingredientId}.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {meals.map((meal) => (
              <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
                <div className="overflow-hidden rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer p-4 bg-gray-800">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-lg font-medium text-white text-center">
                    {meal.strMeal}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default IngredientMeal;
