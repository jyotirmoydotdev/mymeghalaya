import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiPartyFlags } from 'react-icons/gi'
import { HiArrowLongRight } from 'react-icons/hi2'
import ResponsiveCard from './ResponsiveCard'
import SectionHeader from './sectionHeader'


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
    },
    {
        name: "Wangala",
        des: "Pelga waterfall offering a peaceful escape for nature lovers.",
        img: "/wangala.webp",
        link: "/destinations/pelga-falls"
    },
]


const Festival = () => {
  return (
    <div className="border-t p-5 sm:py-16">
        <SectionHeader name={"Festivals"}/>
        <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl pb-3">
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
            <div className="flex justify-center items-center italic text-blue-600 hover:translate-x-3 transition gap-3 pb-5 pt-5" >
                View all <HiArrowLongRight/>
            </div>
        </Link>
    </div>
  )
}

export default Festival