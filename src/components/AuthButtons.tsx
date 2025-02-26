import React from "react";

const AuthButtons = () => {
  return (
    <div className="flex justify-center items-center space-x-6 w-full max-w-md mx-auto mt-20">
      <button className="w-1/2 bg-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300">
        Sign in
      </button>
      <button className="w-1/2 bg-transparent border-2 border-red-600 text-red-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300">
        Sign up
      </button>
    </div>
  );
};

export default AuthButtons;
