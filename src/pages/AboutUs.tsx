import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import F3Container from '@/components/F3Container';
import AboutUsTextBox from '@/components/AboutUsTextBox';
import { GridBackgroundDemo } from '@/components/GridBackground'; // Import the GridBackgroundDemo component

// Your page component
const AboutUs: React.FC = () => {
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
        <div className="flex-grow p-8">
          <AboutUsTextBox />
          <F3Container />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;