import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-4  bg-black text-white">
      <div className="w-20"></div>
      <p className="text-lg sm:text-3xl font-bold lg:text-4xl whitespace-nowrap">
        The Meal DB
      </p>
      <Link to="/">
        <button className="bg-red-500 py-2 px-4 rounded mr-4">Home</button>
      </Link>
    </header>
  );
}

export default Header;
