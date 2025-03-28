import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import localFont from 'next/font/local'

const baloo = localFont({
    src: '../../assests/fonts/Baloo2-VariableFont_wght.ttf',
    weight:'800',
    display:'swap',
})

const Logo = () => {
  return (
    <>
      {/* Desktop Logo */}
      <div className={`hidden sm:block ${baloo.className}`}>
        <Link href={"/home"} className="flex items-center">
          <Image
            src={"/logo.svg"}
            width={500}
            height={500}
            alt="MyMeghalaya Logo"
            priority
            className="h-full w-10 "
          />
          <div className="flex items-baseline text-emerald-950 pl-2 font-bold " >
            <div className="text-base">MyMEGHALAYA</div>
            <div className="text-xs font-light pl-1 self-start" style={{ fontFamily: "sans-serif" }}>IN</div>
          </div>
        </Link>
      </div>

      {/* Mobile Logo */}
      <div className={`block sm:hidden ${baloo.className}`}>
        <div className="flex items-center">
          <Image
            src={"/logo.svg"}
            width={500}
            height={500}
            alt="MyMeghalaya Logo"
            priority
            className="h-full w-12"

          />
          <div className="flex items-baseline text-emerald-950 font-bold  pl-1" >
            <div className="text-base">MyMEGHALAYA</div>
            <div className="text-[9px] font-light self-start" style={{ fontFamily: "sans-serif" }}>IN</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logo