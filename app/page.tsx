'use client'
import Image from "next/image";
import { GiOpenBook } from "react-icons/gi";
import { GiTombstone } from "react-icons/gi";
import { FaMosque } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import {motion} from 'framer-motion'
import Navbar from "./components/navbar";
import { LazyMotion, domAnimation } from "framer-motion"


export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      {/* Hero section */}
<section className="relative bg-cover bg-fixed" style={{backgroundImage: "url(https://nauthemes.com/demo/muezzin/wp-content/uploads/2023/12/tq-feat-bg.jpg)"}}>
  <div className="absolute inset-0 bg-[#08513F] opacity-90"></div>
  <div className="relative z-10 w-full pt-52">
    <div className="container mx-auto">
      <div className="relative w-full">
              <div className="flex flex-col md:flex-row items-center">
              <LazyMotion features={domAnimation}>
              <motion.div initial={{x: "100vw"}} animate={{x:0}}  transition={{stiffness: 5}} className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="relative w-full">
                    <img
                      src="https://nauthemes.com/demo/muezzin/wp-content/uploads/2023/12/tq-feat-img1.png"
                      alt="Image"
                      className=""
                    />
                  </div>
                </motion.div>
                
                <motion.div initial={{x: "-100vw"}} animate={{x:0}}  transition={{stiffness: 5}} className="w-full md:w-1/2 mx-auto">
                  <div className="flex flex-col items-center relative text-center w-full text-white ">
                    <h2 className="mb-4 text-6xl font-bold heading">Pray to Allah and Be Confident of a Response.</h2>
                    <p className="mb-2 text-2xl leading-loose	font-medium">It is a community center for all.</p>
                    <p className="mb-4 text-2xl leading-loose	font-medium">The Center is committed to preserving an Islamic.</p>
                  
                  </div>
                </motion.div>
                </LazyMotion>
              </div>

        
      </div>
    </div>
  </div>
  <div className="absolute flex items-center w-full">
    <img
      src="https://nauthemes.com/demo/muezzin/wp-content/plugins/ingeniofy-plus/elementor-widgets/widgets_classes/../../assets/images/shape1.png"
      alt="Decorative Shape"
      className="w-full h-auto"
    />
  </div>
</section>

<div className="flex flex-col gap-4 w-full items-center justify-center text-center px-20 min-h-screen pb-20">
 <div className="mt-44"></div>
<img decoding="async" src="https://nauthemes.com/demo/muezzin/wp-content/plugins/ingeniofy-plus/elementor-widgets/widgets_classes/../../assets/images/shape2.png" alt="" />
    <h3 className="text-slate-500 capitalize heading text-3xl">Welcome to the Islamic center</h3>
    <h1 className="capitalize heading text-6xl w-[50%] tracking-wide">In The Name Of Allah
    The Beneficent The Merciful</h1>
    
<div className="grid grid-cols-2 gap-10 px-20 my-10 text-left w-3/4">
  <div className="text-xl text-slate-700">
    <p>
    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This is Photoshops sion of Lorem Ipsum. Proin gravia nibh vel velit auctor aliquet. This is Photoshops versionf Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.
    </p>
  </div>
  <div className="flex flex-col gap-8">
    <div className="flex gap-4 group">
    <div className="relative   rounded-full  p-10 border-2 border-[#DB9E30]  flex items-center justify-center">
        <div className="absolute rounded-full p-10  border-2 border-[#DB9E30] group-hover:bg-[#DB9E30]/[30%] transition delay-75 duration-300 ease-in-out w-full h-full z-0"></div>
        <img decoding="async" className="absolute z-10" src="https://nauthemes.com/demo/muezzin/wp-content/uploads/2023/12/tq-vision-icon.png" alt="" />
  
    </div>
   
      <div className="flex flex-col">
        <p className="heading text-xl font-semibold">Our Vision</p>
        <p>Nibh vel velit auctor aliquet. Aenean ituin. This is Photoshops version of Photoshops sion of Lorem.</p>
      </div>
    </div>
    <div className="flex gap-4 group">
    <div className="relative  rounded-full  p-10 border-2 border-[#DB9E30]  flex items-center justify-center">
        <div className="absolute rounded-full p-10  border-2 border-[#DB9E30] group-hover:bg-[#DB9E30]/[30%] transition delay-75 duration-300 ease-in-out w-full h-full z-0"></div>
        <img decoding="async" className="absolute z-10" src="https://nauthemes.com/demo/muezzin/wp-content/uploads/2023/12/tq-mission-icon.png" alt="" />
  
    </div>
      <div className="flex flex-col">
        <p className="heading text-2xl font-semibold">Our Vision</p>
        <p>Nibh vel velit auctor aliquet. Aenean ituin. This is Photoshops version of Photoshops sion of Lorem.</p>
      </div>
    </div>
  </div>
