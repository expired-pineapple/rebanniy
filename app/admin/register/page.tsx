'use client'
import {  useEffect, useState } from 'react';
import Image from 'next/image'

import { AnimatePresence, motion } from 'framer-motion';

import { IoMailOutline } from "react-icons/io5";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { PiSpinner } from 'react-icons/pi';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ImageUpload from '@/app/components/imageUpload';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
  } from "@/components/ui/card";


interface StudentInfo {
    image: string | null;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    studentStatus: string;
    confirmPassword: string
}

interface Errors{
    image?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    age?: string;
    gender?: string;
    studentStatus?: string;
    confirmPassword?: string
    guardianFirstName?: string;
    guardianLastName?: string;
}

interface GuardianInfo {
    image: string | null;
    firstName: string;
    lastName: string;
}

interface FormData {
    studentInfo: StudentInfo;
    guardianInfo: GuardianInfo;
}

export default function Register() {
    const [loading, setLoading]=useState(false)
    const [step, setStep] = useState(1);
    const [guardianImage, setGuardianImage] = useState("")
    const [studentImage, setStudentImage] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        studentInfo: {
            image: null,
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            email:"",
            gender: "",
            studentStatus: "",
            confirmPassword: "",
            age:0
        },
        guardianInfo: {
            image: null,
            firstName: "",
            lastName: "",
        }
    });
    const [error, setError] = useState<string | null>(null);

    const [errors, setErrors]= useState<Errors>({})
  
    const handleChange = (section: keyof FormData, field: string, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [field]: value
            }
        }));
    };
    
    const save = async () => {
        
        try {
            setLoading(true)
            setFormData(prevData => ({
                ...prevData,
                guardianInfo: {
                    ...prevData["guardianInfo"],
                    ["image"]: guardianImage
                }
            }))
            setFormData(prevData => ({
                ...prevData,
                studentInfo: {
                    ...prevData["studentInfo"],
                    ["image"]: studentImage
                }
            }))
          
            
            console.log(formData)
            const res = await fetch("http://localhost:3000/api/register/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            console.log(res)
    
            if (res.ok) {
                const data = await res.json();
                console.log("Registration successful:", data);
                setStep(3);
            } else {
                const errorData = await res.json();
                setError(errorData.message || "Registration failed. Please try again.");
            }
        } catch (e) {
            console.error("An error occurred:", e);
            setError("An error occurred. Please try again later.");
        }finally{
            setLoading(false)
        }
    };

    const validateForm = () => {
        if (step === 1) {
            const { firstName, lastName, username, password, confirmPassword } = formData.studentInfo;
            if (!firstName || !lastName || !username || !password || !confirmPassword) {
                setError("Please fill in all fields.");
                return false;
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return false;
            }
        } else if (step === 2) {
            const { firstName, lastName } = formData.guardianInfo;
            if (!firstName || !lastName) {
                setError("Please fill in all guardian fields.");
                return false;
            }
        }
        setError(null);
        return true;
    };

    const handleNext = async() => {
        console.log("Next_____________________________", step)
        if (validateForm()) {
            if (step === 1) {
                setStep(2);
            } else if (step === 2) {
                console.log("Save started__________________")
                await save();
            }
        }
    };
    useEffect(()=>{
        if(formData.studentInfo.password !== formData.studentInfo.confirmPassword){
            setErrors((prev) => ({ ...prev, confirmPassword: "Passwords don't match" }));
        }
    }, [formData.studentInfo.confirmPassword])
   
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 py-10 sm:px-20 px-10">

<Card className="sm:col-span-1 col-span-2 w-screen sm:w-full">
            <CardHeader>
                  <CardTitle>Register Student</CardTitle>
                  <CardDescription>Fill in the form to register users</CardDescription>
                  <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between items-center gap-2 my-6">
                            <div className={`rounded-full sm:w-12 w-6 sm:h-12 h-6 sm:p-10 p-5 flex justify-center items-center text-xl text-white heading cursor-pointer hover:bg-[#08513F] ${step ==1 ? "bg-[#08513F]" :"bg-gray-400"}`} onClick={()=>{setStep(1)}}>
                                1
                            </div>
                            <div className='border border-gray-300 h-0 w-full'></div>
                            <div className={`rounded-full sm:w-12 w-6 sm:h-12 h-6 sm:p-10 p-5 flex justify-center items-center text-xl cursor-pointer hover:bg-[#08513F] ${step ==2 ? "bg-[#08513F]" :"bg-gray-400"} text-white heading`} onClick={()=>{setStep(2)}}>
                                2
                            </div>
                            <div className='border border-gray-300 h-0 w-full'></div>
                            <div className={`rounded-full sm:w-12 w-6 sm:h-12 h-6 sm:p-10 p-5 flex justify-center items-center text-xl ${step ==3 ? "bg-[#08513F]" :"bg-gray-400"} text-white heading`}>
                                3
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
className="grid sm:grid-cols-2 grid-cols-1 gap-2"
>
<ImageUpload onChange={setStudentImage} />
<div className="flex flex-col gap-4 w-full justify-center">
    <div className="flex gap-2">
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="first_name" className="font-semibold">First Name:</Label>
            <Input 
                type="text" 
                id="first_name" 
                placeholder="John" 
                value={formData.studentInfo.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('studentInfo', 'firstName', e.target.value)}
                required
                onBlur={(e) => {
                    if (!e.target.value) {
                      setErrors((prev) => ({ ...prev, firstName: "Field is required" }));
                    } else {
                      setErrors((prev) => ({ ...prev, firstName: "" }));
                    }
                  }}
            />
             {errors?.firstName && (
                <p className="text-red-500 font-semibold">{errors?.firstName}</p>
            )}
        </div>
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="last_name" className="font-semibold">Last Name:</Label>
            <Input 
                type="text" 
                id="last_name" 
                placeholder="Doe" 
                value={formData.studentInfo.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('studentInfo', 'lastName', e.target.value)}
                onBlur={(e) => {
                    if (!e.target.value) {
                      setErrors((prev) => ({ ...prev, lastName: "Field is required" }));
                    } else {
                      setErrors((prev) => ({ ...prev, lastName: "" }));
                    }
                  }}
            />
             {errors?.lastName && (
                <p className="text-red-500 font-semibold">{errors?.lastName}</p>
            )}
        </div>
    </div>
    <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="font-semibold">Email:</Label>
            <Input 
                type="email" 
                id="email" 
                placeholder="john.doe@rebbaniy.com" 
                value={formData.studentInfo.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('studentInfo', 'email', e.target.value)}
                onBlur={(e) => {
                    if (!e.target.value) {
                      setErrors((prev) => ({ ...prev, email: "Field is required" }));
                    } else {
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }}
            />
             {errors?.email && (
                <p className="text-red-500 font-semibold">{errors?.email}</p>
            )}
        </div>
    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username" className="font-semibold">Username:</Label>
        <Input 
            type="text" 
            id="username" 
            placeholder="john.doe" 
            value={formData.studentInfo.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('studentInfo', 'username', e.target.value)}
            onBlur={(e) => {
                if (!e.target.value) {
                  setErrors((prev) => ({ ...prev, email: "Field is required" }));
                } else {
                  setErrors((prev) => ({ ...prev, email: "" }));
                }
              }}
        />
         {errors?.email && (
            <p className="text-red-500 font-semibold">{errors?.email}</p>
        )}
    </div>
    <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="age" className="font-semibold">Age:</Label>
            <Input 
                type="number" 
                id="age" 
                placeholder="20" 
                value={formData.studentInfo.age}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('studentInfo', 'age', e.target.value)}
                onBlur={(e) => {
                    if (!e.target.value) {
                      setErrors((prev) => ({ ...prev, age: "Field is required" }));
                    } else {
                      setErrors((prev) => ({ ...prev, age: "" }));
                    }
                  }}
            />
             {errors?.age && (
                <p className="text-red-500 font-semibold">{errors?.age}</p>
            )}
        </div>
    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="gender" className="font-semibold">Gender:</Label>
        <Select value={formData.studentInfo.gender} onValueChange={(e) => handleChange('studentInfo', 'gender', e)}>
        <SelectTrigger className="w-full">
                <SelectValue placeholder="Male" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="MALE">Male</SelectItem>
                <SelectItem value="FEMALE">Female</SelectItem>
            </SelectContent>
            </Select>
    </div>
    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="preference" className="font-semibold">Preference:</Label>
            <Select  value={formData.studentInfo.studentStatus} onValueChange={(e) => handleChange('studentInfo', 'studentStatus', e)} >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Women" />
                </SelectTrigger>
                <SelectContent className='w-full'>
                    <SelectItem value="WOMEN">Women</SelectItem>
                    <SelectItem value="CHILDREN">Children</SelectItem>
                    
                </SelectContent>
                </Select>
    </div>

    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="font-semibold">Password:</Label>

        <div className="relative">
        <input
                type={showPassword ? 'text' : 'password'}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="********"
                value={formData.studentInfo.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('studentInfo', 'password', e.target.value)}
                
            />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <GoEye /> : <GoEyeClosed />}
                </button>
                </div>
    </div>
    <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="confirm-password" className="font-semibold">Confirm Password:</Label>
        <div className="relative">
        <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="********"
                value={formData.studentInfo.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('studentInfo', 'confirmPassword', e.target.value)}
                onBlur={(e) => {
                    if (!e.target.value) {
                      setErrors((prev) => ({ ...prev, confirmPassword: "Field is required" }));
                    } else {
                      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
                    }
                  }}
            />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    {showConfirmPassword ? <GoEye /> : <GoEyeClosed />}
                </button>
                </div>
                {errors?.confirmPassword && (
                <p className="text-red-500 font-semibold">{errors?.confirmPassword}</p>
            )}
    </div>
