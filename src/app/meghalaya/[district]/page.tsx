'use client'

import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { DirectionAwareHover1 } from '@/components/ui/direction-aware-hover1'
import { Skeleton } from '@/components/ui/skeleton'
import { DistrictDataType } from '@/types/districtDataType'
import { LocationDataType } from '@/types/locationDataTypes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiArrowLongRight } from 'react-icons/hi2'
import Loading from './loading'
import NotFound from './not-found'
import Markdown from 'react-markdown'
import ResponsiveCard from '@/components/ResponsiveCard'

const Page = () => {
  const {district} = useParams();
  const fetchDistrictData = useQuery({
    queryKey: ['district'],
    queryFn: async (): Promise<{
      msg:string;
      data:{
        districtData: DistrictDataType;
        destinationData: LocationDataType[];
      }
    }> => {
      const response = await axios.get('/api/district', {
        params: {
          id: district,
        }
      })
      return response.data
    },
  })

  if (fetchDistrictData.isLoading || fetchDistrictData.isFetching){
    return (<Loading/>)
  }

  if (fetchDistrictData.data?.data == null){
    return <NotFound/>
  }
  
  return (
    <div>
      <div className="px-5">
        <div className="flex justify-center py-5 sm:p-5 sm:pb-0 " >
          <div className="max-w-5xl w-full border-b pb-5">
            <div className="text-3xl font-semibold sm:text-6xl uppercase text-gray-500 ">
              {fetchDistrictData.data?.data.districtData.name}
            </div>
            <div className="font-medium text-sm capitalize pt-2 text-gray-400">
              District of meghalaya
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5 sm:p-10">
          <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 w-full gap-10">
            <div className="text-sm flex flex-col gap-3 order-2 sm:order-1">
              <Markdown>
                {fetchDistrictData.data?.data.districtData.about}
              </Markdown>
            </div>
            <DirectionAwareHover imageUrl={fetchDistrictData.data?.data.districtData.img?.url || ""} className=' h-64 sm:h-[516px] rounded-md order-1 sm:order-2'>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">{fetchDistrictData.data?.data.districtData.img?.name}</p>
                <p className="font-normal text-sm">{fetchDistrictData.data?.data.districtData.img?.location}</p>
              </div>
            </DirectionAwareHover>
          </div>
        </div>
        <div className="flex justify-center py-5  " >
          <div className="max-w-5xl w-full border-b pb-5">
            <div className="text-xl font-thin sm:text-3xl uppercase text-gray-500 ">
              Destinations to visit
            </div>
          </div>
        </div>
      </div>
          <div className="flex justify-center px-5 pb-5">
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
              {fetchDistrictData.data?.data.destinationData.length ? fetchDistrictData.data?.data.destinationData.map((item: LocationDataType, i: number) => (
                <ResponsiveCard
                key={i}
                i={i}
                url={`/destinations/${item.slug}`}
                imgUrl={item.images ? item.images[0] : ""}
                name={item.name as string}
                des={item.description as string}
                />
              )) : (
                <div className="h-[40vh] col-span-3 flex justify-center items-center text-2xl">
                  No Destination !!
                </div>
              )}
              <Button variant={'outline'} disabled className=' hidden col-span-1 sm:col-span-2 md:col-span-3'>Load More</Button>
            </div>
          </div>
    </div>
  )
}

export default Page