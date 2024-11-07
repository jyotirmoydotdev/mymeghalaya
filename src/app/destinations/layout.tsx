import React from 'react'

import { getSEOTags } from '@/libs/seo';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `Destinations & Districts | MyMeghalaya`,
  canonicalUrlRelative: "/destinations",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar Title='Destinations' enableBackButton={true}/>
      {children}
      <Footer/>
    </>
  )
}

export default layout