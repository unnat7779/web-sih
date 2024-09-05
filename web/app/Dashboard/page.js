"use client";
import Header from "@/components/Header";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Merriweather } from "@next/font/google";
import Total_emp from "@/components/Total_emp";
import Onsite_emp from "@/components/Onsite_emp";
import Offsite_emp from "@/components/Offsite_emp";
import Map from "@/components/Map";
import Graph from "@/components/Graph";
import { useState } from "react";
import RecentLogs from "@/components/RecentLogs";

const bebasNeue = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});

const page = () => {
  
  // State to keep track of mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position
  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setMousePosition({ x, y });
  };

  return (
    <div className="bg-[#f0f0f0cf]" onMouseMove={handleMouseMove}>
      <div className="bg-[#f0f0f0cf]">
        <div className="flex justify-between mx-5">
          <div className="flex items-center gap-x-4 p-2 cursor-pointer ml-[40%] mt-2">
            <span className={`text-5xl  space-x-2 font-extrabold text-gray-800 ${bebasNeue.className}`}>
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-x-4 px-3 py-4 rounded-3xl bg-[#DBDADF] cursor-pointer mt-2">
            <span className="text-xl font-semibold text-gray-800">
              Admin Profile
            </span>
            <FaUserCircle className="text-2xl text-gray-700" />
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <HoverCard>
          <Total_emp />
        </HoverCard>
        <HoverCard>
          <Onsite_emp />
        </HoverCard>
        <HoverCard>
          <Offsite_emp />
        </HoverCard>
      </div>
      <div className="flex justify-around mt-7">
        <div className="border-[2px] border-[#393737] flex flex-col items-center h-fit p-2">
          <h1 className="text-lg font-semibold">
            Total Number of Onsite and Offsite Employees vs Time
          </h1>
          <Graph />
        </div>
        <div className="border-[2px] border-[#393737]">
          <Map />
        </div>
      </div>
      <div>
        <RecentLogs/>
      </div>
    </div>
  );
};

// Reusable HoverCard component with 3D and scale effect
const HoverCard = ({ children }) => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = -(x - centerX) / 15;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform(""); // Reset the transform on mouse leave
  };

  return (
    <div
      className="hover-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.2s ease",
        width: "fit", // Adjust the width as needed
        height: "fit", // Adjust the height as needed
        // Match the border styles
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f0f0cf",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
};

export default page;
