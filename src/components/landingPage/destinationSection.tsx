import React from 'react'
import Link from 'next/link'

import { HiArrowLongRight } from 'react-icons/hi2'
import { CiLocationOn } from 'react-icons/ci'
import { GoArrowRight } from 'react-icons/go'

import ResponsiveCard from '../responsiveCard'
import SectionHeader from '../sectionHeader'

import { LandingPageDestinationSectionData as data } from '@/staticData/landingPage/destiantionSectionData'

const DestinationSection = () => {
    return (
        <div className="sm:py-16 border-t">
            <div className=" pt-4 px-4">
                <SectionHeader name={"Destinations"} />
            </div>
            <div className="flex justify-center pl-4 sm:pl-0 pb-4">
                <div className="flex sm:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl pb-3 overflow-x-scroll no-scrollbar">
                    <div className="h-full px-3 bg-gray-100 flex justify-center items-center rounded-xl sm:hidden"><GoArrowRight /></div>
                    {data.map((loc, i) => (
                        <ResponsiveCard
                            key={i}
                            i={i}
                            url={loc.link}
                            imgUrl={loc.img}
                            name={loc.name}
                            des={loc.des}
                            icon={<CiLocationOn />}
                        />
                    ))}
                    <Link href={"/destinations"} className='flex justify-center items-center h-full bg-gray-100 rounded-xl text-nowrap sm:hidden '>
                        <div className="text-blue-500 italic px-5 gap-2"><div className="">View all</div> <HiArrowLongRight className='' /></div>
                    </Link>
                </div>
            </div>
            <Link href={"/destinations"} className='hidden sm:block'>
                <div className="flex justify-center items-center italic text-blue-600 hover:translate-x-3 transition gap-3 pb-5 pt-5" >
                    View all <HiArrowLongRight />
                </div>
            </Link>
        </div>
    )
}

export default DestinationSection