</div>

<div className="mt-32 relative w-100">
    <svg height="0" width="0"className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="tq-about-shape">
                <path d="M0,260c0-0.33,0-0.67,0-1c9.42-8.17,16.57-18.17,23.03-28.7c7.75-12.65,14-26.11,20.85-39.24
                c4.55-8.73,9.51-17.25,16.28-24.46c8.71-9.26,18.57-16.23,32.36-14.39c13.51,1.8,21.11-4.01,22.46-17.52
                c4.13-41.25,33.38-72.03,76.91-68.94c9.58,0.68,14.59-3.27,18.46-12.91c5.49-13.7,13.5-25.49,24.97-34.96
                C247.23,8.05,261.11,2.93,276,0c244.67,0,489.33,0,734,0c1.77,0.45,3.53,0.95,5.31,1.34c11.88,2.6,22.79,7.34,32.48,14.75
                c12.35,9.44,21.19,21.49,26.92,35.92c4.38,11.05,8.94,13.95,20.92,13.83c1.5-0.02,3-0.07,4.5-0.04
                c27.56,0.5,48.13,12.51,61.02,37.12c5.16,9.86,8.19,20.32,9.13,31.44c1.08,12.78,8.95,19.93,20.75,18.06
                c11.81-1.87,21.22,2.23,29.7,9.73c5.4,4.78,9.81,10.39,13.67,16.48c6.7,10.58,11.92,21.95,17.64,33.04
                c8.89,17.23,18.69,33.83,32.96,47.32c0,0.33,0,0.67,0,1c-8.91,8.63-16.36,18.4-22.78,28.98c-7.7,12.69-13.89,26.18-20.83,39.27
                c-5.32,10.03-11.08,19.76-19.53,27.59c-8.86,8.21-18.78,13.16-31.29,10.65c-2.14-0.43-4.30-0.22-6.44,0.29
                c-8.8,2.09-12.78,7.93-14.02,19.37c-3.97,36.63-29.61,68.71-73.45,67.09c-13.35-0.49-17.26,2.31-22.32,14.69
                c-6.15,15.03-15.69,27.3-28.95,36.76c-10.68,7.62-22.77,11.56-35.38,14.3c-245,0-490,0-735,0c-11.35-2.76-22.45-6.05-32.41-12.56
                c-15.04-9.82-25.41-23.24-32.04-39.79c-4.23-10.56-8.93-13.58-20.16-13.49c-2.66,0.02-5.33,0.11-7.99,0.03
                c-17.38-0.56-32.57-6.6-44.92-18.89c-14.07-14.01-20.68-31.47-22.59-50.98c-1.15-11.71-9.39-18.43-20.87-16.67
                c-9.92,1.52-18.38-1.21-26.16-7.12c-10.36-7.88-16.99-18.64-23.02-29.81c-5.45-10.11-10.46-20.46-15.88-30.59
                C21.23,284.68,12.39,271.02,0,260z"></path>
            </clipPath>
        </defs>
    </svg>
    <img decoding="async"className="img-fluid w-full h-auto" src="https://nauthemes.com/demo/muezzin/wp-content/uploads/2023/12/tq-about-img.jpg" alt="In The Name Of Allah" loading="lazy" style={{clipPath: "url(#tq-about-shape)"}} />
</div>
</div>

<div className="gray-layer relative">

<div className="bg-[url(https://nauthemes.com/demo/muezzin/wp-content/plugins/ingeniofy-plus/elementor-widgets/widgets_classes/../../assets/images/tq-bg1.jpg)] bg-cover  h-full w-full absolute bg-scroll top-0 left-0 z-[-2] bg-center"></div>
<div className="flex flex-col gap-4 w-full items-center justify-center text-center p-20 z-50">
<img decoding="async" src="https://nauthemes.com/demo/muezzin/wp-content/plugins/ingeniofy-plus/elementor-widgets/widgets_classes/../../assets/images/shape2.png" alt="" />
    <h3 className="text-slate-500 capitalize heading text-3xl">What We Offer</h3>
    <h1 className="capitalize heading text-6xl w-[50%] tracking-wide">Our Services</h1>
