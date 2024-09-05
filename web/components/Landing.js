"use client";
import React from "react";
import AdminLogin from "./AdminLogin";
const Landing = () => {
  return (
    <>
      <div className=" flex justify-between bg-[#ffd699] px-5 box-border items-center overflow-hidden">
        <div>
          <div className="bg-[#ffd699] flex flex-col items-center justify-items-center ">
            <p className="text-[70px] font-semibold text-gray-800 bg-[#ffd699]">
              GEO
            </p>
            <p className="text-[70px] -mt-6 font-semibold text-gray-800 bg-[#ffd699]">
              NIRIKSHAN
            </p>
          </div>
          <div className="-mb-[150px]">
            <img src="./bgimg.png"/>
          </div>
        </div>
        <div className="bg-[#ffd699] mr-[100px]">
          <AdminLogin/>
        </div>
      </div>
    </>
  );
};

export default Landing;
