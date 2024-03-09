// pages/Projects/Project1.tsx
import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import ProjectInformationContainer from '@/components/ProjectInformationContainer';
import { GridBackgroundDemo } from '@/components/GridBackground'; // Import the GridBackgroundDemo component

const GreenCustoms: React.FC = () => {  
    // Placeholder project data, replace with actual project data
    const projectData = {
      projectName: 'Green Customs E-commerce Site',
      projectPhotoUrl: '/IMG/GC_Project_Photo.png',
      technologiesUsed: ['React', 'Node.js', 'Express.js', 'MongoDB', 'SASS', 'JavaScript', 'Passport.js', 'JWT'],
      projectDescription: 'This was another large project I did with the idea of creating an ecommerce platform dedicated to computer components and accessories. It features a full database in MongoDB, Express Server with authentication, as well as a custom API.',
      githubLink: 'https://github.com/Akaina1/Ecommerce-App',
      liveLink: 'https://green-customs.netlify.app/',
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
  
  export default GreenCustoms;