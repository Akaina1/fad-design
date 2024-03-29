import React from 'react';
import Image from 'next/image';

const LogoContainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start m-auto px-10 pt-10">
      <Image
        src="/IMG/Fad_Design_Logo_White.png"
        width={400}
        height={400}
        alt="Logo"
      />
    </div>
  );
};

export default LogoContainer;
