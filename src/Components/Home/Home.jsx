import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We help people to get appointment online
            </h2>
            <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Welcome to our online appointment booking system, where your convenience is our priority. With just a few clicks, you can easily schedule your healthcare appointments from the comfort of your home or on the go. Our intuitive platform is designed to save you time and hassle, allowing you to choose the most suitable date and time that fits your busy schedule. We're here to make your healthcare experience as seamless and stress-free as possible, so you can focus on what matters most—your well-being.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md"
              src="https://media.istockphoto.com/id/1901242299/photo/3d-rendering-cartoon-character-doctors-international-team-of-healthcare-professionals.jpg?s=612x612&w=0&k=20&c=P_798IssL5_me3NQfm9Umilc51wT7TSXacvgGvIqS9s="
              alt="Appointment Scheduling"
            />
          </div>
        </div>
        
        <div className=" mt-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-7">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="w-full h-auto object-cover rounded-lg shadow-md"
              src="https://media.istockphoto.com/id/1127069581/photo/medical-technology-concept.jpg?s=612x612&w=0&k=20&c=qp_smilHlWhGzZ-NcftDLugFs_EVCLfX2Z7WCAD1v6A="
              alt="Who We Are"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              We are a dedicated team of professionals committed to providing exceptional service and care. With years of experience and a passion for helping others, we strive to make a positive impact on the lives of our patients. Our mission is to deliver personalized and compassionate care, ensuring that each individual receives the attention and treatment they deserve.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Home;


