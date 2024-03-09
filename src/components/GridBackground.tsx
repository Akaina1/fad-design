import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="inset-0 h-screen w-screen dark:bg-white bg-black dark:bg-grid-blue-700/[0.3] bg-grid-blue-700/[0.3] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
    </div>
  );
}
