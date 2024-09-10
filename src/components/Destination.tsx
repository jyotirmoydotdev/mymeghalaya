import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import { DirectionAwareHover } from './ui/direction-aware-hover'

const Destination = () => {
    const data = [
        {
            name: "Tepota",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.",
            img: "/tepota.webp",
            link: "/tepota"
        },
        {
            name: "Pelga Waterfalls",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.",
            img: "/pelga.webp",
            link: "/pelga"
        },
        {
            name: "Darechikgre",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.",
            img: "/darechikgre.webp",
            link: "/darechikgre"
        },
        {
            name: "Tura Peak",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.",
            img: "/tura-peak.webp",
            link: "/gandrak-dare"
        },
        {
            name: "Daribokgre",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.",
            img: "/daribokgre.webp",
            link: "/chibragre"
        },
        {
            name: "Kynrem Falls",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            img: "/KynremFalls.webp",
            link: "/ganol-eco-park"
        }
    ]
  return (
    <div className="p-5 sm:py-16 border-t">
        <div className="flex justify-center py-5 sm:p-10 sm:pt-10 " >
            <div className="max-w-5xl w-full border-b pb-5">
                <div className="text-3xl font-semibold sm:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-t from-sky-50 to-gray-500 ">
                    Destinations
                </div>
                <div className="font-medium text-sm capitalize pt-2 text-gray-400">
                    Destinations of meghalaya
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-5xl pb-10">
                {data.map((loc, i)=>(
                    <Link href={loc.link} className='pb-2' key={i}>
                        <div className="flex gap-3 flex-col">
                            {loc.img !== ""?
                                <DirectionAwareHover imageUrl={loc.img} className='rounded-md'>
                                    <div className="flex gap-2 items-center">
                                        Visit <HiArrowLongRight/>
                                    </div>
                                </DirectionAwareHover>
                                :
                                <div className="bg-gray-50 h-44 border rounded-md"></div>
                            }
                            <div className="font-sans text-sm sm:text-lg flex gap-3 items-center"> <CiLocationOn/>{loc.name}</div>
                            <div className="text-xs sm:text-sm text-gray-500">{loc.des}</div>
                        </div>
                    </Link>
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