</div>
<div  className="relative w-full">
  <div  className="flex flex-col lg:flex-row items-center justify-center">
    <div className="flex flex-col gap-4">
    <div  className="flex flex-col items-start w-full max-w-xs p-6">
  <div  className="relative mb-4">
    <svg  className="w-32 h-32 fill-[#DB9E30]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 568">
      <path d="M0,285c0-0.67,0-1.33,0-2c8.61-5.65,15.18-13.46,21.86-21.08c12.95-14.78,24.65-30.67,38.92-44.27 c12.39-11.81,26.05-21.27,43.81-23.07c5.21-0.53,7.8-3.85,8.14-9.17c0.14-2.32,0-4.67,0.07-7c0.61-20.09,8.49-36.79,23.69-49.91 c13.47-11.63,29.32-16.72,47-16.55c8.94,0.08,11.26-1.9,12.49-10.58c1.22-8.56,4.35-16.37,9-23.63 c10.24-15.99,24.68-27.83,38.95-39.88C258.17,25.84,273.4,14.89,285,0c0.33,0,0.67,0,1,0c6.55,8.74,14.71,15.85,22.97,22.88 c15.09,12.85,31.11,24.65,44.7,39.18c10.15,10.85,18.56,22.71,21.11,37.84c1.86,11.03,3.11,11.91,14.23,12.05 c22.71,0.29,41.49,8.96,55.43,27.06c10.02,13.02,14.41,27.95,13.81,44.42c-0.26,7.06,2.42,10.55,8.64,11.21 c13.63,1.46,25.04,7.58,35.44,16.05c16.03,13.05,28.27,29.59,41.62,45.12c8.35,9.71,16.32,19.82,27.04,27.18c0,0.67,0,1.33,0,2 c-3.95,2-6.83,5.29-9.91,8.32c-14.07,13.8-25.61,29.82-38.79,44.4c-15.6,17.24-31.93,33.31-56.87,35.93 c-4.4,0.46-6.9,3.84-7.16,8.41c-0.14,2.49,0.01,5-0.07,7.5c-0.6,20.1-8.54,36.79-23.69,49.92c-13.73,11.91-29.96,16.89-48,16.59 c-7.18-0.12-10.55,2.32-11.23,8.56c-1.41,12.92-7.15,23.81-15.07,33.76c-9.61,12.09-21.44,21.85-33.15,31.75 c-14.23,12.03-29.54,22.9-41.07,37.86c-0.33,0-0.67,0-1,0c-6.7-8.83-14.98-16.06-23.36-23.19c-15.09-12.85-31.09-24.66-44.67-39.22 c-10.99-11.78-19.64-24.78-21.33-41.43c-0.53-5.23-3.87-7.84-9.15-8.09c-1.83-0.09-3.67,0.06-5.5-0.01 c-27.59-1.15-48.35-13.34-61.23-38.08c-5.52-10.6-7.38-21.98-7.04-33.87c0.19-6.69-2.56-10.1-8.63-10.75 c-13.62-1.47-25.03-7.59-35.44-16.06c-16.04-13.04-28.3-29.56-41.61-45.12C18.72,302.43,10.67,292.41,0,285z"></path>
    </svg>
    <svg  className="w-32 h-32 fill-[#DB9E30] absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 568">
      <path d="M0,285c0-0.67,0-1.33,0-2c8.61-5.65,15.18-13.46,21.86-21.08c12.95-14.78,24.65-30.67,38.92-44.27 c12.39-11.81,26.05-21.27,43.81-23.07c5.21-0.53,7.8-3.85,8.14-9.17c0.14-2.32,0-4.67,0.07-7c0.61-20.09,8.49-36.79,23.69-49.91 c13.47-11.63,29.32-16.72,47-16.55c8.94,0.08,11.26-1.9,12.49-10.58c1.22-8.56,4.35-16.37,9-23.63 c10.24-15.99,24.68-27.83,38.95-39.88C258.17,25.84,273.4,14.89,285,0c0.33,0,0.67,0,1,0c6.55,8.74,14.71,15.85,22.97,22.88 c15.09,12.85,31.11,24.65,44.7,39.18c10.15,10.85,18.56,22.71,21.11,37.84c1.86,11.03,3.11,11.91,14.23,12.05 c22.71,0.29,41.49,8.96,55.43,27.06c10.02,13.02,14.41,27.95,13.81,44.42c-0.26,7.06,2.42,10.55,8.64,11.21 c13.63,1.46,25.04,7.58,35.44,16.05c16.03,13.05,28.27,29.59,41.62,45.12c8.35,9.71,16.32,19.82,27.04,27.18c0,0.67,0,1.33,0,2 c-3.95,2-6.83,5.29-9.91,8.32c-14.07,13.8-25.61,29.82-38.79,44.4c-15.6,17.24-31.93,33.31-56.87,35.93 c-4.4,0.46-6.9,3.84-7.16,8.41c-0.14,2.49,0.01,5-0.07,7.5c-0.6,20.1-8.54,36.79-23.69,49.92c-13.73,11.91-29.96,16.89-48,16.59 c-7.18-0.12-10.55,2.32-11.23,8.56c-1.41,12.92-7.15,23.81-15.07,33.76c-9.61,12.09-21.44,21.85-33.15,31.75 c-14.23,12.03-29.54,22.9-41.07,37.86c-0.33,0-0.67,0-1,0c-6.7-8.83-14.98-16.06-23.36-23.19c-15.09-12.85-31.09-24.66-44.67-39.22 c-10.99-11.78-19.64-24.78-21.33-41.43c-0.53-5.23-3.87-7.84-9.15-8.09c-1.83-0.09-3.67,0.06-5.5-0.01 c-27.59-1.15-48.35-13.34-61.23-38.08c-5.52-10.6-7.38-21.98-7.04-33.87c0.19-6.69-2.56-10.1-8.63-10.75 c-13.62-1.47-25.03-7.59-35.44-16.06c-16.04-13.04-28.3-29.56-41.61-45.12C18.72,302.43,10.67,292.41,0,285z"></path>
    </svg>
    <GiOpenBook className="text-white absolute top-10 left-10 text-5xl"/>
  </div>
  <h4  className="text-xl font-semibold mb-2">
    <span className="text-gray-800 hover:text-[#DB9E30] heading text-4xl">Quran Learning</span>
  </h4>
  <p  className="text-gray-600 text-lg">Provide rehab facility dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci...</p>
