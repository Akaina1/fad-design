"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { LayoutGrid } from "./layout-grid";
import '../app/globals.css';

export function LandingContentContainer() {
  return (
    <div className="h-screen py-5 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">FAD Design Website</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A Modern, interactive website for FAD Design.
      </p>
      <Link href="/Projects/FAD" passHref>
          <button className="bg-blue-500 text-white px-4 py-2">
          Project Details
          </button>
      </Link>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Help Us Create The Next Best Website</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Join FAD Design and help us create a new standard in website design.
      </p>
      <Link href="/Project1" passHref>
          <button className="bg-blue-500 text-white px-4 py-2">
          Project Details
          </button>
      </Link>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Insight Collective ARG</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A Dedicated web portal for an Augmented Reality Game.
      </p>
      <Link href="/IC" passHref>
          <button className="bg-blue-500 text-white px-4 py-2">
          Project Details
          </button>
      </Link>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Green Customs</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A fictional E-commerce business that sells computer components and allows users to customize their computers with parts held by the company.
      </p>
      <Link href="/GreenCustoms" passHref>
          <button className="bg-blue-500 text-white px-4 py-2">
            Project Details
          </button>
      </Link>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Venezia Kitchen</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A fictional restaurant that features a full ordering system built ontop of a visually appealing website.
      </p>
      <Link href="/GreenCustoms" passHref>
          <button className="bg-blue-500 text-white px-4 py-2">
            Project Details
          </button>
      </Link>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/IMG/Fad_Project_Photo.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-1",
    thumbnail:
      "/IMG/Placeholder_Project_Photo.png",
  },
  {
    id: 3,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/IMG/Placeholder_Project_Photo.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/IMG/GC_Project_Photo.png",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "/IMG/VC_Project_Photo.png",
  },
  {
    id: 6,
    content: <SkeletonTwo />,
    className: "md:col-span-2",
    thumbnail:
      "/IMG/Placeholder_Project_Photo.png",
  },
  {
    id: 7,
    content: <SkeletonTwo />,
    className: "md:col-span-2",
    thumbnail:
      "/IMG/Placeholder_Project_Photo.png",
  },
  {
    id: 8,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/IMG/IC_Project_Photo.png",
  },
];