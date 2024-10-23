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
import HeaderAuth from "@/components/header-auth";
import Link from 'next/link';
import { RxPerson } from 'react-icons/rx';
import { Button } from './ui/button';
import { GoBookmark, GoSignOut } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiGroupLine } from 'react-icons/ri';
import { signOutAction } from '@/app/actions';
import { FaRegCopyright } from 'react-icons/fa';
import { createClient } from '@/utils/supabase/server';

const RightSheet = async () => {
  const {
    data: { user },
  } = await createClient().auth.getUser();
  
  
  return user ? (
    <div>
      <Sheet>
        <SheetTrigger>
          <HeaderAuth />
        </SheetTrigger>
        <SheetContent
          className="w-[85%] h-full rounded-l-xl border-r-gray-400 shadow-lg flex flex-col "
          side={"right"}
        >
          <div className=" flex flex-col justify-between h-full">
            <div className="">
              <SheetHeader className="h-fit">
                <SheetTitle className="text-left flex items-center gap-2">
                  {/* <Link href={"/"} className="flex">
                        <Image
                          src={"/logo.png"}
                          width={500}
                          height={500}
                          alt=""
                          className="h-6 scale-105 object-cover w-9  mr-2"
                        />
                        <div className="flex items-start text-lg font-normal">
                          <div className="text-xs">MY</div>
                          MEGHALAYA
                        </div>
                      </Link> */}
                  <HeaderAuth />
                  <div className="text-xs">
                    {user?.email || ""}
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
                <Link
                  href={"/bookmarks"}
                  className="flex items-center gap-2"
                >
                  <GoBookmark />
                  <Button variant={"link"} className="pl-0">
                    Bookmarks
                  </Button>
                </Link>
                <Link href={"/"} className="flex items-center gap-2">
                  <IoSettingsOutline />
                  <Button variant={"link"} className="pl-0">
                    Settings
                  </Button>
                </Link>
                <Link href={"/support"} className="flex items-center gap-2">
                  <RiGroupLine />
                  <Button variant={"link"} className="pl-0">
                    Support
                  </Button>
                </Link>
                <div className="w-full border"></div>
                <form action={signOutAction} className="flex items-center gap-2">
                  <GoSignOut />
                  <Button type="submit" variant={"link"} className="pl-0">
                    Sign out
                  </Button>
                </form>
                {/* <Link href={'/experiences'} className="w-full">
                    <Button variant={'link'} >
                      Experiences
                    </Button>
                  </Link>
                  <Link href={'/gallery'} className="w-full">
                    <Button variant={'link'}>
                      Gallery
                    </Button>
                  </Link> */}
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
  ):(
      <div className='flex gap-3'>
        <Button asChild size={"sm"} variant={"outline"}>
          <Link href={"/sign-in"}>Sign in</Link>
        </Button>
      </div>
  )
}

export default RightSheet
