import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZAHRA's PORTFOLIO",
  description:
    "Zahra Portfolio is a personal website showcasing the work and projects of Zahra.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-28 sm:pt-36` }>

        <div className="bg-[#fbe2e3] absolute -top-24 right-44 h-125 w-125 rounded-full blur-[10rem] sm:w-275 -z-10"></div>
        <div className="bg-[#dbd7fb] absolute -top-4 -left-140 h-125 w-200 rounded-full blur-[10rem] sm:w-275  md:-left-132 lg:-left-152  xl:-left-60 2xl:-left-20 -z-10">

        </div>
        <ActiveSectionContextProvider>
          
        <Header />
        {children}

        <Toaster position="top-right"/>
        </ActiveSectionContextProvider>              
        
        </body>
    </html>
  );
}
