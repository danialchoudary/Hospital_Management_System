import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="mb-4 md:mb-0 flex gap-3">
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0WlvESb6NRpBrTlulMoGcQ6KfQevLAzQuMsAFdX_cU0jW69YNmmEMzbLcrLADtWdmww&usqp=CAU" alt="MediLab Hospital" className="h-12 rounded-full"  />
          <p className=' mt-4'>MediLab Hospital</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 gap-12">
            <div className="flex flex-col">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <ul className="list-none p-0 mt-4">
                <li className="text-gray-600"><a href="#">Home</a></li>
                <li className="text-gray-600"><a href="#">Appointment</a></li>
                <li className="text-gray-600"><a href="#">Service</a></li>
                <li className="text-gray-600"><a href="#">About Us</a></li>
                <li className="text-gray-600"><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium">Hours</h3>
              <ul className="list-none p-0 mt-4">
                <li className="text-gray-600">Monday: 9:00 - 18:00</li>
                <li className="text-gray-600">Tuesday: 9:00 - 18:00</li>
                <li className="text-gray-600">Wednesday: 9:00 - 18:00</li>
                <li className="text-gray-600">Thursday: 9:00 - 18:00</li>
                <li className="text-gray-600">Friday: 9:00 - 18:00</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-medium">Contact</h3>
              <ul className="list-none p-0 mt-4">
                <li className="text-gray-600"><a href="tel:000-000-000"><i className="fas fa-phone"></i> 000-000-000</a></li>
                <li className="text-gray-600"><a href="mailto:info@email.com"><i className="fas fa-envelope"></i> info@email.com</a></li>
                <li className="text-gray-600"><i className="fas fa-map-marker-alt"></i> Kalutara South</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

