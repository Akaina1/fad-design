import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  viewDetailsLink: string;
  liveLink: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  viewDetailsLink,
  liveLink,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gray-800 border-white/[0.2] w-auto sm:w-[30rem] h-auto p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <Link href={viewDetailsLink}>
            <button className="px-4 py-2 rounded-xl text-xs font-normaltext-white">
              View Details
            </button>
          </Link>
          <Link href={liveLink}>
            <button className="px-4 py-2 bg-white text-black text-xs font-bold">
              Live Link
            </button>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};
