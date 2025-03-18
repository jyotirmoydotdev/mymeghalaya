import { createClient } from '@/utils/supabase/server';
import React from 'react'
import RightSheet from './rightSheet';
import { Button } from './ui/button';
import Link from 'next/link';
import { CiUser } from 'react-icons/ci';

const AuthButton = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  return (user) ? <RightSheet /> : (
    <Link href={"/login"}>
      <Button className='h-8 rounded-md px-3 text-xs  ' variant={'outline'}>
        Log in
      </Button>
    </Link>
  )
}

export default AuthButton
