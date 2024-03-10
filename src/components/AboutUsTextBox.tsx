import React from 'react';

const AboutUsTextBox: React.FC = () => {
    return (
      <div className="bg-gray-700 p-7 shadow-lg text-center text-xl">
        <p className="text-3xl font-semibold my-9 text-white">About Us</p>
        <div className="text-white leading-8">
          <p className="mb-4 ">
            Welcome to FAD Design. Where passionate individuals come together to bring <strong>fun</strong> back to web design.
          </p>
          <p className="mb-4">
            <strong>Our Mission Statement:</strong> To provide Fun, Functional, and Fully Equipped websites for our clients.
          </p>
        </div>
      </div>
    );
  };
  
  export default AboutUsTextBox;