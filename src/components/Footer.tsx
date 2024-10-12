import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-black text-white">
        <div className='flex justify-center px-5 pt-10 pb-0'>
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl w-full pb-10 border-b border-gray-700">
                <div className=' flex flex-col justify-between pb-10'>
                    <div className="text-2xl font-semibold text-gray-200 flex flex-col" >
                        <div className="flex">
                        <Image src={'/logo.png'} width={500} height={500} alt="" className="h-full w-9 scale-150 mr-2"/>
                        <div className="flex items-baseline">
                            <div className="text-xs self-start">MY</div>
                            <div className="">MEGHALAYA</div>
                            <div className="text-xs">.in</div>
                        </div>
                        </div>
                        <div className="py-3 text-sm text-gray-500 ">
                            Enjoy your time in Meghalaya
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10 justify-start sm:justify-end">
                    <div>
                        <div className="py-5 text-xl font-bold" >General</div>
                        <div className="flex flex-col gap-5 text-sm text-gray-400">
                            <div className="">Blog</div>
                            <div className="">About</div>
                            <div className="">Contact</div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 text-xl font-bold" >Social</div>
                        <div className="flex flex-col gap-5 text-sm text-gray-400">
                            <div className="">Github</div>
                            <div className="">Twitter</div>
                            <div className="">Linkedin</div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 text-xl font-bold" >Explore</div>
                        <div className="flex flex-col gap-5 text-sm text-gray-400">
                            <Link href={"/destinations"} className='hover:underline'>
                                    Destinations
                            </Link>
                            <Link href={"/"}>Adventures</Link>
                            <Link href={"/"}>Festivals</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center pt-5 text-sm text-gray-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl w-full pb-10 px-5 sm:px-0 gap-3">
                <div className="">@2024 My Meghalaya. All right reserved</div>
                <div className="flex gap-5 justify-start sm:justify-end">
                    <div className="underline">Privacy Policy</div>
                    <div className="underline">Terms of Service</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer