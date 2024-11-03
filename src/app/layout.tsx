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
import Transition from "@/components/transition";

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
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Meghalaya" />
        <link rel="manifest" href="/site.webmanifest" />
        <body className={`${inter.className} relative`}>
          {/* <AcceptCookies/> */}
          {children}
          <MobileNavBar />
          <Analytics />
          <Toaster />
        </body>
      </html>
    </App>
  );
}
