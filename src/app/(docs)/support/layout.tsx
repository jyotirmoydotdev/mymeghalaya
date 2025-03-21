import React from 'react'

// export const metadata = getSEOTags({
//   title: `Support | MyMeghalaya.in`,
//   canonicalUrlRelative: "/support",
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