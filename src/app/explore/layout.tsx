import React from 'react'

import { getSEOTags } from '@/libs/seo';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `Explore | MyMeghalaya`,
  canonicalUrlRelative: "/explore",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar enableBackButton={true} Title='Explore' />
      {children}
      <Footer />
    </>
  )
}

export default layout