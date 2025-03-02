import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="bg-neutral-700 text-white py-12 px-6 text-center rounded- mt-10 rounded-md">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Welcome to <span className="text-red-600">MovieSpin</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
        {/* Assista aos melhores filmes e séries em um só lugar. */}
      </p>
    </div>
  );
};

export default WelcomeMessage;
