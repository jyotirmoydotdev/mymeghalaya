import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css"
import { App } from "./app";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import MobileNavBar from "@/components/layout/mobile-navbar";
import { getSEOTags } from "@/lib/seo";
import OneTapComponent from "@/components/oneTapComponent";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'
import { createClient } from "@/utils/supabase/server";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/landingPage/heroSection";
import MeghalayaSection from "@/components/landingPage/meghalayaSection";
import Footer from "@/components/layout/footer";
import { redirect } from "next/navigation";
import ProgressLoad from "@/components/progressLoad";
import { ThemeProvider } from "@/components/theme-provider"

// const inter = Inter({ subsets: ["latin"] });

export const metadata = getSEOTags({
  canonicalUrlRelative: "/",
});

export const viewport = {
  themeColor: "light",
  width: "device-width",
  initialScale: 1,
}


export default async function RootLayout({
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
        <meta name="apple-mobile-web-app-title" content="MyMeghalaya" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/site.webmanifest" />
        <body className={`relative no-scrollbar`}>
            <ProgressLoad />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
            <MobileNavBar />
            <Analytics />
            <Toaster />
        </body>
      </html>
    </App>
  );
}
