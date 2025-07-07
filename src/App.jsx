import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MealDetails from "./pages/MealDetails.jsx"; // Import the MealDetails component
import IngredientMeal from "./pages/IngredientMeal.jsx";
import SearchDisplay from "./pages/SearchDisplay.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./layout/index.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:letter" element={<SearchDisplay />} />
        <Route path="/meal/:idMeal" element={<MealDetails />} />
        <Route path="/ingredient/:ingredientId" element={<IngredientMeal />} />
      </Routes>
    </Layout>
  );
}

export default App;
