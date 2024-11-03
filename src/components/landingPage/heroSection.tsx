'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { HiArrowLongRight } from 'react-icons/hi2'
import { ImageHover } from '../ui/imageHover'
import { Cover } from '../ui/cover'

import { LandingPageHeroSectionData as data } from '@/staticData/landingPage/heroSectionData'

const HeroSection = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(()=>{
        if (!sessionStorage.getItem('firstLoadDone')) {
            setShowAnimation(true);
            sessionStorage.setItem('firstLoadDone', 'true');
            setTimeout(() => setShowAnimation(false), 1000);
        }
    },[])

    return (
        <div className=" container max-w-7xl px-0  py-5 ">
            <div className={`text-5xl sm:text-8xl text-left sm:text-center uppercase font-black bg-clip-text text-transparent bg-gradient-to-t from-white to-gray-500 px-4 ${showAnimation?'animate-scroll-up-page':''}`} >
                {data.title}
            </div>
            <div className="flex justify-center py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 text-left gap-5 max-w-5xl px-4 sm:px-0">
                    <div className=" ">
                        <ImageHover imageUrl={data.images.img1.imgUrl} className=' w-full object-cover h-full'>
                            <div className="">
                                <p className="font-bold text-xl">{data.images.img1.name}</p>
                                <p className="font-normal text-gray-300 text-sm">{data.images.img1.location}</p>
                            </div>
                        </ImageHover>
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="text-left text-sm pb-5 " >
                            {data.description}
                        </div>
                        <div className="flex gap-3 sm:gap-5 justify-center sm:justify-start">
                            <ImageHover imageUrl={data.images.img2.imgUrl} className='size-44 sm:size-60 object-cover '>
                                <p className="font-bold text-sm sm:text-xl">{data.images.img2.name}</p>
                                <p className="font-normal text-gray-300 text-xs sm:text-sm">{data.images.img2.location}</p>
                            </ImageHover>
                            <ImageHover imageUrl={data.images.img3.imgUrl} className='size-44 sm:size-60 object-cover '>
                                <p className="font-bold text-sm sm:text-xl">{data.images.img3.name}</p>
                                <p className="font-normal text-gray-300 text-xs sm:text-sm">{data.images.img3.location}</p>
                            </ImageHover>
                        </div>
                        <Link href={data.plan.link} className=''>
                            <Cover className='bg-transparent'>
                                <div className="pt-10 sm:py-0  text-blue-600 text-xl sm:text-3xl flex gap-5 items-end italic hover:translate-x-2 animate transition duration-300" >
                                    {data.plan.lable} <HiArrowLongRight />
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
