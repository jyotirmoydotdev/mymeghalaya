'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// Icons
import { IoBookmark, IoCopyOutline, IoTimeOutline } from "react-icons/io5";
import { CiBookmark, CiLocationOn, CiParking1 } from 'react-icons/ci'
import { FaLocationDot, FaSailboat } from "react-icons/fa6";
import { FaAngleLeft, FaPlane, FaRoad } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
import { PiTicketThin } from "react-icons/pi";
import { MdGroups2, MdSunny } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";

// Components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveCard from '@/components/responsiveCard'
import ShareButton from "@/components/shareButton";
import { toast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button'
import Loading from './loading'

// Types and Functions
import Markdown from 'react-markdown'
import Breadcrumbs from '@/components/breadcrumbs'
import { DestinationDataType } from '@/types/destinationDataType'
import { supabaseUrl } from '@/lib/supabaseUrl'
import { GiWinterGloves } from "react-icons/gi";


const Pages = () => {
  const { slug } = useParams()

  const [aboutState, setAboutState] = useState(false);
  const [isBookamark, setIsBookmark] = useState(false);

  const queryClient = useQueryClient();
  const getFromCache = (key: string) => {
    return queryClient.getQueryData([key]);
  };

  const convertTo12HourFormat = (timeRange: string): string => {
    // Split the input into start and end times
    const [start, end] = timeRange.split('-');
  
    // Helper function to convert a single time string
    const formatTime = (time: string): string => {
      const [hour, minute] = time.split(':').map(Number);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const formattedHour = hour % 12 || 12; // Convert 0 to 12 for midnight
      return `${formattedHour}:${minute.toString().padStart(2, '0')} ${ampm}`;
    };
  
    // Convert start and end times
    const formattedStart = formatTime(start);
    const formattedEnd = formatTime(end);
  
    return `${formattedStart}-${formattedEnd}`;
  };

  const convertToDay = (day: number) => {
    switch (day) {
      case 0:
        return "Monday"
        break;
      case 1:
        return "Tuesday";
        break;
      case 2:
        return "Wednesday";
        break;
      case 3:
        return "Thurday";
        break;
      case 4:
        return "Firday";
        break;
      case 5:
        return "Saturday ";
        break;
      case 6:
        return "Sunday";
        break;
      default:
        break;
    }
  }

  const sortOrder: Record<string, number> = {
    all: 0,
    Indians: 1,
    foreigner: 2,
  };

  const fetchDestination = useQuery({
    queryKey: [`/destination/${slug}`],
    queryFn: async (arg): Promise<{ destination: DestinationDataType, nearby_attractions: DestinationDataType[] }> => {
      const cache = getFromCache(`/destination/${slug}`);
      if (cache) {
        return cache as Promise<{ destination: DestinationDataType, nearby_attractions: DestinationDataType[] }>;
      }

      const response = await axios.get(`/api/v1/destinations/${slug}`)
      return response.data.data
    },
    refetchOnWindowFocus: false,
    refetchInterval: false,
  })

  if (fetchDestination.isLoading || fetchDestination.isFetching) {
    return (
      <Loading />
    )
  }

  if (fetchDestination.isSuccess === false) {
    return (
      <>
        <div className="flex flex-col gap-3 justify-center items-center h-[90vh] text-4xl">
          No Destination !
          <Link href="/" >
            <Button>Back to Home</Button>
          </Link>
        </div>
      </>
    )
  }

  const sortTicketsByVisitor = (tickets: Array<{ visitor: string; [key: string]: any }>) => {
    const sortOrder: Record<string, number> = {
      all: 0,
      indians: 1,
      foreigners: 2,
    };
  
    return tickets.sort((a, b) => {
      return (sortOrder[a.visitor] || 99) - (sortOrder[b.visitor] || 99);
    });
  }; 
    

  return (
    <div className="py-4 container max-w-5xl p-4 no-scrollbar overflow-hidden lg:overflow-visible">

      {/* Breadcrumb */}
      <Breadcrumbs
        breadcrumbs={
          [
            {
              label: "Destinations",
              link: "/search/destinations"
            }
          ]
        }
        breadcrumbPage={fetchDestination.data.destination.name || ""}
      ></Breadcrumbs>

      {/* Header */}
      <div className="flex justify-between items-center relative">
        <div className=" overflow-ellipsis font-black text-gray-100 absolute text-9xl -z-10 flex h-full w-full justify-center items-start pointer-events-none">
          MYMEGHALAYA
        </div>
        <div className="flex flex-col gap-1 sm:gap-3 pb-3">
          <div className="text-2xl font-bold sm:font-black text-gray-600 sm:text-5xl tracking-tight">{fetchDestination.data.destination.name}</div>
          <div className="flex gap-1 text-xs text-gray-500 items-center">
            <FaLocationDot />
            {fetchDestination.data.destination.district}, Meghalaya
          </div>
        </div>
        <div className="flex gap-1">
          <ShareButton name={fetchDestination.data.destination.name as string} url={window.location.href} description={fetchDestination.data.destination.tagline as string} />
          {/* <Button className=" p-2 active:scale-75 hover:bg-transparent transition-transform" disabled onClick={() => setIsBookmark(!isBookamark)} variant={'ghost'}>
            {
              isBookamark ? (
                <IoBookmark className="fill-green-500 size-4" />
              ) : (
                <CiBookmark className="stroke-1 size-4" />
              )
            }
          </Button> */}
        </div>
      </div>

      {/* Images */}
      <Carousel className="w-full sm:mt-5">
        <CarouselContent>
          {fetchDestination.data.destination.images?.map((image, index) => (
            <CarouselItem key={index} className=' sm:basis-1/2'>
              <div className="p-1">
                <Card>
                  <CardContent className="aspect-video p-0 object-cover ">
                    <Image alt={image.image_title} width={500} height={500} loading={'lazy'} placeholder={'blur'} blurDataURL={image.image_blur_data_url} className='h-full w-full rounded-xl shadow-sm border border-muted object-cover' src={supabaseUrl(image.image_url)}></Image>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Travel Information */}
      <div className="sm:mt-10 mt-0 relative">
        <div className="text-lg tracking-tight sm:text-4xl font-medium font-sans text-gray-700 hidden sm:block">Informations</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-0 text-xs sm:text-sm font-medium gap-5 max-w-5xl w-full">

          <div onClick={() => setAboutState(!aboutState)} className=" transition-all duration-500 ease-in-out pb-2">
            <div className={`overflow-hidden transition-all ${aboutState ? 'h-full sm:max-h-full' : 'max-h-[4.5rem] sm:max-h-[23rem]'} relative`}>
              <Markdown className={"blog-content font-normal leading-snug sm:leading-loose text-left text-sm sm:text-base"}>
                {fetchDestination.data.destination.description}
              </Markdown>
              {!aboutState && (
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              )}
            </div>
          </div>

          <Tabs defaultValue="timing" className="bg-white self-start sticky top-0 sm:pt-2">
            <TabsList className="grid w-full grid-cols-4 text-xs sm:text-base">
              <TabsTrigger className="flex gap-1" value="timing">  Timing</TabsTrigger>
              <TabsTrigger className="flex gap-1" value="ticket">  Ticket</TabsTrigger>
              <TabsTrigger className="flex gap-1" value="parking"> Parking</TabsTrigger>
              <TabsTrigger className="flex gap-1" value="distance">Distance</TabsTrigger>
            </TabsList>
            <TabsContent value="timing" className=''>
              <div className="border flex flex-col p-5 gap-3 rounded-md shadow-sm text-xs sm:text-sm font-medium ">
                {/* {fetchDestination.data.destination.timing?.map((item, i) => (
                  <div className="flex justify-between pb-2" key={i}>
                    <div className=" flex gap-2 items-center">
                      <IoTimeOutline />
                      <div className="">{item.day}</div>
                    </div>
                    <div className="">{item.time}</div>
                  </div>
                ))} */}
                {
                  (fetchDestination.data.destination.timing) ? (
                    <>
                      {fetchDestination.data.destination.timing.map((item, i) => (
                        <div className="flex justify-between pb-2" key={i}>
                          <div className=" flex gap-2 items-center">
                            <IoTimeOutline />
                            <div className="">{convertToDay(i)}</div>
                          </div>
                          <div className="">{convertTo12HourFormat(item)}</div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      No timing avilable
                    </>
                  )
                }
              </div>
            </TabsContent>
            <TabsContent value="ticket">
              <div className="flex flex-col gap-2">
                {
                  fetchDestination.data.destination.tickets? (
                    <div className="flex flex-col p-5 shadow-sm rounded-md gap-3 border">
                      {/* <div className="text-base flex gap-2 items-center border-b pb-2">
                        <div className="">
                          <MdGroups2 />
                        </div>
                        <div className="">
                          All
                        </div>
                      </div> */}
                      {
                        sortTicketsByVisitor(fetchDestination.data.destination.tickets).map((item, i) => (
                          <div className="text-xs pb-2 sm:text-sm flex gap-2 items-center" key={i}>
                            {/* <PiTicketThin size={20} className="hover:scale-150 transition" /> */}
                            {
                              item.visitor == "all" ? <MdGroups2 size={20} className="hover:scale-150 transition" /> : <>{ item.visitor == "indians"? "🇮🇳": "🌎"}</>
                            }
                            <div className=" capitalize">{item.visitor}</div>
                            <div key={i} className="flex justify-between w-full">
                              <div className=" capitalize">{item.type}</div>
                              <div className="">₹{item.price}</div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ) : (<></>)
                }
              </div>
            </TabsContent>
            <TabsContent value="distance" className="gap-2 flex flex-col">
              <div className="border flex flex-col p-5 gap-3 rounded-md shadow-sm text-xs sm:text-sm font-medium ">
                {
                  fetchDestination.data.destination.distance?.map((item, i) => (
                    <div className="flex items-center justify-between" key={i}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-2">
                          <CiLocationOn className=" hover:scale-150 transition" />
                          <div key={i} className="hover:underline">{item.distance}</div>
                        </div>
                      </a>
                      <div className="flex gap-2">
                        <CopyToClipboard text={item.link} onCopy={() => {
                          return toast({
                            title: "Copied to clipboard",
                            description: "Now you can share with you friends.",
                          })
                        }}>
                          <IoCopyOutline className="hover:scale-150 transition" />
                        </CopyToClipboard>
                        <div className="">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <TbExternalLink className="hover:scale-150 transition" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="flex justify-around pb-3 pt-5 border shadow-sm rounded-md">
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className={`px-4 py-3 shadow-sm rounded-sm border ${fetchDestination.data.destination.transport[0] ? "bg-green-100" : "bg-red-100"}`}><FaRoad /></div>
                  <div className="text-xs">Road</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className={`px-4 py-3 shadow-sm rounded-sm border ${fetchDestination.data.destination.transport[1] ? "bg-green-100" : "bg-red-100"}`}><FaPlane /></div>
                  <div className="text-xs">Air</div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <div className={`px-4 py-3 shadow-sm rounded-sm border ${fetchDestination.data.destination.transport[2] ? "bg-green-100" : "bg-red-100"}`}><FaSailboat /></div>
                  <div className="text-xs">Water</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="parking">
              <div className="flex flex-col p-5 shadow-sm rounded-md gap-3 border">
                {
                  fetchDestination.data.destination.parkings?.map((item, i) => (
                    <div className="text-xs sm:text-sm flex gap-2 items-center" key={i}>
                      <CiParking1 size={20} className="hover:scale-150 transition" />
                      <div key={i} className="flex justify-between w-full">
                        <div className=" capitalize">{item.type}</div>
                        <div className="">₹{item.price}</div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Nearby Section */}
      <div className="sm:mt-10 mt-5">
        {
          (fetchDestination.data.nearby_attractions.length === 0 || fetchDestination.data.nearby_attractions == null) ? (
            <></>
          ) : (
            <div className="flex flex-col">
              <div className="text-lg tracking-tight sm:text-4xl font-medium font-sans text-gray-700 pb-2">Nearby</div>
              <div className="flex justify-center">
                <div className='flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-1 w-full pb-5 pt-2 overflow-x-scroll no-scrollbar'>
                  {
                    fetchDestination.data.nearby_attractions?.map((item, i) => (
                      <ResponsiveCard
                        key={i}
                        i={i}
                        created_at={item.created_at}
                        rating={item.rating}
                        url={`/destinations/${item.slug}`}
                        icon={<CiLocationOn />}
                        imgUrl={supabaseUrl(item.images[0].image_url)}
                        imgBlurDataUrl={item.images[0].image_blur_data_url}
                        name={item.name as string}
                        des={item.tagline as string}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Pages