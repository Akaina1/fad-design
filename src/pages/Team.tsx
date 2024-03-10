import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import { TeamScrollContainer } from '@/components/TeamScrollContainer';
import { GridBackgroundDemo } from '@/components/GridBackground'; 

const Team: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Grid Background */}
      <GridBackgroundDemo />

      {/* Main Content */}
      <div className="flex flex-grow absolute inset-0">
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
