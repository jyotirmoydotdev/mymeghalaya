'use client'

import { Button } from '@/components/ui/button'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { DistrictDataType } from '@/types/districtDataType'
import { LocationDataType } from '@/types/locationDataTypes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React from 'react'
import Loading from './loading'
import NotFound from './not-found'
import Markdown from 'react-markdown'
import ResponsiveCard from '@/components/responsiveCard'
import Breadcrumbs from '@/components/breadcrumbs'
import { DestinationDataType } from '@/types/destinationDataType'
import { supabaseUrl } from '@/lib/supabaseUrl'

const Page = () => {
  const { district } = useParams();
  const fetchDistrictData = useQuery({
    queryKey: ['district'],
    queryFn: async (): Promise<{
      msg: string;
      data: {
        districtData: DistrictDataType;
        destinationData: DestinationDataType[];
      }
    }> => {
      const response = await axios.get('/api/v1/district', {
        params: {
          id: district,
        }
      })
      return response.data
    },
  })

  if (fetchDistrictData.isLoading || fetchDistrictData.isFetching) {
    return (<Loading />)
  }

  if (fetchDistrictData.data?.data == null) {
    return <NotFound />
  }

  return (
    <div>
      <div className="px-5 container max-w-5xl">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Districts",
              link: "/search/districts"
            }
          ]}
          breadcrumbPage={fetchDistrictData.data.data.districtData.name}
        ></Breadcrumbs>
        <div className="flex justify-center pt-5 sm:pb-0 " >
          <div className="max-w-5xl w-full">
            <div className="text-2xl capitalize font-bold sm:font-black text-gray-600 sm:text-5xl tracking-tight flex items-center gap-2">
              {/* <FaLocationDot/> */}
              {fetchDistrictData.data?.data.districtData.name}
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5 sm:py-10">
          <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 w-full gap-10">
            <div className="text-sm flex flex-col gap-3 order-2 sm:order-1">
              <Markdown>
                {fetchDistrictData.data?.data.districtData.about}
              </Markdown>
            </div>
            <DirectionAwareHover name={fetchDistrictData.data.data.districtData.name} imageUrl={fetchDistrictData.data?.data.districtData.img.url} imgBlurDataUrl={fetchDistrictData.data.data.districtData.img.blurDataUrl} className=' h-64 sm:h-[516px] rounded-md order-1 sm:order-2'>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">{fetchDistrictData.data?.data.districtData.img?.name}</p>
                <p className="font-normal text-sm">{fetchDistrictData.data?.data.districtData.img?.location}</p>
              </div>
            </DirectionAwareHover>
          </div>
        </div>
      </div>

      {
        fetchDistrictData.data.data.destinationData.length ? (
          <>
            <div className="flex justify-center py-5  px-4" >
              <div className="max-w-5xl w-full ">
                <div className="text-lg tracking-tight sm:text-4xl font-medium sm:font-black text-black sm:text-gray-400 sm:uppercase">Nearby</div>
              </div>
            </div>
            <div className="flex justify-center px-4 pb-5">
              <div className="py-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
                {
                  fetchDistrictData.data?.data.destinationData.map((item: DestinationDataType, i: number) => (
                    <ResponsiveCard
                      key={i}
                      i={i}
                      rating={item.rating}
                      created_at={item.created_at}
                      url={`/destinations/${item.slug}`}
                      imgUrl={supabaseUrl(item.images[0].image_url)}
                      imgBlurDataUrl={item.images[0].image_blur_data_url}
                      name={item.name as string}
                      des={item.tagline as string}
                      className='w-full'
                    />
                  ))
                }
              </div>
            </div>
          </>
        ) : (
          <></>
        )
      }
    </div>
  )
}

export default Page