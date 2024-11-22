import React from 'react'

import { getSEOTags } from '@/libs/seo';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from '@/components/app-sidebar';
import config from '@/config';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `Search for destinations, district and more.`,
  canonicalUrlRelative: "/search",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
        <Navbar enableBackButton={true} Title='Search' />
        <div className="flex-1">
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-border/40 dark:border-border md:sticky md:block">
            </aside>

          </div>
        </div>
        {/* {children} */}
        <Footer />
      </div>
    </div>
  )
}

export default layout
