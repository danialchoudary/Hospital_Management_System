import React from 'react';

const Message = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-md">
        Send Us a Message
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-white text-lg font-semibold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="shadow-md appearance-none border rounded-xl w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-white text-lg font-semibold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="shadow-md appearance-none border rounded-xl w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            placeholder="Doe"
          />
        </div>
        <div>
          <label htmlFor="mobileNumber" className="block text-white text-lg font-semibold mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            className="shadow-md appearance-none border rounded-xl w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            placeholder="+1234567890"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-md appearance-none border rounded-xl w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            placeholder="example@example.com"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="message" className="block text-white text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="shadow-md appearance-none border rounded-xl w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            rows="4"
            placeholder="Write your message here..."
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-white text-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:bg-blue-700 text-lg font-semibold py-3 px-6 rounded-full shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Message;
