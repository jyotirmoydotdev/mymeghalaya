import React from 'react'

import { getSEOTags } from '@/libs/seo';
import config from '@/config';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `Terms of service of ${config.appName}`,
  canonicalUrlRelative: "/terms",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar Title='Terms' enabaleBackButton={true}/>
      {children}
      <Footer/>
    </>
  )
}

export default layout