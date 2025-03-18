import React from 'react'

import { getSEOTags } from '@/lib/seo';
import Footer from '@/components/layout/footer';
import BackButton from '@/components/backButton';
import { Button } from '@/components/ui/button';
import { BiSupport } from 'react-icons/bi';
import Logo from '@/components/layout/logo';
import Link from 'next/link';

export const metadata = getSEOTags({
    title: `Login to MyMeghalaya`,
    canonicalUrlRelative: "/login",
});

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='relative overflow-hidden'>
            <div className="">
                <div className="py-3 sm:py-5 px-5 sm:px-12 flex justify-between items-center ">
                    <div className=" hidden sm:block">
                        <Logo />
                    </div>
                    <div className="block sm:hidden">
                        <BackButton />
                    </div>
                    <Link href={'/support'}>
                        <Button variant={'outline'} className='rounded-full h-8 sm:px-3 text-xs'>
                            <BiSupport />
                            <div>
                                Help and Support
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className=" absolute text-9xl text-gray-50  -z-10 font-black flex justify-center w-full  pointer-events-none">MYMEGHALAYA</div>
            {children}
            <Footer />
        </div>
    )
}

export default layout