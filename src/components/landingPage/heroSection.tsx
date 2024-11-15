'use client'

import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import Image from 'next/image'
import { supabaseFetch } from '@/libs/supabaseFetch'
import { TiTick } from 'react-icons/ti'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { type CarouselApi } from "@/components/ui/carousel"
import ResponsiveCard from '../responsiveCard'
import { LandingPageHeroSectionData as data } from '@/staticData/landingPage/heroSectionData'

const HeroSection = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])
    return (
        <div className="relative overflow-hidden ">
            {/* <div className=" absolute h-[200%] aspect-square bg-sky-100 rounded-full -z-10 "></div> */}
            <div className='container my-4 sm:my-10 px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4">
                    <div className=" grid-cols-2 grid-rows-3 pl-0 sm:pl-16 gap-5 relative hidden md:grid">
                        <div className=" absolute bg-gradient-to-b from-background to-transparent top-0 h-[5rem] w-full"></div>
                        <Image src={data.images.img1.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img1.imageBlurDataUrl} width={500} height={500} alt='' className='w-full h-full rounded-xl object-cover row-span-2'></Image>
                        <Image src={data.images.img2.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img2.imageBlurDataUrl} width={500} height={500} alt='' className='w-full h-full rounded-xl object-cover'></Image>
                        <Image src={data.images.img3.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img3.imageBlurDataUrl} width={500} height={500} alt='' className='w-full h-full rounded-xl object-cover row-span-2'></Image>
                        <Image src={data.images.img4.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img4.imageBlurDataUrl} width={500} height={500} alt='' className='w-full h-full rounded-xl object-cover'></Image>
                        <div className=" absolute bg-gradient-to-t from-background to-transparent bottom-0 h-[5rem] w-full"></div>
                    </div>

                    <div className="block sm:hidden relative">
                        <Carousel setApi={setApi}>
                            <CarouselContent className=''>
                                <CarouselItem className=''>
                                    <Image src={data.images.img1.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img1.imageBlurDataUrl} width={500} height={500} alt='' className='rounded-2xl aspect-square object-cover'></Image>
                                </CarouselItem>
                                <CarouselItem className=''>
                                    <Image src={data.images.img2.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img2.imageBlurDataUrl} width={500} height={500} alt='' className='rounded-2xl aspect-square object-cover'></Image>
                                </CarouselItem>
                                <CarouselItem className=''>
                                    <Image src={data.images.img3.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img3.imageBlurDataUrl} width={500} height={500} alt='' className='rounded-2xl aspect-square object-cover'></Image>
                                </CarouselItem>
                                <CarouselItem className=''>
                                    <Image src={data.images.img4.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img4.imageBlurDataUrl} width={500} height={500} alt='' className='rounded-2xl aspect-square object-cover'></Image>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                        <div className="flex w-full justify-end right-3 bottom-3 absolute gap-2 text-gray-200 text-xs">
                            {/* <div className="h-2 w-6 rounded-full bg-gray-300 opacity-50"></div>
                            <div className="h-2 w-2 rounded-full bg-gray-300 opacity-50"></div>
                            <div className="h-2 w-2 rounded-full bg-gray-300 opacity-50"></div> */}
                            {current} / {count}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-6 h-full justify-center pl-0 sm:pl-16">
                        {/* bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-400 text-transparent */}
                        <div className=" text-4xl sm:text-8xl text-left font-black text-gray-800">
                            VISIT THE ABODE OF CLOUDS
                        </div>
                        <div className="text-gray-500 text-xs sm:text-base pl-0 sm:pl-4 ">Build your next unforgettable memory in Meghalaya with MyMeghalaya the ultimate one-stop guide to exploring the wonders of this breathtaking destination.</div>
                        <div className="flex flex-col pl-0 sm:pl-4 gap-2 text-xs sm:text-base pb-2">
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Be part of our growing travel community</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Discover handpicked destinations, curated just for you</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Your trusted companion for exploring Meghalaya</div>
                            </div>
                        </div>
                        <div className=" flex gap-4 pl-0 sm:pl-4">
                            <Link href={'/login'}>
                                <Button className='w-fit font-black py-5 rounded-lg active:scale-105 hover:scale-105 transition-all bg-emerald-500 hover:bg-emerald-600'>JOIN NOW</Button>
                            </Link>
                            <Button className='w-fit font-black py-5 rounded-lg active:scale-105 hover:scale-105 transition-all text-gray-500' variant={'outline'}>EXPLORE</Button>
                        </div>
                        {/* <div className="flex items-center gap-3 pl-0 sm:pl-4 text-xs sm:text-sm">
                            <div className="flex -space-x-2">
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                            </div>
                            Trusted By 100K Peoples
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection