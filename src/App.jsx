import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import SearchBar from './RecipeMainPages/SearchBar.jsx';
import LatestMeal from './RecipeMainPages/LatestMeal.jsx';
import PopularIngredient from './RecipeMainPages/PopularIngredient.jsx';
import RandomMeal from './RecipeMainPages/RandomMeal.jsx';
import RandomIngredient from './RecipeMainPages/RandomIngredient.jsx';
import Country from './RecipeMainPages/Country.jsx';
import Footer from './RecipeMainPages/Footer.jsx';
import Header from './RecipeMainPages/Header.jsx';
import MealDetails from './RecipeMainPages/MealDetails.jsx'; // Import the MealDetails component
import IngredientMeal from './RecipeMainPages/IngredientMeal.jsx';
import SearchDisplay from './RecipeMainPages/SearchDisplay.jsx';


function App() {
  
   const [meal, setMeal] = useState(null);  // Keep the meal data for the selected meal
  const navigate = useNavigate();

  // Handle search functionality
  const handleSearch = (mealName) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeal(data.meals[0]); // Setting the first meal from search result
          navigate(`/search/${mealName}`); // Navigate to the meal details page
        } else {
          setMeal(null); // No meal found
        }
      });
    };

  return (
    <div>
      <Header />
      <Routes>
        {/* Main Page Route with all 6 components */}
        <Route 
          path="/" 
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              <LatestMeal />
              <PopularIngredient />
              <RandomMeal />
              <RandomIngredient />
              <Country />
              
            </>
          } 
        />
    
     <Route path="/search/:mealName" element={<SearchDisplay meal={meal} />} />   

        {/* Dynamic Route for Meal Details Page */}
        <Route 
  path="/meal/:mealName" 
  element={<MealDetails meal={meal} />} // Properly closed the tag
/>
<Route
path="/ingredient/:ingredientName"
element={<IngredientMeal />} // Render IngredientMeal component for ingredient details
/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
