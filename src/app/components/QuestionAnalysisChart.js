"use client";

import { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

const QuestionAnalysis = ({score}) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // To track the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new ChartJS(ctx, {
      type: "doughnut",
      data: {
        labels: ["Correct", "Incorrect"],
        datasets: [
          {
            label: "Answers",
            data: [10, 5], // Correct and incorrect counts
            backgroundColor: ["#024CAA", "#C5D3E8"], // Colors for the sections
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // Runs only once, when the component mounts

  return (
    <div className="question-analysis">
      <div className="flex px-4">
        <h3 className="text-black font-bold text-sm">Question Analysis</h3>
        <h3 className="text-blue-950">{score}/15</h3>
      </div>

      <p className="mt-2 text-sm text-gray-500">
        <span className="font-bold">
          {" "}
          You scored <strong>10</strong> questions correct out of{" "}
          <strong>15</strong>.
        </span>{" "}
        However still need improvement
      </p>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default QuestionAnalysis;
