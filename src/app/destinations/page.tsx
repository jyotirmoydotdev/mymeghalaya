'use client'

import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DirectionAwareHover1 } from '@/components/ui/direction-aware-hover1'
import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiArrowLongRight } from 'react-icons/hi2'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FiSearch } from 'react-icons/fi'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { LocationData } from '@/types/locationTypes'
import { FaSpinner } from 'react-icons/fa6'
import { useMediaQuery } from 'usehooks-ts'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Skeleton } from "@/components/ui/skeleton"
import { useSearchParams } from 'next/navigation'

const Page = () => {
  const searchParams = useSearchParams()
  const searchDistrict = searchParams.get('district')
  
  const [search, setSearch] = useState("");
  const [destinationList, setDestinationList] = useState<LocationData[]>([]);
  type locationType = {
    value: string
    label: string
  }
  const locationOptions: locationType[] = [
    {
      value: "all",
      label: "All"
    },
    {
      value: "south west garo hills",
      label: "South West Garo Hills"
    },
    {
      value: "west garo hills",
      label: "West Garo Hills"
    },
    {
      value: "north garo hills",
      label: "North Garo Hills"
    },
    {
      value: "east garo hills",
      label: "East Garo Hills"
    },
    {
      value: "south garo hills",
      label: "South Garo Hills"
    },
    {
      value: "west khasi hills",
      label: "West Khasi Hills"
    },
    {
      value: "south west khasi hills",
      label: "South West Khasi Hills"
    },
    {
      value: "eastern west khasi hills",
      label: "Eastern West Khasi Hills"
    },
    {
      value: "east khasi hills",
      label: "East Khasi Hills"
    },
    {
      value: "ri-bhoi",
      label: "Ri-Bhoi"
    },
    {
      value: "west jaintia hills",
      label: "West Jaintia Hills"
    },
    {
      value: "east jaintia hills",
      label: "East Jaintia Hills"
    },
  ]
  type categoryType = {
    value: string
    label: string
  }
  const categoryOptions: categoryType[] = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "waterfall",
      label: "Waterfall"
    },
    {
      value: "viewpoint",
      label: "Viewpoint"
    },
    {
      value: "hiking",
      label: "Hiking"
    }
  ]
  const [openCategory, setOpenCategory] = React.useState(false)
  const [openLocation, setOpenLocation] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [selectedLocation, setSelectedLocation] = React.useState<locationType | null>(null)
  const [selectedCategory, setSelectedCategory] = React.useState<categoryType | null>(null)

  function CategoryList({
    setOpen,
    setSelectedCategory,
  }: {
    setOpen: (open: boolean) => void
    setSelectedCategory: (category: categoryType | null) => void
  }) {
    return (
      <Command>
        <CommandInput placeholder="Filter category..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {categoryOptions.map((category) => (
              <CommandItem
                key={category.value}
                value={category.value}
                onSelect={(value) => {
                  setSelectedCategory(
                    categoryOptions.find((priority) => priority.value === value) || null
                  )
                  setOpen(false)
                }}
              >
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    )
  }
  function LocationList({
    setOpen,
    setSelectedLocation,
  }: {
    setOpen: (open: boolean) => void
    setSelectedLocation: (location: locationType | null) => void
  }) {
    return (
      <Command>
        <CommandInput placeholder="Filter location..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {locationOptions.map((location) => (
              <CommandItem
                key={location.value}
                value={location.value}
                onSelect={(value) => {
                  setSelectedLocation(
                    locationOptions.find((priority) => priority.value === value) || null
                  )
                  setOpen(false)
                }}
              >
                {location.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    )
  }

  const destinations = useQuery({
    queryKey: ['data'],
    queryFn: async (): Promise<LocationData[]> => {
      const response = await axios.get('/api/destination', {
        params: {
          search: search,
          location: selectedLocation ? selectedLocation.value : "all",
          category: selectedCategory ? selectedCategory.value : "all",
        }
      })
      setDestinationList(response.data.destination);
      return response.data.destination
    },
  })

  if (destinations.isLoading || destinations.isRefetching || destinations.isPending || destinations.isFetching) {
    return (
      <div>
        <div className="py-5">
          <div className='w-full justify-center flex px-5'>
            <div className="w-full max-w-5xl">
              <Skeleton className='w-full h-32'></Skeleton>
            </div>
          </div>
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
        </div>
        <Footer/>
      </div>
    )
  }

  return (
    <div>
      <div className="py-5">
        <div className='w-full justify-center flex px-5'>
          <div className="w-full max-w-5xl rounded-lg font-sans">
            <div className="text-4xl py-3 uppercase text-left font-sans font-bold">Destinatons</div>
            <div className="flex flex-col sm:flex-row gap-3 py-5 border-t">
              <Input className='text-[16.1px] bg-white' placeholder='Search destination' value={search} onChange={(e) => setSearch(e.target.value)} />
              {isDesktop ?
                <Popover open={openLocation} onOpenChange={setOpenLocation}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="font-normal w-full sm:w-1/3 justify-between">
                      {selectedLocation ? <>{selectedLocation.label}</> : <>Location</>}
                      <CaretSortIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0" align="start">
                    <LocationList setOpen={setOpenLocation} setSelectedLocation={setSelectedLocation} />
                  </PopoverContent>
                </Popover>
                :
                <Drawer open={openLocation} onOpenChange={setOpenLocation}>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="font-normal w-full sm:w-1/3 justify-between">
                      {selectedLocation ? <>{selectedLocation.label}</> : <>Location</>}
                      <CaretSortIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className=' rounded-t-none'>
                    <DrawerHeader className="text-left pb-0">
                      <DrawerTitle>Location</DrawerTitle>
                      <DrawerDescription>
                        Select location of your choose.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="mt-4 border-t">
                      <LocationList setOpen={setOpenLocation} setSelectedLocation={setSelectedLocation} />
                    </div>
                  </DrawerContent>
                </Drawer>
              }
              {isDesktop ?
                <Popover open={openCategory} onOpenChange={setOpenCategory}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="font-normal w-full sm:w-1/3 justify-between">
                      {selectedCategory ? <>{selectedCategory.label}</> : <>Category</>}
                      <CaretSortIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0" align="start">
                    <CategoryList setOpen={setOpenCategory} setSelectedCategory={setSelectedCategory} />
                  </PopoverContent>
                </Popover>
                :
                <Drawer open={openCategory} onOpenChange={setOpenCategory}>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="font-normal w-full sm:w-1/3 justify-between">
                      {selectedCategory ? <>{selectedCategory.label}</> : <>Category</>}
                      <CaretSortIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className=' rounded-t-none'>
                    <DrawerHeader className="text-left pb-0">
                      <DrawerTitle>Category</DrawerTitle>
                      <DrawerDescription>
                        Select category of your choose.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="mt-4 border-t">
                      <CategoryList setOpen={setOpenCategory} setSelectedCategory={setSelectedCategory} />
                    </div>
                  </DrawerContent>
                </Drawer>
              }
              <Button className='text-sm flex gap-2' onClick={() => destinations.refetch()}>
                {destinations.isRefetching ? <FaSpinner className='animate-spin' /> : <FiSearch />}
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-5">
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
      </div>
      <Footer />
    </div>
  )
}


export default Page