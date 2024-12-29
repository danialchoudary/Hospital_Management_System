import React, { useState } from 'react';

const Signup = () => {
  const [formType, setFormType] = useState('patient');

  const renderForm = () => {
    switch (formType) {
      case 'patient':
        return (
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Mobile Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">NIC</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Gender</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Appointment Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Appointment Time</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Doctor Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Department Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
        );
      case 'doctor':
        return (
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Doctor form fields */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Specialization</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">License Number</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
        );
      case 'admin':
        return (
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Admin form fields */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Role</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setFormType('patient')}
          className={`${
            formType === 'patient' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } py-2 px-4 rounded-lg font-semibold focus:outline-none`}
        >
          Patient
        </button>
        <button
          onClick={() => setFormType('doctor')}
          className={`${
            formType === 'doctor' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } py-2 px-4 rounded-lg font-semibold focus:outline-none`}
        >
          Doctor
        </button>
        <button
          onClick={() => setFormType('admin')}
          className={`${
            formType === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } py-2 px-4 rounded-lg font-semibold focus:outline-none`}
        >
          Admin
        </button>
      </div>
      {renderForm()}
    </div>
  );
};

export default Signup;
