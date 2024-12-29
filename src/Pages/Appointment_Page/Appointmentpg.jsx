import React from 'react';
import Home from '../../Components/Home/Home';
import Signup from '../../Components/Singup/Singup';
import Home2 from '../../Components/Home/Home2';


function Appointmentpg() {
  return (
    <>
      <div className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
    <Home2 />
  </div>
  <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
    <Signup />
  </div>
</div>

    </>
  );
}

export default Appointmentpg;
