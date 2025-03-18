import React from 'react'

import { getSEOTags } from '@/lib/seo';
import Navbar from '@/components/layout/navbar';
import Menu from '@/components/menu';
import Image from 'next/image';
import Logo from '@/components/layout/logo';
import SearchInput from '@/components/searchInput';
import { GoBell } from 'react-icons/go';
import AuthButton from '@/components/authButton';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const metadata = getSEOTags({
    title: `MyMeghalaya`,
    canonicalUrlRelative: "/home",
});

const layout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <div className=" static sm:sticky top-0 z-10 container px-0 max-w-screen-2xl">
                <Navbar />
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 relative flex">
                <div className="hidden lg:block h-[calc(100vh-3.5rem)] w-[19rem] pt-3 pb-10 pr-6 overflow-y-auto">
                    <Menu />
                </div>
                <div className="h-[calc(100vh-3.5rem)] overflow-visible sm:overflow-y-auto w-full no-scrollbar pl-0 md:pl-[1rem]">
                    <div className=" pt-[0.5rem] sm:pt-[0rem]">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default layout