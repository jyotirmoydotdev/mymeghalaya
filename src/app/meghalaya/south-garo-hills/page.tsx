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
          location: "south garo hills",
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
              South Garo Hills
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
              South Garo Hills, established in 1992, is an administrative district in Meghalaya and the least populous in the state. Its headquarters is located in Baghmara, and it covers an area of 1,850 square kilometers. Initially, the district had five assembly constituencies, but it has since been reduced to three. South Garo Hills is one of the regions receiving funds under the Backward Regions Grant Fund Programme due to its designation as one of India’s 250 most backward districts by the Ministry of Panchayati Raj in 2006.
              </p>
              <p>
              According to the 2011 census, the district has a population of 142,334, similar in size to the nation of Saint Lucia. The population density is 77 inhabitants per square kilometer, and its growth rate from 2001 to 2011 was a notable 41.19%. The district's sex ratio stands at 944 females for every 1,000 males, and the literacy rate is 72.39%. A majority of the population, 94.31%, belong to Scheduled Tribes. Garo is the primary language, though other minority languages such as A'Tong are also spoken.
              </p>
              <p>
              South Garo Hills is rich in natural beauty, home to the stunning Balphakram National Park, which spans 220 square kilometers. It also shares the Nokrek National Park with neighboring districts, adding to its ecological significance. The district is known for its unique wildlife, including the Siju and Baghmara Pitcher Plant Wildlife Sanctuaries and endemic species like the Cyrtodactylus karsticolus gecko. Despite its scenic landscapes and biodiversity, the district’s rich cultural and historical legacy makes it a unique part of Meghalaya’s heritage.
              </p>
            </div>
            <DirectionAwareHover imageUrl={"/chimite.webp"} className=' h-[516px] rounded-md order-1 sm:order-2'>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Chimite Lake</p>
                <p className="font-normal text-sm">Mahendraganj, South West Garo Hills</p>
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