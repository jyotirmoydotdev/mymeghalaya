import React from 'react'

import { getSEOTags } from '@/libs/seo';
import config from '@/config';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `Support | MyMeghalaya.in`,
  canonicalUrlRelative: "/support",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar enabaleBackButton={true} Title='support'/>
      {children}
      <Footer/>
    </>
  )
}

export default layout