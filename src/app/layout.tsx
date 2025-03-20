import DeployButton from "@/src/components/deploy-button";
import { EnvVarWarning } from "@/src/components/env-var-warning";
import HeaderAuth from "@/src/components/header-auth";
import { ThemeSwitcher } from "@/src/components/theme-switcher";
import { hasEnvVars } from "@/src/utils/supabase/check-env-vars";
import { Baloo_2, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import localFont from 'next/font/local'
import Link from "next/link";
import "./globals.css";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { appconfig } from "@/appconfig";
import Footer from "@/src/components/footer";

const baloo = Baloo_2({
  weight:'800',
  display:'swap',
})


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
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
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-2 items-center font-semibold">
                    <Image src={"/logo.svg"} width={200} height={250} className="w-10 h-full" alt="My Meghalaya logo"/>
                    <Link  href={"/"} className="flex">
                      <span className={cn(baloo.className," text-base pr-1")}>
                        {appconfig.app}
                      </span>
                      <span className="font-light text-xs self-start">
                        IN
                      </span>
                    </Link>
                  </div>
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              {/* <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <p>
                  Powered by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    Supabase
                  </a>
                </p>
                <ThemeSwitcher />
              </footer> */}
              <Footer/>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
