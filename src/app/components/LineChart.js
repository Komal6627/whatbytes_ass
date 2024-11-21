'use client'; // For Next.js client-side rendering

import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController);

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: ['0', '25', '50', '75', '100'], // X-axis
        datasets: [
          {
            label: 'Number of Students',
            data: [0, 10, 50, 20, 4], // Mock data for the graph
            borderColor: '#6366F1', // Line color
            backgroundColor: 'rgba(99, 102, 241, 0.2)', // Fill color under the line
            tension: 0.4, // Smoothing
            pointBackgroundColor: '#4F46E5', // Point color
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hides the legend
          },
          title: {
            display: true,
            text: 'Comparison Graph',
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentile',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Students',
            },
          },
        },
      },
    });

    return () => {
      chart.destroy(); // Cleanup to prevent memory leaks
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
