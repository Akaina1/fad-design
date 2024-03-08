// ProjectsScrollContainer.tsx
import React from "react";
import { TeamCard } from "./TeamCard";

const teamData = [
    {
      visibleText: "Founder 1",
      revealText: "Myself",
    },
    {
      visibleText: "Founder 2",
      revealText: "This could be you...",
    },
    {
        visibleText: "Founder 3",
        revealText: "This could be you...",
      },
      {
        visibleText: "Founder 4",
        revealText: "This could be you...",
      },
      {
        visibleText: "Founder 5",
        revealText: "This could be you...",
      },
      {
        visibleText: "Founder 6",
        revealText: "This could be you...",
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