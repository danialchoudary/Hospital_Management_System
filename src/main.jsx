// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the required parts of chart.js
import { Chart, LineElement, BarElement, PointElement, ArcElement, RadarController, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepg from './Pages/Home_Page/Homepg';
import './index.css';
import Appointmentpg from './Pages/Appointment_Page/Appointmentpg';
import Servicespg from './Pages/Services_Page/Servicespg';


// Register the components you plan to use
Chart.register(
  LineElement,   // For Line charts
  BarElement,    // For Bar charts
  PointElement,  // For points in Line and Radar charts
  ArcElement,    // For Pie and Doughnut charts
  RadarController, // For Radar charts
  CategoryScale, // For X-axis in charts
  LinearScale,   // For Y-axis in charts
  Title,         // For chart titles
  Tooltip,       // For tooltips
  Legend,        // For the legend
  Filler         // For filling area in charts
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Homepg />} />
          <Route path="/appointment" element={<Appointmentpg />} />
          <Route path="/services" element={<Servicespg />} />
        </Routes>
<Footer/>
      </Router>
    
  </React.StrictMode>,
);





