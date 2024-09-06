
"use client"
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Map from "./Map";

const Offlocation = ({ employee }) => {
  return (
    <div className="bg-[#f9d2c3] m-10 inline-flex pr-4 py-4 rounded-xl items-center whitespace-pre-wrap relative">
      <div>
        <Map className="bg-transparent m-4 text-[150px]" />
      </div>
      <div className="flex flex-col ml-3">
        <div className="absolute top-2">
          <div className="flex">
            <h1 className="text-2xl font-bold m-4 text-nowrap">Location</h1>
            
          </div>
          <div className="flex flex-col -mt-2">
            <div className="flex gap-[70px]">
              <span className="ml-4">Check-In</span>
              
            </div>
            
          </div>
        </div>
        <div className="bg-[#332e2e] p-3 rounded-xl -mb-4 mt-[120px]">
          <div className="flex">
            <h1 className="text-lg font-bold ml-4 text-nowrap">ADDRESS</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[70px]">
              <span className="ml-4">Email</span>
              
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-9">
        <div className="bg-[#c4917b] rounded-xl">
          <div className="flex">
            <h1 className="text-xl font-bold m-4 text-nowrap">Total Attendance -</h1>
            <span className="text-2xl font-bold m-4 text-nowrap font-mono"></span>
          </div>
          <div className="flex -mt-5">
            <h1 className="text-xl font-bold m-4 text-nowrap">Number of Leaves -</h1>
            <span className="text-2xl font-bold mt-4 mb-4 mr-4 ml-2 text-nowrap font-mono"></span>
          </div>
        </div>
        
        <div className="mt-2 m-auto mt-5">
          <button className="bg-[#e06565] p-2 rounded-xl">
            <div className="flex flex-wrap gap-x-2 px-2">
              <MdDelete className="text-2xl text-[#1a1818]" />
              <h3 className="text-xl font-semibold text-[#1a1818]">Delete</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offlocation;
