'use client'

import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { HiArrowLongRight } from 'react-icons/hi2'
import { CiBookmark } from 'react-icons/ci'
import { FaBookmark, FaPlus } from 'react-icons/fa'
import { cn } from "@/lib/utils";
import { handleClick } from '@/functions/haptic'
import { GoArrowRight } from 'react-icons/go'
import { FaHeart, FaRegBookmark, FaRegHeart, FaStar } from 'react-icons/fa6'
import { Button } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const ResponsiveCard = ({ i, url, created_at, imgUrl, rating, hover = true, imgBlurDataUrl, name, alt, des, icon, imgMsg, className, grid }: { i: number, imgBlurDataUrl?: string, alt?: string, hover?: boolean, url: string, imgUrl: string, name?: string, des: string, icon?: ReactNode, imgMsg?: string, className?: string, grid?: boolean, rating?: number, created_at?: string }) => {
  const [button, setbutton] = useState(false)
  const isNew = (created_at: string): boolean => {
    const createdDate = new Date(created_at); // Convert the created_at string to a Date object
    const now = new Date(); // Get the current date and time
    const sevenDays = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

    return now.getTime() - createdDate.getTime() <= sevenDays; // Check if within 7 days
  };
  return (
    <Link href={url} key={i} className='transform active:scale-95 transition-all group' onClick={handleClick}>
      <div className={cn("grid grid-cols-1 sm:grid-cols-1 rounded-xl text-card-foreground w-[169px] sm:w-full", className)}>
        <div className="relative flex items-center justify-start sm:justify-center h-36 sm:h-52">
          <div className=" absolute flex gap-1 sm:gap-2 top-3 right-2">
            <div className=" px-2  py-1 bg-white bg-opacity-70  rounded-md text-xs backdrop-blur-sm z-10">
              <div className="flex items-center gap-1">
                <FaStar size={10} />
                <div className="">{rating ? rating : "0"}</div>
              </div>
            </div>
            {
              isNew(created_at ? created_at : "2024-11-05 11:43:23.891107+00") ? <div className="  px-2  py-1 bg-white bg-opacity-70 rounded-md text-xs backdrop-blur-sm z-10">
                New
              </div> : <></>
            }
          </div>
          <DirectionAwareHover hover={hover} imageUrl={imgUrl} alt={alt} imgBlurDataUrl={imgBlurDataUrl} name={name as string} className='rounded-sm sm:rounded-xl h-36 sm:h-52 justify-end'>
            {/* <p className="font-normal hidden line-clamp-1 sm:font-bold sm:flex gap-3 items-center text-xs sm:text-xl">{imgMsg ? imgMsg : <>view <HiArrowLongRight /></>} </p> */}
            {/* <div className="flex gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size={'icon'} variant={'secondary'}><FaPlus /></Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to Itinerary</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size={'icon'} variant={'secondary'}>
                        <FaRegBookmark />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Bookmark</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div> */}
            <></>
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
          <div className="text-[10px] text-wrap line-clamp-2 sm:text-sm text-muted-foreground">{des}</div>
          <div className="flex gap-2 items-center text-xs text-green-800 font-medium group-hover:font-bold group-hover:gap-3 transition-all sm:text-sm">
            <div className="">
              Learn more
            </div>
            <GoArrowRight />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ResponsiveCard
