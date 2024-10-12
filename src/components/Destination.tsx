import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import ResponsiveCard from './ResponsiveCard'
import { CiLocationOn } from 'react-icons/ci'
import SectionHeader from './sectionHeader'

const data = [
    {
        name: "Pelga Falls",
        des: "Pelga waterfall offering a peaceful escape for nature lovers.",
        img: "/pelga.webp",
        link: "/destinations/pelga-falls"
    },
    {
        name: "Darechikgre",
        des: "Darechikgre is a beautiful sunset and viewpoint of Tura.",
        img: "/darechikgre.webp",
        link: "/destinations/darechikgre"
    },
    {
        name: "Tura Peak",
        des: "Challenging trail to Tura Peak with rich biodiversity and views.",
        img: "/tura-peak.webp",
        link: "/destinations/tura-peak"
    },
    {
        name: "Pelga Falls",
        des: "Pelga waterfall offering a peaceful escape for nature lovers.",
        img: "/pelga.webp",
        link: "/destinations/pelga-falls"
    },
    {
        name: "Darechikgre",
        des: "Darechikgre is a beautiful sunset and viewpoint of Tura.",
        img: "/darechikgre.webp",
        link: "/destinations/darechikgre"
    },
    {
        name: "Tura Peak",
        des: "Challenging trail to Tura Peak with rich biodiversity and views.",
        img: "/tura-peak.webp",
        link: "/destinations/tura-peak"
    },
]

const Destination = () => {
  return (
    <div className="p-5 sm:py-16 border-t">
        <SectionHeader name={"Destinations"} />
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
                        icon={<CiLocationOn/>}
                    />
                ))}
            </div>
        </div>
        <Link href={"/destinations"}>
            <div className="flex justify-center items-center italic text-blue-600 hover:translate-x-3 transition gap-3 pb-5 pt-5" >
                View all <HiArrowLongRight/>
            </div>
        </Link>
    </div>
  )
}

export default Destination