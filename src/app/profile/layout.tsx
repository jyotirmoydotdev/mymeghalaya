import React from 'react'

import { getSEOTags } from '@/lib/seo';
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
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
   if (user === null) {
    return redirect('/login')
  }

  return (
    <>
      <Navbar Title='Profile' enableBackButton={true} />
      {children}
      <Footer/>
    </>
  )
}

export default layout
