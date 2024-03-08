import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import { TeamScrollContainer } from '@/components/TeamScrollContainer';

// Your page component
const Team: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-start px-auto h-full">
          <LogoContainer />
          {/* Center the NavBar within its column */}
          <div className="flex items-center flex-col">
            <NavBar />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-grow overflow-y-auto h-screen">
          <TeamScrollContainer />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
