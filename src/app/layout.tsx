import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { App } from "./app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meghalaya",
  description: "Enjoy your time in Meghalaya",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <App>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </App>
  );
}
