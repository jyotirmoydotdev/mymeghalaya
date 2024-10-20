'use client'

import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { Cover } from './ui/cover'
import Link from 'next/link'
import CommandSearch from './commandSearch'

const HeroSection = () => {
    return (
        <div className="flex flex-col justify-center py-10 bg-sky-50">
            <div className="animate-scroll-up-page text-5xl sm:text-8xl text-left sm:text-center uppercase font-black bg-clip-text text-transparent bg-gradient-to-t from-sky-50 to-gray-500 px-5 " >
                Abode of the clouds
            </div>
            <div className="flex justify-center py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 text-left gap-5 max-w-5xl px-5 sm:px-0">
                    <div className=" rounded-md ">
                        <DirectionAwareHover imageUrl='http://127.0.0.1:54321/storage/v1/object/public/images-public/dawki.webp?t=2024-10-14T17%3A02%3A21.972Z' className='rounded-md w-full object-cover h-full'>
                            <div className="">
                                <p className="font-bold text-xl">Dawki River</p>
                                <p className="font-normal text-gray-300 text-sm">Dawki, East Khasi Hills</p>
                            </div>
                        </DirectionAwareHover>
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="text-left text-sm pb-5 " >
                            Meghalaya beautifully blends its rich cultural heritage with the lush Hills, offering a unique fusion of tradition and natural beauty.
                        </div>
                        <div className="flex gap-2 ">
                            <DirectionAwareHover imageUrl='http://127.0.0.1:54321/storage/v1/object/public/images-public/Cherrapunji.webp?t=2024-10-14T16%3A52%3A05.721Z' className=' rounded-md h-40 sm:size-64 object-cover '>
                                <p className="font-bold text-sm sm:text-xl">Cherrapunji</p>
                                <p className="font-normal text-gray-300 text-xs sm:text-sm">Cherrapunji, East Khasi Hills</p>
                            </DirectionAwareHover>
                            <DirectionAwareHover imageUrl='http://127.0.0.1:54321/storage/v1/object/public/images-public/Nohkalikai-Falls.webp?t=2024-10-14T16%3A56%3A38.092Z' className=' rounded-md h-40 sm:size-64 object-cover '>
                                <p className="font-bold text-sm sm:text-xl">Nohkalikai Falls</p>
                                <p className="font-normal text-gray-300 text-xs sm:text-sm">Cherrapunji, East Khasi Hills</p>
                            </DirectionAwareHover>
                        </div>
                        <Link href={'/plan'} className=''>
                            <Cover>
                                <div className="pt-10 sm:py-0  text-blue-600 text-xl sm:text-3xl flex gap-5 items-end italic hover:translate-x-2 animate transition duration-300" >
                                    {"Let's plan your trip"} <HiArrowLongRight />
                                </div>
                            </Cover>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
