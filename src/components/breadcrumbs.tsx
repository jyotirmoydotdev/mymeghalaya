import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'

const Breadcrumbs = ({ breadcrumbs, breadcrumbPage }: {
    breadcrumbs?: {
        label: string,
        link: string,
    }[], 
    breadcrumbPage: string
}) => {
    return (
        <Breadcrumb className=' hidden sm:block'>
            <BreadcrumbList className='pl-0'>
                {
                    breadcrumbs?.map((breadcrumb, index) => (
                        <div className='flex flex-wrap items-center gap-1.5 sm:gap-2.5' key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href={breadcrumb.link}>
                                        {breadcrumb.label}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </div>
                    ))
                }
                <BreadcrumbItem>
                    <BreadcrumbPage>{breadcrumbPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default Breadcrumbs