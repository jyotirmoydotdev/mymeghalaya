import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Baloo_2, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import localFont from 'next/font/local'
import Link from "next/link";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { appconfig } from "../../appconfig";
import Footer from "@/components/footer";
import MobileNavBar from "../components/m-navbar";
import { Button } from "@/components/ui/button";

const baloo = Baloo_2({
  weight: '800',
  display: 'swap',
})

const data = {
  links: [
    {
      name: "Home",
      link: "/home"
    },
    {
      name: "Destinations",
      link: "/search/destinations"
    },
    {
      name: "Districts",
      link: "/search/districts"
    }
  ]
}


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: appconfig.app,
  description: appconfig.description,
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-0 sm:gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-2 items-center font-semibold">
                    <Image src={"/logo.svg"} width={200} height={250} className="w-10 h-full" alt="My Meghalaya logo" />
                    <Link href={"/"} className="flex">
                      <span className={cn(baloo.className, " text-base pr-1")}>
                        {appconfig.app}
                      </span>
                      <span className="font-light text-xs self-start">
                        IN
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className=" hidden sm:flex gap-3 items-center">
                      {
                        data.links?.map((item, i) => (
                          <Link href={item.link} key={i}>
                            <Button variant={'ghost'} >
                              {item.name}
                            </Button>
                          </Link>
                        ))
                      }
                    </div>
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  </div>
                </div>
              </nav>
              <div className="flex flex-col max-w-7xl">
                {children}
              </div>
              <Footer />
            </div>
          </main>
          <MobileNavBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
