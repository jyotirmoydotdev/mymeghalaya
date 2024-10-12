import React from 'react'
import { FaHiking } from "react-icons/fa";
import { MdOutlineScubaDiving } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { GiUndergroundCave } from "react-icons/gi";
import { GiMountainClimbing } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import SectionHeader from './sectionHeader';

const Adventure = () => {
  return (
      <div className="p-5 sm:py-16 border-t">
       <SectionHeader name={"Adventures"}/>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-3 w-full max-w-5xl text-xs sm:text-base pb-10">
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-20 sm:h-40 border">
              <FaHiking/>
              <div className="">
                Hiking
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-20 sm:h-40 border">
              <MdOutlineScubaDiving />
              <div className="">
                Scuba Diving
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-20 sm:h-40 border">
              <GiCampingTent/>
              <div className="">
                Camping
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-20 sm:h-40 border">
              <GiUndergroundCave/>
              <div className="">
                Caving
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-20 sm:h-40 border">
              <GiMountainClimbing/>
              <div className="">
                Rock Climbing
              </div>
            </div>
            <div className="flex gap-3 flex-col justify-center rounded-md items-center h-20 sm:h-40 border">
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