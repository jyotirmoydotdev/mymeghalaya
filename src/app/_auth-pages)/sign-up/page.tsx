'use client'

import { signUpAction } from "@/functions/auth";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"
import { SmtpMessage } from "../smtp-message";
import { Button } from "@/components/ui/button";
import { BiShow, BiHide } from "react-icons/bi";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Signup({ searchParams }: { searchParams: Message }) {
  const [passwordHide, setPasswordHide] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState('');

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (strongPasswordRegex.test(password)) {
      strength = 100;
    } else if (password.length >= 6) {
      strength = 66;
    } else if (password.length > 0) {
      strength = 33;
    }

    return strength;
  };

  useEffect(() => {
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);

    // Update the password strength message
    if (strength === 100) {
      setPasswordStrengthMessage("Strong Password");
    } else if (strength === 66) {
      setPasswordStrengthMessage("Moderate Password");
    } else {
      setPasswordStrengthMessage("Weak Password");
    }

  }, [password]);

  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4 ">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className=" mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] px-5 sm:px-0 py-20 sm:py-0">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign up for new account
        </h1>
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href={'/sign-in'} className="px-1 font-medium underline text-black">Sign in</Link>
        </p>
      </div>
      <div className="grid gap-6">
        <form>
          <div className="grid gap-2">
            <div className="grid gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input className="text-[16.1px]" type="email" name="email" placeholder="name@example.com" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative flex items-center gap-2">
                  <Input
                    className="text-[16.1px]"
                    type={passwordHide ? "password" : "text"}
                    name="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button type='button' variant={'outline'} onClick={() => setPasswordHide(!passwordHide)}>
                    {passwordHide ? <BiShow /> : <BiHide />}
                  </Button>
                </div>
                <Progress value={passwordStrength} />
                <p className="text-xs">{passwordStrengthMessage}</p>
              </div>
            </div>
            <SubmitButton pendingText="Signing Up..." formAction={signUpAction} disabled={passwordStrength<66}>
              Sign up with Email
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
            Sign up with Google
          </Button>
        </div>
        <p className="px-8 text-center text-sm  text-muted-foreground">
          By clicking sign up, you agree to our
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
    </div>
  );
}
