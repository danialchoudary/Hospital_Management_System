import React, { useState } from 'react';

const DrugStock = () => {
  // Array of drugs
  const drugs = [
    { id: 1, name: 'Aspirin', expireDate: '2025-08-30', manufacturingDate: '2023-07-15', price: '$10', qty: 50, status: 'Available' },
    { id: 2, name: 'Paracetamol', expireDate: '2024-09-15', manufacturingDate: '2023-03-10', price: '$8', qty: 0, status: 'Out of Stock' },
    { id: 3, name: 'Ibuprofen', expireDate: '2026-02-20', manufacturingDate: '2024-01-05', price: '$12', qty: 25, status: 'Available' },
    { id: 4, name: 'Amoxicillin', expireDate: '2025-11-11', manufacturingDate: '2023-08-22', price: '$15', qty: 0, status: 'Out of Stock' },
    { id: 5, name: 'Metformin', expireDate: '2026-01-30', manufacturingDate: '2023-11-05', price: '$9', qty: 100, status: 'Available' },
    { id: 6, name: 'Ciprofloxacin', expireDate: '2024-12-15', manufacturingDate: '2023-04-22', price: '$20', qty: 30, status: 'Out of Stock' },
  ];

  // State to manage visible drugs
  const [visibleDrugs, setVisibleDrugs] = useState(4);

  // Function to show more drugs
  const showMoreDrugs = () => {
    setVisibleDrugs((prevVisibleDrugs) => prevVisibleDrugs + 4);
  };

  // Function to show less drugs
  const showLessDrugs = () => {
    setVisibleDrugs((prevVisibleDrugs) => (prevVisibleDrugs > 4 ? prevVisibleDrugs - 4 : 4));
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Drugs in Stock</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-4 px-6 border-b">ID</th>
            <th className="py-4 px-6 border-b">Drug Name</th>
            <th className="py-4 px-6 border-b">Expire Date</th>
            <th className="py-4 px-6 border-b">Manufacturing Date</th>
            <th className="py-4 px-6 border-b">Price</th>
            <th className="py-4 px-6 border-b">QTY</th>
            <th className="py-4 px-6 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {drugs.slice(0, visibleDrugs).map((drug, index) => (
            <tr key={drug.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
              <td className="py-4 px-6 border-b text-center">{drug.id}</td>
              <td className="py-4 px-6 border-b">{drug.name}</td>
              <td className="py-4 px-6 border-b">{drug.expireDate}</td>
              <td className="py-4 px-6 border-b">{drug.manufacturingDate}</td>
              <td className="py-4 px-6 border-b">{drug.price}</td>
              <td className="py-4 px-6 border-b text-center">{drug.qty}</td>
              <td className={`py-4 px-6 border-b text-center font-bold ${drug.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
                {drug.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center mt-4">
        {visibleDrugs < drugs.length && (
          <button
            onClick={showMoreDrugs}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-4"
          >
            See More
          </button>
        )}
        {visibleDrugs > 4 && (
          <button
            onClick={showLessDrugs}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default DrugStock;