</div>
</motion.div>
</AnimatePresence>
)}
{step === 2 && (
<AnimatePresence>
<motion.div
initial={{ x: 300, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
exit={{ x: -300, opacity: 0 }}
transition={{ stiffness: 5 }}
className="grid sm:grid-cols-2 grid-cols-1 gap-2"
>
<ImageUpload onChange={setGuardianImage} />
<div className="flex flex-col gap-4 w-full justify-center">
<div className="grid items-center gap-1.5">
    <Label htmlFor="guardian_first_name" className="font-semibold">Guardian&apos;s First Name:</Label>
    <Input 
        type="text" 
        id="guardian_first_name" 
        placeholder="John" 
        value={formData.guardianInfo.firstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('guardianInfo', 'firstName', e.target.value)}
    />
</div>
<div className="grid w-full items-center gap-1.5">
    <Label htmlFor="guardian_last_name" className="font-semibold">Guardian&apos;s Last Name:</Label>
    <Input 
        type="text" 
        id="guardian_last_name" 
        placeholder="Doe" 
        value={formData.guardianInfo.lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('guardianInfo', 'lastName', e.target.value)}
    />
</div>
</div>
</motion.div>
</AnimatePresence>
)}
    {
        step == 3 && (
            <AnimatePresence>
            <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{stiffness: 5}}
            className="flex flex-col gap-4 w-full items-center justify-center"
            >
                <IoMailOutline className='text-7xl text-[#08513F]'/>
                <div className="text-center w-1/2 flex flex-col justify-center items-center">
                <h1 className="heading text-5xl text-[#08513F]">User has been successfully!</h1>
                    <div className="flex gap-4 items-center">
                      <h1 className="heading text-xl text-[#DB9E30]">Token will expire in a hour.</h1>
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
className='w-full' 
onClick={() => setStep(prev => prev - 1)}
>
Back
</Button>
<Button 
disabled={step === 3} 
onClick={handleNext}
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
{step < 2 ? "Next" : "Save"}
</>

)}

</Button>
</div>
</div>

</div>
                  </CardContent>

            </CardHeader>
            </Card>

        
</main>
  )
}