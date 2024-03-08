// components/ProjectInformationContainer.tsx
import React from 'react';
import Link from 'next/link';

interface ProjectInformationContainerProps {
  projectName: string;
  projectPhotoUrl: string;
  technologiesUsed: string[];
  projectDescription: string;
  githubLink: string;
  liveLink: string;
}

const ProjectInformationContainer: React.FC<ProjectInformationContainerProps> = ({
  projectName,
  projectPhotoUrl,
  technologiesUsed,
  projectDescription,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Top Left - Project Photo */}
      <div className="col-span-1 row-span-2 mr-8">
        <img src={projectPhotoUrl} alt={`${projectName} Photo`} className="w-500 h-500" />
      </div>
  
      {/* Top Right - Technologies Used */}
      <div className="col-span-1 row-span-1 border-black dark:border-white dark:text-white dark:bg-gray-700 bg-white p-12 mb-12 text-center text-2xl">
        <h2 className="text-5xl mb-6">Technologies Used:</h2>
        <div className="grid grid-cols-3 gap-2 justify-items-center">
          {technologiesUsed.map((tech, index) => (
            <div key={index} className="text-left">
              {tech}
            </div>
          ))}
        </div>
      </div>
  
      {/* Bottom Left - Github and Live Links */}
      <div className="col-span-1 row-span-1 flex flex-row justify-start gap-12">
        <Link href={githubLink}>
          <button className="border-2 border-black dark:border-white dark:text-white dark:bg-blue-500 text-black bg-white p-4 mb-2">
            Github
          </button>
        </Link>
        <Link href={liveLink}>
          <button className="border-2 border-black dark:border-white dark:text-white dark:bg-blue-500 text-black bg-white p-4">
            Live Link
          </button>
        </Link>
      </div>
  
      {/* Bottom Right - Project Description */}
      <div className="col-span-2 row-span-1">
        <div className="border-black dark:border-white dark:text-white dark:bg-gray-700 bg-white p-12">
          <h1 className="text-5xl mb-6">Project Description:</h1>
          <p className='text-lg'>{projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInformationContainer;