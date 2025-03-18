import React from 'react'

import { getSEOTags } from '@/lib/seo';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from '@/components/app-sidebar';
import config from '@/config';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SearchBar from './searchBar';
import Filter from './filter';
import MapComponent from '@/components/Map/MapComponent';
import Menu from '@/components/menu';


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
    <>
      <div className=" static sm:sticky top-0 z-10 container px-0 max-w-screen-2xl">
        <Navbar enableBackButton={true} Title='Search' />
      </div>
      <div className="max-w-screen-2xl mx-auto px-0 sm:px-6 md:px-8 relative flex">
        <div className="hidden lg:block h-[calc(100vh-3.5rem)] w-[19rem] pt-3 pb-10 pr-6 overflow-y-auto ">
          <Menu />
        </div>
        <div className="h-[calc(100vh-3.5rem)] overflow-visible sm:overflow-y-auto w-full no-scrollbar pl-0 lg:pl-[1rem] relative">
          <SearchBar />
          <div className="pt-[0.5rem] sm:pt-[1rem]">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default layout
