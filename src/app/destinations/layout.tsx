import Navbar from '@/components/Navbar';
import SearchDestination from '@/components/SearchDestination';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default layout