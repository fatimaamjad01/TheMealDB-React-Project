import React from "react";
import migasImg from "../../assets/migas.png";
import burgersImg from "../../assets/burgers.png";
import plovImg from "../../assets/plov.png";
import strawberriesImg from "../../assets/strawberries.png";
import saladImg from "../../assets/salad.png";
import pancakeImg from "../../assets/pancake.png";
import soupImg from "../../assets/soup.png";
import beetsoupImg from "../../assets/beetsoup.png";
import { Link } from "react-router-dom";

const meals = [
  { title: "Migas", image: migasImg },
  { title: "15-minute chicken & halloumi burgers", image: burgersImg },
  { title: "Lamb Pilaf (Plov)", image: plovImg },
  { title: "Strawberries Romanoff", image: strawberriesImg },
  { title: "Potato Salad (Olivier Salad)", image: saladImg },
  { title: "Blini Pancakes", image: pancakeImg },
  { title: "Fish Soup (Ukha)", image: soupImg },
  { title: "Beetroot Soup (Borscht)", image: beetsoupImg },
];

function LatestMeal() {
  return (
    <div className=" text-center text-white space-y-5 bg-black">
      <h2 className="text-2xl text-white font-bold mb-4">Latest Meal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  py-6 space-y-4 border-b-2 ">
        {meals.map((meal, index) => (
          <Link to={`/meal/${meal.title}`} key={index}>
            <div className="overflow-hidden rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-auto object-cover"
              />
              <h3 className="text-base font-medium mt-2 text-orange-400">
                {meal.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default LatestMeal;
