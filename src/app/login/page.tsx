'use client'

import MeghalayaMap from '@/components/meghalayaMap'
import { Button } from '@/components/ui/button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaGoogle } from 'react-icons/fa'

const page = () => {
    const supabase = createClientComponentClient();
    const handleGoogleSignin = async (e: any) => {
        e?.preventDefault();
        try {
            const redirectURL = window.location.origin + "/api/auth/callback";
            await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: redirectURL
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=" container max-w-5xl px-5 min-h-[90vh]">
            <div className="flex flex-col justify-start items-center py-12">
                <Image src={'/logo.png'} alt='' width={500} height={300} className=' h-12 w-fit object-contain'></Image>
                <div className="pb-3 sm:pb-6 text-center">
                    <div className="text-lg sm:text-3xl sm:pb-2 font-bold">Welcome Back</div>
                    <div className="text-xs sm:text-base text-gray-500">Create an account or sign in to continue</div>
                </div>
                <Button className='active:scale-90 transition-transform flex sm:px-9 sm:py-6 sm:text-base sm:gap-3 mb-4' onClick={(e) => handleGoogleSignin(e)}>
                    <FaGoogle />
                    <div>
                        Sign in with Google
                    </div>
                </Button>
                <div className="text-center text-[10px] text-gray-500 ">
                    By signing in, you agree to our
                    <div className="">
                        <Link href={"/privacy"} className='px-1 underline'>
                            Privacy Policy
                        </Link>
                        and
                        <Link href={"/terms"} className='px-1 underline'>
                            Terms of Service
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page