import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neeraj Kasheety",
  description: "Software Engineer with 5 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 h-[5000px] pt-28 sm:pt-36 `}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] h-[31.25rem] w-[31.25rem] -z-10 blur-[9rem] rounded-full right-[-11rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] h-[31.25rem] w-[50.25rem] -z-10 blur-[9rem] rounded-full left-[-15rem] sm:w-[68.75rem] md:left-[] ">
          {" "}
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
