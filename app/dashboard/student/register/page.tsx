'use client'
import {  useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';
import axios from 'axios';

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
import { useToast } from "@/hooks/use-toast";
import {StudentInfo, GuardianInfo} from '@/lib/type';

interface FormData {
    studentInfo: StudentInfo;
    guardianInfo: GuardianInfo;
}


export interface Errors{
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


export default function Register() {
    const [loading, setLoading]=useState(false)
    const [step, setStep] = useState(1);
    const [guardianImage, setGuardianImage] = useState("")
    const [studentImage, setStudentImage] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [success, setSuccess] = useState(false)
    const { toast } = useToast();
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
    const router = useRouter()
  
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
          

            const res = await axios.post("/api/register/", formData);
            if (res.status == 201) {
                setSuccess(true)
                toast({
                    description: res.data.message,
                    className: "top-0 right-0 bg-emerald-50 text-emerald-900 border-emerald-900",
                  });
                  setTimeout(()=>{
                    setSuccess(false)
                    router.push("/dashboard")
                  }, 2000)
            } else {
                const errorData = await res.data;
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
                setTimeout(()=>{
                    setError(null)
                }, 5000)
                return false;
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                setTimeout(()=>{
                    setError(null)
                }, 5000)
                return false;
            }
        } else if (step === 2) {
            const { firstName, lastName } = formData.guardianInfo;
            if (!firstName || !lastName) {
                setError("Please fill in all guardian fields.");
                setTimeout(()=>{
                    setError(null)
                }, 5000)
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
    useEffect(()=>{
        if(formData.studentInfo.password !== formData.studentInfo.confirmPassword){
            setErrors((prev) => ({ ...prev, confirmPassword: "Passwords don't match" }));
        }
    }, [formData.studentInfo.confirmPassword])
   
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 py-10 sm:px-20 px-10">

<Card className="sm:col-span-1 col-span-2 w-screen sm:w-full">
            <CardHeader  className='border-b border-slate-200 mb-10'>
                  <CardTitle className='font-medium'>
                    <span className='text-lg font-semibold'>Register Student</span>
                    <CardDescription className='text-md'>Fill in the form to register users</CardDescription>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
{
error ?
(<div className="error text-red-700 h-fit px-4 py-2 border border-red-300 bg-red-500/[20%] rounded-lg w-full text-center my-10">{error}</div>):<></>
}
{
success ?
(<div className="error text-emerald-700 h-fit px-4 py-2 border border-emerald-300 bg-emerald-500/[20%] rounded-lg w-full text-center my-10">Student Saved Successfully!</div>):<></>
}
{
    step == 1 && (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
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
</div>


    )
}
{
    step == 2 && (
<div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
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
</div>   
)}

      

<div className="flex items-end justify-end my-4  gap-2 w-full ml-auto">
<Button 
                    variant="outline" 
                    disabled={step === 1} 
                    onClick={() => setStep(prev => prev - 1)}
                >
                    Back
                </Button>
<Button 
disabled={loading} 
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
{step == 1 ? "Next" :"Save"}
</>

)}

</Button>
</div>

                  </CardContent>
            </Card>

        
</main>
  )
}