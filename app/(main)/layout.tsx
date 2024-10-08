import type { Metadata } from "next";
import "@/app/globals.css";
import Footer from '@/app/components/footer'
import {Cinzel_Decorative, Montserrat} from 'next/font/google'
import Navbar from "@/app/components/navbar";
import { Suspense } from "react";

const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-body" })
const cinzel = Cinzel_Decorative({
  subsets: ['latin'], variable: "--font-heading",
  weight: "700"
})

export const metadata: Metadata = {
  title: "Rebanniy"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${montserrat.variable} ${cinzel.variable} antialiased max-w-screen`}
      >
           <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        {children}
        <Footer />
        </Suspense>
      </body>
      

    </html>
  );
}
