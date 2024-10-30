import React from 'react'

import { getSEOTags } from '@/libs/seo';
import config from '@/config';

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
      {children}
    </>
  )
}

export default layout