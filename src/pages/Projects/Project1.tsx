// pages/Projects/Project1.tsx
import { useRouter } from 'next/router';
import React from 'react';
import NavBar from '@/components/NavBar';
import LogoContainer from '@/components/LogoContainer';
import Footer from '@/components/Footer';
import ProjectInformationContainer from '@/components/ProjectInformationContainer';

const Project1: React.FC = () => {  
    // Placeholder project data, replace with actual project data
    const projectData = {
      projectName: 'Project 1',
      projectPhotoUrl: 'https://placekitten.com/500/500',
      technologiesUsed: ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TailwindCSS', 'Aceternity UI', 'Heroku', 'Vercel', 'Firebase', 'GitHub', 'Git'],
      projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur..',
      githubLink: 'https://github.com/yourusername/yourproject',
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
  
  export default Project1;