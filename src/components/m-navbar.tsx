'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname} from 'next/navigation'

// import { FaLocationDot } from 'react-icons/fa6'
// import { CiLocationOn} from 'react-icons/ci'
// import { BsSuitcase2, BsSuitcase2Fill } from 'react-icons/bs'

import { CiSearch, CiUser } from 'react-icons/ci'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { RiSearch2Fill } from 'react-icons/ri'

// import { handleClick } from '@/functions/haptic'

const CiUserFill = () => {
    return (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg" className='size-5'>
        <g id="UserFill">
          <g>
            {/* Body/torso part */}
            <path d="M17.438 21.937H6.562c-1.378 0-2.5-1.122-2.5-2.5V18.61c0-3.969 3.561-7.2 7.938-7.2s7.938 3.229 7.938 7.2v.827c0 1.378-1.122 2.5-2.5 2.5Z" />
            {/* Head circle */}
            <path d="M12 9.911a3.924 3.924 0 1 0 0-7.848 3.924 3.924 0 0 0 0 7.848Z" />
          </g>
        </g>
      </svg>
    )
  }

const MobileNavBar = () => {
    const path = usePathname();
    const isHomeActive = path.includes('/home')
    const isDestinationActive = path.includes('/destinations') || path.includes('/meghalaya')
    const isSearchActive = path.includes('/search') 
    const isProfileActive = path.includes('/profile') ||  path.includes('/login') 

    return (
        <div className=" relative block sm:hidden">
            <div className=" py-[0.625rem] w-full backdrop-blur-sm  shadow-lg fixed bottom-0 grid grid-cols-3 z-50 ">
                <div className=" w-full h-full bg-white dark:bg-black absolute opacity-70"></div>
                <Link href="/" className="flex justify-center transform active:scale-75 transition-all items-center flex-col"> {/* onClick={handleClick} */}
                    {isHomeActive ? (
                        <>
                        <GoHomeFill className="size-5" />
                        <div className="text-[10px] font-semibold">Home</div>
                        </>
                    ) : (
                        <>
                        <GoHome className="stroke-1 size-5 stroke-gray-500" />
                        <div className="text-[10px] font-semibold text-gray-500">Home</div>
                        </>
                    )}
                </Link>
                <Link href={'/search'} className="flex flex-col items-center justify-center transform active:scale-75 transition-all"> {/* onClick={handleClick} */}
                {
                    isSearchActive?(
                        <>
                        <RiSearch2Fill className='size-5'/>
                        <div className="text-[10px] font-semibold">Search</div>
                        </>
                    ):(
                        <>
                        <CiSearch className=" stroke-1 size-5 stroke-gray-500" />
                        <div className="text-[10px] font-semibold text-gray-500">Search</div>
                        </>
                    )
                }
                </Link>
                <Link href={'/profile'} className="flex flex-col items-center justify-center transform active:scale-75 transition-all"> {/* onClick={handleClick} */}
                {
                    isProfileActive?(
                        <>
                        <CiUserFill/>
                        <div className="text-[10px] font-semibold">Profile</div>
                        </>
                    ):(
                        <>
                        <CiUser className=" stroke-1 size-5 stroke-gray-500" />
                        <div className="text-[10px] font-semibold text-gray-500">Profile</div>
                        </>
                    )
                }
                </Link>
            </div>
        </div>
    )
}

export default MobileNavBar