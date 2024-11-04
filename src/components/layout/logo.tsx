import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <>
      {/* Desktop Logo */}
      <div className="hidden sm:block">
        <Link href={"/"} className="flex">
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            alt=""
            className="h-full w-9  scale-150 mr-2"
          />
          <div className="flex items-baseline text-gray-500 pl-2 font-black font-mono" >
            <div className="text-3xl">M</div>
            <div className="text-2xl">Y</div>
            <div className="text-3xl">M</div>
            <div className="text-2xl tracking-tight">EGHALAYA</div>
            <div className="text-sm font-light pl-1 self-start" style={{ fontFamily: "sans-serif" }}>IN</div>
          </div>
        </Link>
      </div>

      {/* Mobile Logo */}
      <div className="block sm:hidden">
        <div className="flex items-center">
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            alt=""
            className="h-full w-7 scale-150 ml-3 mr-3"
          />
          <div className="flex items-baseline text-gray-600 font-bold  pl-1" >
            <div className="">M</div>
            <div className="text-sm">Y</div>
            <div className="">M</div>
            <div className="text-sm">EGHALAYA</div>
            <div className="text-[9px] font-light self-start" style={{ fontFamily: "sans-serif" }}>IN</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logo