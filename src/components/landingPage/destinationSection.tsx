import React from 'react'
import Link from 'next/link'

import { HiArrowLongRight } from 'react-icons/hi2'
import { CiLocationOn } from 'react-icons/ci'
import { GoArrowRight } from 'react-icons/go'

import ResponsiveCard from '../responsiveCard'
import SectionHeader from '../sectionHeader'

import { LandingPageDestinationSectionData as data } from '@/staticData/landingPage/destiantionSectionData'
import Image from 'next/image'

const DestinationSection = () => {
    return (
        <div className="sm:py-16 container max-w-6xl w-full px-4 font-sans">
            <div className="text-base sm:text-2xl text-gray-400">Best destinations</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 pb-5 sm:pb-14">
                <div className="text-3xl sm:text-6xl tracking-tight">Meghalaya</div>
                <div className="text-base sm:text-2xl text-gray-400 tracking-tight">Extraodinary natural beauty, enjoy the rich culture, and experience the friendliness of the local peopole.</div>
            </div>
            {/* <div className="flex justify-center pl-4 sm:pl-0 pb-4">
                <div className="flex gap-3  pb-3 overflow-x-scroll no-scrollbar">
                    {data.map((loc, i) => (
                        <ResponsiveCard
                            key={i}
                            i={i}
                            url={loc.link}
                            imgUrl={loc.img}
                            imgBlurDataUrl={loc.imageBlurDataUrl}
                            name={loc.name}
                            des={loc.des}
                            icon={<CiLocationOn />}
                        />
                    ))}
                </div>
            </div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-6">
                <div className=" hover:scale-95 active:scale-95 duration-500 ease-in-out shadow-xl rounded-lg sm:rounded-3xl bg-gray-50 col-span-1 sm:col-span-2 aspect-square sm:aspect-video relative">
                    <Image
                        src={data[0].img}
                        placeholder='blur'
                        blurDataURL={data[0].imageBlurDataUrl}
                        loading='lazy'
                        alt={''}
                        width={500}
                        height={500}
                        className='h-full w-full object-cover rounded-lg sm:rounded-3xl'
                    ></Image>
                    <div className=" absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent rounded-b-xl sm:rounded-b-3xl h-1/4 "></div>
                    <div className=" absolute bottom-3 left-3 sm:bottom-10 sm:left-10 text-white">
                    <div className="flex flex-col">
                            <div className="text-sm font-bold sm:text-3xl">{data[0].name}</div>
                            <div className="text-xs text-gray-200 sm:font-thin sm:text-2xl">Tura, West Garo Hills</div>
                        </div>
                    </div>
                </div>
                <div className="hover:scale-95 active:scale-95 duration-500 ease-in-out shadow-xl rounded-lg sm:rounded-3xl bg-gray-50 relative aspect-square sm:aspect-auto">
                    <Image
                        src={data[1].img}
                        placeholder='blur'
                        blurDataURL={data[1].imageBlurDataUrl}
                        alt={''}
                        loading='lazy'
                        width={500}
                        height={500}
                        className='h-full w-full object-cover rounded-lg sm:rounded-3xl'
                    ></Image>
                    <div className=" absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent rounded-b-xl sm:rounded-b-3xl h-1/4 "></div>
                    <div className=" absolute bottom-3 left-3 sm:bottom-10 sm:left-10 text-white">
                        <div className="flex flex-col">
                            <div className="text-sm font-bold sm:text-3xl">{data[1].name}</div>
                            <div className="text-xs text-gray-200 sm:font-thin sm:text-2xl">Tura, West Garo Hills</div>
                        </div>
                    </div>
                </div>
                <div className="hover:scale-95 active:scale-95 duration-500 ease-in-out shadow-xl rounded-lg sm:rounded-3xl bg-gray-50 relative aspect-square sm:aspect-auto">
                    <Image
                        src={data[2].img}
                        placeholder='blur'
                        loading='lazy'
                        blurDataURL={data[2].imageBlurDataUrl}
                        alt={''}
                        width={500}
                        height={500}
                        className='h-full w-full object-cover rounded-lg sm:rounded-3xl'
                    ></Image>
                    <div className=" absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent rounded-b-xl sm:rounded-b-3xl h-1/4 "></div>
                    <div className=" absolute bottom-3 left-3 sm:bottom-10 sm:left-10 text-white">
                        <div className="flex flex-col">
                            <div className="text-sm font-bold sm:text-3xl">{data[2].name}</div>
                            <div className="text-xs text-gray-200 sm:font-thin sm:text-2xl">Tura, West Garo Hills</div>
                        </div>
                    </div>
                </div>
                <div className="hover:scale-95 active:scale-95 duration-500 ease-in-out shadow-xl rounded-lg sm:rounded-3xl bg-gray-50 col-span-1 sm:col-span-2 aspect-square sm:aspect-video relative">
                    <Image
                        src={data[3].img}
                        placeholder='blur'
                        loading='lazy'
                        blurDataURL={data[3].imageBlurDataUrl}
                        alt={''}
                        width={500}
                        height={500}
                        className='h-full w-full object-cover rounded-lg sm:rounded-3xl'
                    ></Image>
                    <div className=" absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent rounded-b-xl sm:rounded-b-3xl h-1/4 "></div>
                    <div className=" absolute bottom-3 left-3 sm:bottom-10 sm:left-10 text-white">
                        <div className="flex flex-col">
                            <div className="text-sm font-bold sm:text-3xl">{data[3].name}</div>
                            <div className="text-xs text-gray-200 sm:font-thin sm:text-2xl">Tura, West Garo Hills</div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href={"/destinations"}>
                <div className=" text-xl pl-2 flex items-center justify-start sm:justify-center w-full gap-3 text-green-800 py-10 italic hover:translate-x-2 ease-in-out duration-300" >
                    View all destinations <HiArrowLongRight />
                </div>
            </Link>
        </div>
    )
}

export default DestinationSection