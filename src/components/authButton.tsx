import { createClient } from '@/utils/supabase/server';
import React from 'react'
import RightSheet from './rightSheet';
import SingInButton from './singinButton';

const AuthButton = async () => {
    const {
        data: { user },
      } = await createClient().auth.getUser();
  return user?<RightSheet/>:<SingInButton/>
}

export default AuthButton