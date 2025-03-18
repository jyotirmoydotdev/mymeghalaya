import React from "react";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import BackButton from "../backButton";

import { NavBarDesktopData as data } from "@/staticData/layout/navBarData";
import Logo from "./logo";
import AuthButton from "../authButton";
import { BiSupport } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import SearchInput from "../searchInput";
import { GoBell } from "react-icons/go";

const Navbar = async ({
  Title,
  enableBackButton,
  className
}: {
  Title?: string;
  enableBackButton?: boolean;
  className?: string;
}) => {
  return (
    <div>
      {/* Nav Bar Desktop */}
      <div className="h-14 items-center px-4 sm:px-8 hidden md:block w-full bg-white" >
        <div className={cn("pt-3 flex justify-between items-center", className)}>
          <Logo />
          <div className="inline-flex gap-2 items-center">
            {/* {
              data.links?.map((item, i) => (
                <Link href={item.link} key={i}>
                  <Button variant={'ghost'} >
                    {item.name}
                  </Button>
                </Link>
              ))
            } */}
            <SearchInput />
            <div className="bg-accent p-[6px] border rounded-full shadow-sm">
              <GoBell className="size-5"/>
            </div>
            <AuthButton />
          </div>
        </div>
      </div>

      {/* Nav Bar Mobile */}
      <div className=" md:hidden relative">
        <div className="py-3 px-5 md:px-12 lg:px-28 flex h-[72px] justify-between items-center border-b">
          <div className="flex gap-3 items-center">
          {enableBackButton ? (
            <BackButton />
          ) : <></>}
          {Title ? (
            <div className="font-bold text-xl text-[#363737]">
              {Title}
            </div>
          ) : (
            <Link href={"/"} className="flex items-center">
              <Image
                src={"/logo.svg"}
                width={500}
                height={500}
                alt="MyMeghalaya Logo"
                priority
                className="h-full w-16"
              />
            </Link>
          )
          }
          </div>
          <div className="flex gap-2 items-center justify-center">
            <SearchInput/>
            <div className="bg-accent p-[6px] border rounded-full shadow-sm">
              <GoBell className="size-5"/>
            </div>
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
