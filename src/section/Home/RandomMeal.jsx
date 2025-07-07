import React from "react";
import { Link } from "react-router-dom";

const meals = [
  {
    idMeal: "52980",
    title: "Bigos (Hunters Stew)",
    image: bigosImg,
  },
  {
    idMeal: "52850",
    title: "Chicken Couscous",
    image: couscousImg,
  },
  {
    idMeal: "52908",
    title: "Ratatouille",
    image: ratatouilleImg,
  },
  {
    idMeal: "53047",
    title: "Beef Mechado",
    image: beefmechadoImg,
  },
  {
    idMeal: "52896",
    title: "Brie wrapped in prosciutto & brioche",
    image: brieImg,
  },
  {
    idMeal: "52824",
    title: "Mustard champ",
    image: mustardImg,
  },
  {
    idMeal: "52791",
    title: "Nanaimo Bars",
    image: nanaimobarImg,
  },
  {
    idMeal: "53050",
    title: "Tortang Talong",
    image: tortangImg,
  },
];

function RandomMeal() {
  return (
    <div className=" text-center text-white space-y-5 bg-black">
      <h2 className="text-2xl text-white font-bold mb-4">Random Meal</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  py-6 space-y-4 border-b-2 ">
        {meals.map((meal, index) => (
          <Link to={`/meal/${meal.idMeal}`} key={index}>
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
