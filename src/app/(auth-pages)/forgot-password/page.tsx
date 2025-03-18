import { forgotPasswordAction } from "@/functions/auth";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function ForgotPassword(
  props: {
    searchParams: Promise<Message>;
  }
) {
  const searchParams = await props.searchParams;
  return (
    <div>
      <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-72 max-w-80 mx-auto border rounded-2xl shadow-md p-5">
        <div>
          <h1 className="text-2xl font-medium">Reset Password</h1>
          <p className="text-sm text-secondary-foreground">
            Already have an account?{" "}
            <Link className="text-primary underline" href="/login">
              Log in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" className="text-[16.1px]" required />
          <SubmitButton formAction={forgotPasswordAction}>
            Reset Password
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
