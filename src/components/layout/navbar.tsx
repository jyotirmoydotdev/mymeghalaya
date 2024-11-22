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
      <div className="flex h-14 items-center px-4">
        <div className="hidden md:block sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border" >
          <div className={cn("py-5 px-5 md:px-10 lg:px-12 flex justify-between items-center", className)}>
            <Logo />
            <SearchInput/>
            <div className="flex items-center">
              {
                data.links.map((item, i) => (
                  <Link href={item.link} key={i}>
                    <Button variant={'ghost'} >
                      {item.name}
                    </Button>
                  </Link>
                ))
              }
              <Link href={'/search'} className="px-2">
                {/* <Button variant={'ghost'} className="">
                  Search
                  <CiSearch className="size-4 stroke-2" />
                </Button> */}
              </Link>
              <AuthButton />
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar Mobile */}
      <div className="md:hidden block relative">
        <div className="py-3 px-5 md:px-12 lg:px-28 flex justify-between items-center ">
          {enableBackButton ? (
            <BackButton />
          ) : <></>}
          {Title ? (
            <div className="font-semibold">
              {Title}
            </div>
          ) : (
            <Link href={"/"} className="flex items-center">
              <Image
                src={"/logo.webp"}
                width={500}
                height={500}
                alt="MyMeghalaya Logo"
                priority
                className="h-full w-16"
              />
            </Link>
          )
          }
          {/* <RightSheet /> */}
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
