import React, { useState } from "react";

function Services() {
  const servicesData = [
    {
      heading: "Orthopedics",
      imageUrl: "https://media.istockphoto.com/id/461265140/video/pain-in-knee-with-therapeutic-effects.jpg?s=640x640&k=20&c=JK2rxcQkNGopZurgQBZ-R7SAHP3wY_HmHuVAdTKE5bA=",
      description: "Orthopedics focuses on diagnosing, treating, and preventing disorders of the bones, joints, ligaments, tendons, and muscles."
    },
    {
      heading: "Neurosciences",
      imageUrl: "https://media.istockphoto.com/id/1149178089/photo/artificial-intelligence-technology.jpg?s=612x612&w=0&k=20&c=Y4BeLaEJIF6w-7K3plHdxrhwAeA6VBrtowHzsuwSDtA=",
      description: "Neurosciences deals with the nervous system and its disorders, including the brain, spinal cord, and peripheral nerves."
    },
    {
      heading: "Cardiology",
      imageUrl: "https://media.istockphoto.com/id/1366795746/photo/artificial-plastic-model-of-human-heart-standing-against-background-of-cardiologist-closeup.jpg?s=612x612&w=0&k=20&c=Z7h_NFnq55mgfobxt7eEjqr2Re_ssQvEfLhrfzuUyB8=",
      description: "Cardiology is a branch of medicine that deals with the disorders of the heart and circulatory system."
    },
    {
      heading: "Nephrologist",
      imageUrl: "https://media.istockphoto.com/id/1386458345/photo/nephrologist-listens-to-the-kidneys-on-medical-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=bqTH0rtikTmYB8Bg9_tHtpJF5LutV_E9i9pqP0qbcaI=",
      description: "Nephrology focuses on the diagnosis and treatment of kidney diseases, including the care of patients requiring renal replacement therapy."
    },
    {
      heading: "Pathologist",
      imageUrl: "https://media.istockphoto.com/id/1373474629/photo/scientist-working-with-microscope-at-the-lab.jpg?s=612x612&w=0&k=20&c=ng1GemVp8q10nEFe9oiQrzJbNxvaA6EuuUGhl0SwVpc=",
      description: "Pathology is the study of the causes and effects of disease or injury, often involving laboratory examination of samples."
    },
    {
      heading: "Plastic Surgeon",
      imageUrl: "https://media.istockphoto.com/id/1041925326/photo/woman-under-going-face-lift-surgery.jpg?s=612x612&w=0&k=20&c=DCPcp6MTLqFvFP0-q2h1dPdniVth0Xtr6WtjkliLeyY=",
      description: "Plastic surgery involves the repair, reconstruction, or alteration of the human body, often to enhance appearance."
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 3;

  // Calculate the current services to display
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = servicesData.slice(indexOfFirstService, indexOfLastService);

  const totalPages = Math.ceil(servicesData.length / servicesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto bg-purple-100 py-12 px-4 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentServices.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <img
              src={service.imageUrl}
              alt={service.heading}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-purple-600">{service.heading}</h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-4">
        <button
          className={`bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Services;

