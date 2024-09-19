'use client'
import React from "react"
import Link from 'next/link'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip"
import {Users2} from "lucide-react"
import { Button } from "@/components/ui/button"
import {Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { FiMapPin } from "react-icons/fi";
import { LuFileSignature } from "react-icons/lu"; 
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdWaves } from "react-icons/md";
import { CiLogout} from "react-icons/ci";
import { usePathname   } from "next/navigation"
import { BsClockHistory } from "react-icons/bs";
import { signOut } from "next-auth/react";

interface SidebarProps {
  admin?: boolean
}



const SideBar: React.FC<SidebarProps> = ({admin }) => {
  const r  = usePathname();
  const isStudent = r === "/admin"
  const isEmployee = r === "/employee"
  const isLocation = r === '/configs/location'
  const isPayrollPeriods = r === '/payrollPeriods'
  const is  = r === '/ s'
  const isPayroll = r === '/employee/payroll'


    return( 
      <div>
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background lg:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <MdWaves className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Rebiyanni</span>
          </Link>
          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/"
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground md:h-8 md:w-8 transition-colors
                  ${isStudent ? "bg-accent text-black" : ""}`
                }
              >
                <Users2 className={`h-5 w-5  ${isStudent ? "text-black " : ""}`} />
                <span className="sr-only">Students</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Students</TooltipContent>
          </Tooltip>
          </TooltipProvider>

        </nav>

      </aside>
      <div className="flex flex-col lg:gap-4 lg:py-4 lg:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 lg:static lg:h-auto lg:border-0 lg:bg-transparent lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="lg:hidden">
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="lg:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <div className="flex justify-between">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground lg:text-base"
                >
                  <Users2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Rebbani</span>
                </Link>
                </div>
                <Link
                  href="/admin"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                   <Users2 className="h-5 w-5" />
                   <span>Students</span>
                </Link>

              </nav>
            </SheetContent>
          </Sheet>
          <div className="relative ml-auto flex-1 lg:grow-0">

          </div>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
                onClick={() => {
                  signOut();
                }}
              >
               <CiLogout className="h-5 w-5" />
              </Button>

        </header>
        </div>
      
      </div>
    )
}

export default SideBar