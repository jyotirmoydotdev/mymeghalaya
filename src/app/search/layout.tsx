import React from 'react'

import { getSEOTags } from '@/libs/seo';
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
    <>
      <Navbar enabaleBackButton={true} Title='Search'/>
      {children}
      <Footer/>
    </>
  )
}

export default layout