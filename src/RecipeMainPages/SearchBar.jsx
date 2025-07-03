import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query); // Pass the query to parent component (App)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-4 border-t-2 border-b-2 border-white bg-black">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a Meal..."
          value={query}
          onChange={handleChange}
          className="w-full max-w-md rounded-md px-4 py-2 shadow focus:outline-none focus:ring bg-white text-black"
        />
      </form>
      <div className="flex flex-wrap gap-4 justify-center text-white text-lg  font-bold">
     <p>   <span>🍄 Total Meals: <span className="font-normal">304</span></span>
        <span>🍤 Total Ingredients: <span className="font-normal">575</span></span>
        <span>🧃 Images: <span className="font-normal">304</span></span> </p>
      </div>
    </div>
  );
}

export default SearchBar;
