import React from 'react'
import { CiLocationOn } from 'react-icons/ci'

const page = () => {
    return (
        <div className='container px-4 max-w-7xl'>
            <div className="text-2xl font-bold py-5">
                Browse all
            </div>
            <div className="grid gap-3 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
                <div className=" relative">
                    <div className=" aspect-video shadow-sm border border-muted rounded-lg">
                        <div className="text-2xl p-4 font-bold">
                            Destinations
                        </div>
                        <div className=" absolute bottom-5 right-5 aspect-square h-10 bg-gray-50">
                            {/* <CiLocationOn size={100}/> */} hi
                        </div>
                    </div>
                </div>
                <div className=""><div className=" aspect-video shadow-sm border border-muted rounded-lg"><div className="text-2xl p-4 font-bold">Districts</div></div></div>
                <div className=""><div className=" aspect-video shadow-sm border border-muted rounded-lg"><div className="text-2xl p-4 font-bold">Foods</div></div></div>
                <div className=""><div className=" aspect-video shadow-sm border border-muted rounded-lg"><div className="text-2xl p-4 font-bold">Advature</div></div></div>
                <div className=""><div className=" aspect-video shadow-sm border border-muted rounded-lg"><div className="text-2xl p-4 font-bold">Tribe</div></div></div>
                <div className=""><div className=" aspect-video shadow-sm border border-muted rounded-lg"><div className="text-2xl p-4 font-bold"></div></div></div>
            </div>
        </div>
    )
}

export default page