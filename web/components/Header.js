import React, { useRef, useState, useEffect } from "react";
import { Merriweather } from "@next/font/google";
import { RiDashboardFill } from "react-icons/ri";
import { FaDatabase, FaUserPlus, FaLocationDot } from "react-icons/fa6";
import { MdFactory } from "react-icons/md";
import { PiNewspaperFill } from "react-icons/pi";
import { IoLogOut, IoCloseCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { gsap } from 'gsap';
import Link from 'next/link';
const bebasNeue = Merriweather({
  subsets: ["latin-ext"],
  weight: ["400"],
});

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const maindashboardRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeRef = useRef(null);
  const dashboardRef = useRef(null);
  const employeeRef = useRef(null);
  const userRef = useRef(null);
  const officeRef = useRef(null);
  const offsiteRef = useRef(null);
  const leaveRef = useRef(null);
  const logoutRef = useRef(null);

  useEffect(() => {
    // Hamburger button timeline
    const tlHamburger = gsap.timeline({ paused: true })
      .to(hamburgerRef.current, { rotation: 180, duration: 0.5, ease: 'power2.out' });

    // Close button timeline
    const tlClose = gsap.timeline({ paused: true })
      .to(closeRef.current, { rotation: 360, duration: 0.5, ease: 'power2.out' });

    // Play hamburger timeline on menu open
    if (showMenu) {
      tlHamburger.play();
    } else {
      tlHamburger.reverse();
    }

    // Play close timeline on menu close
    if (!isVisible) {
      tlClose.play();
    } else {
      tlClose.reverse();
    }

  }, [showMenu, isVisible]);

  const handleMouseEnter = (ref) => {
    gsap.fromTo(ref.current, 
      { scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }, 
      { scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', duration: 0.3 }
    );
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
      duration: 0.3,
      clearProps: 'all',
    });
  };

  const handleClose = () => {
    const tlClose = gsap.timeline()
      .to(maindashboardRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsVisible(false);
          setShowMenu(true);
        },
      });
    tlClose.play();
  };

  const handleMenuClick = () => {
    setShowMenu(false);
    setIsVisible(true);
    const tlMenu = gsap.timeline()
      .fromTo(maindashboardRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' }
      );
    tlMenu.play();
  };

  return (
    <div>
      {showMenu && (
        <div className="fixed top-4 left-4 cursor-pointer" ref={hamburgerRef} onClick={handleMenuClick}>
          <GiHamburgerMenu className="text-3xl" />
        </div>
      )}
      
      {isVisible && (
        <div ref={maindashboardRef} className="w-[40vh] h-[100vh] bg-[#DBDADF]">
          <button onClick={handleClose}>
            <IoCloseCircleOutline className="bg-[#DBDADF] text-3xl absolute top-4 left-2 cursor-pointer" ref={closeRef} />
          </button>
          <div className="w-[25vh] m-auto">
            <img src="/gail.png" alt="GAIL Logo" className="bg-[#DBDADF]" />
          </div>
          <div className="mt-[1vh] p-2 bg-[#DBDADF] m-auto">
            <p className={`text-[3.4vh] font-extrabold bg-[#DBDADF] text-center ${bebasNeue.className}`}>
              Employee Monitoring Portal
            </p>
          </div>
          <div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(dashboardRef)}
              onMouseLeave={() => handleMouseLeave(dashboardRef)}
              ref={dashboardRef}
            >
              <RiDashboardFill className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <Link href="/Dashboard" className="bg-[#DBDADF]"><span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Dashboard</span></Link>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(employeeRef)}
              onMouseLeave={() => handleMouseLeave(employeeRef)}
              ref={employeeRef}
            >
              <FaDatabase className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Employees Data</span>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(userRef)}
              onMouseLeave={() => handleMouseLeave(userRef)}
              ref={userRef}
            >
              <FaUserPlus className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">User Creation</span>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(officeRef)}
              onMouseLeave={() => handleMouseLeave(officeRef)}
              ref={officeRef}
            >
              <FaLocationDot className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Office Location</span>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(offsiteRef)}
              onMouseLeave={() => handleMouseLeave(offsiteRef)}
              ref={offsiteRef}
            >
              <MdFactory className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Offsites</span>
            </div>
            <div
              className="flex items-center gap-x-4 p-4 bg-[#DBDADF] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(leaveRef)}
              onMouseLeave={() => handleMouseLeave(leaveRef)}
              ref={leaveRef}
            >
              <PiNewspaperFill className="text-2xl text-gray-700 bg-[#DBDADF]" />
              <span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Leave Application</span>
            </div>
          </div>
          <div
            className="flex items-center gap-x-4 p-4 bg-[#DBDADF] mt-[3vh] cursor-pointer"
            onMouseEnter={() => handleMouseEnter(logoutRef)}
            onMouseLeave={() => handleMouseLeave(logoutRef)}
            ref={logoutRef}
          >
            <IoLogOut className="text-2xl text-gray-700 bg-[#DBDADF]" />
            <span className="text-lg font-semibold text-gray-800 bg-[#DBDADF]">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
