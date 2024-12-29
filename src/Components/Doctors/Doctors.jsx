import React from 'react';

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. John Watson',
      qualification: 'MD, Cardiology',
      imageUrl: 'https://images.pexels.com/photos/5452255/pexels-photo-5452255.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Dr. Michael Scott',
      qualification: 'MBBS, Neurology',
      imageUrl: 'https://media.istockphoto.com/id/1201439096/photo/male-medical-professional-is-confident-in-studio.jpg?s=612x612&w=0&k=20&c=T3a2ESMxG_cUVHvRxq4L0AKULnUPSpTR-qcBrce4h2I=',
    },
    {
      id: 3,
      name: 'Dr. David Kim',
      qualification: 'MD, Orthopedics',
      imageUrl: 'https://media.istockphoto.com/id/1494324933/photo/portrait-of-asian-chinese-mixed-race-senior-mature-man-doctor-in-collared-business-shirt.jpg?s=612x612&w=0&k=20&c=oBNXhB0pESmYq_xySMr2mx8-8t4Zda59RpOq_KM0C9E=',
    },
    {
      id: 4,
      name: 'Dr. Rajesh Kumar',
      qualification: 'MBBS, Pediatrics',
      imageUrl: 'https://media.istockphoto.com/id/1691072014/photo/close-up-portrait-of-young-indian-doctor-man-in-white-medical-coat-serious-and-thinking.jpg?s=612x612&w=0&k=20&c=3r7_klG-XR7w3y1g2Y2OgWXdzl72pdWLblX-m6uV5Z0=',
    },
    {
      id: 5,
      name: 'Dr. Fatima Al-Khan',
      qualification: 'MD, Dermatology',
      imageUrl: 'https://media.istockphoto.com/id/1969752648/photo/portrait-of-young-female-doctor-wearing-hijab-muslim-woman-smiling-and-looking-at-camera-with.jpg?s=612x612&w=0&k=20&c=DakDDPSjJPks86YiAxZ0Z3sv6nY6TVPz_DbR2dkPRMU=',
    },
    {
      id: 6,
      name: 'Dr. Emily White',
      qualification: 'MBBS, General Surgery',
      imageUrl: 'https://media.istockphoto.com/id/2163904778/photo/portrait-of-internist-woman-look-at-camera-seated-at-desk.jpg?s=612x612&w=0&k=20&c=cNq0Ch0xcomVf1YC0sH5EvaxJwuZGbakvxYq-RqvJi8=',
    },
    {
      id: 7,
      name: 'Dr. James Adams',
      qualification: 'MD, Oncology',
      imageUrl: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 8,
      name: 'Dr. Robert Brown',
      qualification: 'MBBS, Cardiology',
      imageUrl: 'https://media.istockphoto.com/id/2164615646/photo/portrait-of-a-young-male-doctor-in-healthcare-internship-opportunity-career-and-happy.jpg?s=612x612&w=0&k=20&c=-nl7Ay3R7UoTFihp3-1Ae5PpjWtZ--LclJIPaseclwQ=',
    },
    {
      id: 9,
      name: 'Dr. Chris Evans',
      qualification: 'MD, Psychiatry',
      imageUrl: 'https://media.istockphoto.com/id/2031982897/photo/close-up-professional-profile-confident-gaze-of-white-male-doctor.jpg?s=612x612&w=0&k=20&c=UNDcS3iyOPLvf8iv_lh4ujp0RrPOFCuLwFgu7Y0Ghwo=',
    },
    {
      id: 10,
      name: 'Dr. William Johnson',
      qualification: 'MD, Neurology',
      imageUrl: 'https://media.istockphoto.com/id/2031981347/photo/close-up-professional-profile-confident-gaze-of-black-male-doctor.jpg?s=612x612&w=0&k=20&c=1Z_SKhecDGkDgehz-EySHqCgDZ3IIGyGggSz1-SP27A=',
    },
    {
      id: 11,
      name: 'Dr. Sarah Miller',
      qualification: 'MD, Obstetrics & Gynecology',
      imageUrl: 'https://media.istockphoto.com/id/2032002114/photo/white-male-doctor-holds-laptop-looking-at-camera.jpg?s=612x612&w=0&k=20&c=0nykwW-wt2qTFdEew2FSDT6C5103DwWlVOv8bvsNxKY=',
    },
    {
      id: 12,
      name: 'Dr. Laura Lee',
      qualification: 'MBBS, Endocrinology',
      imageUrl: 'https://media.istockphoto.com/id/537738697/photo/heroes-are-ordinary-people-who-make-themselves-extraordinary.jpg?s=612x612&w=0&k=20&c=x3VSEwMniwNg4JEy_IDSGPLof8tiVaFDXCHmhUwSAQk=',
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-32 h-32 rounded-full mb-4 border-4 border-purple-600"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-700">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.qualification}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
