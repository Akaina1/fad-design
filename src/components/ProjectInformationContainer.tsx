// components/ProjectInformationContainer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="flex">
      {/* Left Column */}
      <div className="flex flex-col mr-8">
        {/* Project Photo */}
        <div className="mb-8 ml-11">
          <Image src={projectPhotoUrl} alt={`${projectName} Photo`} height={1000} width={1000} />
        </div>

        {/* Github and Live Links */}
        <div className="flex flex-col justify-start gap-12 ml-11">
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
      </div>

      {/* Right Column */}
      <div className="flex flex-col">
        {/* Technologies Used */}
        <div className="border-black dark:border-white dark:text-white dark:bg-gray-700 bg-white p-12 mb-12 text-center text-2xl">
          <h2 className="text-5xl mb-6">Technologies Used:</h2>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {technologiesUsed.map((tech, index) => (
              <div key={index} className="text-left">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="flex-grow border-black dark:border-white dark:text-white dark:bg-gray-700 bg-white p-12">
          <h1 className="text-5xl mb-6">Project Description:</h1>
          <p className='text-lg'>{projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInformationContainer;