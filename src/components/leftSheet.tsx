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
import Image from 'next/image';
import { Button } from './ui/button';
import { FaRegCopyright } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { firstSection, secondSection } from '@/data/navData';

const LeftSheet = async () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" border p-1 rounded-md outline-none">
          <CiMenuBurger className='fill-gray-500' size={22} />
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
                    <div className="flex items-baseline text-lg font-semibold text-gray-600">
                      <div className="text-xs self-start">MY</div>
                      <div className="">MEGHALAYA</div>
                      <div className='text-xs'>.in</div>
                    </div>
                  </Link>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="w-full border"></div>
              <div className="grid gap-2 py-2 ">

                {/* First Section */}
                {
                  firstSection.map((item, i) => (
                    <Link href={item.url} className="flex items-center gap-2" key={i}>
                      {item.icon}
                      <Button variant={"link"} className="pl-0">
                        {item.name}
                      </Button>
                    </Link>
                  ))
                }
              </div>
              
              <div className="w-full border"></div>
              <div className="grid gap-2 py-2 ">

                {/* Second Section */}
                {
                  secondSection.map((item, i) => (
                    <Link href={item.url} className="flex items-center gap-2" key={i}>
                      {item.icon}
                      <Button variant={"link"} className="pl-0">
                        {item.name}
                      </Button>
                    </Link>
                  ))
                }
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

export default LeftSheet
