import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiPartyFlags } from 'react-icons/gi'
import { HiArrowLongRight } from 'react-icons/hi2'

const Festival = () => {
  return (
    <div className="border-t p-5">
         <div className="flex text-3xl font-semibold sm:text-6xl justify-center py-5 sm:p-10 sm:pt-10 uppercase text-gray-500 " >
            <div className="max-w-5xl w-full border-b pb-5">
                Festivals
            </div>
        </div>
        <div className="flex w-full justify-center pb-10">
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-5xl">
                <div className="flex gap-3 flex-col">
                    {/* <Image width={500} height={500} src={'/wangala.webp'} alt='' className='h-44 object-cover'/> */}
                    <div className="h-44 w-full bg-gray-100 border rounded-md"></div>
                    <div className="py-2 font-sans text-sm sm:text-lg flex gap-3 items-center"> <GiPartyFlags/>Wangala</div>
                    <div className="text-xs sm:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.</div>
                </div>
                <div className="flex gap-3 flex-col">
                    <div className="h-44 w-full bg-gray-100 border rounded-md"></div>
                    <div className="py-2 font-sans text-sm sm:text-lg flex gap-3 items-center"> <GiPartyFlags/>Christmas</div>
                    <div className="text-xs sm:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.</div>
                </div>
                <div className="flex gap-3 flex-col">
                    <div className="h-44 w-full bg-gray-100 border rounded-md"></div>
                    <div className="py-2 font-sans text-sm sm:text-lg flex gap-3 items-center"> <GiPartyFlags/> Durga Puja</div>
                    <div className="text-xs sm:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.</div>
                </div>
                <div className="flex gap-3 flex-col">
                    {/* <Image width={500} height={500} src={'/wangala.webp'} alt='' className='h-44 object-cover'/> */}
                    <div className="h-44 w-full bg-gray-100 border rounded-md"></div>
                    <div className="py-2 font-sans text-sm sm:text-lg flex gap-3 items-center"> <GiPartyFlags/>Wangala</div>
                    <div className="text-xs sm:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.</div>
                </div>
                <div className="flex gap-3 flex-col">
                    <div className="h-44 w-full bg-gray-100 border rounded-md"></div>
                    <div className="py-2 font-sans text-sm sm:text-lg flex gap-3 items-center"> <GiPartyFlags/>Christmas</div>
                    <div className="text-xs sm:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.</div>
                </div>
                <div className="flex gap-3 flex-col">
                    <div className="h-44 w-full bg-gray-100 border rounded-md"></div>
                    <div className="py-2 font-sans text-sm sm:text-lg flex gap-3 items-center"> <GiPartyFlags/> Durga Puja</div>
                    <div className="text-xs sm:text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quidem.</div>
                </div>
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