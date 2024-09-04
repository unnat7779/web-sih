"use client";
import Header from "@/components/Header";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Merriweather } from "@next/font/google";
import Total_emp from "@/components/Total_emp";
// Remove the incorrect import statement
import Onsite_emp from "@/components/Onsite_emp";
import Offsite_emp from "@/components/Offsite_emp";
const bebasNeue = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
});
const page = () => {
  return (
    <>
      <div className=" bg-[#f0f0f0cf]">
        <div className="flex justify-between mx-5 m-r-[1vh]">
          <div className="flex items-center gap-x-4 p-4 bg-[#f0f0f0cf] cursor-pointer ml-[40%] mt-2">
            <span
              className={`text-4xl font-extrabold text-gray-800 ${bebasNeue.className}`}
            >
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-x-4 px-3 -py-4 rounded-3xl bg-[#DBDADF] cursor-pointer mt-2">
            <span className="text-xl font-semibold text-gray-800 bg-[#DBDADF]">
              Admin Profile
            </span>
            <FaUserCircle className="text-2xl text-gray-700 bg-[#DBDADF]" />
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-2">
        <Total_emp />
        <Onsite_emp />
        <Offsite_emp />
      </div>
    </>
  );
};

export default page;
