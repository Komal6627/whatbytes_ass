"use client";

import React, { useState } from "react";

const UpdatedScore = ({ rank = "", percentile = "", score = "", onSave, onCancel }) => {
  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(percentile);
  const [newScore, setNewScore] = useState(score);
  const [focusedField, setFocusedField] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
      setError("");

      if (newRank <= 0) {
        setError("Rank must be greater than 0.");
        return;
      }
  
      if (newPercentile < 0 || newPercentile > 100) {
        setError("Percentile must be between 0 and 100.");
        return;
      }
  
      if (newScore > 15) {
        setError("Score should not be greater than 15.");
        return;
      }


    onSave(newRank, newPercentile, newScore);
    console.log("Rank", newRank);
    console.log("newPercentile", newPercentile);
    console.log("newScore", newScore);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[600px] relative">
        <div className="absolute top-4 right-4">
          <img src="/assets/html_logo.png" alt="HTML5 logo" className="w-12 h-12" />
        </div>
        <h2 className="text-2xl text-black font-bold mb-6">Update scores</h2>
        <table className="table-auto w-full">
          <tbody>
            {/* Rank Field */}
            <tr>
              <td className="w-1/6 text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">1</div>
              </td>
              <td>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4">
                    <label className="text-black">
                      Update your <span className="font-bold">Rank</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2  text-black"
                      value={newRank}
                      onChange={(e) => setNewRank(e.target.value)}
                      onFocus={() => setFocusedField("rank")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                  {focusedField === "rank" && (
                    <span className="text-red-500 text-sm">required | number</span>
                  )}
                </div>
              </td>
            </tr>

            {/* Percentile Field */}
            <tr>
              <td className="w-1/6 text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">2</div>
              </td>
              <td>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4">
                    <label className="text-black">
                      Update your <span className="font-bold">Percentile</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2  text-black"
                      value={newPercentile}
                      onChange={(e) => setNewPercentile(e.target.value)}
                      onFocus={() => setFocusedField("percentile")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Percentile"
                    />
                  </div>
                  {focusedField === "percentile" && (
                    <span className="text-red-500 text-sm">required | percentile 0-100</span>
                  )}
                </div>
              </td>
            </tr>

            {/*  Score Field */}
            <tr>
              <td className="w-1/6 text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">3</div>
              </td>
              <td>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-4">
                    <label className="text-black">
                      Update your <span className="font-bold">Current Score (out of 15)</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2  text-black"
                      value={newScore}
                      onChange={(e) => setNewScore(e.target.value)}
                      onFocus={() => setFocusedField("score")}
                      onBlur={() => setFocusedField("")}
                    />
                  </div>
                  {focusedField === "score" && (
                    <span className="text-red-500 text-sm">required | number</span>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Action buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md" onClick={onCancel}>
            cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center space-x-2" onClick={handleSave}>
            <span>save</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

UpdatedScore.defaultProps = {
  onSave: () => {
    console.warn("onSave function not provided!");
  },
  onCancel: () => {
    console.warn("onCancel function not provided!");
  },
};

export default UpdatedScore;
