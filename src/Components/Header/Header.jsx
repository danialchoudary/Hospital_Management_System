import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarCheck, faConciergeBell, faInfoCircle, faEnvelope, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import SignInForm from './Signin/Signin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/appointment');
  };


  const [showSignIn, setShowSignIn] = useState(false);
 
  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleClose = () => {
    setShowSignIn(false);
  };
  return (
    <header className="bg-white">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0WlvESb6NRpBrTlulMoGcQ6KfQevLAzQuMsAFdX_cU0jW69YNmmEMzbLcrLADtWdmww&usqp=CAU"
            alt="MediLab Hospital"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <h1
            className="ml-2 sm:ml-4 text-xl sm:text-2xl font-bold hidden lg:block"
            style={{
              textShadow: `
                2px 2px 4px rgba(0, 0, 0, 0.25),   /* Original shadow */
                4px 4px 8px rgba(0, 0, 0, 0.2),    /* Additional larger shadow */
                6px 6px 12px rgba(0, 0, 0, 0.15)   /* Even larger and softer shadow */
              `,
            }}
          >
            MediLab Hospital
          </h1>
        </div>
        <nav className="flex items-center space-x-4 md:space-x-6 font-bold">
          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              Appointment
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Icons for Mobile */}
          <div className="flex md:hidden space-x-4 text-lg">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500')}>
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink to="/appointment" className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500')}>
              <FontAwesomeIcon icon={faCalendarCheck} />
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500')}>
              <FontAwesomeIcon icon={faConciergeBell} />
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500')}>
              <FontAwesomeIcon icon={faInfoCircle} />
            </NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'text-blue-500' : 'hover:text-blue-500')}>
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </div>
        </nav>
        {/* Buttons for Desktop */}
        <div className="hidden md:flex space-x-4 font-bold">
          
        <div className="">
      <button
        onClick={handleSignInClick}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md shadow-lg"
      >
        Sign In
      </button>

      {showSignIn && <SignInForm onClose={handleClose} />}
    </div>
          
    <button
      className="bg-gradient-to-r from-customPurple1 to-customPurple2 text-white font-semibold py-2 px-4 rounded-md shadow-lg"
      onClick={handleClick}
    >
      Register
    </button>
        </div>

        {/* Icons for Mobile */}
        <div className="flex md:hidden space-x-4 text-lg">
  <div className="relative group">
    <NavLink to="/sign-in" className="text-gray-800 group-hover:text-blue-500">
      <FontAwesomeIcon icon={faSignInAlt} />
    </NavLink>
    <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Sign In
    </span>
  </div>
  <div className="relative group">
    <NavLink to="/register" className="text-gray-800 group-hover:text-blue-500">
      <FontAwesomeIcon icon={faUserPlus} />
    </NavLink>
    <span className="absolute top-9 left-1/2 transform -translate-x-1/2 -bottom-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Register
    </span>
  </div>
</div>
</div>
    </header>
  );
};

export default Header;



