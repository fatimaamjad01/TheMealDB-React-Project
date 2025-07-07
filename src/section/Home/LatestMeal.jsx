import React from "react";

import { Link } from "react-router-dom";

const meals = [
  {
    strMeal: "Baked salmon with fennel & tomatoes",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    idMeal: "52959",
  },
  {
    strMeal: "Cajun spiced fish tacos",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    idMeal: "52819",
  },
  {
    strMeal: "Escovitch Fish",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    idMeal: "52944",
  },
  {
    strMeal: "Fish fofos",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
    idMeal: "53043",
  },
  {
    strMeal: "Fish pie",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
    idMeal: "52802",
  },
  {
    strMeal: "Fish Soup (Ukha)",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
    idMeal: "53079",
  },
  {
    strMeal: "Fish Stew with Rouille",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
    idMeal: "52918",
  },
  {
    strMeal: "Garides Saganaki",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
    idMeal: "52764",
  },
];

function LatestMeal() {
  return (
    <div className=" text-center text-white space-y-5 bg-black">
      <h2 className="text-2xl text-white font-bold mb-4">Latest Meal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  py-6 space-y-4 border-b-2 ">
        {meals.map((meal, index) => (
          <Link to={`/meal/${meal.idMeal}`} key={index}>
            <div className="overflow-hidden rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-auto object-cover"
              />
              <h3 className="text-base font-medium mt-2 text-orange-400">
                {meal.strMeal}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default LatestMeal;
