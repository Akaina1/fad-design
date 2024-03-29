import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import ProjectInformationContainer from '@/components/ProjectInformationContainer';
import { GridBackgroundDemo } from '@/components/GridBackground'; 

const IC: React.FC = () => {  
    
    const projectData = {
      projectName: 'FAD Design Website',
      projectPhotoUrl: '/IMG/ICLOGO.png',
      technologiesUsed: ['Next.js', 'SASS', 'Framer Motion', 'JavaScript', 'Node.js', 'Express.js'],
      projectDescription: 'Before starting FAD Design this was my largest project I had ever created. This is a full stack web application that operates as a central hub for an Augmented Reality Experience. Players will be given different handmade materials used to solve puzzles. This is a continuous experience with future updates planned as well as a plan to scale the project as more players join the experience. Due to the nature of this project I cannot release the source code.',
      githubLink: 'https://github.com/Akaina1',
      liveLink: 'https://www.insight-collective.org',
    };
  
    return (
      <div className="relative min-h-screen bg-white">
      {/* Grid Background */}
      <GridBackgroundDemo />

      {/* Main Content */}
      <div className="flex absolute inset-0">
        {/* Left Column */}
        <div className="flex flex-col items-center justify-start px-auto h-full">
          <LogoContainer />
          {/* Center the NavBar within its column */}
          <div className="flex items-center flex-col">
            <NavBar />
          </div>
        </div>
  
          {/* Right Column */}
          <div className="flex w-3/4 p-8">
            <ProjectInformationContainer {...projectData} />
          </div>
        </div>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  
  export default IC;