'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { DirectionAwareHover1 } from '@/components/ui/direction-aware-hover1'
import { Skeleton } from '@/components/ui/skeleton'
import { LocationData } from '@/types/locationTypes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiArrowLongRight } from 'react-icons/hi2'

const page = () => {
  const [destinationList, setDestinationList] = useState<LocationData[]>([]);
  const destinations = useQuery({
    queryKey: ['data'],
    queryFn: async (): Promise<LocationData[]> => {
      const response = await axios.get('/api/destination', {
        params: {
          search: "",
          location: "east khasi hills",
          category: "all",
        }
      })
      setDestinationList(response.data.destination);
      return response.data.destination
    },
  })
  return (
    <div>
      <Navbar />
      <div className="px-5">
        <div className="flex justify-center py-5 sm:p-5 sm:pb-0 " >
          <div className="max-w-5xl w-full border-b pb-5">
            <div className="text-3xl font-semibold sm:text-6xl uppercase text-gray-500 ">
              East Khasi Hills
            </div>
            <div className="font-medium text-sm capitalize pt-2 text-gray-400">
              District of meghalaya
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5 sm:p-10">
          <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 w-full gap-10">
            <div className="text-sm flex flex-col gap-3 order-2 sm:order-1">
              <p>
              East Khasi Hills, a vibrant administrative district in the Indian state of Meghalaya, is a picturesque area where the bustling town of Shillong serves as its headquarters. With an expanse of 2,748 square kilometers and a population of 825,922 as of the 2011 census, it stands as the most populous of Meghalaya's 12 districts. Established on October 28, 1976, when the original Khasi Hills district was divided into East and West Khasi Hills, it further expanded on June 4, 1992, to also include Ri-Bhoi District.
              </p>
              <p>
              The district’s geographical landscape is a stunning mix of rolling grasslands, deep gorges, and verdant plateaus. It stretches from the serene Shillong Plateau, known for its breathtaking vistas, to the dramatic ravines of Mawsynram and Shella-Bholaganj that border Bangladesh. Among its notable features is Shillong Peak, the highest point in the district, offering panoramic views of the surrounding countryside. The climate ranges from temperate in the highlands to tropical in the lower regions, with the southwest monsoon bringing substantial rainfall from May to September.
              </p>
              <p>
              East Khasi Hills is also renowned for its cultural richness and natural beauty. It is home to the unique whistled language of Kongthong village and the awe-inspiring Kynrem Falls. Mawlynnong village, recognized for its exceptional cleanliness, has garnered accolades as one of Asia's cleanest villages. The district's attractions include Nohkalikai Falls, one of India's tallest waterfalls, and Umiam Lake, a serene spot just outside Shillong. The well-connected Shillong, with major roads leading to Guwahati and Silchar, serves as a gateway to these enchanting sites, though interior village connectivity remains a challenge.
              </p>
            </div>
            <DirectionAwareHover imageUrl={"/Nohkalikai-Falls.webp"} className=' h-[516px] rounded-md order-1 sm:order-2'>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Nohkalikai Falls</p>
                <p className="font-normal text-sm">Cherrapunji, East Khasi Hills</p>
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
      {
        (destinations.isLoading || destinations.isRefetching || destinations.isPending || destinations.isFetching) ?
          <div className="flex justify-center px-5">
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
              <div className="flex flex-col gap-3">
                <Skeleton className='w-full h-60'></Skeleton>
                <Skeleton className='w-1/2 h-9'></Skeleton>
                <Skeleton className=' h-9'></Skeleton>
                <div className="flex justify-between">
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Skeleton className='w-full h-60'></Skeleton>
                <Skeleton className='w-1/2 h-9'></Skeleton>
                <Skeleton className=' h-9'></Skeleton>
                <div className="flex justify-between">
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Skeleton className='w-full h-60'></Skeleton>
                <Skeleton className='w-1/2 h-9'></Skeleton>
                <Skeleton className=' h-9'></Skeleton>
                <div className="flex justify-between">
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                </div>
              </div>
              <Skeleton className='w-full h-10 col-span-3'></Skeleton>
            </div>
          </div>
          :
          <div className="flex justify-center px-5 pb-5">
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
              {destinationList.length > 0 ? destinationList.map((item: LocationData, i: number) => (
                <Link href={`/destinations/${item.id}`} key={i}>
                  <Card className='overflow-hidden h-full' >
                    <div className="relative flex items-center justify-center">
                      <DirectionAwareHover1 imageUrl={item.images ? item.images[0] : ""}>
                        <p className="flex gap-3 items-center text-xl">Visit<HiArrowLongRight /></p>
                      </DirectionAwareHover1>
                    </div>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2 mb-2'><CiLocationOn />{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )) : (
                <div className="h-[80vh] col-span-3  flex justify-center items-center text-4xl">
                  No Destination !!
                </div>
              )}
              <Button variant={'outline'} disabled className=' hidden col-span-1 sm:col-span-2 md:col-span-3'>Load More</Button>
            </div>
          </div>
      }
      <Footer />
    </div>
  )
}

export default page