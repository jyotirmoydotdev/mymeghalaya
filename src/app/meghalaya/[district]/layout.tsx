import React from 'react'

import { getSEOTags } from '@/libs/seo';

export const metadata = getSEOTags({
  title: `District Details`,
  canonicalUrlRelative: "/meghalaya",
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
    </>
  )
}

export default layout