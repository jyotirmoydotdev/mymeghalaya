import React from 'react'

import { getSEOTags } from '@/libs/seo';

export const metadata = getSEOTags({
  title: `Destinations to visit`,
  canonicalUrlRelative: "/destinations",
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