</div>
<div  className="flex flex-col items-start w-full max-w-sm p-6">
  <div  className="relative mb-4">
    <svg  className="w-32 h-32 fill-[#DB9E30]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 568">
      <path d="M0,285c0-0.67,0-1.33,0-2c8.61-5.65,15.18-13.46,21.86-21.08c12.95-14.78,24.65-30.67,38.92-44.27 c12.39-11.81,26.05-21.27,43.81-23.07c5.21-0.53,7.8-3.85,8.14-9.17c0.14-2.32,0-4.67,0.07-7c0.61-20.09,8.49-36.79,23.69-49.91 c13.47-11.63,29.32-16.72,47-16.55c8.94,0.08,11.26-1.9,12.49-10.58c1.22-8.56,4.35-16.37,9-23.63 c10.24-15.99,24.68-27.83,38.95-39.88C258.17,25.84,273.4,14.89,285,0c0.33,0,0.67,0,1,0c6.55,8.74,14.71,15.85,22.97,22.88 c15.09,12.85,31.11,24.65,44.7,39.18c10.15,10.85,18.56,22.71,21.11,37.84c1.86,11.03,3.11,11.91,14.23,12.05 c22.71,0.29,41.49,8.96,55.43,27.06c10.02,13.02,14.41,27.95,13.81,44.42c-0.26,7.06,2.42,10.55,8.64,11.21 c13.63,1.46,25.04,7.58,35.44,16.05c16.03,13.05,28.27,29.59,41.62,45.12c8.35,9.71,16.32,19.82,27.04,27.18c0,0.67,0,1.33,0,2 c-3.95,2-6.83,5.29-9.91,8.32c-14.07,13.8-25.61,29.82-38.79,44.4c-15.6,17.24-31.93,33.31-56.87,35.93 c-4.4,0.46-6.9,3.84-7.16,8.41c-0.14,2.49,0.01,5-0.07,7.5c-0.6,20.1-8.54,36.79-23.69,49.92c-13.73,11.91-29.96,16.89-48,16.59 c-7.18-0.12-10.55,2.32-11.23,8.56c-1.41,12.92-7.15,23.81-15.07,33.76c-9.61,12.09-21.44,21.85-33.15,31.75 c-14.23,12.03-29.54,22.9-41.07,37.86c-0.33,0-0.67,0-1,0c-6.7-8.83-14.98-16.06-23.36-23.19c-15.09-12.85-31.09-24.66-44.67-39.22 c-10.99-11.78-19.64-24.78-21.33-41.43c-0.53-5.23-3.87-7.84-9.15-8.09c-1.83-0.09-3.67,0.06-5.5-0.01 c-27.59-1.15-48.35-13.34-61.23-38.08c-5.52-10.6-7.38-21.98-7.04-33.87c0.19-6.69-2.56-10.1-8.63-10.75 c-13.62-1.47-25.03-7.59-35.44-16.06c-16.04-13.04-28.3-29.56-41.61-45.12C18.72,302.43,10.67,292.41,0,285z"></path>
    </svg>
    <svg  className="w-32 h-32 fill-[#DB9E30] absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 568">
      <path d="M0,285c0-0.67,0-1.33,0-2c8.61-5.65,15.18-13.46,21.86-21.08c12.95-14.78,24.65-30.67,38.92-44.27 c12.39-11.81,26.05-21.27,43.81-23.07c5.21-0.53,7.8-3.85,8.14-9.17c0.14-2.32,0-4.67,0.07-7c0.61-20.09,8.49-36.79,23.69-49.91 c13.47-11.63,29.32-16.72,47-16.55c8.94,0.08,11.26-1.9,12.49-10.58c1.22-8.56,4.35-16.37,9-23.63 c10.24-15.99,24.68-27.83,38.95-39.88C258.17,25.84,273.4,14.89,285,0c0.33,0,0.67,0,1,0c6.55,8.74,14.71,15.85,22.97,22.88 c15.09,12.85,31.11,24.65,44.7,39.18c10.15,10.85,18.56,22.71,21.11,37.84c1.86,11.03,3.11,11.91,14.23,12.05 c22.71,0.29,41.49,8.96,55.43,27.06c10.02,13.02,14.41,27.95,13.81,44.42c-0.26,7.06,2.42,10.55,8.64,11.21 c13.63,1.46,25.04,7.58,35.44,16.05c16.03,13.05,28.27,29.59,41.62,45.12c8.35,9.71,16.32,19.82,27.04,27.18c0,0.67,0,1.33,0,2 c-3.95,2-6.83,5.29-9.91,8.32c-14.07,13.8-25.61,29.82-38.79,44.4c-15.6,17.24-31.93,33.31-56.87,35.93 c-4.4,0.46-6.9,3.84-7.16,8.41c-0.14,2.49,0.01,5-0.07,7.5c-0.6,20.1-8.54,36.79-23.69,49.92c-13.73,11.91-29.96,16.89-48,16.59 c-7.18-0.12-10.55,2.32-11.23,8.56c-1.41,12.92-7.15,23.81-15.07,33.76c-9.61,12.09-21.44,21.85-33.15,31.75 c-14.23,12.03-29.54,22.9-41.07,37.86c-0.33,0-0.67,0-1,0c-6.7-8.83-14.98-16.06-23.36-23.19c-15.09-12.85-31.09-24.66-44.67-39.22 c-10.99-11.78-19.64-24.78-21.33-41.43c-0.53-5.23-3.87-7.84-9.15-8.09c-1.83-0.09-3.67,0.06-5.5-0.01 c-27.59-1.15-48.35-13.34-61.23-38.08c-5.52-10.6-7.38-21.98-7.04-33.87c0.19-6.69-2.56-10.1-8.63-10.75 c-13.62-1.47-25.03-7.59-35.44-16.06c-16.04-13.04-28.3-29.56-41.61-45.12C18.72,302.43,10.67,292.41,0,285z"></path>
    </svg>
    <GiTombstone className="text-white absolute top-10 left-10 text-5xl"/>
  </div>
  <h4  className="text-xl font-semibold mb-2">
    <span className="text-gray-800 hover:text-[#DB9E30] heading text-4xl">
    Funeral Service</span>
  </h4>
  <p  className="text-gray-600 text-lg">Provide rehab facility dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci...</p>
