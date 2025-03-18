'use client'

import ResponsiveCard from '@/components/responsiveCard'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { districtsData as districts } from '@/staticData/districtData';
import { FaArrowDown } from 'react-icons/fa6'
import DistrictCard from '@/components/districtCard'
import { LiaMapMarkedAltSolid } from 'react-icons/lia'
import MeghalayaMap from '@/components/meghalayaMap'
import { GoArrowRight } from 'react-icons/go'
import Link from 'next/link'

const Page = () => {
  const [districtDataLoading, setDistrictDataLoading] = useState(true)
  const [districtData, setdistrictData] = useState(districts.slice(0, 12))
  useEffect(() => {
    // Simulate a delay of 1 second
    const timer = setTimeout(() => {
      setDistrictDataLoading(false); // Set loading to false
    }, 700);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='px-4 sm:px-0'>
      <div className=" w-full" id='districts'>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-3 sm:pb-6">
          <div className="">
            <MeghalayaMap activePathIndex={-1}/>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 px-0 sm:px-6">
            <div className="text-lg sm:text-3xl font-bold sm:font-black text-gray-700">MEGHALAYA</div>
            <div className="text-xs sm:text-base line-clamp-3 sm:line-clamp-6 text-gray-500">Nestled in the northeastern region of India, Meghalaya, meaning &ldquo;Abode of Clouds,&ldquo; is a picturesque state known for its breathtaking landscapes, rich cultural heritage, and diverse biodiversity. Bordered by Assam to the north and Bangladesh to the south, it spans lush green hills, pristine waterfalls, and dense forests. The state is home to the Khasi, Garo, and Jaintia tribes, each contributing to its vibrant traditions, music, dance, and cuisine. Shillong, the capital city, is often called the &ldquo;Scotland of the East&ldquo;.</div>
            <Link href={'/meghalaya'} className="inline-flex group gap-2 items-center hover:font-semibold hover:gap-3 transition-all">
              <span className='text-emerald-900 text-sm sm:text-base'>Read more</span>
              <GoArrowRight className='fill-emerald-900 group-hover:stroke-1 group-hover:stroke-emerald-900'/>
            </Link>
          </div>
        </div>
        <div className=''>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 pt-4 pb-2 items-center">
              <div className="font-semibold text-base sm:text-xl"> Districts</div>
              <div className="text-sm sm:text-base">( 12 )</div>
            </div>
            <FaArrowDown className='fill-gray-700' />
          </div>
          {districtDataLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-3 py-2">
              {Array.from({ length: 12 }).map((_, index) => (
                <div className="rounded-md flex flex-col gap-3 w-full min-h-[182px]" key={index}>
                  <Skeleton className='sm:h-[208px] h-36 w-full'></Skeleton>
                  <div className="p-1 flex flex-col gap-2">
                    <Skeleton className='h-[30px]   w-1/2'></Skeleton>
                    <Skeleton className='sm:h-[45px] h-[25px] w-full'></Skeleton>
                  </div>
                </div>
              ))}
            </div>
          ) :
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto no-scrollbar gap-1 sm:gap-3 justify-items-center py-2">
              {
                districtData.map((item, i) => (
                  <DistrictCard
                    key={i}
                    icon={<LiaMapMarkedAltSolid className='fill-gray-700'/>}
                    name={item.name}
                    description={item.about}
                    url={`/meghalaya/${item.id}`}
                    imageUrl={item.img.url}
                    imageTitle={item.img.name}
                    imageBlurData={item.img.blurDataUrl}
                    className=''
                  />
                ))
              }
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Page