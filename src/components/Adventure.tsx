import React from 'react'
import { FaHiking } from "react-icons/fa";
import { MdOutlineScubaDiving } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { GiUndergroundCave } from "react-icons/gi";
import { GiMountainClimbing } from "react-icons/gi";
import { GoPlus } from "react-icons/go";

const Adventure = () => {
  return (
      <div className="p-5 sm:py-16 border-t">
       <div className="flex justify-center py-5 sm:p-10 sm:pt-10 " >
            <div className="max-w-5xl w-full border-b pb-5">
                <div className="text-3xl font-black sm:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-t from-sky-50 to-gray-500 ">
                    Adventures
                </div>
                <div className="font-medium text-sm capitalize pt-2 text-gray-400">
                  Adventures of meghalaya
                </div>
            </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-5xl pb-10">
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-40 border">
              <FaHiking/>
              <div className="">
                Hiking
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-40 border">
              <MdOutlineScubaDiving />
              <div className="">
                Scuba Diving
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-40 border">
              <GiCampingTent/>
              <div className="">
                Camping
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-40 border">
              <GiUndergroundCave/>
              <div className="">
                Caving
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-40 border">
              <GiMountainClimbing/>
              <div className="">
                Rock Climbing
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-40 border">
              <GoPlus/>
              <div className="">
                More
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Adventure