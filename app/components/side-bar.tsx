'use client'
import React from "react";
import {AnimatePresence, motion} from 'framer-motion'

import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { PiMapPinLine } from "react-icons/pi";

interface Props{
  openSidebar: boolean
  handleClose: () => void;
}

const SideBar:React.FC<Props> = ({openSidebar, handleClose}) => {
  return (
    <AnimatePresence>
    { openSidebar &&(
      <motion.div 
      initial={{x: "100vw",  opacity: 0 }} 
      animate={{x:0,  opacity: 1}}  
      transition={{stiffness: 5}} 
      exit={{x: "100vw",  opacity: 0 }}
      className="fixed side-bar h-screen top-0 right-0 px-6 bg-white/[90%] backdrop-blur-md
      z-50 max-w-md">
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-items-end text-gray-500 mb-10 mt-4 hover:text-gray-800 cursor-pointer" onClick={handleClose}>
              <IoCloseSharp className="ml-auto"/>
        </div>
        <div className="flex flex-col gap-10">
        <a className=" flex transition-all duration-300">
            <svg className="fill-[#DB9E30] w-48 h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.15 191.11">
              <g>
                <path d="M93.08,191.11c-0.33,0-0.67,0-1,0c-5.44-8.58-13.89-13.21-22.85-16.97c-9.31-3.91-17.25-9.39-22.27-18.33
                c-1.76-3.14-3.91-4.36-7.49-4.54C27.15,150.68,20,144.64,17,132.6c-0.51-2.04-1.41-3.36-3.43-3.73c-5.72-1.05-9.92-4.41-13.5-8.75
                C0.08,81.49,0.12,42.87,0,4.25C-0.01,1.13,0.22-0.01,3.93,0c58.76,0.16,117.53,0.16,176.29,0c3.71-0.01,3.94,1.13,3.93,4.25
                c-0.12,38.29-0.08,76.58-0.08,114.86c-3.3,4.84-7.56,8.35-13.42,9.66c-2.18,0.49-3.38,1.86-3.81,4.08
                c-2.43,12.48-11.13,17.35-22.76,18.52c-2.09,0.21-4,0.61-5.04,2.62c-5.68,11.04-15.46,16.87-26.43,21.58
                C104.81,178.91,97.44,183.23,93.08,191.11z"></path>
              </g>
            </svg>
            <img className="absolute px-10 py-4" src="https://nauthemes.com/demo/muezzin/wp-content/themes/taqwa/assets/images/logo2.png" alt="Muezzin" itemProp="image"></img>
          </a>
      <div className="grid grid-cols-1 gap-4">
                      <p className="heading text-xl">Informations</p>
                      <p className="leading-relaxed text-lg">
                      Elit duis volutpat ligula nulla a getmolestie mi consectetur auctor ugue ac tincidunt, var ius felis et, augue lorem. Aliquam accumsan fringilla.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="rounded-full text-white text-2xl p-4 bg-[#DB9E30] font-semibold">
                          <MdOutlineSmartphone/>
                        </div>
                        <div className="flex flex-col gap-2">
                        <p><span>Call Us:</span><span className="text-[#DB9E30]"> +(00) 123-345-11</span></p>
                        <p>Mon - Sat 8:00 - 18:00</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="rounded-full text-white text-2xl p-4 bg-[#DB9E30] font-semibold">
                          <IoMailOutline/>
                        </div>
                        <div className="flex flex-col gap-2">
                        <a href="mailto:info@example.com" className="hover:text-[#DB9E30]">info@example.com</a>
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="rounded-full text-white text-2xl p-4 bg-[#DB9E30] font-semibold">
                          <PiMapPinLine/>
                        </div>
                        <div className="flex flex-col gap-2">
                        <p>Addis Ababa, Ethiopia</p>
                        </div>
                      </div>
                    </div>
        </div>

      </div>

                  </motion.div>
                      )
                    }
    </AnimatePresence>

  );
};

export default SideBar;