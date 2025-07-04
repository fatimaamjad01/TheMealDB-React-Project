import React from "react";
import { Link } from "react-router-dom";

import chickenImg from "../../assets/chicken.png";
import salmonImg from "../../assets/salmon.png";
import beefImg from "../../assets/beef.png";
import porkImg from "../../assets/pork.png";
const ingredients = [
  { title: "Chicken", image: chickenImg },
  { title: "Salmon", image: salmonImg },
  { title: "Beef", image: beefImg },
  { title: "Pork", image: porkImg },
];
function PopularIngredient() {
  return (
    <div className=" text-center text-white space-x-5 bg-black">
      <h2 className="text-2xl text-white font-bold mb-2">
        Popular Ingredients
      </h2>
      <div className="flex flex-wrap justify-center gap-10 border-b-2 space-y-4 py-6">
        {ingredients.map((ingredient, index) => (
          <Link to={`/ingredient/${ingredient.title}`} key={index}>
            <div className="overflow-hidden rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer">
              <img
                src={ingredient.image}
                alt={ingredient.title}
                className="w-55 h-55 object-cover mx-auto"
              />
              <h3 className="text-base font-medium mt-2 text-orange-400">
                {ingredient.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default PopularIngredient;
