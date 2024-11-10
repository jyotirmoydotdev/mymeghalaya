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
        <div className=' container max-w-5xl w-full p-4 sm:py-16 overflow-hidden relative'>
            <div className=" inset-x-0 font-black text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-white text-5xl sm:text-9xl absolute -z-10 pointer-events-none">MEGHALAYA</div>
            <div className="flex justify-center">
                <div className="max-w-5xl w-full">
                    <MeghalayaMap activePathIndex={activePathIndex} />
                </div>
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
            <Link href={"/meghalaya"}>
                <div className=" text-xl pl-2 flex items-center justify-start sm:justify-center w-full gap-3 text-green-800 py-8 italic hover:translate-x-2 ease-in-out duration-300" >
                    Read about Meghalaya <HiArrowLongRight />
                </div>
            </Link>
        </div>
    )
}

export default MeghalayaSection
