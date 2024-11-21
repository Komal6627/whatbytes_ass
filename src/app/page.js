"use client";

import QuestionAnalysis from "./components/QuestionAnalysisChart";
import Sidebar from "./components/Sidebar";
import TestCard from "./components/TestCard";
import QuickStastics from "./components/QuickStastics";
import SyllabusAnalysis from "./components/SyllabusAnalysis";
import ComparisonGraph from "./components/ComparisonGraph";
import { useState } from "react";

export default function Home() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState("10");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newRank, newPercentile, newScore) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setScore(newScore);
    setIsEditing(false);
  };



  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-base text-gray-600">Skill Test</h1>
          <div className="flex items-center space-x-4 border-gray-700 shadow-md rounded">
            <img
              src="/assets/html_logo.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-black font-semibold">Rahil Siddique</span>
          </div>
        </div>

        {/* Grid Layout for Rows */}
        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* Left Column: Test Card, Quick Statistics, Comparison Graph */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Test Card */}
            <div className="flex bg-white rounded-lg shadow p-6">
             <TestCard onSave={handleSave}/>
            </div>

            {/* Quick Statistics */}
            <div className="flex flex-col bg-white rounded-lg shadow p-6">
              <QuickStastics rank={rank} percentile={percentile} score={score}/>
            </div>

            {/* Comparison Graph */}
            <div className="bg-white rounded-lg shadow p-6">
              <ComparisonGraph percentile={percentile}/>
            </div>
          </div>

          {/* Right Column: Syllabus Wise Analysis */}
        {/* Right Column */}
<div className="col-span-12 lg:col-span-3 space-y-6">
  {/* Syllabus Wise Analysis */}
  <div className="bg-white rounded-lg shadow p-6">
    <SyllabusAnalysis/>
  </div>

  
  <div className="bg-white rounded-lg shadow p-6">
    <QuestionAnalysis score={score}/>
  </div>
</div>

        </div>
      </main>
    </div>
  );
}
