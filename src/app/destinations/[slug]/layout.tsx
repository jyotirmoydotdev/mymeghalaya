import React from 'react'

import { getSEOTags } from '@/lib/seo';

export const metadata = getSEOTags({
  title: "Destination Details",
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