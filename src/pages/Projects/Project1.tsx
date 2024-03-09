// pages/Projects/Project1.tsx
import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import ProjectInformationContainer from '@/components/ProjectInformationContainer';
import { GridBackgroundDemo } from '@/components/GridBackground'; // Import the GridBackgroundDemo component

const Project1: React.FC = () => {  
    // Placeholder project data, replace with actual project data
    const projectData = {
      projectName: 'The Next Big Project',
      projectPhotoUrl: '/IMG/Placeholder_Project_Photo.png',
      technologiesUsed: ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TailwindCSS', 'Aceternity UI', 'Heroku', 'Vercel', 'Firebase', 'GitHub', 'Git'],
      projectDescription: 'Join us as we strive to build the next big thing! Here at FAD Design we beileve web development is the perfect mix of creativity and logic.  We can use this to attract billions of consumers worldwide.',
      githubLink: 'https://github.com/Akaina1',
      liveLink: 'https://example.com',
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
  
  export default Project1;