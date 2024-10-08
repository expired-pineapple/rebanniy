import type { Metadata } from "next";
import {Cinzel_Decorative, Montserrat} from 'next/font/google'

import "@/app/globals.css";



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
        {children}
        
      </body>
      

    </html>
  );
}
