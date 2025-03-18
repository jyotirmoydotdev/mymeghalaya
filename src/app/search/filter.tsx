'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { usePathname } from 'next/navigation'
import React from 'react'

const Filter = () => {
    const pathname = usePathname();
    const paths = pathname.split('/');
    return (
            <aside className="fixed top-2 bottom-3 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border rounded-2xl dark:border-border md:sticky md:block overflow-y-auto no-scrollbar text-gray-500 font-medium">
                <Accordion type='multiple' defaultValue={['destinations', 'districts']}>
                    <AccordionItem value="destinations">
                        <AccordionTrigger className='p-5 font-bold text-base'>Destinations</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-2 pl-5">
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'garden'} /><div className="">garden</div></div>
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'gym'} /><div className="">gym</div></div>
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'hiking area'} /><div className="">hiking area</div></div>
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'historical landmark'} /><div className="">historical landmark</div></div>
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'museum'} /><div className="">museum</div></div>
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'park'} /><div className="">park</div></div>
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'playground'} /><div className="">playground</div></div>
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'sports club'} /><div className="">sports club</div></div>
                                <div className=" capitalize inline-flex gap-2 items-center"><Checkbox value={'tourist attracti'} /><div className="">tourist attraction</div></div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="districts">
                        <AccordionTrigger className='p-5 font-bold text-base'>Districts</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-2 pl-5">
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'South West Garo Hills'} /><div className="">South West Garo Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'West Garo Hills'} /><div className="">West Garo Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'North Garo Hills'} /><div className="">North Garo Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'East Garo Hills'} /><div className="">East Garo Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'South Garo Hills'} /><div className="">South Garo Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'West Khasi Hills'} /><div className="">West Khasi Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'Eastern West Khasi Hills'} /><div className="">Eastern West Khasi Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'South West Khasi Hills'} /><div className="">South West Khasi Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'Ri Bhoi'} /><div className="">Ri Bhoi</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'East Khasi Hills'} /><div className="">East Khasi Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'West Jaintia Hills'} /><div className="">West Jaintia Hills</div></div>
                                <div className=" inline-flex gap-2 items-center"><Checkbox value={'East Jaintia Hill'} /><div className="">East Jaintia Hill</div></div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </aside>
    )
}

export default Filter