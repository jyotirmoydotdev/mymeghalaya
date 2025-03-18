import React from 'react'

import { getSEOTags } from '@/lib/seo';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `Forgot Password`,
  canonicalUrlRelative: "/forgot-password",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
    <Navbar enableBackButton={true} Title='Forgot Password'/>
    <div className='flex min-h-[70vh] w-full justify-center items-center'>
      {children}
    </div>
      <Footer/>
    </>
  )
}

export default layout