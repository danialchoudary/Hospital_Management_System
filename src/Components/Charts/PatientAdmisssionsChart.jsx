import React from 'react';
import { Line } from 'react-chartjs-2';

const PatientAdmissionsChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Patient Admissions',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6',
      },
    ],
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Patient Admissions Over Time</h2>
      <Line data={data} />
    </div>
  );
};

export default PatientAdmissionsChart;
