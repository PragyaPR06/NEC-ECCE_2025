import React from 'react';

const Abstract = () => {
  return (
    <div className="flex flex-col items-center mt-16 px-4 text-center">
      
      {/* 🔷 Line above button with highlighted text */}
      <div className="relative mb-6 text-lg font-medium text-gray-800 leading-relaxed">
        <span className="mr-2 text-xl"></span>
        <span>You can download the </span>
        <span className="text-pink-600 font-semibold">Book of Abstract</span>
        <span className="mx-1">of</span>
        <span className="text-green-700 font-semibold">NE-IECCE 2025</span>
        
        {/* NEW! Badge beside NE-IECCE */}
        <span className="absolute -top-2 -right-14 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce shadow">
          NEW!
        </span>

        <span className="ml-1">from here:</span>
      </div>

      {/* 🔽 Glowing Gradient Button */}
      <a href="/pdfs/Abstract.pdf" download>
        <button className="relative text-white font-extrabold px-10 py-5 text-lg rounded-3xl 
          bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 
          shadow-2xl hover:from-pink-400 hover:to-yellow-400 
          transition-all duration-300 ease-in-out transform hover:scale-105 
          ring-4 ring-pink-300 ring-offset-4 ring-offset-white 
          animate-pulse overflow-hidden">

          {/* Glow background shimmer */}
          <span className="absolute inset-0 rounded-3xl bg-white opacity-20 blur-2xl animate-pulse"></span>

          {/* Foreground text */}
          <span className="relative z-10 flex flex-col items-center leading-tight text-white">
             Download Book <br />of Abstract
          </span>
        </button>
      </a>
    </div>
  );
};

export default Abstract;
