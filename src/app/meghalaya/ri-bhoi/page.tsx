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
              Ri Bhoi
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
              Ri Bhoi is a captivating administrative district in Meghalaya, India, known for its rugged terrain and unique geographical features. Nestled approximately 53 kilometers from Shillong and 50 kilometers from Guwahati, the district covers an area of 2,378 square kilometers. Established as a full-fledged district on June 4, 1992, Ri Bhoi was carved from the East Khasi Hills. Despite its expansive size, it remains one of the least populous districts in Meghalaya, with a population of 258,840 as of the 2011 census. This relatively low population density adds to the district’s tranquil charm.
              </p>
              <p>
              The landscape of Ri Bhoi is characterized by a series of hill ranges that gradually descend into the Brahmaputra Valley. The district is dotted with significant rivers, including the Umtrew, Umsiang, Umran, and Umiam, which add to its natural beauty. The region's diverse topography, from rugged hills to lush river valleys, contributes to its ecological richness. Notably, the Nongkhyllem Wildlife Sanctuary, established in 1981, covers 29 square kilometers and serves as a haven for local wildlife.
              </p>
              <p>
              Ri Bhoi is also notable for its connectivity and infrastructure. It boasts the only airport in Meghalaya, located at Umroi, and is well-linked by National Highway No. 37, which connects to Shillong and beyond. The district's strategic location makes it a vital junction for travel to Assam, Mizoram, and other northeastern states. With a population density of 109 inhabitants per square kilometer and a literacy rate of 77.22%, Ri Bhoi reflects a blend of traditional tribal culture and modern connectivity, making it a unique and important part of Meghalaya.
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