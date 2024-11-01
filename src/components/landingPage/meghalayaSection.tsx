'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'
import ResponsiveCard from '../responsiveCard'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { handleClick } from '@/functions/haptic'
import MeghalayaMap from '../meghalayaMap'

import { districtsData as data } from '@/staticData/districtData'

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
        <div className='flex flex-col justify-center p-4 sm:py-16 gap-5 overflow-hidden'>
            <div className="flex justify-center pt-5 mb-5 sm:p-10 sm:pt-10 bg-white" >
                <div className="max-w-5xl w-full border-b pb-5">
                    <div className={` text-3xl font-black uppercase bg-clip-text text-transparent bg-gradient-to-t from-sky-50 to-gray-500 sm:text-6xl`}>
                        Meghalaya
                    </div>
                    <div className="font-medium text-sm capitalize pt-2 text-gray-400">
                        Districts of meghalaya
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="max-w-5xl w-full">
                    <MeghalayaMap activePathIndex={activePathIndex}/>
                </div>
            </div>
            <div className="w-screen block sm:hidden">
                <div className="flex justify-center">
                    <div className="flex gap-3 sm:gap-5 w-full max-w-5xl py-3 overflow-x-scroll no-scrollbar">
                        <div className="text-center bg-gray-100 h-full w-[169px] sm:w-[332px] px-3 rounded-xl flex justify-center gap-2 items-center"><GoArrowRight /></div>
                        {data.map((district, i) => (
                            <div
                                onClick={handleClick}
                                key={i}
                                data-index={i}
                                ref={(el) => { (cardRefs.current[i] = el) }}
                                className={`${activePathIndex === i ? 'border transition-all duration-500 rounded-[10px] border-green-500 scale-105' : 'border border-white'}`} // Apply border radius conditionally
                            >
                                <ResponsiveCard
                                    i={i}
                                    imgUrl={district.img.url}
                                    imgMsg={district.name}
                                    des={district.about.slice(0, 60)}
                                    url={`/meghalaya/${district.id}`}
                                    className='sm:w-[332px]'
                                >
                                </ResponsiveCard>
                            </div>
                        ))}
                        <div className="text-center bg-gray-100 h-[154px] w-[169px] pl-5 pr-10 rounded-xl flex justify-center gap-2 items-center"><GoArrowLeft /></div>
                    </div>
                </div>
            </div>
            <Link href={"/meghalaya"}>
                <div className="flex justify-center items-center w-full gap-3 text-blue-600 pb-5 pt-2 italic hover:translate-x-2 animate transition" >
                    Read about Meghalaya <HiArrowLongRight />
                </div>
            </Link>
        </div>
    )
}

export default MeghalayaSection
