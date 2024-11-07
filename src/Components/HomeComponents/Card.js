import React from 'react';

function Card() {
  return (
    <div className="flex items-center justify-center rounded-xl bg-gray-100">
      {/* Default styles for larger screens */}
      <div className="md:w-65 md:h-65 bg-yellow-300 rounded-lg shadow-lg  sm:p-6 flex flex-col items-center justify-center text-center 
    w-21 h-22 " > 
        <h3 className="md:text-xl font-semibold mb-2 text-base"> {/* Smaller text for small screen */}
          Conference Record
        </h3>
        <p className="text-gray-700 md:mb-4 mb-2 md:text-base text-xs"> {/* Smaller text for small screen */}
          #Conference Record No.: 64154
        </p>
        <a 
          href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/64154" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 underline sm:text-sm  text-xs" 
        >
          Click on the link
        </a>
      </div>
    </div>
  );
}

export default Card;
