// Import necessary dependencies
import React from 'react';
import Image from 'next/image'; // Import the next/image component

// Your page component
const LogoContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start m-auto px-10 pt-10">
      <Image
        src="/IMG/Fad_Design_Logo.png"
        width={400}
        height={400}
        alt="Logo"
      />
    </div>
  );
};

export default LogoContainer;
