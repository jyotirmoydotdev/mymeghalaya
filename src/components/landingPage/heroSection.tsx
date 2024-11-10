import React from 'react'
import Link from 'next/link'

import { HiArrowLongRight } from 'react-icons/hi2'
import { Cover } from '../ui/cover'

import { LandingPageHeroSectionData as data } from '@/staticData/landingPage/heroSectionData'
import { DirectionAwareHover } from '../ui/direction-aware-hover'

const HeroSection = () => {

    return (
        <div className=" container max-w-7xl px-4 py-5 ">
            <div className={`text-5xl sm:text-8xl text-left sm:text-center uppercase font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-400  to-white pb-2 animate-scroll-up-page`} >
                {data.title}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 sm:px-10 ">
                <DirectionAwareHover isPriority={false} name={data.title} imgBlurDataUrl={data.images.img1.imageBlurDataUrl} imageUrl={data.images.img1.imgUrl} className='h-full object-cover rounded-lg sm:rounded-3xl'>
                    <div className="">
                        <p className="font-bold text-xl">{data.images.img1.name}</p>
                        <p className="font-normal text-gray-300 text-sm">{data.images.img1.location}</p>
                    </div>
                </DirectionAwareHover>
                <div className="grid grid-rows-4 grid-cols-1 ">
                    <div className="text-left text-sm sm:text-base italic font-sans self-center order-2 mt-5" >
                        {data.description}
                    </div>
                    <div className="row-span-2 grid grid-cols-2 gap-3 sm:gap-5 order-1 sm:order-2">
                        <DirectionAwareHover isPriority={false} name={data.title} imgBlurDataUrl={data.images.img2.imageBlurDataUrl} imageUrl={data.images.img2.imgUrl} className='h-full w-full object-cover rounded-lg sm:rounded-3xl'>
                            <p className="font-bold text-sm sm:text-xl">{data.images.img2.name}</p>
                            <p className="font-normal text-gray-300 text-xs sm:text-sm">{data.images.img2.location}</p>
                        </DirectionAwareHover>
                        <DirectionAwareHover isPriority={false} name={data.title} imgBlurDataUrl={data.images.img3.imageBlurDataUrl} imageUrl={data.images.img3.imgUrl} className='h-full w-full object-cover rounded-lg sm:rounded-3xl'>
                            <p className="font-bold text-sm sm:text-xl">{data.images.img3.name}</p>
                            <p className="font-normal text-gray-300 text-xs sm:text-sm">{data.images.img3.location}</p>
                        </DirectionAwareHover>
                    </div>
                    <Link href={data.plan.link} className='self-center order-3 h-fit'>
                        <Cover className='bg-transparent'>
                            <div className=" sm:py-0  text-green-800 text-xl sm:text-3xl flex gap-5 items-end italic hover:translate-x-2 animate transition duration-300" >
                                {data.plan.lable} <HiArrowLongRight />
                            </div>
                        </Cover>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
