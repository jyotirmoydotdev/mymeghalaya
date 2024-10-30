import React from "react";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import RightSheet from "../rightSheet";
import { CiSearch } from "react-icons/ci";
import BackButton from "../backButton";

import { NavBarDesktopData as data } from "@/staticData/layout/navBarData";
import Logo from "./logo";
import SingInButton from "../singinButton";
import AuthButton from "../authButton";

const Navbar = async () => {
  return (
    <div className="bg-white">

      {/* Nav Bar Desktop */}
      <div className="hidden md:block">
        <div className="py-5 px-5 md:px-10 lg:px-12 flex justify-between items-center">
          <Logo/>
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
              <Button variant={'outline'} size={'icon'}>
                <CiSearch className="size-4 stroke-2" />
              </Button>
            </Link>
            <AuthButton/>
          </div>
        </div>
      </div>

      {/* Nav Bar Mobile */}
      <div className="md:hidden block">
        <div className="py-3 px-5 md:px-12 lg:px-28 flex justify-between items-center ">
          <BackButton />
          <Link href={"/"} className="flex items-end">
            <Image
              src={"/logo.png"}
              width={500}
              height={500}
              alt=""
              className="h-full w-8 scale-150 ml-3 mr-3"
            />
          </Link>
          {/* <RightSheet /> */}
          <AuthButton/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
