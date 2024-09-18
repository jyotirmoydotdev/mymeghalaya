import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiPartyFlags } from 'react-icons/gi'
import { HiArrowLongRight } from 'react-icons/hi2'
import ResponsiveCard from './ResponsiveCard'


const data = [
    {
        name: "Wangala",
        des: "Pelga waterfall offering a peaceful escape for nature lovers.",
        img: "/wangala.webp",
        link: "/destinations/pelga-falls"
    },
    {
        name: "Christmas",
        des: "Darechikgre is a beautiful sunset and viewpoint of Tura.",
        img: "/darechikgre.webp",
        link: "/destinations/darechikgre"
    },
    {
        name: "Durga Puja",
        des: "Challenging trail to Tura Peak with rich biodiversity and views.",
        img: "/tura-peak.webp",
        link: "/destinations/tura-peak"
    }
]


const Festival = () => {
  return (
    <div className="border-t p-5 sm:py-16">
        <div className="flex justify-center py-5 sm:p-10 sm:pt-10 " >
            <div className="max-w-5xl w-full border-b pb-5">
                <div className="text-3xl font-black sm:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-t from-sky-50 to-gray-500 ">
                    Festivals
                </div>
                <div className="font-medium text-sm capitalize pt-2 text-gray-400">
                    Festivals of meghalaya
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-5xl pb-10">
                {data.map((loc, i)=>(
                    <ResponsiveCard
                        key={i}
                        i={i}
                        url={loc.link}
                        imgUrl={loc.img}
                        name={loc.name}
                        des={loc.des}
                        icon={<GiPartyFlags/>}
                    />
                ))}
            </div>
        </div>
        <Link href={"/experiences"}>
            <div className="flex justify-center items-center italic text-blue-600 hover:translate-x-3 transition gap-3 pb-10 pt-5" >
                View all <HiArrowLongRight/>
            </div>
        </Link>
    </div>
  )
}

export default Festival