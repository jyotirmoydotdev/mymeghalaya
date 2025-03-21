import React from 'react'

// export const metadata = getSEOTags({
//   title: `Terms of service of ${config.appName}`,
//   canonicalUrlRelative: "/terms",
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