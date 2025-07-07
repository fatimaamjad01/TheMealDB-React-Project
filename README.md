# 🍽️ THMealDB React App

A modern, responsive React application that leverages [TheMealDB API](https://www.themealdb.com/api.php) to fetch and display meal-related data. This project utilizes dynamic routing with React Router to provide a seamless user experience for meal exploration, search, and recipe details.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![React Router](https://img.shields.io/badge/React_Router-6.4.0-red?logo=react-router)
![API](https://img.shields.io/badge/API-TheMealDB-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🔍 **Meal Search**: Search for meals by ingredients, name, or category.
- 🍴 **Meal Details**: View detailed information about any selected meal, including ingredients and instructions.
- 🎲 **Random Meal**: Discover a random meal suggestion.
- 🥕 **Ingredient-Based Search**: Explore meals based on specific ingredients.
- 📱 **Responsive Design**: Optimized for seamless use across different screen sizes and devices.

## 🛠️ Components

- 🌍 **Country.jsx**: Displays meals by country.
- 📜 **Footer.jsx**: Contains footer information and links.
- 🧭 **Header.jsx**: Navigation bar for easy access to app features.
- 🥗 **IngredientMeal.jsx**: Shows meals based on selected ingredients.
- 🆕 **LatestMeal.jsx**: Highlights the most recent meals.
- 📋 **MealDetails.jsx**: Provides detailed information about a specific meal.
- 🔥 **PopularIngredient.jsx**: Displays popular ingredients for meal searches.
- 🎰 **RandomIngredient.jsx**: Suggests meals based on a random ingredient.
- 🍽️ **RandomMeal.jsx**: Provides a random meal suggestion.
- 🔎 **SearchBar.jsx**: Allows users to input their search query.
- 📄 **SearchDisplay.jsx**: Dynamically displays search results.

## 🚀 Technologies Used

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[React Router](https://reactrouter.com/)**: Declarative routing for React applications.
- **[TheMealDB API](https://www.themealdb.com/api.php)**: A free API for meal recipes and data.

## 🏁 Getting Started
Deployment Link: https://themealdb-react-project.netlify.app/
 
### Prerequisites

- Node.js (v16 or higher)
- npm or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/thmealdb-react-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd thmealdb-react-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```


## 📚 API Reference

This project uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch meal data. Key endpoints include:

- Search meals by name: `https://www.themealdb.com/api/json/v1/1/search.php?s=`
- Search by ingredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
- Random meal: `https://www.themealdb.com/api/json/v1/1/random.php`
- Lookup meal details by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

## 🤝 Contributing

We welcome contributions to improve this project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

For questions or feedback, feel free to open an issue or contact the maintainers at [your-email@example.com](mailto:your-email@example.com).

---

⭐ **Star this repository if you find it useful!**
