import { createClient } from '@/utils/supabase/server';
import React from 'react'
import RightSheet from './rightSheet';
import LoginButton from './loginButton';

const AuthButton = async () => {
  const {
    data: { user },
  } = await createClient().auth.getUser();
  return (user) ? <RightSheet /> : <LoginButton />
}

export default AuthButton