import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
 

  const onSearch = async (letter) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${letter}
`      );
      const data = await response.json();
      
      if (data.meals) {
        navigate(`/search/${letter}`, { state: { meal: data.meals || [] } });
      } else {
        alert("No meals found for the given query.");
        setQuery(""); // Clear the input field
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
      alert("An error occurred while searching for meals. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    } else {
      alert("Please enter a valid search query.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-4 border-t-2 border-b-2 border-white bg-black">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label htmlFor="search-input" className="sr-only">
          Search for a Meal
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Search for a Meal..."
          value={query}
          onChange={handleChange}
          className="w-full rounded-md px-4 py-2 shadow focus:outline-none focus:ring bg-white text-black"
          disabled={loading}
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      <div className="flex flex-wrap gap-4 justify-center text-white text-lg font-bold">
        <p>
          <span>
            🍄 Total Meals: <span className="font-normal">304</span>
          </span>
          <span>
            🍤 Total Ingredients: <span className="font-normal">575</span>
          </span>
          <span>
            🧃 Images: <span className="font-normal">304</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SearchBar;
