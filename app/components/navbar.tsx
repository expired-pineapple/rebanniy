'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { IoMdPhonePortrait } from "react-icons/io";
import { PiMapPinLineLight } from "react-icons/pi";
import { CgMenuRight } from "react-icons/cg";

import SideBar from "./side-bar";


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="">
    <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white py-2 shadow-md' : 'py-4 bg-[#08513F]/10 backdrop-blur-lg'}`} id="nav">
    <nav className="items-center mx-auto max-w-7xl px-2 sm:px-20 lg:px-8 z-40">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <Link href="/" className="absolute top-0 flex transition-all duration-300">
            <svg className="fill-[#DB9E30] w-48 h-48 hidden sm:flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.15 191.11">
              <g>
                <path d="M93.08,191.11c-0.33,0-0.67,0-1,0c-5.44-8.58-13.89-13.21-22.85-16.97c-9.31-3.91-17.25-9.39-22.27-18.33
                c-1.76-3.14-3.91-4.36-7.49-4.54C27.15,150.68,20,144.64,17,132.6c-0.51-2.04-1.41-3.36-3.43-3.73c-5.72-1.05-9.92-4.41-13.5-8.75
                C0.08,81.49,0.12,42.87,0,4.25C-0.01,1.13,0.22-0.01,3.93,0c58.76,0.16,117.53,0.16,176.29,0c3.71-0.01,3.94,1.13,3.93,4.25
                c-0.12,38.29-0.08,76.58-0.08,114.86c-3.3,4.84-7.56,8.35-13.42,9.66c-2.18,0.49-3.38,1.86-3.81,4.08
                c-2.43,12.48-11.13,17.35-22.76,18.52c-2.09,0.21-4,0.61-5.04,2.62c-5.68,11.04-15.46,16.87-26.43,21.58
                C104.81,178.91,97.44,183.23,93.08,191.11z"></path>
              </g>
            </svg>
            <img className="absolute top-0 px-10 py-4 hidden sm:flex" src="https://nauthemes.com/demo/muezzin/wp-content/themes/taqwa/assets/images/logo2.png" alt="Muezzin" itemProp="image"></img>
            {isScrolled && (
            <span className="py-10 px-4 text-2xl font-semibold heading text-[#DB9E30] hidden sm:flex">Rebbaniy</span>
          )}
          <span className="py-10 px-4 text-2xl font-semibold heading text-[#DB9E30] flex sm:hidden">Rebbaniy</span>
          </Link>
        </div>

        <div className={` ${!isScrolled?  "w-[80%]" : ""}`}>
          {!isScrolled && (
            <div className=" justify-between py-4 items-center hidden sm:flex" id="contact-info">
              <div className="flex gap-10">
                <div className="flex gap-2 text-lg text-white items-center">
                  <IoMdPhonePortrait />
                  <span className="font-semibold">Call Us: +(251) 9123 556 11</span>
                </div>
                <div  className="flex gap-2 text-lg text-white items-center">
                  <PiMapPinLineLight />
                  <span className="font-semibold">Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="grid grid-cols-4 divide-x-2 text-white gap-4 text-lg">
                <div className="px-2">
                  <ImFacebook />
                </div>
                <div className="px-2">
                  <FaLinkedinIn />
                </div>
                <div className="px-2">
                  <FaTelegramPlane />
                </div>
                <div className="px-2">
                  <FaInstagram />
                </div>
              </div>
            </div>
          )}

<div className={`flex justify-end gap-10 py-4 items-center text-lg font-semibold ${isScrolled ? "text-black " : "text-white"}`} id="contact-info">
               
                  <div className="flex gap-4 items-center">
                  <div className={`hover:text-[#DB9E30] cursor-pointer ${!isScrolled ? "text-white" :"text-[#DB9E30]"}`}onClick={()=>{setOpenSidebar(!openSidebar)}}>
                    <CgMenuRight className="text-4xl" />
                  </div>
                  <a href="/register" className="bg-[#DB9E30] px-6 py-2 rounded-full text-md z-10 text-white cursor-pointer hidden sm:flex">
                    Register
                  </a>
                  </div>
               
            </div>
        </div>
      </div>
      <div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"} h-screen w-full absolute px-10 left-0 backdrop-blur-lg`} id="mobile-menu">
        <div className="mobile-blur"></div>
        <div className="space-y-1 px-2 pb-3 pt-2 w-full flex flex-col">
          <a href="#" className={`${isScrolled ? 'text-[#021044]' : 'text-white'} block px-3 py-2 text-base font-medium gap-2 items-center`} aria-current="page">
            <FaTelegramPlane /><span>Telegram</span> 
          </a>
          <a href="#" className={`${isScrolled ? 'text-[#021044]' : 'text-white'} px-3 py-2 text-base font-medium flex gap-2 items-center my-2`}>
            <FaLinkedinIn /> <span>LinkedIn</span>
          </a>
          <a href="#" className={`${isScrolled ? 'text-[#021044]' : 'text-white'} px-3 py-2 text-base font-medium flex gap-2 items-center my-2`}>
            <FaInstagram /> <span>Instagram</span>
          </a>
        </div>
      </div>
    </nav>
    </div>
    <SideBar openSidebar={openSidebar} handleClose={()=>setOpenSidebar(!openSidebar)} />

    </div>
  );
};

export default Navbar;