'use client'

import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import { TiTick } from 'react-icons/ti'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { DatePickerWithRange } from "./date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "./ui/slider";
import HillsLine from "./hills";
import { ChangeEvent, useState } from "react";


export default function Header() {
    const [budget, setbudget] = useState([300])
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        
        // Check if input is empty
        if (inputValue === '') {
            setbudget([0]);
          return;
        }
        
        // Parse the input value to a number
        const numValue = parseInt(inputValue, 10);
        
        // Validate the number
        if (!isNaN(numValue)) {
          // Clamp the value between 0 and 100 (or your max)
          const clampedValue = Math.min(Math.max(numValue, 0), 2000);
          setbudget([clampedValue]);
        }
      };
    return (
        <div className="relative overflow-hidden ">
            <div className="text-[16rem] absolute font-black text-gray-100 dark:text-zinc-900 -z-10 pointer-events-none">MEGHALAYA</div>
            <div className='container my-4 px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 content-center gap-4">
                    <div className="flex justify-center items-center bg-emerald-500 rounded-md p-2 drop-shadow-lg py-2 sm:py-5">
                        <div className=" absolute -z-10">
                            <HillsLine
                            width={650}
                            color="#34d399"
                            className="w-[350px] sm:w-[650px]"
                            />
                        </div>
                        <Tabs defaultValue="holiday" className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="holiday">Holiday</TabsTrigger>
                                <TabsTrigger value="hotels">Hotels</TabsTrigger>
                            </TabsList>
                            <TabsContent value="holiday">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Holiday</CardTitle>
                                        <CardDescription>
                                            Spend your next holiday in Meghalaya and create unforgettable memories
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="date">Date</Label>
                                            <DatePickerWithRange />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="people">People</Label>
                                            <Select>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select people" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-people">1 People</SelectItem>
                                                    <SelectItem value="2-people">2 People</SelectItem>
                                                    <SelectItem value="3-people">3 People</SelectItem>
                                                    <SelectItem value="4-people">4 People</SelectItem>
                                                    <SelectItem value="5-people">5 People</SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="people">Budget</Label>
                                            <div className="flex gap-2">
                                                <Slider defaultValue={budget} onValueChange={setbudget} max={2000} step={1} />
                                                {/* <Input className="text-xs w-[4rem]" value={budget[0]} onChange={handleInputChange}></Input> */}
                                                <div>
                                                    ₹{budget}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Explore</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            <TabsContent value="hotels">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Hotels</CardTitle>
                                        <CardDescription>
                                            Book the perfect stay for your dream vacation in Meghalaya
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <Label htmlFor="date">Date</Label>
                                            <DatePickerWithRange />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="people">People</Label>
                                            <Select>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select people" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-people">1 People</SelectItem>
                                                    <SelectItem value="2-people">2 People</SelectItem>
                                                    <SelectItem value="3-people">3 People</SelectItem>
                                                    <SelectItem value="4-people">4 People</SelectItem>
                                                    <SelectItem value="5-people">5 People</SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="budget">Location</Label>
                                            <Select>
                                                <SelectTrigger className="">
                                                    <SelectValue placeholder="Select location" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1-people">Tura</SelectItem>
                                                    <SelectItem value="2-people">Shillong</SelectItem>
                                                    <SelectItem value="3-people">Jowai</SelectItem>
                                                    <SelectItem value="4-people">Cherapunji</SelectItem>
                                                    <SelectItem value="5-people"></SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">Search Hotel</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 h-full justify-center pl-0 sm:pl-16">
                        <div className=" text-3xl sm:text-6xl font-bold text-gray-700 dark:text-white">
                            Discover the <div className='font-semibold text-emerald-500 '>Scotland of the East </div>
                        </div>
                        <div className="text-gray-500 dark:text-gray-300 text-xs sm:text-base pl-0 sm:pl-4 ">Build your next unforgettable memory in Meghalaya with MyMeghalaya the ultimate one-stop guide to exploring the wonders of this breathtaking destination.</div>
                        <div className="flex flex-col pl-0 sm:pl-4 gap-2 text-xs sm:text-base pb-2">
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Be part of our growing travel community</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Discover handpicked destinations, curated just for you</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className=""><TiTick className='fill-emerald-400' /></div>
                                <div className="">Your trusted companion for exploring Meghalaya</div>
                            </div>
                        </div>
                        {/* <div className="flex items-center gap-3 pl-0 sm:pl-4 text-xs sm:text-sm">
                            <div className="flex -space-x-2">
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                                <div className=" size-6 sm:size-8 bg-gray-500 rounded-full border-2 border-white"></div>
                            </div>
                            Trusted By 100K Peoples
                        </div> */}
                        {/* <div className=" flex gap-4 pl-0 sm:pl-4">
                            <Button size={'default'} className='w-fit text-sm sm:text-base font-bold py-6 rounded-lg active:scale-105 hover:scale-105 transition-all bg-emerald-500 hover:bg-emerald-600' asChild>
                                <Link href={'/home'}>
                                    Explore More
                                </Link>
                            </Button>
                            <Button className='w-fit text-sm sm:text-base font-bold py-6 rounded-lg active:scale-105 hover:scale-105 transition-all text-emerald-600 hover:text-emerald-600' variant={'outline'} asChild>
                                <Link href={'/login'}>
                                    Join Now
                                </Link>
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