</div>
    </div>
    <div  className="w-full lg:w-1/2 flex justify-center">
      
        <img 
           className="w-3/4 h-auto" 
          src="https://nauthemes.com/demo/muezzin/wp-content/uploads/2023/12/tq-feat-img2.png" 
          alt="Service Image" 
          loading="lazy" 
          decoding="async"
        />
      
    </div>
    <div className="flex flex-col gap-4">
    <div  className="flex flex-col items-start w-full max-w-xs p-6">
  <div  className="relative mb-4">
    <svg  className="w-32 h-32 fill-[#DB9E30]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 568">
      <path d="M0,285c0-0.67,0-1.33,0-2c8.61-5.65,15.18-13.46,21.86-21.08c12.95-14.78,24.65-30.67,38.92-44.27 c12.39-11.81,26.05-21.27,43.81-23.07c5.21-0.53,7.8-3.85,8.14-9.17c0.14-2.32,0-4.67,0.07-7c0.61-20.09,8.49-36.79,23.69-49.91 c13.47-11.63,29.32-16.72,47-16.55c8.94,0.08,11.26-1.9,12.49-10.58c1.22-8.56,4.35-16.37,9-23.63 c10.24-15.99,24.68-27.83,38.95-39.88C258.17,25.84,273.4,14.89,285,0c0.33,0,0.67,0,1,0c6.55,8.74,14.71,15.85,22.97,22.88 c15.09,12.85,31.11,24.65,44.7,39.18c10.15,10.85,18.56,22.71,21.11,37.84c1.86,11.03,3.11,11.91,14.23,12.05 c22.71,0.29,41.49,8.96,55.43,27.06c10.02,13.02,14.41,27.95,13.81,44.42c-0.26,7.06,2.42,10.55,8.64,11.21 c13.63,1.46,25.04,7.58,35.44,16.05c16.03,13.05,28.27,29.59,41.62,45.12c8.35,9.71,16.32,19.82,27.04,27.18c0,0.67,0,1.33,0,2 c-3.95,2-6.83,5.29-9.91,8.32c-14.07,13.8-25.61,29.82-38.79,44.4c-15.6,17.24-31.93,33.31-56.87,35.93 c-4.4,0.46-6.9,3.84-7.16,8.41c-0.14,2.49,0.01,5-0.07,7.5c-0.6,20.1-8.54,36.79-23.69,49.92c-13.73,11.91-29.96,16.89-48,16.59 c-7.18-0.12-10.55,2.32-11.23,8.56c-1.41,12.92-7.15,23.81-15.07,33.76c-9.61,12.09-21.44,21.85-33.15,31.75 c-14.23,12.03-29.54,22.9-41.07,37.86c-0.33,0-0.67,0-1,0c-6.7-8.83-14.98-16.06-23.36-23.19c-15.09-12.85-31.09-24.66-44.67-39.22 c-10.99-11.78-19.64-24.78-21.33-41.43c-0.53-5.23-3.87-7.84-9.15-8.09c-1.83-0.09-3.67,0.06-5.5-0.01 c-27.59-1.15-48.35-13.34-61.23-38.08c-5.52-10.6-7.38-21.98-7.04-33.87c0.19-6.69-2.56-10.1-8.63-10.75 c-13.62-1.47-25.03-7.59-35.44-16.06c-16.04-13.04-28.3-29.56-41.61-45.12C18.72,302.43,10.67,292.41,0,285z"></path>
    </svg>
    <svg  className="w-32 h-32 fill-[#DB9E30] absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 568">
      <path d="M0,285c0-0.67,0-1.33,0-2c8.61-5.65,15.18-13.46,21.86-21.08c12.95-14.78,24.65-30.67,38.92-44.27 c12.39-11.81,26.05-21.27,43.81-23.07c5.21-0.53,7.8-3.85,8.14-9.17c0.14-2.32,0-4.67,0.07-7c0.61-20.09,8.49-36.79,23.69-49.91 c13.47-11.63,29.32-16.72,47-16.55c8.94,0.08,11.26-1.9,12.49-10.58c1.22-8.56,4.35-16.37,9-23.63 c10.24-15.99,24.68-27.83,38.95-39.88C258.17,25.84,273.4,14.89,285,0c0.33,0,0.67,0,1,0c6.55,8.74,14.71,15.85,22.97,22.88 c15.09,12.85,31.11,24.65,44.7,39.18c10.15,10.85,18.56,22.71,21.11,37.84c1.86,11.03,3.11,11.91,14.23,12.05 c22.71,0.29,41.49,8.96,55.43,27.06c10.02,13.02,14.41,27.95,13.81,44.42c-0.26,7.06,2.42,10.55,8.64,11.21 c13.63,1.46,25.04,7.58,35.44,16.05c16.03,13.05,28.27,29.59,41.62,45.12c8.35,9.71,16.32,19.82,27.04,27.18c0,0.67,0,1.33,0,2 c-3.95,2-6.83,5.29-9.91,8.32c-14.07,13.8-25.61,29.82-38.79,44.4c-15.6,17.24-31.93,33.31-56.87,35.93 c-4.4,0.46-6.9,3.84-7.16,8.41c-0.14,2.49,0.01,5-0.07,7.5c-0.6,20.1-8.54,36.79-23.69,49.92c-13.73,11.91-29.96,16.89-48,16.59 c-7.18-0.12-10.55,2.32-11.23,8.56c-1.41,12.92-7.15,23.81-15.07,33.76c-9.61,12.09-21.44,21.85-33.15,31.75 c-14.23,12.03-29.54,22.9-41.07,37.86c-0.33,0-0.67,0-1,0c-6.7-8.83-14.98-16.06-23.36-23.19c-15.09-12.85-31.09-24.66-44.67-39.22 c-10.99-11.78-19.64-24.78-21.33-41.43c-0.53-5.23-3.87-7.84-9.15-8.09c-1.83-0.09-3.67,0.06-5.5-0.01 c-27.59-1.15-48.35-13.34-61.23-38.08c-5.52-10.6-7.38-21.98-7.04-33.87c0.19-6.69-2.56-10.1-8.63-10.75 c-13.62-1.47-25.03-7.59-35.44-16.06c-16.04-13.04-28.3-29.56-41.61-45.12C18.72,302.43,10.67,292.41,0,285z"></path>
    </svg>
    <FaMosque className="text-white absolute top-10 left-10 text-5xl"/>
  </div>
  <h4  className="text-xl font-semibold mb-2">
    <span className="text-gray-800 hover:text-[#DB9E30] heading text-4xl">Mosque Renovation</span>
  </h4>
  <p  className="text-gray-600 text-xl">Provide rehab facility dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci...</p>
