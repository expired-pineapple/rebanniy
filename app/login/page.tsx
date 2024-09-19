 "use client";
import { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { GoEye } from "react-icons/go";
import { GoEyeClosed  } from "react-icons/go";
import { PiSpinner } from "react-icons/pi";
import { useToast } from "@/hooks/use-toast";
import axios from 'axios'

interface Errors {
  username?: string;
  password?: string;
  general?: string;
}

export default function Login() {
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();
  const[loading, setLoading]=useState(false)

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");


  const { toast } = useToast();
  
  
const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (!username) {
      setErrors((prev) => ({ ...prev, username: "Employee Number is required" }));
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
    }
    if (username && password){
      try{
        setLoading(true)
        const result = await signIn("credentials", {
          username: username.toLowerCase().trim(),
          password: password.trim(),
          callbackUrl: "/admin",
          redirect:false
        })
        if(result?.status === 200 ){
          router.push("/admin");
          setLoading(false)
        }
        if(result?.status !== 200 ){
          setErrors((prev) => ({ ...prev, general: (result?.error || "") }));
          setLoading(false)
          setTimeout(() => {
            setErrors({});
          }, 5000);
        }
      }catch(error:any){
        if(typeof(error) !== "string"){
          setErrors((prev) => ({ ...prev, general: "Something went wrong"}));
        }else{
          setErrors((prev) => ({ ...prev, general: error}));
        }
        setLoading(false)
        setTimeout(() => {
          setErrors({});
        }, 5000);

      }
    }
  };

  return (
    <main className="m-4 mx-10">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-lg lg:px-8 mt-10 border rounded-md shadow-md md:mt-20">
        <div className="flex flex-col gap-4 py-20">
          <div className="">
          <p className="font-bold text-xl">Welcome back,</p> 
            <p className="text-gray- text-lg">Sign in to continue</p>
          </div>
            <div className="form">
            <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              {
                errors.general && (
                  <div className="bg-red-100/[0.2] rounded-md p-2 border-2 border-red-500">
                      <p className="text-red-500 text-center font-medium">{errors.general}</p>
                  </div>
                )
              }
              <div className="username ">
                <label htmlFor="username" className="font-medium text-md">
                  Employee Number
                </label>
                <input
                      type="text"
                      className={`block rounded-md border-0 dark:text-white py-1.5 pl-7 sm:pr-10 pr:10 w-full text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003949] sm:text-sm sm:leading-6 ${errors.username ? 'ring-red-300' : ''}`}
                      placeholder="EN001"
                      value={username}
                      onChange={(e) => setusername((e.target.value))}
                      required
                      onBlur={(e) => {
                        if (!e.target.value) {
                          setErrors((prev) => ({ ...prev, username: "Employee Number is required" }))
                        } 
                        else{
                          setErrors((prev) => ({ ...prev, username: "" }))
                        }
                      }}
                    />
                {
                  errors.username && (
                    <span className="text-red-500 font-semibold text-sm">{errors.username}</span>
                  )
                }
              </div>
              <div className="password">
    <label htmlFor="password" className="font-medium text-md">
      Password
    </label>
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        className={`block rounded-md dark:text-white border-0 py-1.5 pl-7 pr-12 w-full text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003949] sm:text-sm sm:leading-6 ${
          errors.password ? 'ring-red-300' : ''
        }`}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={(e) => {
          if (!e.target.value) {
            setErrors((prev) => ({ ...prev, password: 'Password is required' }));
          } else {
            setErrors((prev) => ({ ...prev, password: '' }));
          }
        }}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <GoEye /> : <GoEyeClosed />}
      </button>
    </div>

    {errors.password && (
      <span className="text-red-500 font-semibold text-sm">{errors.password}</span>
    )}
               </div>
              <button type="submit" className="bg-[#08513F] w-full p-2 text-white font-medium rounded" disabled={loading || username.length ==0 || password.length == 0}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <PiSpinner className="h-4 w-4 mr-2 animate-spin text-white" />
                  <p>
                    Loading
                  </p>
                  </div>
                ) : (
                  <p>Login</p>
                )}
              </button>
            </div>
          </form>
            </div>
        </div>
      </div>
    </main>
  );
}
