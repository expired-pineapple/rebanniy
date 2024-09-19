import { Suspense } from "react";
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'


import SideBar from "@/app/components/sidebar";
import { Toaster } from "@/components/ui/toaster"
import getCurrentUser from "../actions/getCurrentUser";
import "../globals.css";


const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-body" })

export const metadata: Metadata = {
  title: "Rebanniy Admin"
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
            <body
        className={`${montserrat.variable}  antialiased max-w-screen`}
      >
        <div className="flex min-h-screen flex-col bg-muted/40">
          <SideBar admin={user?.isAdmin} />
            <div className="flex flex-col md:gap-4 ">
              {children}
              <Toaster />
            </div>
        </div>
      </body>
    </html>
  );
}
