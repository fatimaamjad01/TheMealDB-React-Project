import React from "react";
import zucchiniImg from "../assets/zucchini.png";
import leekImg from "../assets/leek.png";
import treacleImg from "../assets/treacle.png";
import eggplantImg from "../assets/eggplant.png";
import { Link } from "react-router-dom";
const ingredients = [
  { title: "Zucchini", image: zucchiniImg },
  { title: "Leek", image: leekImg },
  { title: "Black Treacle", image: treacleImg },
  { title: "Eggplant", image: eggplantImg },
]
function RandomIngredient() {
  return (
    <div className=" text-center text-white space-y-5 bg-black">
      <h2 className="text-2xl text-white font-bold mb-2">Random Ingredient</h2>
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
export default RandomIngredient;