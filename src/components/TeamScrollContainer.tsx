// ProjectsScrollContainer.tsx
import React from "react";
import { TeamCard } from "./TeamCard";

const teamData = [
    {
      visibleText: "John Doe",
      revealText: "Front-End Developer",
      title: "Team Member 1",
      description: "Description for Team Member 1",
    },
    {
      visibleText: "Jane Doe",
      revealText: "Back-End Developer",
      title: "Team Member 2",
      description: "Description for Team Member 2",
    },
    {
        visibleText: "Bob Miller",
        revealText: "Team-Lead",
        title: "Team Member 1",
        description: "Description for Team Member 3",
      },
      {
        visibleText: "Joe Johnson",
        revealText: "Marketing",
        title: "Team Member 2",
        description: "Description for Team Member 4",
      },
      {
        visibleText: "Ashley Reel",
        revealText: "Front-End Developer",
        title: "Team Member 1",
        description: "Description for Team Member 5",
      },
      {
        visibleText: "Janet Jade",
        revealText: "Team-Lead",
        title: "Team Member 2",
        description: "Description for Team Member 6",
      },
    // Add more team members as needed
  ];
  
  export const TeamScrollContainer: React.FC = () => {
    return (
      <div className="grid grid-cols-1 gap-4 overflow-y-auto p-8 mb-2 max-h-80vh">
        {teamData.map((teamMember, index) => (
          <TeamCard key={index} {...teamMember} />
        ))}
      </div>
    );
  };