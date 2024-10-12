'use client'

import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Login({ searchParams }: { searchParams: Message }) {
  const [passwordHide, setPasswordHide] = useState(true)
  return (
    <div className=" mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-5 sm:px-0 py-20 sm:py-0">
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
          <Button className="grow" variant={'outline'}>
            <FaGoogle className="mr-2 h-4 w-4" />
            Sign in with Google
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

{
  /* <form className="flex-1 flex flex-col min-w-72 border rounded-2xl p-5 shadow-md bg-white">
   <h1 className="text-2xl font-medium">Sign in</h1>
   <p className="text-sm text-foreground">
     {"Don't have an account?"}{" "}
     <Link className="text-foreground font-medium underline" href="/sign-up">
       Sign up
     </Link>
   </p>
   <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
     <Label htmlFor="email">Email</Label>
     <Input name="email" placeholder="you@example.com" required />
     <div className="flex justify-between items-center">
       <Label htmlFor="password">Password</Label>
       <Link
         className="text-xs text-foreground underline"
         href="/forgot-password"
       >
         Forgot Password?
       </Link>
     </div>
     <Input
       type="password"
       name="password"
       placeholder="Your password"
       required
     />
     <SubmitButton pendingText="Signing In..." formAction={signInAction}>
       Sign in
     </SubmitButton>
     <FormMessage message={searchParams} />
   </div>
 </form> */
}
