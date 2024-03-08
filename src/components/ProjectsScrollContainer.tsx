// ProjectsScrollContainer.tsx
import React from "react";
import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    title: "Insight Collective",
    description: "A dedicated web portal for my ARG",
    imageUrl: '/IMG/IC_Project_Photo.png',
    viewDetailsLink: "/Projects/IC",
    liveLink: "https://insight-collective.org",
  },
  {
    title: "This Website!",
    description: "The FAD Design website that you are currently on",
    imageUrl: '/IMG/Fad_Project_Photo.png',
    viewDetailsLink: "/Projects/FAD",
    liveLink: "https://insight-collective.org",
  },
  {
    title: "Green Customs",
    description: "An E-commerce website for selling computer parts and creating custom builds",
    imageUrl: "/IMG/GC_Project_Photo.png",
    viewDetailsLink: "/Projects/GreenCustoms",
    liveLink: "https://green-customs.netlify.app/",
  },
  {
    title: "Venezia Kitchen",
    description: "A mockup website for a restaurant with a food delivery service",
    imageUrl: "/IMG/VC_Project_Photo.png",
    viewDetailsLink: "/Projects/Venezia",
    liveLink: "https://akaina1-venezia-kitchen.netlify.app/",
  },
  {
    title: "Our Next Project",
    description: "Help build the next great website",
    imageUrl: "/IMG/Placeholder_Project_Photo.png",
    viewDetailsLink: "/Projects/Project1",
    liveLink: "https://example.com/project1-live",
  },
  // Add more projects as needed
];

export const ProjectsScrollContainer: React.FC = () => {
  return (
    <div className="grid xl:grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-8 overflow-x-auto p-8">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
