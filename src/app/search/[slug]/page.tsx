'use client';

import ResponsiveCard from '@/components/responsiveCard';
import { Skeleton } from '@/components/ui/skeleton';
import { supabaseUrl } from '@/lib/supabaseUrl';
import { DestinationDataType } from '@/types/destinationDataType';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['SearchQuery', slug],
        queryFn: async (): Promise<DestinationDataType[]> => {
            const res = await axios.post(
                `${(process.env.NODE_ENV === "development")?"http://127.0.0.1:54321":"https://iljvzqnofwssylgsftko.supabase.co"}/functions/v1/hybrid-search`,
                { query: decodeURI(slug) },
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return res.data;
        },
        enabled: !!slug,
        refetchOnWindowFocus: false
    });

    if (isError) {
        return (
            <>
            Something when wrong, please try again!
            {JSON.stringify(error.message)}
            </>
        )
    }

    return (
        <div className="text-sm sm:text-base px-4 sm:px-0 h-96">
            <p>
                Search result for{' '}
                <span className="text-base sm:text-lg font-semibold capitalize">{decodeURI(slug)}</span>
            </p>
            {isLoading &&
                <div className='pt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 '>
                    {
                        Array.from({ length: 9 }).map((_, index) => (
                            <div className="flex flex-col gap-2" key={index}>
                                <Skeleton className="h-36 sm:h-[208px] rounded-md sm:rounded-xl"></Skeleton>
                                <div className="flex gap-2">
                                    <Skeleton className="size-4 rounded-full"></Skeleton>
                                    <Skeleton className="h-4 rounded-md w-1/2"></Skeleton>
                                </div>
                                <Skeleton className="h-5 sm:h-10 rounded-md w-[169px] sm:w-[255px]"></Skeleton>
                                <Skeleton className="h-3 rounded-md w-1/3"></Skeleton>
                            </div>
                        ))
                    }
                </div>
            }

            <div className='pt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 '>
                {data?.map((item: DestinationDataType, i: number) => (
                    <ResponsiveCard
                        i={i}
                        key={i}
                        created_at={item.created_at}
                        rating={item.rating}
                        url={`/destinations/${item.slug}`}
                        imgUrl={supabaseUrl(item.images[0].image_url)}
                        name={item.name as string}
                        imgBlurDataUrl={item.images[0].image_blur_data_url}
                        des={item.tagline as string}
                        icon={<CiLocationOn />}
                        className='w-full h-full'
                    ></ResponsiveCard>
                ))}
            </div>
        </div>
    );
}
