"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


export const signUpAction = async (formData: FormData): Promise<void> => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    // Handle the error internally (e.g., with console or setting state)
    console.error("Email and password are required");
    return; // Return void to match the expected type
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo : `${origin}/email-confirmed`
    },
    
  });

  if (error) {
    console.error(error.code + " " + error.message);
    // Instead of returning an error object, handle the error here
    encodedRedirect("error", "/sign-up", error.message); // Handle redirection here
    return; // Return void after redirection
  }

  redirect("/confirm-email");
};

export const signInAction = async (formData: FormData) => {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return encodedRedirect("error", "/login", error.message);
  }

  revalidatePath("/home", "layout")
  return redirect("/home");

};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/profile/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/profile/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/profile/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/profile/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/");
};

export const signInWithGithub = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })

  if (error) {
    return encodedRedirect("error", "/login", error.message);
  }

  return redirect("/");
}

export const handleGoogleSignin = async (e: any) => {
  const supabase = await createClient();
  let origin = (await headers()).get("origin") as string;

  if (origin.includes("localhost")) {
    origin = origin.replace("localhost", "127.0.0.1");
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
    }
  })

  if (data.url) {
    return redirect(data.url) // use the redirect API for your server framework
  }

  if (error) {
    return encodedRedirect("error", "/login", error.message);
  }
}

export const magiclinkAction = async (formData: FormData) => {
  const supabase = await createClient();

  const email = formData.get("email") as string

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
    },
  })

  revalidatePath("/", "layout")

  console.log(data)
}
