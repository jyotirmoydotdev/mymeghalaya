import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';
import { RxPerson } from 'react-icons/rx';
import { Button } from './ui/button';
import { GoBookmark, GoSignOut } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiGroupLine } from 'react-icons/ri';
import { signOutAction } from '@/functions/auth';
import { FaRegCopyright } from 'react-icons/fa';
import { createClient } from '@/utils/supabase/server';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CiLocationOn, CiSearch } from 'react-icons/ci';

const RightSheet = async () => {
  const { data: { user } } = await createClient().auth.getUser()
  return (
    <div>
      <Sheet>
        <Avatar>
          <SheetTrigger className='outline-none'>
            <AvatarImage src={user?.user_metadata.avatar_url} alt={user?.user_metadata.full_name} className='rounded-full'/>
            <AvatarFallback className="size-8 font-black text-sm sm:text-base text-gray-600">{user ? user?.email?.at(0)?.toUpperCase() : "J"}</AvatarFallback>
          </SheetTrigger>
        </Avatar>
        <SheetContent
          className="w-[85%] h-full rounded-l-xl border-r-gray-400 shadow-lg flex flex-col "
          side={"right"}
        >
          <div className=" flex flex-col justify-between h-full">
            <div className="">
              <SheetHeader className="h-fit">
                <SheetTitle className="text-left flex items-center gap-2">
                  <Avatar className="h-7 w-7 sm:h-8 sm:w-8 rounded-full">
                    <AvatarImage src={user?.user_metadata.avatar_url} />
                    <AvatarFallback className="font-black text-sm sm:text-base text-gray-600">{user ? user?.email?.at(0)?.toUpperCase() : "U"}</AvatarFallback>
                  </Avatar>
                  <div className="text-xs flex flex-col">
                    <div className="">
                      {user?.user_metadata.full_name || "Please Sign in"}
                    </div>
                    <div className="text-[10px] text-gray-500">
                      {user?.email || "Please Sign in"}
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="grid gap-2 py-2 ">
                <div className="w-full border"></div>
                <Link
                  href={"/profile"}
                  className="flex items-center gap-2"
                >
                  <RxPerson />
                  <Button variant={"link"} className="pl-0">
                    Your profile
                  </Button>
                </Link>
                {/* <Link
                  href={"/bookmarks"}
                  className="flex items-center gap-2"
                >
                  <GoBookmark />
                  <Button variant={"link"} className="pl-0">
                    Bookmarks
                  </Button>
                </Link> */}
                {/* <Link href={"/"} className="flex items-center gap-2">
                  <IoSettingsOutline />
                  <Button variant={"link"} className="pl-0">
                    Settings
                  </Button>
                </Link> */}
                <Link href={"/support"} className="flex items-center gap-2">
                  <RiGroupLine />
                  <Button variant={"link"} className="pl-0">
                    Support
                  </Button>
                </Link>
                <div className="w-full border"></div>
                <Link href={"/destinations"} className="flex items-center gap-2">
                  <CiLocationOn />
                  <Button variant={"link"} className="pl-0">
                    Destinations
                  </Button>
                </Link>
                <Link href={"/search"} className="flex items-center gap-2">
                  <CiSearch />
                  <Button variant={"link"} className="pl-0">
                    Search
                  </Button>
                </Link>
                <div className="w-full border"></div>
                <form action={signOutAction} className="flex items-center gap-2">
                  <GoSignOut />
                  <Button type="submit" variant={"link"} className="pl-0">
                    Sign out
                  </Button>
                </form>
              </div>
            </div>
            <SheetFooter className="flex gap-1 flex-row font-light text-gray-500 text-xs">
              <div className=" flex items-center gap-1">
                <FaRegCopyright className=" fill-gray-500" />
                <div className="">2024 MyMeghalaya</div>
              </div>
              <div>|</div>
              <Link href={"/privacy"}>
                Privacy
              </Link>
              <div>|</div>
              <Link href={"/terms"}>
                Terms
              </Link>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default RightSheet
