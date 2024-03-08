// ProjectsScrollContainer.tsx
import React from "react";
import { ProjectCard } from "./ProjectCard";

const projectData = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    imageUrl: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    viewDetailsLink: "/Projects/Project1",
    liveLink: "https://example.com/project1-live",
  },
  {
    title: "Project 2",
    description: "Description for Project 1",
    imageUrl: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    viewDetailsLink: "/404",
    liveLink: "https://example.com/project1-live",
  },
  {
    title: "Project 3",
    description: "Description for Project 1",
    imageUrl: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    viewDetailsLink: "/404",
    liveLink: "https://example.com/project1-live",
  },
  {
    title: "Project 4",
    description: "Description for Project 1",
    imageUrl: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    viewDetailsLink: "/404",
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