</div>
<div  className="flex flex-col  w-full max-w-xs p-6">
  <div  className="relative mb-4">
    <svg  className="w-32 h-32 fill-[#DB9E30]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 568">
      <path d="M0,285c0-0.67,0-1.33,0-2c8.61-5.65,15.18-13.46,21.86-21.08c12.95-14.78,24.65-30.67,38.92-44.27 c12.39-11.81,26.05-21.27,43.81-23.07c5.21-0.53,7.8-3.85,8.14-9.17c0.14-2.32,0-4.67,0.07-7c0.61-20.09,8.49-36.79,23.69-49.91 c13.47-11.63,29.32-16.72,47-16.55c8.94,0.08,11.26-1.9,12.49-10.58c1.22-8.56,4.35-16.37,9-23.63 c10.24-15.99,24.68-27.83,38.95-39.88C258.17,25.84,273.4,14.89,285,0c0.33,0,0.67,0,1,0c6.55,8.74,14.71,15.85,22.97,22.88 c15.09,12.85,31.11,24.65,44.7,39.18c10.15,10.85,18.56,22.71,21.11,37.84c1.86,11.03,3.11,11.91,14.23,12.05 c22.71,0.29,41.49,8.96,55.43,27.06c10.02,13.02,14.41,27.95,13.81,44.42c-0.26,7.06,2.42,10.55,8.64,11.21 c13.63,1.46,25.04,7.58,35.44,16.05c16.03,13.05,28.27,29.59,41.62,45.12c8.35,9.71,16.32,19.82,27.04,27.18c0,0.67,0,1.33,0,2 c-3.95,2-6.83,5.29-9.91,8.32c-14.07,13.8-25.61,29.82-38.79,44.4c-15.6,17.24-31.93,33.31-56.87,35.93 c-4.4,0.46-6.9,3.84-7.16,8.41c-0.14,2.49,0.01,5-0.07,7.5c-0.6,20.1-8.54,36.79-23.69,49.92c-13.73,11.91-29.96,16.89-48,16.59 c-7.18-0.12-10.55,2.32-11.23,8.56c-1.41,12.92-7.15,23.81-15.07,33.76c-9.61,12.09-21.44,21.85-33.15,31.75 c-14.23,12.03-29.54,22.9-41.07,37.86c-0.33,0-0.67,0-1,0c-6.7-8.83-14.98-16.06-23.36-23.19c-15.09-12.85-31.09-24.66-44.67-39.22 c-10.99-11.78-19.64-24.78-21.33-41.43c-0.53-5.23-3.87-7.84-9.15-8.09c-1.83-0.09-3.67,0.06-5.5-0.01 c-27.59-1.15-48.35-13.34-61.23-38.08c-5.52-10.6-7.38-21.98-7.04-33.87c0.19-6.69-2.56-10.1-8.63-10.75 c-13.62-1.47-25.03-7.59-35.44-16.06c-16.04-13.04-28.3-29.56-41.61-45.12C18.72,302.43,10.67,292.41,0,285z"></path>
    </svg>
    <svg  className="w-32 h-32 fill-[#DB9E30] absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571 568">
      <path d="M0,285c0-0.67,0-1.33,0-2c8.61-5.65,15.18-13.46,21.86-21.08c12.95-14.78,24.65-30.67,38.92-44.27 c12.39-11.81,26.05-21.27,43.81-23.07c5.21-0.53,7.8-3.85,8.14-9.17c0.14-2.32,0-4.67,0.07-7c0.61-20.09,8.49-36.79,23.69-49.91 c13.47-11.63,29.32-16.72,47-16.55c8.94,0.08,11.26-1.9,12.49-10.58c1.22-8.56,4.35-16.37,9-23.63 c10.24-15.99,24.68-27.83,38.95-39.88C258.17,25.84,273.4,14.89,285,0c0.33,0,0.67,0,1,0c6.55,8.74,14.71,15.85,22.97,22.88 c15.09,12.85,31.11,24.65,44.7,39.18c10.15,10.85,18.56,22.71,21.11,37.84c1.86,11.03,3.11,11.91,14.23,12.05 c22.71,0.29,41.49,8.96,55.43,27.06c10.02,13.02,14.41,27.95,13.81,44.42c-0.26,7.06,2.42,10.55,8.64,11.21 c13.63,1.46,25.04,7.58,35.44,16.05c16.03,13.05,28.27,29.59,41.62,45.12c8.35,9.71,16.32,19.82,27.04,27.18c0,0.67,0,1.33,0,2 c-3.95,2-6.83,5.29-9.91,8.32c-14.07,13.8-25.61,29.82-38.79,44.4c-15.6,17.24-31.93,33.31-56.87,35.93 c-4.4,0.46-6.9,3.84-7.16,8.41c-0.14,2.49,0.01,5-0.07,7.5c-0.6,20.1-8.54,36.79-23.69,49.92c-13.73,11.91-29.96,16.89-48,16.59 c-7.18-0.12-10.55,2.32-11.23,8.56c-1.41,12.92-7.15,23.81-15.07,33.76c-9.61,12.09-21.44,21.85-33.15,31.75 c-14.23,12.03-29.54,22.9-41.07,37.86c-0.33,0-0.67,0-1,0c-6.7-8.83-14.98-16.06-23.36-23.19c-15.09-12.85-31.09-24.66-44.67-39.22 c-10.99-11.78-19.64-24.78-21.33-41.43c-0.53-5.23-3.87-7.84-9.15-8.09c-1.83-0.09-3.67,0.06-5.5-0.01 c-27.59-1.15-48.35-13.34-61.23-38.08c-5.52-10.6-7.38-21.98-7.04-33.87c0.19-6.69-2.56-10.1-8.63-10.75 c-13.62-1.47-25.03-7.59-35.44-16.06c-16.04-13.04-28.3-29.56-41.61-45.12C18.72,302.43,10.67,292.41,0,285z"></path>
    </svg>
    <FaHandsHelping className="text-white absolute top-10 left-10 text-5xl"/>
  </div>
  <h4  className="text-xl font-semibold mb-2 text-left">
    <span className="text-gray-800 hover:t/ext-[#DB9E30] heading text-4xl">
    Help Poor</span>
  </h4>
  <p className="text-gray-600 text-xl">Provide rehab facility dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci...</p>
