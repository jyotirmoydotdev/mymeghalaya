import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src=""/>
          <AvatarFallback className="font-black text-gray-500">{user.email?.at(0)?.toUpperCase()}</AvatarFallback>
        </Avatar>
      {/* <form action={signOutAction}>
        <Button type="submit" variant={'destructive'}>
          Sign out
        </Button>
      </form> */}
    </div>
  ) : (
    <div className="flex gap-3">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
    </div>
  );
}
