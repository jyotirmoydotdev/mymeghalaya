import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from 'lucide-react';
import { GoArrowLeft, GoHome } from 'react-icons/go';
import { Button } from './ui/button';
import { CiLocationOn, CiMenuBurger } from 'react-icons/ci';
import { FaRegCopyright } from 'react-icons/fa';
import { GoSearch } from "react-icons/go";
import Image from 'next/image';
import { Input } from './ui/input';

const SearchSheet = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger className=" border p-1 rounded-md outline-none">
                    <GoSearch className='fill-gray-500' size={22} />
                </SheetTrigger>
                <SheetContent
                    className="w-full h-[85%] rounded-b-xl border-r-gray-400 shadow-lg flex flex-col"
                    side={"top"}
                >
                    <div className=" flex flex-col justify-between h-full">
                        <div className="">
                            <SheetHeader className="h-fit">
                                <SheetTitle className="flex ">
                                    <SheetClose className='outline-none'>
                                        <GoArrowLeft className='fill-gray-500' size={22} />
                                    </SheetClose>
                                    <Input type="text" className='text-[16.1px] shadow-none border-none focus:outline-none focus-visible:ring-0 w-full text-left scale-90 font-medium outline-none' placeholder='Search for location, festivals or foods' />
                                </SheetTitle>
                                <SheetDescription></SheetDescription>
                            </SheetHeader>
                            <div className="w-full border"></div>
                            <div className="grid gap-2 py-2 ">
                                {/* <Link href={"/"} className="flex items-center gap-2">
                                    <GoHome />
                                    <Button variant={"link"} className="pl-0">
                                        Home
                                    </Button>
                                </Link>
                                <Link
                                    href={"/destinations"}
                                    className="flex items-center gap-2"
                                >
                                    <CiLocationOn />
                                    <Button variant={"link"} className="pl-0">
                                        Destinations
                                    </Button>
                                </Link> */}
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

export default SearchSheet