</div>
    </div>
  </div>
</div>
</div>
<div className="flex flex-col items-center justify-center w-full mb-10 relative h-screen">
<div className="absolute inset-0 mix-blend-exclusion" style={{backgroundImage: "url(https://nauthemes.com/demo/muezzin/wp-content/plugins/ingeniofy-plus/elementor-widgets/widgets_classes/../../assets/images/tq-bg2.png)"}}>
</div>
  <div className="flex flex-col gap-4 w-full items-center justify-center text-center pt-20 z-50 mb-10">
  
      <h3 className="text-slate-500 capitalize heading text-2xl">Islamic Quotes from Quran</h3>
      <h1 className="capitalize heading text-6xl w-[50%] tracking-wide">Islamic Quotes</h1>
  </div>
<div className="flex flex-col items-center gap-10">
<div className="flex flex-col items-center">
  <img className="w-20 h-20 mb-4" decoding="async" src="https://nauthemes.com/demo/muezzin/wp-content/plugins/ingeniofy-plus/elementor-widgets/widgets_classes/../../assets/images/shape2.png" alt="" />    
    <div className="w-1/2 text-center">
    <h3 className="heading font-semibold text-3xl mb-4">Ayat 58(Quran)</h3>
    <p className="mb-0 text-2xl">“….so whenever guidance comes to you from Me, then whoever follows my guidance, then there will neither be any fear on them nor will they grieve.”</p>
    </div>
    </div>
    <div className="grid grid-cols-3 w-[30%] gap-2 ">
      <div className="w-full h-1 bg-[#DB9E30] rounded-full"></div>
      <div className="w-full h-1 bg-slate-300 rounded-full"></div>
      <div className="w-full h-1 bg-slate-300 rounded-full"></div>
    </div>
    </div>
</div>
</main>
  );
}