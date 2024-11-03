import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const SectionHeader = ({ name, url }: { name: String, url: string }) => {
  return (
    <div className="flex justify-center items-center pt-5 sm:pt-10 pb-5 bg-white " >
      <div className="max-w-5xl w-full px-1 sm:px-0 sm:border-b sm:pb-5"> {/* border-b pb-5 */}
        <div className="text-2xl font-black sm:text-6xl bg-clip-text uppercase text-transparent bg-gradient-to-t from-sky-50 to-gray-500 ">
          {name}
        </div>
        <div className="font-medium text-xs sm:text-sm capitalize pt-2 text-gray-400 hidden sm:block">
          {name} of meghalaya
        </div>
      </div>
      <Link href={url}>
        <div className="text-xs flex gap-2 font-semibold items-center text-gray-500 sm:hidden">
          <div className='text-nowrap'>View All</div>
          <GoArrowRight />
        </div>
      </Link>
    </div>
  )
}

export default SectionHeader