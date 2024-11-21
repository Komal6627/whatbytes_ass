"use client";

import React, { useState } from 'react';
import UpdatedScore from './UpdatedScore'; 

const TestCard = ({onSave, newRank, newPercentile, newScore}) => {
  const [showUpdatedScore, setShowUpdatedScore] = useState(false);
  const newResult = {newRank, newPercentile, newScore}

  const handleUpdateScore = () => {
    setShowUpdatedScore(true);  
  };

  const handleCancelUpdateScore = () => {
    setShowUpdatedScore(false); 
  };

  const handleSaveAndClose = (newRank, newPercentile, newScore) => {
    onSave(newRank, newPercentile, newScore); // Pass the updated score to the parent
    setShowUpdatedScore(false); // Close the UpdatedScore component
  };

  
  return (
    <>
      <div className="flex items-center row-span-2">
        <img
          src="/assets/html_logo.png"
          alt="html_logo"
          className="w-12 h-12 mr-5"
        />
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl text-black font-medium">
              Hyper Text Markup Language
            </h2>
            <button
              className="bg-blue-600 text-white px-4 py-2 ml-50 rounded-lg hover:bg-blue-700"
              onClick={handleUpdateScore}
            >
              Update
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>
      {showUpdatedScore && <UpdatedScore onCancel={handleCancelUpdateScore} onSave={handleSaveAndClose} />} {/* Conditionally render UpdatedScore */}
    </>
  );
};

export default TestCard;
