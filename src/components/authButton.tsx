import { createClient } from '@/utils/supabase/server';
import React from 'react'
import RightSheet from './rightSheet';
import { Button } from './ui/button';
import Link from 'next/link';

const AuthButton = async () => {
  const {
    data: { user },
  } = await createClient().auth.getUser();
  return (user) ? <RightSheet /> : (
    <Link href={"/login"}>
      <Button className='rounded-full' size={'sm'} variant={'outline'}>
        Log in
      </Button>
    </Link>
  )
}

export default AuthButton