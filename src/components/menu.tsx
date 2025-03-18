'use client'

import Logo from '@/components/layout/logo'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import { BiSupport } from 'react-icons/bi'
import { CiHeart, CiLocationOn, CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { FaAngleRight, FaQuestion } from 'react-icons/fa6'
import { FaCalendar } from 'react-icons/fa6'
import { GiHiking } from 'react-icons/gi'
import { GoGear, GoHome } from 'react-icons/go'
import { IoBedOutline, IoCalendarClearOutline, IoTicketOutline } from 'react-icons/io5'
import { LiaFeatherAltSolid, LiaHikingSolid, LiaMapMarkedAltSolid } from 'react-icons/lia'
import { MdOutlineFeedback } from 'react-icons/md'
import { PiBowlFood, PiBowlFoodBold, PiBowlFoodLight } from 'react-icons/pi'

const Menu = () => {

  const pathname = usePathname()

  const isActive = (path: string) => {
    if (pathname === path) {
      return true
    }
    return false
  }
  const MenuButton = ({ title, icon, herf }: { title: string, icon: ReactNode, herf: string }) => {
    return (
      <Link href={herf} className={`flex active:bg-opacity-90 gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md ${isActive(herf) && "bg-gray-100 hover:bg-gray-200"}`}>
        {icon}
        {title}
      </Link>
    )
  }
  return (
    <>
      <div className="flex flex-col w-full font-medium">

        <MenuButton title='Home' icon={<GoHome />} herf={'/home'}></MenuButton>

        <div className=" border w-full my-2"></div>

        <div className='py-2 px-3 font-semibold mb-2'>Explore</div>

        <MenuButton title='Top' icon={<CiStar />} herf={'/search'}></MenuButton>
        <MenuButton title='Destinations' icon={<CiLocationOn />} herf={'/search/destinations'}></MenuButton>
        <MenuButton title='Districts' icon={<LiaMapMarkedAltSolid />} herf={'/search/districts'}></MenuButton>
        {/* <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><IoBedOutline className='' />Hotels</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><PiBowlFood className='' />Restaurants</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><LiaHikingSolid className='size-5' />Activities</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><IoCalendarClearOutline />Events</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><LiaFeatherAltSolid />Culture</div> */}
        <div className=" border w-full my-2"></div>
        <Link href={'/profile'} className={`flex active:bg-opacity-90 gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md ${isActive('/profile') && "bg-gray-100 hover:bg-gray-200"}`}>
          You
          <FaAngleRight />
        </Link>
        {/* <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><IoTicketOutline />Tickets</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><PiBowlFoodLight />Bookings</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><CiHeart />Favorites</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><PiBowlFoodLight />Compare</div> 
        <div className=" border w-full my-2"></div>*/}
        <MenuButton title='Support' icon={<BiSupport />} herf={'/support'}/>
        {/* <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><FaQuestion /> FAQs</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><MdOutlineFeedback /> Feedback</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear /> Settings</div> */}
        <div className=" border w-full my-2"></div>
        <div className="flex font-bold gap-1 flex-wrap text-sm text-gray-500 py-2">
          <Link className='hover:underline hover:underline-offset-2' href={'/support'}>Contact-us</Link>
          <Link className='hover:underline hover:underline-offset-2' href={'/terms'}>Terms</Link>
          <Link className='hover:underline hover:underline-offset-2' href={'/privacy'}>Privacy</Link>
        </div>
        <div className=" text-xs py-2 font-light">@ 2024 MyMeghalaya</div>
        <div className=" border w-full my-2"></div>
        <div className="py-2">
          <a href="http://x.com/jyotirmoydotdev" target="_blank" rel="noopener noreferrer">
            <div className="font-semibold group flex gap-1 justify-start items-center text-xs sm:text-sm">
              Made by
              <div className='text-[#f87160] '>
                Jyotirmoy
              </div>
              <Image unoptimized className='group-hover:rotate-[360deg] group-active:rotate-[360deg]  group-hover:scale-110 transition-all size-7 rounded-full' alt='Jyotirmoy Profile Image' src={'/jyotirmoy.webp'} width={500} height={500} loading='lazy' blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8n+z7HwAGyAKwweeKNgAAAABJRU5ErkJggg=="} placeholder='blur'></Image>
            </div>
          </a>
        </div>
        {/* <div className=" border w-full my-2"></div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear /> Travel Tips</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear /> Blogs</div>
        <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear /> About Us</div> */}
        {/* <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoHome/>Home</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><CiLocationOn/>Destinations</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><LiaMapMarkedAltSolid/>Districts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><IoBedOutline/>Hotels</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><PiBowlFoodLight/>Restarunts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear/> Settings</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoHome/>Home</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><CiLocationOn/>Destinations</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><LiaMapMarkedAltSolid/>Districts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><IoBedOutline/>Hotels</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><PiBowlFoodLight/>Restarunts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear/> Settings</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoHome/>Home</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><CiLocationOn/>Destinations</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><LiaMapMarkedAltSolid/>Districts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><IoBedOutline/>Hotels</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><PiBowlFoodLight/>Restarunts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear/> Settings</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoHome/>Home</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><CiLocationOn/>Destinations</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><LiaMapMarkedAltSolid/>Districts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><IoBedOutline/>Hotels</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><PiBowlFoodLight/>Restarunts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear/> Settings</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoHome/>Home</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><CiLocationOn/>Destinations</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><LiaMapMarkedAltSolid/>Districts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><IoBedOutline/>Hotels</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><PiBowlFoodLight/>Restarunts</div>
            <div className='flex gap-5 py-2 px-3 hover:bg-gray-100 items-center rounded-md'><GoGear/> Settings</div> */}
      </div>
      {/* <aside className=" bottom-3 pt-2  hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto  font-normal no-scrollbar text-sm">
      </aside> */}
    </>
  )
}

export default Menu