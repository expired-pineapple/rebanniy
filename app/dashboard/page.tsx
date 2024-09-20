"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiUserPlus } from "react-icons/fi";

import { DataTable } from "@/components/ui/data-table";
import { RxCaretSort } from "react-icons/rx";
import { ColumnDef } from "@tanstack/react-table";
import { GoEye } from "react-icons/go";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
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
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
type PaymentStatus = 'UNPAID' | 'PAID' | 'PENDING';

type ColorScheme = {
  bg: string;
  text: string;
  border: string;
};

type ColorMapper = {
  [key in PaymentStatus]: ColorScheme;
};

  
const colorMapper: ColorMapper = {
  UNPAID: {
    bg: "bg-red-50/50",
    text: "text-red-700",
    border: "border-red-500"
  },
  PAID: {
    bg: "bg-green-50/50",
    text: "text-green-700",
    border: "border-green-500"
  },
  PENDING: {
    bg: "bg-yellow-50/50",
    text: "text-yellow-700",
    border: "border-yellow-500"
  }
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  


  const router = useRouter()



  const fetchStudentData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/student");
  
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
  const colorMapper = {
    unpaid: {
      bg: "bg-red-50/50",
      text: "text-red-700",
      border: "border-red-500"
    },
    paid: {
      bg: "bg-green-50/50",
      text: "text-green-700",
      border: "border-green-500"
    },
    pending: {
      bg: "bg-yellow-50/50",
      text: "text-yellow-700",
      border: "border-yellow-500"
    }
  };

  const columns: ColumnDef<any>[] = [  
    {
      accessorKey: "fullName",
  
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <RxCaretSort className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="text-left">{row.getValue("fullName")}</div>,
    },
    {
      accessorKey: "username",
  
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Username
            <RxCaretSort className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="text-left">{row.getValue("username")}</div>,
    },
    {
      accessorKey: "age",
  
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
          Age
            <RxCaretSort className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="text-left">{row.getValue("age")}</div>,
    },
    {
      accessorKey: "gender",
  
      header: ({ column }) => {
        return (
          <span className="text-left font-medium">
            Gender
          </span>
        );
      },
      cell:  ({ row }) => {
        return ( <div className="text-left"><span>{row.getValue("gender")}</span></div>
      )},
    },
    {
      accessorKey: "studentStatus",
      header: ({ column }) => {
        return (
          <span className="text-left font-medium">
            Preference
          </span>
        );
      },
      cell: ({ row }) => {
        return <span className="text-left font-medium">{row.getValue("studentStatus")}</span>;
      },
    },
  
    {
      accessorKey: "paymentStatus",
      header: () => <div className="text-left">Payment Status</div>,
      cell:({ row }) => {

        const status = (row.getValue("paymentStatus") as string).toLowerCase() as PaymentStatus;
        // @ts-expect-error
        const colors = colorMapper[status] || colorMapper.unpaid; 
      
        return (
          <div className={`border ${colors.border} px-4 py-2  rounded-full ${colors.bg} ${colors.text} font-medium text-center text-xs w-fit`}>
            {row.getValue("paymentStatus")}
          </div>
        );
      }
    },

    {
      accessorKey: "action",
      header: () => <div className="text-left"></div>,
      cell: ({ row }) => {
       
        return (
          <>
          <Button variant={"ghost"} onClick={()=>{ router.push(`/dashboard/student/${row.original.id}`)}}>
            <GoEye className="text-blue-600 text-xl"/>
          </Button>
          </>
        )}

    },
  ];



  useEffect(() => {
      fetchStudentData()
  }, []);

  return (
    <div className="flex h-screen w-full flex-col  mx-auto">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center">
            <div className="ml-auto flex items-center gap-2">
              <Button
                variant="outline"
                onClick={()=>{router.push("/dashboard/student/register")}}
              >
                          <div className="flex items-center justify-center">
                          <FiUserPlus className="mr-2 h-4 w-4" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Register Student
                    </span>
                    </div>

              </Button>
            </div>
          </div>
          <Card className="sm:col-span-1 col-span-2 w-screen sm:w-full">
            <CardHeader>
                  <CardTitle>Registered Students</CardTitle>
                  <CardDescription>List of registered students</CardDescription>

            </CardHeader>
            
              <DataTable columns={columns} data={[...data]} search={"fullName"} loading={loading} />
            
          </Card>

        </main>
      </div>
    </div>
  );
}
