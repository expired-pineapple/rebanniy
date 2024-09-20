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
import { useRouter, useParams } from "next/navigation";


export default function StudentDetail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [dialog, setDialog] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()
  const params = useParams()


  // const fetchStudentData = async () => {
  //   try {
  //     setLoading(true);

  //     // Make the API call with all applicable params
  //     const res = await axios.get("/api/customers/");
  
  //     if (res.status === 200) {
  //       const response = res.data
  //       console.log(response)
  //       setData(response);
  //     }
  //   } catch (e: any) {
  //     setData([]);
  //     setError(e.response?.data?.message || "An error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const columns: ColumnDef<any>[] = [  
    {
      accessorKey: "username",
  
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
          Employee Number
            <RxCaretSort className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="text-left">{row.getValue("username")}</div>,
    },
    {
      accessorKey: "locations",
  
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
          Location
            <RxCaretSort className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => <div className="text-left">{row.getValue("locations")}</div>,
    },
    {
      accessorKey: "date",
  
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
          Date
            <RxCaretSort className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell:  ({ row }) => {
        return ( <div className="text-left"><span></span>{row.getValue("date")}</div>
      )},
    },
    {
      accessorKey: "check_in_time",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Check In Time
            <RxCaretSort className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        return <span className="text-left font-medium">{row.getValue("check_in_time")}</span>;
      },
    },
  
    {
      accessorKey: "check_out_time",
      header: () => <div className="text-left">Checkout Time</div>,
      cell: ({ row }) => {
        return( <span className="text-left font-medium">
          
          {row.getValue("check_out_time")}</span>)
      },
    },
  
    {
      accessorKey: "duration",
      header: () => <div className="text-left">Duration(hours)</div>,
      cell: ({ row }) => {
  
        return <span className="text-left font-medium">{row.getValue("duration")}</span>;
      },
    },
      
    {
      accessorKey: "remark",
      header: () => <div className="text-left">Remark</div>,
      cell: ({ row }) => {
  
        return <span className="text-left font-medium">{row.getValue("remark")}</span>;
      },
    },
    {
      accessorKey: "edited",
      header: () => <div className="text-left"></div>,
      cell: ({ row }) => {
        const edited = row.original.edited;
        return (
          <div className={edited ? "border border-red-500 px-2 py-1 mx-auto rounded-full bg-red-50/50 text-red-700 font-medium text-center text-xs" : "border border-emerald-500 px-2 py-1 mx-auto rounded-full bg-emerald-50/50 text-emerald-700 font-medium text-center text-xs"}>
            {edited ? "Edited" : "Unedited"}
          </div>
        );
      },
    },
    {
      accessorKey: "action",
      header: () => <div className="text-left"></div>,
      cell: ({ row }) => {
       
        return (
          <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem 
                >
                Student Details
                
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Edit Student
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Delete Student
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>  
          </>
        )}

    },
  ];
  


  // useEffect(() => {
  //     fetchStudentData()
  // }, []);

  return (
    <div className="flex h-screen w-full flex-col  mx-auto">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card className="sm:col-span-1 col-span-2 w-screen sm:w-full">
            <CardHeader>
                  <CardTitle>Details for Student</CardTitle>
                  <CardDescription></CardDescription>

            </CardHeader>
            
              <DataTable columns={columns} data={[...data]} search={"username"} loading={loading} />
            
          </Card>

        </main>
      </div>
    </div>
  );
}
