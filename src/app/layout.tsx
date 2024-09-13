import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { App } from "./app";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ᴹʸMeghalaya",
  description: "Enjoy your time in Meghalaya",
  icons: { icon: "/favicon.webp", apple: "/favicon.png" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <App>
      <Head>
			  <link rel="apple-touch-icon" sizes="180x180" href="/favicon.webp" />
		  </Head>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </App>
  );
}
