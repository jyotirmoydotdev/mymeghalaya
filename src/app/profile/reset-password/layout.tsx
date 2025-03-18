import React from 'react'

import { getSEOTags } from '@/lib/seo';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `Reset Password`,
  canonicalUrlRelative: "/reset-password",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className='flex min-h-[70vh] w-full justify-center items-center px-4'>
        {children}
      </div>
    </>
  )
}

export default layout