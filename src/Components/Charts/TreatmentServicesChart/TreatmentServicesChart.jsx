import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components with chart.js
Chart.register(ArcElement, Tooltip, Legend);

const TreatmentServicesChart = () => {
  const data = {
    labels: ['Emergency', 'Outpatient', 'Inpatient', 'Surgery', 'Diagnostics'],
    datasets: [
      {
        label: 'Services Distribution',
        data: [25, 30, 20, 15, 10], // Example data
        backgroundColor: [
          '#3b82f6', // Tailwind blue
          '#f97316', // Tailwind orange
          '#34d399', // Tailwind green
          '#f43f5e', // Tailwind pink
          '#a855f7', // Tailwind purple
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Service Distribution</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TreatmentServicesChart;
