import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DirectionAwareHover1 } from '@/components/ui/direction-aware-hover1'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FontItalicIcon } from '@radix-ui/react-icons'
import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiArrowLongRight } from 'react-icons/hi2'

const page = () => {
  const data = [1,1,1,1,1,1]
  return (
    <div >
        <Navbar/>
        <div className='w-full justify-center flex px-5 '>
          <div className="w-full max-w-5xl rounded-xl border shadow-sm">
            <div className="text-4xl p-3 italic text-center" >Experiences</div>
            <div className="flex flex-col sm:flex-row gap-3 p-3 border-t">
              <Input className=' bg-white text-sm sm:text-base' placeholder='Search experiences'/>
                <Select>
                    <SelectTrigger className="w-full sm:w-1/3 bg-white text-sm ">
                        <SelectValue placeholder='Category'/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="Tourist attraction">Tourist attraction </SelectItem>
                            <SelectItem value="Historical landmark">Historical landmark</SelectItem>
                            <SelectItem value="Hiking area">Hiking area</SelectItem>
                            <SelectItem value="Sport club">Sport club</SelectItem>
                            <SelectItem value="Playground">Playground</SelectItem>
                            <SelectItem value="Garden">Garden</SelectItem>
                            <SelectItem value="Museum">Museum</SelectItem>
                            <SelectItem value="Park">Park</SelectItem>
                            <SelectItem value="Gym">Gym</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-full sm:w-1/3 bg-white text-sm ">
                        <SelectValue placeholder="Subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="Waterfall">Waterfall</SelectItem>
                        <SelectItem value="River">River</SelectItem>
                        <SelectItem value="Hill">Hill</SelectItem>
                        <SelectItem value="Forest">Forest</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button className='text-sm flex gap-2'>
                    <FiSearch/>
                    Search
                </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-5">
              <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
                {data.map((item,i)=>(
                  <Card className='overflow-hidden' key={i}>
                    <div className="relative flex items-center justify-center">
                      <DirectionAwareHover1 imageUrl={"/tepota.webp"}>
                          <p className="font-bold flex gap-3 items-center text-xl">Visit<HiArrowLongRight/></p>
                      </DirectionAwareHover1>
                    </div>
                    <CardHeader>
                      <CardTitle>Pelga</CardTitle>
                      <CardDescription>{"Tura's biggest waterfall"}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="flex justify-between w-full">
                        <Button className='text-xs' variant={'outline'}>Tourist attraction</Button>
                        <Button className='text-xs' variant={'outline'}>Waterfall</Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
                <Button variant={'outline'} className='col-span-1 sm:col-span-2 md:col-span-3'>Load More</Button>
              </div>
          </div>
        <Footer/>
    </div>
  )
}

export default page