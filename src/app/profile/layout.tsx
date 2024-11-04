import React from 'react'

import { getSEOTags } from '@/libs/seo';
import config from '@/config';
import Navbar from '@/components/layout/navbar';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Footer from '@/components/layout/footer';

export const metadata = getSEOTags({
  title: `View your profile`,
  canonicalUrlRelative: "/profile",
});

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (user === null) {
    return redirect('/')
  }

  return (
    <>
      <Navbar Title='Profile' enabaleBackButton={true} />
      {children}
      <Footer/>
    </>
  )
}

export default layout