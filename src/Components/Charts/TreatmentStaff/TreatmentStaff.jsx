import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TreatmentStaff = () => {
  const data = {
    labels: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'Oncology'],
    datasets: [
      {
        label: 'Number of Doctors',
        data: [12, 8, 5, 10, 7, 6],
        backgroundColor: [
          '#FF5733', // Cardiology
          '#33FF57', // Neurology
          '#3357FF', // Orthopedics
          '#F0F033', // Pediatrics
          '#FF33F6', // Dermatology
          '#33FFF3', // Oncology
        ],
        borderColor: '#000000',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Doctors Available for Different Diseases',
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Treatment Staff Availability</h2>
      <div className="relative h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TreatmentStaff;


