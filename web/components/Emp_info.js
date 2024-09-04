import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Emp_info = () => {
  return (
    <div className="bg-[#f9d2c3] m-10 inline-flex pr-4 py-4 rounded-xl items-center whitespace-pre-wrap relative">
      <div ><FaUserCircle className="bg-transparent m-4  text-[150px] " /></div>
      <div className="flex flex-col ml-3">
        <div className=" absolute top-2">
            <div className="flex  ">
            <h1 className="text-2xl font-bold m-4 text-nowrap">Unnat Agrawal</h1>
            <h1 className="text-xl font-semibold m-4 font-mono text-[#605b5b]">
                {" "}
                E02022
            </h1>
            </div>
            <div className="flex flex-col -mt-2 ">
            <div className="flex gap-[70px]">
                <span className="ml-4">Job Title</span>
                <span className="">Analyst</span>
            </div>
            <div className="flex gap-[44px]">
                <span className="ml-4">Department</span>
                <span>Sales</span>
            </div>
            <div className="flex gap-[70px]">
                <span className="ml-4">Location</span>
                <span>Delhi</span>
            </div>
        </div>
        </div>
        <div className="bg-[#fbefef] p-3 rounded-xl -mb-4 mt-[120px] ">
          <div className="flex">
            <h1 className="text-lg font-bold ml-4 text-nowrap">Contact</h1>
            
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-[70px]">
              <span className="ml-4">Email</span>
              <span className="">: priyanshisingh_example@gmail.com</span>
            </div>
            <div className="flex gap-[44px]">
              <span className="ml-4">Mob. No.</span>
              <span>: 1234567890</span>
            </div>
            <div className="flex gap-[62px]">
              <span className="ml-4">Adress</span>
              <span>: x Lane y city , delhi -110087 </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  ml-9">
        <div className="bg-[#c4917b] rounded-xl ">
            <div className="flex">
                <h1 className="text-xl font-bold m-4 text-nowrap">Total Attendance -</h1>
                <span className="text-2xl font-bold m-4  text-nowrap font-mono" >29</span>
            </div>
            <div className="flex -mt-5">
                <h1 className="text-xl font-bold m-4 text-nowrap">Number of Leaves -</h1>
                <span className="text-2xl font-bold mt-4 mb-4 mr-4 ml-2 text-nowrap font-mono">01</span>
            </div>
        </div>
        <div className="flex mt-4 justify-between ">
            <div className="bg-[#d18679] flex flex-col justify-center items-center rounded-xl px-3 h-20">
                <h1 className="text-xl font-medium m-4 text-nowrap">Onsite </h1>
                <h1 className="text-4xl font-bold m-4 text-nowrap -mt-3 font-mono">26</h1>
                
            </div>
            <div className="bg-[#d18679] flex flex-col justify-center items-center rounded-xl px-3 h-20">
                <h1 className="text-xl font-medium m-4 text-nowrap">Offsite </h1>
                <h1 className="text-4xl font-bold m-4 text-nowrap -mt-3 font-mono">26</h1>
                
            </div>
            
        </div>
        <div className="mt-2 m-auto mt-5" >
                <button className="bg-[#e06565] p-2 rounded-xl">
                    <div className="flex flex-wrap gap-x-2 px-2">
                        < MdDelete className="text-2xl text-[#1a1818]" />
                        <h3 className="text-xl font-semibold text-[#1a1818]">Delete</h3>
                    </div>
                </button>
        </div>
      </div>

    </div>
  );
};

export default Emp_info;
