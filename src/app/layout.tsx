import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { App } from "./app";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandSearch from "@/components/commandSearch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyMeghalaya",
  description: "Enjoy your time in Meghalaya",
  icons: { icon: "/favicon.png", apple: "/favicon.png" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <App>
      <html lang="en">
        <body className={`${inter.className} relative`}>
          <Navbar/>
            {children}
          <Footer/>
          <Analytics />
          <Toaster />
        </body>
      </html>
    </App>
  );
}
