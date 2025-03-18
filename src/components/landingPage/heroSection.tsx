'use client'

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { type CarouselApi } from "@/components/ui/carousel"
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
            <div className="text-[16rem] absolute font-black text-gray-100 -z-10 pointer-events-none">MEGHALAYA</div>
            <div className='container my-4 px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4">
                    {/* <div className=" grid-cols-2 grid-rows-3 pl-0 sm:pl-16 gap-5 relative hidden md:grid">
                        <div className=" absolute bg-gradient-to-b from-background to-transparent top-0 h-[5rem] w-full"></div>
                        <Image src={data.images.img1.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img1.imageBlurDataUrl} width={500} height={500} alt='' className='w-full h-full rounded-xl object-cover row-span-2'></Image>
                        <Image src={data.images.img2.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img2.imageBlurDataUrl} width={500} height={500} alt='' className='w-full h-full rounded-xl object-cover'></Image>
                        <Image src={data.images.img3.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img3.imageBlurDataUrl} width={500} height={500} alt='' className='w-full h-full rounded-xl object-cover row-span-2'></Image>
                        <Image src={data.images.img4.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img4.imageBlurDataUrl} width={500} height={500} alt='' className='w-full h-full rounded-xl object-cover'></Image>
                        <div className=" absolute bg-gradient-to-t from-background to-transparent bottom-0 h-[5rem] w-full"></div>
                    </div> */}

                    <div className="relative">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                }),
                            ]}
                        >
                            <CarouselContent className=' h-full aspect-square '>
                                <CarouselItem className=''>
                                    <div className="border-2 border-muted rounded-2xl aspect-square">
                                        <Image src={data.images.img1.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img1.imageBlurDataUrl} width={500} height={500} alt='' className='rounded-2xl object-cover h-full w-full border-white border-4'></Image>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className=''>
                                    <div className="border-2 border-muted rounded-2xl aspect-square">
                                        <Image src={data.images.img2.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img2.imageBlurDataUrl} width={500} height={500} alt='' className='rounded-2xl object-cover h-full w-full border-white border-4'></Image>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className=''>
                                    <div className="border-2 border-muted rounded-2xl aspect-square">
                                        <Image src={data.images.img3.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img3.imageBlurDataUrl} width={500} height={500} alt='' className='rounded-2xl object-cover h-full w-full border-white border-4'></Image>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className=''>
                                    <div className="border-2 border-muted rounded-2xl aspect-square">
                                        <Image src={data.images.img4.imgUrl} loading='lazy' placeholder='blur' blurDataURL={data.images.img4.imageBlurDataUrl} width={500} height={500} alt='' className='rounded-2xl object-cover h-full w-full border-white border-4'></Image>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                        <div className="inset-x-0 bottom-7 sm:bottom-10 absolute">
                            <div className="w-full flex justify-center gap-1 py-2">
                                {Array.from({ length: count }).map((_, index) => (
                                    <div key={index} className={`h-2 rounded-full transition-all duration-300 backdrop-blur-md bg-white/30 ${((index + 1) === current ? "w-8" : "w-4")}`}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 h-full justify-center pl-0 sm:pl-16">
                        {/* bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-400 text-transparent */}
                        <div className=" text-3xl sm:text-6xl font-bold text-gray-700">
                            Discover the <div className='font-semibold text-emerald-500 '>Scotland of the East </div>
                            {/* <span className='font-semibold text-emerald-500 '>Meghalaya</span>'s Cloud Abode */}
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
                        {/* <div className="flex items-center gap-3 pl-0 sm:pl-4 text-xs sm:text-sm">
                            <div className="flex -space-x-2">
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                            </div>
                            Trusted By 100K Peoples
                        </div> */}
                        <div className=" flex gap-4 pl-0 sm:pl-4">
                            <Button size={'default'} className='w-fit text-sm sm:text-base font-bold py-6 rounded-lg active:scale-105 hover:scale-105 transition-all bg-emerald-500 hover:bg-emerald-600' asChild>
                                <Link href={'/home'}>
                                    Explore More
                                </Link>
                            </Button>
                            <Button className='w-fit text-sm sm:text-base font-bold py-6 rounded-lg active:scale-105 hover:scale-105 transition-all text-emerald-600 hover:text-emerald-600' variant={'outline'} asChild>
                                <Link href={'/login'}>
                                    Join Now
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection