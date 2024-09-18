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
import { CiLocationOn, CiMenuBurger } from 'react-icons/ci';
import { GoLocation } from "react-icons/go";
import Link from 'next/link';
import Image from 'next/image';
import { GoHome } from 'react-icons/go';
import { Button } from './ui/button';
import { FaRegCopyright } from 'react-icons/fa';
import { GiPartyFlags } from 'react-icons/gi'
import { LiaHikingSolid } from "react-icons/lia";
import { PiBowlFoodThin } from "react-icons/pi";

const LeftSheet = async () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" border p-1 rounded-md">
          <CiMenuBurger size={22} />
        </SheetTrigger>
        <SheetContent
          className="w-[85%] h-full rounded-r-xl border-r-gray-400 shadow-lg flex flex-col "
          side={"left"}
        >
          <div className=" flex flex-col justify-between h-full">
            <div className="">
              <SheetHeader className="h-fit mb-2">
                <SheetTitle className="text-left">
                  <Link href={"/"} className="flex">
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
                  </Link>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="w-full border"></div>
              <div className="grid gap-2 py-2 ">

                {/* Home */}
                <Link href={"/"} className="flex items-center gap-2">
                  <GoHome />
                  <Button variant={"link"} className="pl-0">
                    Home
                  </Button>
                </Link>

                {/* Destinations */}
                <Link
                  href={"/destinations"}
                  className="flex items-center gap-2"
                >
                  <CiLocationOn />
                  <Button variant={"link"} className="pl-0">
                    Destinations
                  </Button>
                </Link>

                 {/* Adventures */}
                 <Link
                  href={"/adventures"}
                  className="flex items-center gap-2"
                >
                  <LiaHikingSolid />
                  <Button variant={"link"} className="pl-0">
                    Adventures
                  </Button>
                </Link>

                {/* Festivals */}
                <Link
                  href={"/festivals"}
                  className="flex items-center gap-2"
                >
                  <GiPartyFlags />
                  <Button variant={"link"} className="pl-0">
                    Festivals
                  </Button>
                </Link>

                {/* Foods */}
                <Link
                  href={"/foods"}
                  className="flex items-center gap-2"
                >
                  <PiBowlFoodThin />
                  <Button variant={"link"} className="pl-0">
                    Foods
                  </Button>
                </Link>
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
            <SheetFooter className="font-light text-gray-500 text-xs">
              <div className=" flex items-center gap-1">
                <FaRegCopyright className=" fill-gray-500" />
                <div className="">2024 MyMeghalaya</div>
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default LeftSheet