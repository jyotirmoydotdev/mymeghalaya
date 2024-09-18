import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import ResponsiveCard from './ResponsiveCard'
import { CiLocationOn } from 'react-icons/ci'

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
    }
]

const Destination = () => {
  return (
    <div className="p-5 sm:py-16 border-t">
        <div className="flex justify-center py-5 sm:p-10 sm:pt-10 " >
            <div className="max-w-5xl w-full border-b pb-5">
                <div className="text-3xl font-black sm:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-t from-sky-50 to-gray-500 ">
                    Destinations
                </div>
                <div className="font-medium text-sm capitalize pt-2 text-gray-400">
                    Destinations of meghalaya
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
                        icon={<CiLocationOn/>}
                    />
                ))}
            </div>
        </div>
        <Link href={"/destinations"}>
                <div className="flex justify-start sm:justify-center items-center w-full gap-3 text-blue-600  italic hover:translate-x-2 animate transition" >
                        View all <HiArrowLongRight/>
                </div>
        </Link>
    </div>
  )
}

export default Destination