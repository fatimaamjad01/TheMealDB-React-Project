import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access the meal name in the URL

// Country name to Country Code mapping (Flag API ke liye zaroori)
const countryCodeMap = {
  American: "US",
  British: "GB",
  Canadian: "CA",
  Chinese: "CN",
  Croatian: "HR",
  Dutch: "NL",
  Egyptian: "EG",
  Filipino: "PH",
  French: "FR",
  Greek: "GR",
  Indian: "IN",
  Irish: "IE",
  Italian: "IT",
  Jamaican: "JM",
  Japanese: "JP",
  Kenyan: "KE",
  Malaysian: "MY",
  Mexican: "MX",
  Moroccan: "MA",
  Polish: "PL",
  Portuguese: "PT",
  Russian: "RU",
  Spanish: "ES",
  Thai: "TH",
  Tunisian: "TN",
  Turkish: "TR",
  Vietnamese: "VN",
};

function MealDetails() {
  const { idMeal } = useParams(); // Get meal name from URL params
  console.log("Meal ID from URL:", idMeal);
  const [meal, setMeal] = useState(null);

  // Fetch the meal details when the component mounts
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data for debugging
        if (data.meals) {
          setMeal(data.meals[0]); // Set the fetched meal data
        }
      });
  }, [idMeal]); // Dependency array to re-fetch if idMeal changes

  if (!meal) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Loading...
      </div>
    ); // Loading style improved
  }

  // Country code for flag
  const countryCode = meal.strArea ? countryCodeMap[meal.strArea] : null;

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="meal-details-container max-w-6xl mx-auto">
        {/* Meal Header: Name and Flag */}
        <div className="flex flex-col items-center justify-center mb-8">
          {/* Flag */}
          {meal.strArea && countryCode && (
            <img
              src={`https://flagsapi.com/${countryCode}/shiny/64.png`}
              alt={`${meal.strArea} Flag`}
              className="w-16 h-16 object-contain mb-2"
              onError={(e) => {
                e.target.style.display = "none";
              }} // If flag image fails to load, hide it
            />
          )}
          <h2 className="text-4xl font-extrabold text-white text-center">
            {meal.strMeal}
          </h2>
        </div>

        {/* Meal Image and Ingredients */}
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          {/* Left Column: Meal Image */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full max-w-xs md:max-w-none rounded-lg shadow-lg"
            />
            <p className="mt-4 text-gray-400">No Tags</p>{" "}
            {/* Hardcoded for No Tags (as per your design) */}
          </div>

          {/* Right Column: Ingredients */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {Object.keys(meal)
              .filter((key) => key.startsWith("strIngredient") && meal[key])
              .map((ingredientKey, index) => {
                const ingredientId = meal[ingredientKey];
                const measure =
                  meal[
                    `strMeasure${ingredientKey.replace(
                      "strIngredient",
                      "strMeasure"
                    )}`
                  ];

                return (
                  <div key={index} className="flex flex-col items-center p-2">
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                        ingredientId
                      )}-Small.png`}
                      alt={ingredientId}
                      className="w-24 h-24 object-contain"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/96?text=No+Image";
                      }} // Fallback image if ingredient image is missing
                    />
                    <p className="text-center mt-2 font-semibold">
                      {measure} {ingredientId}
                    </p>{" "}
                    {/* Ingredient name with measurement */}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-10 p-6  rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            Instructions:
          </h3>
          <p className="text-lg leading-relaxed">{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
