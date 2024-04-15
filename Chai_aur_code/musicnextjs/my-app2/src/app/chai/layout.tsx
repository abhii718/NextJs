// import type { Metadata } from "next";
// import "./globals.css";
// import { Inter } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-center text-2xl mt-8 text-white bg-black">
       Chai NavBar Item
      </h1>
      {children}
    </>
  );
}
