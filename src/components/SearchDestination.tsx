import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { FiSearch } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'

const SearchDestination = () => {
  return (
    <div className='w-full justify-center flex px-5'>
        <div className="w-full max-w-5xl rounded-lg border shadow-sm">
            <div className="text-4xl p-3 italic text-center" >Destinatons</div>
            <div className="flex flex-col sm:flex-row gap-3 p-3 border-t">
                <Input className=' bg-white text-sm sm:text-base' placeholder='Search destination'/>
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
  )
}

export default SearchDestination