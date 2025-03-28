import React from 'react'

import { getSEOTags } from '@/lib/seo';
import config from '@/config';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `Privacy policy of ${config.appName}`,
  canonicalUrlRelative: "/privacy",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar Title='Privacy' enableBackButton={true}/>
      {children}
      <Footer/>
    </>
  )
}

export default layout