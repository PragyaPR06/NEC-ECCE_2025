import React from 'react';

function Card() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-65 h-65  bg-yellow-300 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-semibold mb-2">Conference Record</h3>
        <p className="text-gray-700 mb-4">#Conference Record No.: 64154</p>
        <a 
          href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/64154" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Click on the link
        </a>
      </div>
    </div>
  );
}

export default Card;               

