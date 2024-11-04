'use client'

import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { HiArrowLongRight } from 'react-icons/hi2'
import { CiBookmark } from 'react-icons/ci'
import { FaBookmark } from 'react-icons/fa'
import { cn } from "@/lib/utils";
import { handleClick } from '@/functions/haptic'
import { GoArrowRight } from 'react-icons/go'

const ResponsiveCard = ({ i, url, imgUrl, name, des, icon, imgMsg, className, grid }: { i: number, url: string, imgUrl: string, name?: string, des: string, icon?: ReactNode, imgMsg?: string, className?:string, grid?: boolean }) => {
  const [button, setbutton] = useState(false)
  return (
    <Link href={url} key={i}  className='transform active:scale-95 transition-all group' onClick={handleClick}>
      <div className={cn("grid grid-cols-1 sm:grid-cols-1 rounded-xl bg-card text-card-foreground w-[169px] sm:w-full",className)}>
        <div className="relative flex items-center justify-start sm:justify-center h-24 sm:h-52">
          <DirectionAwareHover imageUrl={imgUrl} className='rounded-[11px] sm:rounded-xl h-24 sm:h-52'>
            <p className="font-normal hidden line-clamp-1 sm:font-bold sm:flex gap-3 items-center text-xs sm:text-xl">{imgMsg ? imgMsg : <>view <HiArrowLongRight /></>} </p>
          </DirectionAwareHover>
        </div>
        <div className="flex flex-col justify-center items-start space-x-1 sm:space-y-2 gap-0.5 px-1 py-2 relative">
          <div className="flex justify-between">
            {name ? (
              <div className="leading-none tracking-tight flex items-center gap-1 sm:gap-2 ">
                {icon}
                <div className="text-sm sm:text-base line-clamp-1 font-semibold text-gray-500">
                  {name}
                </div>
              </div>
            ) : (<></>)}
            <button onClick={(e) => { e.stopPropagation(); setbutton(!button) }} className='hover:scale-125 transition-all hidden'>
              {button ? <FaBookmark className='fill-green-500' /> : <CiBookmark className='fill-green-900' />}
            </button>
          </div>
          <div className="text-[10px] line-clamp-2 sm:line-clamp-2 sm:text-sm text-muted-foreground">{des}</div>
          <div className="flex gap-2 items-center text-xs text-green-800 font-medium group-hover:font-bold group-hover:gap-3 transition-all sm:text-sm">
            <div className="">
            Learn more
            </div>
             <GoArrowRight/> 
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ResponsiveCard
