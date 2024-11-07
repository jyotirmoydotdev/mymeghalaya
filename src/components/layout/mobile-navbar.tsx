'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname} from 'next/navigation'

import { CiLocationOn, CiSearch, CiUser } from 'react-icons/ci'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { FaLocationDot } from 'react-icons/fa6'

import { handleClick } from '@/functions/haptic'
import { RiSearch2Fill } from 'react-icons/ri'
import CiUserFill from '@/staticData/CiUserFill'

const MobileNavBar = () => {
    const path = usePathname();
    const isHomeActive = path === '/'
    const isDestinationActive = path.includes('/destinations') || path.includes('/meghalaya')
    const isSearchActive = path.includes('/search') 
    const isProfileActive = path.includes('/profile') ||  path.includes('/login') 

    return (
        <div className=" relative block sm:hidden">
            <div className=" py-4 w-full bg-gray-50 shadow-lg fixed bottom-0 grid grid-cols-4 z-50 border-t">
                <Link href="/" className="flex justify-center transform active:scale-75 transition-all items-center flex-col" onClick={handleClick}>
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
                <Link href={'/destinations'} className="flex flex-col items-center justify-center transform active:scale-75 transition-all" onClick={handleClick}>
                    {
                        isDestinationActive?(
                            <>
                            <FaLocationDot className='size-5'/>
                            <div className="text-[10px] font-semibold">Destinations</div>
                            </>
                        ):(
                            <>
                            <CiLocationOn className='stroke-1 size-5 stroke-gray-500'/>
                            <div className="text-[10px] font-semibold text-gray-500">Destinations</div>
                            </>
                        )
                    }
                </Link>

                <Link href={'/search'} className="flex flex-col items-center justify-center transform active:scale-75 transition-all" onClick={handleClick}>
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
                <Link href={'/profile'} className="flex flex-col items-center justify-center transform active:scale-75 transition-all" onClick={handleClick}>
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

                {/* <div className="flex flex-col items-center justify-center">
                    <CiCalendar className=" stroke-1 size-5 fill-gray-500 stroke-gray-500" />
                    <div className="text-[10px] font-semibold text-gray-500">itinerary</div>
                </div> */}
            </div>
        </div>
    )
}

export default MobileNavBar