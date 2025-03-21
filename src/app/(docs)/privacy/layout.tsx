import React from 'react'

// export const metadata = getSEOTags({
//   title: `Privacy policy of ${config.appName}`,
//   canonicalUrlRelative: "/privacy",
// });

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