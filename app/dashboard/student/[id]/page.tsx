"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { IoReceiptOutline } from "react-icons/io5";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FiUserPlus } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

import { DataTable } from "@/components/ui/data-table";
import { RxCaretSort } from "react-icons/rx";
import { ColumnDef } from "@tanstack/react-table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { MoreHorizontal } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { PiSpinner } from "react-icons/pi";
import { useToast } from "@/hooks/use-toast";


export default function StudentDetail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({})
  const [dialog, setDialog] = useState(false)
  const [error, setError] = useState(null)
  const params = useParams()
  const { toast } = useToast();


  const fetchStudentData = async () => {
    try {
      setLoading(true);

      // Make the API call with all applicable params
      const res = await axios.get(`/api/student/${params?.id}`);
  
      if (res.status === 200) {
        const response = res.data
        console.log(response)
        setData(response);
      }
    } catch (e: any) {
      setData([]);
      setError(e.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const confirmPayment = async () => {
    
    toast({
      description: (
        <>
          <div className="flex items-center justify-center bg-blue-600 border-blue-950">
                        <PiSpinner className="h-4 w-4 mr-2 animate-spin" />
                        <p>Loading</p>
          </div>
        </>
      )
    })
    try {
      setLoading(true);
      const res = await axios.put(`/api/admin/confirmPayment/${params?.id}`);
  
      if (res.status === 200) {
        toast({
          description: "Payment Confirmed Successfully",
          className:
            "top-0 right-0 bg-emerald-50 text-emerald-900 border-emerald-900",
        });
       
      }
    } catch (e: any) {
      toast({
        description: "Failed to confirm payment",
        className:
          "top-0 right-0 bg-red-50 text-red-900 border-red-900",
      });
      setData([]);
      setError(e.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }


  useEffect(()=>{
    fetchStudentData()
  }, [])

  return (
    <div className="flex h-screen w-full flex-col  mx-auto">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="student" className="w-full">
          <TabsList>
            <TabsTrigger value="student">Student Information</TabsTrigger>
            <TabsTrigger value="guardian">Guardian Information</TabsTrigger>
            <TabsTrigger value="payment">Payment Details</TabsTrigger>
          </TabsList>
          <TabsContent value="student" className="w-full">
          <Card className="sm:col-span-1 col-span-2 w-screen sm:w-full">
            <CardHeader>
                  <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex gap-10">
              {
               ( data?.image !== "" || !loading) ? (
                <Image src={data?.image || ""} width={100} height={100} alt="sideImage"/>
               ) : (
                <div className="text-9xl from-neutral-800">
                  <VscAccount />
                </div>
               )}
                        
                        <div className="flex flex-col gap-4 w-full justify-center">
                            <div className="flex gap-10 items-center">
                                <div className="grid items-center gap-1.5">
                                    <Label htmlFor="first_name" className="font-semibold">First Name:</Label>
                                    <Input value={data?.User?.firstName} disabled />   
                                </div>
                                <div className="grid items-center gap-1.5">
                                    <Label htmlFor="last_name" className="font-semibold">Last Name:</Label>
                                    <Input value={data?.User?.lastName} disabled />
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="email" className="font-semibold">Email:</Label>
                                    <Input value= {data?.User?.email} disabled />  
                                </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="username" className="font-semibold">Username:</Label>
                                <Input value= {data?.User?.username} disabled />  
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="age" className="font-semibold">Age:</Label>
                                    <Input value= {data?.age} disabled />  
                                </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="gender" className="font-semibold">Gender:</Label>
                                <Input value= {data?.gender} disabled />  
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="preference" className="font-semibold">Preference:</Label>
                                <Input value= {data?.studentStatus} disabled />  
                            </div>
                        </div>
                    </div>
            </CardContent>
          </Card>

          </TabsContent>
          <TabsContent value="guardian">
          <Card className="sm:col-span-1 col-span-2 w-screen sm:w-full">
            <CardHeader>
                  <CardTitle>Guardian Details</CardTitle>
            </CardHeader>
            <CardContent>
            {data?.Guardian?.map((guardian:any, index:any) => (
            <div className="flex gap-10" key={index}>
              
              {
               ( (guardian.image !== "" || !loading)) ? (
                <Image src={guardian.image ||""} width={100} height={100} alt="sideImage"/>
               ) : (
                <div className="text-9xl from-neutral-800">
                  <VscAccount />
                </div>
               )}
                        
                        <div className="flex flex-col gap-4 w-full justify-center">
                          
                                <div className="grid items-center gap-1.5">
                                    <Label htmlFor="first_name" className="font-semibold">First Name:</Label>
                                    <Input value={guardian?.firstName} disabled />   
                                </div>
                                <div className="grid items-center gap-1.5">
                                    <Label htmlFor="last_name" className="font-semibold">Last Name:</Label>
                                    <Input value={guardian?.lastName} disabled />
                                </div>
                            
                        </div>
                    </div>
            ))}
            </CardContent>
          </Card>
          </TabsContent>
          <TabsContent value="payment" className="w-3/4">
          <Card className="sm:col-span-1 col-span-2 w-screen sm:w-full">
            <CardHeader className="border-b-0.5 border-slate-200 flex justify-between">
                  <CardTitle className="text-xl">Payment Receipt</CardTitle>
            </CardHeader>
            <CardContent className="px-10 py-10">
              {(data?.paymentReceipt) ?
              (
              <div className="w-full flex flex-col px-10">
                <img src={data?.paymentReceipt || ""} className="max-h-lg max-w-lg mb-6"/>
                <div className="w-full items-end justify-end">
                  <Button variant="outline" onClick={()=>{setDialog(true)}} className="w-fit items-end justify-end">Confirm Payment</Button>
                </div>
              </div>):
              <div className="flex flex-col w-full items-center">
                <IoReceiptOutline className="text-9xl"/>
                <p className="text-lg px-10 font-semibold">Payment Recipt hasn't been uploaded</p>
              </div>
              }
            </CardContent>
          </Card>
          </TabsContent>
          </Tabs>
          <AlertDialog open={dialog}>
            <AlertDialogContent className="bg-inherit">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will confirm the payment.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setDialog(false)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => {setDialog(false); confirmPayment()}} className="bg-emerald-900 px-4 py-2 text-white transition hover:bg-emerald-950">Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog> 
        </main>
      </div>
    </div>
  );
}
