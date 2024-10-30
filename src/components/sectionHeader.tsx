import React from 'react'

const SectionHeader = ({name}:{name:String}) => {
  return (
    <div className="flex justify-center pt-5 sm:pt-10 pb-5 bg-white " >
        <div className="max-w-5xl w-full px-1 sm:px-0 sm:border-b sm:pb-5"> {/* border-b pb-5 */}
            <div className="text-2xl font-black sm:text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-t from-sky-50 to-gray-500 ">
                {name}
            </div>
            <div className="font-medium text-xs sm:text-sm capitalize pt-2 text-gray-400 hidden sm:block">
                {name} of meghalaya
            </div>
        </div>
    </div>
  )
}

export default SectionHeader