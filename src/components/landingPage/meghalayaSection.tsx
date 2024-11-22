'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'
import ResponsiveCard from '../responsiveCard'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { handleClick } from '@/functions/haptic'
import MeghalayaMap from '../meghalayaMap'

import { districtsData as data } from '@/staticData/districtData'
import { CiLocationOn } from 'react-icons/ci'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '../ui/button'
import Autoplay from 'embla-carousel-autoplay'
import { MdArrowOutward } from 'react-icons/md'


const MeghalayaSection = () => {
    const [activePathIndex, setActivePathIndex] = useState<number>(0);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const newIndex = Number(entry.target.getAttribute('data-index'));

                    if (entry.isIntersecting && (newIndex === activePathIndex + 1 || newIndex === activePathIndex - 1)) {
                        setActivePathIndex(newIndex);
                    }
                });
            },
            { threshold: 1 }
        );

        cardRefs.current.forEach((cardRef) => {
            if (cardRef) observer.observe(cardRef);
        });

        return () => {
            cardRefs.current.forEach((cardRef) => {
                if (cardRef) observer.unobserve(cardRef);
            });
        };
    }, [activePathIndex]);

    return (
        // <div className=" bg-gradient-to-b from-white via-sky-50 to-white relative">
        <div className=' container my-10 p-4 sm:py-16 overflow-hidden'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5">
                <div className="flex justify-center relative">
                    <div className=" inset-x-0 text-center  font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-white text-5xl sm:text-8xl absolute -z-10 pointer-events-none">MEGHALAYA</div>
                    <div className="max-w-5xl w-full">
                        <MeghalayaMap activePathIndex={activePathIndex} />
                    </div>
                </div>
                <div className="hidden sm:block pt-8 mx-8">
                    <Carousel className='relative'
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}>
                        {/* <div className=" absolute w-14 h-full bg-gradient-to-r from-white to-transparent left-0 z-30 pointer-events-none"></div> */}
                        <div className=" absolute w-14 h-full bg-gradient-to-l from-white to-transparent right-0 z-40 pointer-events-none"></div>
                        <CarouselContent className=''>
                            {data.map((district, i) => (
                                <CarouselItem className='basis-auto snap-center' key={i}>
                                    <ResponsiveCard
                                        i={i}
                                        imgUrl={district.img.url}
                                        alt={district.name}
                                        imgBlurDataUrl={district.img.blurDataUrl}
                                        imgMsg={district.name}
                                        des={district.about.slice(0, 60)}
                                        url={`/meghalaya/${district.id}`}
                                        className='max-w-[350px]'
                                        icon={<CiLocationOn />}
                                    >
                                    </ResponsiveCard>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext />
                        <CarouselPrevious />
                    </Carousel>
                </div>
                <div className="w-screen block sm:hidden">
                    <div className="flex justify-center">
                        <div className="flex gap-3 sm:gap-5 snap-x snap-mandatory w-full max-w-5xl py-3 overflow-x-scroll no-scrollbar">
                            <div className="text-center  bg-gray-100 h-full w-[169px] sm:w-[332px] px-[1rem] rounded-lg flex justify-center gap-2 items-center mr-1"><GoArrowRight /></div>
                            {data.map((district, i) => (
                                <div
                                    onClick={handleClick}
                                    key={i}
                                    data-index={i}
                                    ref={(el) => { (cardRefs.current[i] = el) }}
                                    className={`${activePathIndex === i ? 'border transition-all duration-500 rounded-[13px] border-green-500 scale-105' : 'border rounded-[13px] border-white'}`} // Apply border radius conditionally
                                >
                                    <ResponsiveCard
                                        i={i}
                                        imgUrl={district.img.url}
                                        alt={district.name}
                                        imgBlurDataUrl={district.img.blurDataUrl}
                                        imgMsg={district.name}
                                        des={district.about.slice(0, 60)}
                                        url={`/meghalaya/${district.id}`}
                                        className='sm:w-[332px] snap-center'
                                        icon={<CiLocationOn />}
                                    >
                                    </ResponsiveCard>
                                </div>
                            ))}
                            <div className="text-center bg-gray-100 h-full w-[169px] sm:w-[332px] px-[1rem] rounded-lg flex justify-center gap-2 items-center">
                                <GoArrowLeft />
                            </div>
                            <div className="min-w-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-xl sm:text-4xl font-black text-gray-500 uppercase text-left hyphens-auto sm:text-justify px-0 py-4 sm:p-[3rem] indent-20 sm:indent-96">Meghalaya, known as the 'abode of clouds', is a mesmerizing state in northeast India, rich in natural beauty and cultural heritage. Carved from Assam on January 21, 1972, it comprises the United Khasi, Jaintia Hills, and Garo Hills.<Link href='/meghalaya' className="text-sky-400 "> read more <MdArrowOutward className=' inline-flex w-fit'/></Link> </div>
        </div>
        // </div>
    )
}

export default MeghalayaSection
