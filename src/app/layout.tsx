import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { App } from "./app";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MobileNavBar from "@/components/layout/mobile-navbar";
import { getSEOTags } from "@/libs/seo";
import AcceptCookies from "@/components/acceptCookies";

const inter = Inter({ subsets: ["latin"] });

<link rel="modulepreload" as="script" href="/assets/ArtPlum-DSfwBYUK.js"></link>

export const metadata = getSEOTags({
  canonicalUrlRelative: "/",
});

export const viewport = {
  themeColor: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <App>
      <html lang="en">
        <body className={`${inter.className} relative`}>
          {/* <AcceptCookies/> */}
          <Navbar />
          {children}
          <MobileNavBar />
          <Footer />
          <Analytics />
          <Toaster />
        </body>
      </html>
    </App>
  );
}
