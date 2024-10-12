import React from 'react'

const SectionHeader = ({name}:{name:String}) => {
  return (
    <div className="flex justify-center pt-5 mb-5 sm:p-10 bg-white " >
        <div className="max-w-5xl w-full border-b pb-5 px-1 sm:px-0">
            <div className="text-3xl font-black sm:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-t from-sky-50 to-gray-500 ">
                {name}
            </div>
            <div className="font-medium text-xs sm:text-sm capitalize pt-2 text-gray-400">
                {name} of meghalaya
            </div>
        </div>
    </div>
  )
}

export default SectionHeader