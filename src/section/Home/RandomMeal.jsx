import React from "react";
import { Link } from "react-router-dom";
import bigosImg from "../../assets/bigos.png";
import couscousImg from "../../assets/couscous.png";
import ratatouilleImg from "../../assets/ratatouille.png";
import beefmechadoImg from "../../assets/beefmechado.png";
import brieImg from "../../assets/brie.png";
import mustardImg from "../../assets/mustard.png";
import nanaimobarImg from "../../assets/nanaimo-bar.png";
import tortangImg from "../../assets/tortang.png";
const meals = [
  { title: "Bigos (Hunters Stew)", image: bigosImg },
  { title: "Chicken Couscous", image: couscousImg },
  { title: "Ratatouille", image: ratatouilleImg },
  { title: "Beef Mechado", image: beefmechadoImg },
  { title: "Brie wrapped in prosciutto & brioche", image: brieImg },
  { title: "Mustard champ", image: mustardImg },
  { title: "Nanaimo Bars", image: nanaimobarImg },
  { title: "Tortang Talong", image: tortangImg },
];
function RandomMeal() {
  return (
    <div className=" text-center text-white space-y-5 bg-black">
      <h2 className="text-2xl text-white font-bold mb-4">Random Meal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  py-6 space-y-4 border-b-2 ">
        {meals.map((meal, index) => (
          <Link to={`/meal/${meal.title}`} key={index}>
            <div className="overflow-hidden rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer">
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-auto object-cover"
              />
              <h3 className="text-base font-medium mt-2 text-orange-400 truncate">
                {meal.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default RandomMeal;
