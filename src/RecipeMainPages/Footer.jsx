import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between ">
      {/* Left Section: Copyright and Location */}
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <p className="text-sm mb-1">&copy; 2025 TheMealDB</p>
        <p className="text-sm flex items-center">
          Proudly built in the UK
          <img
            src="https://www.themealdb.com/images/icons/flags/big/64/us.png"
            alt="UK Flag"
            className="w-4 h-auto ml-2"
          />
        </p>
      </div>

      {/* Middle Section: Socials and Database Logos */}
      <div className="flex flex-col items-center mb-4 md:mb-0">
        {/* Socials */}
        <div class="flex items-center mb-4">
          <span class="text-white text-base mr-2">Socials:</span>
          {/* Your specified Font Awesome icon code, with adjusted text size */}
          <a href="#" class="text-xl mr-2 text-blue-500 hover:text-white">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-xl mr-2 text-gray-500 hover:text-white">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-xl text-indigo-500 hover:text-white">
            <i class="fab fa-discord"></i>
          </a>
        </div>

        {/* Database Logos */}
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
          <span className="font-bold text-2xl sm:text-2xl" style={{ background: 'linear-gradient(to right, orange, red)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TheCocktailDB</span>
          <span className="font-bold text-2xl sm:text-2xl" style={{ background: 'linear-gradient(to right, red, darkred)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TheAudioDB</span>
          <span className="font-bold text-2xl sm:text-2xl" style={{ background: 'linear-gradient(to right, lightgreen, darkgreen)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TheSportsDB</span>
        </div>
      </div>

      {/* Right Section: Navigation Links */}
      <div className=" flex gap-4 items-center mb-4 md:mb-0">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Faq</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;