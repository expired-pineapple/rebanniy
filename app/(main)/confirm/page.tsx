'use client'
import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { PiSpinner } from 'react-icons/pi';
import { IoIosImages } from 'react-icons/io';
import ImageUpload from '@/app/components/imageUpload';
import { Button } from '@/components/ui/button';
import axios from 'axios';

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [paymentImage, setPaymentImage] = useState("")
    const [step, setStep] = useState(1)
    const [error, setError] = useState<string | null>(null)
    
    const searchParams = useSearchParams();
  
    const save = async () => {
        try {
            setLoading(true)
            const token = searchParams?.get('token');
            const userId = searchParams?.get('user');
            console.log(searchParams?.get('user'), "HERE")
            

            if (!token || !userId) {
                throw new Error("Missing token or userId");
            }

            const res = await axios.put(`/api/confirmation?token=${token}&userId=${userId}`, {paymentImage:paymentImage});

            if (res.status == 200) {
                setStep(2);
            } else {
                const errorData = res.data;
                setError(errorData.message || "Registration failed. Please try again.");
                setTimeout(() => {
                    setError(null);
                  }, 5000);
            }
        } catch (e: any) {
            console.error("An error occurred:", e);
            setError(e.message || "An error occurred. Please try again later.");
            setTimeout(() => {
                setError(null);
              }, 5000);
            
        } finally {
            setLoading(false)
        }
    };

    const validateForm = () => {
        if (step === 1) {
            if (!paymentImage) {
                setError("Please upload a payment receipt.");
                return false;
            }
        } 
        setError(null);
        return true;
    };

    const handleNext = async() => {
        if (validateForm()) {
            if (step === 1) {
                setStep(2);
            } else if (step === 2) {
                await save();
            }
        }
    };
 
  return (
 
    <main className="min-h-screen">
    <div className="black-layer relative">
        <div className="bg-[url(https://nauthemes.com/demo/muezzin/wp-content/uploads/2023/11/tq-feat-img2-2.jpg)] bg-cover  h-full w-full absolute bg-fixed top-0 left-0 z-[-2]"></div>
            <div className="text-center pt-[14rem] flex flex-col items-center justify-center gap-6 py-14">
                <img decoding="async" src="https://nauthemes.com/demo/muezzin/wp-content/themes/taqwa/assets/images/prayer-head-shp.png" alt="heading-image" />
                    <h1 className="heading text-5xl text-white">Register Now</h1>
                    <div className="flex gap-4 items-center">
                        <h1 className="heading text-xl text-white">Home</h1> <span className='text-white text-2xl'>/</span> <h1 className="heading text-xl text-[#DB9E30]">Register</h1>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 py-10 sm:px-20 px-10">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className='text-lg text-[#DB9E30] font-semibold'>Begin Your Journey!</p>
            <p className='heading text-5xl font-semibold'>Lorem Ipsum</p>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full" >
                    <Image src="/register.png" width={700} height={500} alt='side-image' className='h-auto hidden sm:flex'/>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex justify-between items-center gap-2 my-6">
                            <div className={`rounded-full sm:w-12 w-6 sm:h-12 h-6 sm:p-10 p-5 flex justify-center items-center text-xl text-white heading cursor-pointer hover:bg-[#08513F] ${step ==1 ? "bg-[#08513F]" :"bg-gray-400"}`} onClick={()=>{setStep(1)}}>
                                1
                            </div>
                            <div className='border border-gray-300 h-0 w-full'></div>
                            <div className={`rounded-full sm:w-12 w-6 sm:h-12 h-6 sm:p-10 p-5 flex justify-center items-center text-xl cursor-pointer hover:bg-[#08513F] ${step ==2 ? "bg-[#08513F]" :"bg-gray-400"} text-white heading`}>
                                2
                            </div>     
                        </div>
                        {
                error ?
                (<div className="error text-red-700 h-fit px-4 py-2 border border-red-300 bg-red-500/[20%] rounded-lg w-full text-center">{error}</div>):<></>
            }
                        {step === 1 && (
                <AnimatePresence>
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ stiffness: 5 }}
                        exit={{ x: -300, opacity: 0 }}
                        className="grid  grid-cols-1 "
                    >   
                    <p className='text-lg font-semibold'>Please upload your receipt image here:</p>
                    <div className="mb-10 relative max-w-xl">
                    <ImageUpload onChange={setPaymentImage} />
                    </div>
                       
                    </motion.div>
                </AnimatePresence>
            )}

                            {
                                step == 2 && (
                                    <AnimatePresence>
                                    <motion.div
                                    initial={{ x: 300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -300, opacity: 0 }}
                                    transition={{stiffness: 5}}
                                    className="flex flex-col gap-4 w-full items-center justify-center"
                                    >
                                        <IoIosImages className='text-7xl text-[#08513F]'/>
                                        <div className="text-center w-1/2 flex flex-col justify-center items-center">
                                        <h1 className="heading text-5xl text-[#08513F]">Thank you!</h1>
                                            <div className="flex gap-4 items-center">
                                              <h1 className="heading text-xl text-[#DB9E30]">Our team will confirm your status and get back to you shortly</h1>
                                        </div>
                                        </div>
                                </motion.div>
                                </AnimatePresence>
                                )
                            }
                    <div className="flex items-end gap-3 ml-auto">

                    <div className="flex items-end gap-3 ml-auto">
                <Button 
                    variant="outline" 
                    disabled={step === 1} 
                    className='w-full z-50' 
                    onClick={() => setStep(prev => prev - 1)}
                >
                    Back
                </Button>
                <Button 
                    disabled={step === 2} 
                    className=''
                    onClick={save}
                >
                     {loading ? (
                  <div className="flex items-center justify-center">
                    <PiSpinner className="h-4 w-4 mr-2 animate-spin text-white" />
                  <p>
                    Loading
                  </p>
                  </div>
                ) : (
                    <>
                     Submit
                    </>
                   
                )}
                    
                </Button>
            </div>
                    </div>
                     
                </div>
                </div>
        </div>
</main>
  )
}