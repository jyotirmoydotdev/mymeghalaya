'use client'

import { signInAction } from "@/functions/auth";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login({ searchParams }: { searchParams: Message }) {
  const supabase = createClientComponentClient();
  const [passwordHide, setPasswordHide] = useState(true)
  const [isGoogleOAuthLoading, setIsGoogleOAuthLoading] = useState(false);
  const handleGoogleSignin = async (e:any) => {
    e?.preventDefault();
    setIsGoogleOAuthLoading(true);
    try {
      const redirectURL = window.location.origin + "/api/auth/callback";
      const data = await supabase.auth.signInWithOAuth({
        provider: "google",
        options:{
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
    <div className=" mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-5 sm:px-0 py-20 sm:py-0 h-[90vh]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign in to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          {"Don't have an account?"}
          <Link href={'/sign-up'} className="px-1 font-medium underline text-black">Sign up</Link>
        </p>
      </div>
      <div className="grid gap-6">
        <form method="POST">
          <div className="grid gap-2">
            <div className="grid gap-4 pb-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input className="text-[16.1px]" type="email" name="email" placeholder="name@example.com" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative flex items-center gap-2">
                  <Input className="text-[16.1px]" type={passwordHide ? 'password' : 'text'} name="password" placeholder="Your password" required />
                  <Button type="button" variant={'outline'} onClick={() => setPasswordHide(!passwordHide)}>
                    {passwordHide ? <BiShow /> : <BiHide />}
                  </Button>
                </div>
                <Link href={'/forgot-password'} className=" hover:underline text-xs">Forget Password ?</Link>
              </div>
            </div>
            <SubmitButton pendingText="Signing In..." formAction={signInAction}>
              Sign in with Email
            </SubmitButton>
            <FormMessage message={searchParams} />
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="flex w-full gap-3">
          <Button className="grow" variant={'outline'} onClick={(e)=>handleGoogleSignin(e)} >
            <FaGoogle className="mr-2 h-4 w-4" />
            {
              isGoogleOAuthLoading?"Signing with Google...":"Sign in with Google"
            }
          </Button>
        </div>
      </div>
      <p className="px-8 text-center text-sm  text-muted-foreground">
        By clicking sign in, you agree to our
        <a
          className="underline px-1 underline-offset-4 hover:text-primary"
          href="/terms"
        >
          Terms of Service
        </a>
        and
        <a
          className="underline px-1 underline-offset-4 hover:text-primary"
          href="/privacy"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}