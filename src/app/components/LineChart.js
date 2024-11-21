'use client'; // For Next.js client-side rendering

import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController);

const LineChart = ({ percentile }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the chart if it already exists to prevent memory leaks
    const chart = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: ['0', '25', '50', '75', '100'], // X-axis labels for percentile
        datasets: [
          {
            label: 'Percentile Position',
            data: [60, 40, 50, 78,68, percentile], // Use the percentile across all data points
            borderColor: '#6366F1', // Line color
            backgroundColor: 'rgba(99, 102, 241, 0.2)', // Fill color under the line
            tension: 0.4, // Line smoothing
            pointBackgroundColor: '#4F46E5', // Point color
            fill: false, // Disable fill
            pointRadius: 5, // Increase point size for visibility
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          title: {
            display: true,
            text: 'Percentile Comparison', // Chart title
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentile', // Label for X-axis
            },
            ticks: {
              // Customize the x-axis ticks to represent percentiles
              callback: function (value) {
                return value + '%';
              },
            },
          },
          y: {
            display: false, // Hide the y-axis
          },
        },
      },
    });

    // Cleanup the chart when the component is unmounted or re-rendered
    return () => {
      chart.destroy();
    };
  }, [percentile]); // Re-run the effect whenever percentile changes

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
