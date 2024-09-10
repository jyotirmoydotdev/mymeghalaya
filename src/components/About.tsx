import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

const About = () => {
  return (
    <div className='flex justify-center min-h-[100vh] p-10 sm:py-16 border-t'>
        <div>
            <div className="text-3xl sm:text-6xl text-left sm:text-center pb-10 pt-0 sm:pt-10 sm:px-10 " >
                About
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 pt-0 pb-5 sm:p-20 justify-center">
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center">M</div>
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center sm:mt-4">E</div>
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center sm:mt-8">G</div>
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center sm:mt-12">H</div>
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center sm:mt-16">A</div>
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center sm:mt-12">L</div>
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center sm:mt-8">A</div>
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center sm:mt-4">Y</div>
                <div className="bg-gray-100 h-24 w-full sm:h-64 sm:w-24 text-center text-6xl font-extrabold text-gray-50 flex items-center justify-center">A</div>
            </div>
            <div className="flex justify-center">
                <div className="max-w-5xl text-sm sm:text-base text-left sm:text-center py-5 sm:px-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam ipsum rerum pariatur saepe laudantium qui accusantium mollitia. Aliquid perspiciatis accusantium aspernatur in voluptatibus maiores nulla, vitae harum nostrum accusamus.
                </div>
            </div>
            <div className="text-blue-600 text-left flex sm:justify-center items-center gap-2 sm:py-5 italic hover:translate-x-3 animate transition" >
                Read more <HiArrowLongRight/>
            </div>
        </div>
    </div>
  )
}

export default About