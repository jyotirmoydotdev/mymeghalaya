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
          location: "west khasi hills",
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
              West Khasi Hills
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
                West Khasi Hills, an administrative district in Meghalaya, was carved out of the larger Khasi Hills district on October 28, 1976. Its headquarters is located in Nongstoin, and the district spans a vast area of 5,247 square kilometers. According to the 2011 census, the district has a population of 383,461, which is comparable to the population of the Maldives. The population density is 73 inhabitants per square kilometer, and the district has a growth rate of 30.25% over the decade 2001-2011. The sex ratio is 980 females for every 1,000 males, with a literacy rate of 77.87%.
              </p>
              <p>
              The district is predominantly inhabited by the Khasi tribe, known for its matrilineal system of inheritance and social structure. However, the Garo tribe also has a significant presence in the Mawshynrut region of West Khasi Hills. While traditional customs have been maintained, the Khasi society has seen significant transformations in recent times, particularly due to the adoption of Western lifestyles among the educated population. This blend of modernity and tradition adds to the cultural richness of the region.
              </p>
              <p>
              Geographically, West Khasi Hills is characterized by its scenic landscapes, rolling hills, and deep gorges. The district is known for its natural beauty and plays a crucial role in Meghalaya’s cultural and ecological landscape. The road connectivity across the district is generally good, linking Nongstoin to other parts of the state, though many interior villages still face transportation challenges. Despite these difficulties, the district's unique culture and natural charm continue to make it a significant part of Meghalaya's diverse heritage.
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