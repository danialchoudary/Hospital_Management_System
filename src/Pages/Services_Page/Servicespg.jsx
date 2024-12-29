import React from 'react';
import PatientAdmissionsChart from '../../Components/Charts/PatientAdmisssionsChart';
import TreatmentServicesChart from '../../Components/Charts/TreatmentServicesChart/TreatmentServicesChart';
import TreatmentStaff from '../../Components/Charts/TreatmentStaff/TreatmentStaff';
import DrugStock from '../../Components/Charts/Drugstock/Drugstock';

function Servicespg() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen">
      <div className="flex flex-col md:flex-row justify-evenly gap-8 mb-8">
        <div className="flex-1 max-w-xs bg-white rounded-lg shadow-lg p-4">
          <PatientAdmissionsChart />
        </div>
        <div className="flex-1 max-w-xs bg-white rounded-lg shadow-lg p-4">
          <TreatmentServicesChart />
        </div>
        <div className="flex-1 max-w-xs bg-white rounded-lg shadow-lg p-4">
          <TreatmentStaff />
        </div>
      </div>
      <div className="flex justify-center">
        
          <DrugStock />
        
      </div>
    </div>
  );
}

export default Servicespg;




