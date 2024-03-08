// pages/Projects/Project1.tsx
import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import ProjectInformationContainer from '@/components/ProjectInformationContainer';

const FAD: React.FC = () => {  
    // Placeholder project data, replace with actual project data
    const projectData = {
      projectName: 'FAD Design Website',
      projectPhotoUrl: '/IMG/Fad_Project_Photo.png',
      technologiesUsed: ['Next.js', 'TailwindCSS', 'Aceternity UI', 'Framer Motion', 'TypeScript', 'Node.js', 'Express.js'],
      projectDescription: 'This started out as a personal project for my portfolio. The idea was to build a fictional business and create a website for it with a focus on animations and interactivity.  Soon I began to imagine what it might be like to turn this into a real business...',
      githubLink: 'https://github.com/Akaina1/fad-design',
      liveLink: 'https://yourprojectdemo.com',
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
  
  export default FAD;