// pages/Projects/Project1.tsx
import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import ProjectInformationContainer from '@/components/ProjectInformationContainer';

const Venezia: React.FC = () => {  
    // Placeholder project data, replace with actual project data
    const projectData = {
      projectName: 'FAD Design Website',
      projectPhotoUrl: '/IMG/VC_Project_Photo.png',
      technologiesUsed: ['React', 'HTML', 'CSS', 'JavaScript'],
      projectDescription: 'Another simple web app for a fictional restaurant. I created this to practice with CSS styling before founding FAD Design. This was created with React, HTML, CSS, and JavaScript. This project is a simple web app that allows users to view the menu and place orders.',
      githubLink: 'https://github.com/Akaina1/Venezia-Kitchen',
      liveLink: 'https://akaina1-venezia-kitchen.netlify.app/',
    };
  
    return (
      <div className="flex flex-col min-h-screen bg-white">
        {/* Main Content */}
        <div className="flex flex-grow">
          {/* Left Column */}
          <div className="flex flex-col items-center justify-start px-auto h-full w-full">
            <LogoContainer />
            {/* Center the NavBar within its column */}
            <div className="flex items-center flex-col">
              <NavBar />
            </div>
          </div>
  
          {/* Right Column */}
          <div className="flex-grow p-8">
            <ProjectInformationContainer {...projectData} />
          </div>
        </div>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  
  export default Venezia;