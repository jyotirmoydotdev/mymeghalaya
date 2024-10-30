'use client'

import React, { useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


const SingInButton = () => {
    const supabase = createClientComponentClient();
    const [isGoogleOAuthLoading, setIsGoogleOAuthLoading] = useState(false);
    const handleGoogleSignin = async (e: any)=> {
        e?.preventDefault();
        setIsGoogleOAuthLoading(true);
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
        } finally {
            setIsGoogleOAuthLoading(false)
        }
    }
    return (
        <>
            <div className="hidden sm:block">
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="p-2 active:scale-75 transition-transform">
                            <Button variant={'outline'} size={'sm'}>Sign in</Button>
                        </div>
                    </DialogTrigger>
                    <DialogContent className='max-w-[300px] '>
                        <DialogHeader>
                            <DialogTitle className='text-lg text-center '>
                                Welcome Back
                            </DialogTitle>
                            <DialogDescription className='text-center text-xs px-5 text-gray-500'>
                                Create an account or sign in to continue
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-5 justify-center items-center ">
                            <Button className='active:scale-90 transition-transform flex gap-2 w-fit ' size={'lg'} onClick={(e)=>handleGoogleSignin(e)}>
                                <FaGoogle />
                                {
                                    isGoogleOAuthLoading ? (
                                        <div className="">
                                            Signing in...
                                        </div>
                                    ) : (
                                        <div className="">
                                            Sign in with Google
                                        </div>
                                    )
                                }
                            </Button>
                            <div className="text-center text-xs px-2 text-gray-500">
                                By signing in, you agree to our
                                <Link href={"/privacy"} className='px-1 underline'>
                                    <SheetClose className='underline'>
                                        Privacy Policy
                                    </SheetClose>
                                </Link>
                                and
                                <Link href={"/terms"} className='px-1 '>
                                    <SheetClose className='underline'>
                                        Terms of Service
                                    </SheetClose>
                                </Link>
                                .
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="block sm:hidden">
                <Sheet >
                    <SheetTrigger asChild>
                        <div className="p-2 active:scale-75 transition-transform">
                            <Button variant={'outline'} size={'sm'}>Sign in</Button>
                        </div>
                    </SheetTrigger>
                    <SheetContent side={'bottom'} className='rounded-t-xl '>
                        <SheetHeader>
                            <SheetTitle className='flex gap-2 text-lg justify-center items-center pt-4 '>
                                Welcome Back
                            </SheetTitle>
                            <SheetDescription className='text-xs px-5 text-gray-500'>
                                Create an account or sign in to continue
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col gap-5 justify-center items-center py-4">
                            <Button className='active:scale-90 transition-transform flex gap-2 w-fit ' size={'lg'} onClick={(e)=>handleGoogleSignin(e)}>
                                <FaGoogle />
                                {
                                    isGoogleOAuthLoading ? (
                                        <div className="">
                                            Signing in...
                                        </div>
                                    ) : (
                                        <div className="">
                                            Sign in with Google
                                        </div>
                                    )
                                }
                            </Button>
                            <div className="text-center text-xs px-2 text-gray-500">
                                By signing in, you agree to our
                                <Link href={"/privacy"} className='px-1 underline'>
                                    <SheetClose className='underline'>
                                        Privacy Policy
                                    </SheetClose>
                                </Link>
                                and
                                <Link href={"/terms"} className='px-1 '>
                                    <SheetClose className='underline'>
                                        Terms of Service
                                    </SheetClose>
                                </Link>
                                .
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default SingInButton