'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const SearchInput = () => {
    const [SearchQuery, setSearchQuery] = React.useState('')
    const onSearch = (event: React.FormEvent) => {
        event.preventDefault()
        const router = useRouter();

        const encodedSearchQuery = encodeURI(SearchQuery);

        router.push(`/search?q=${encodedSearchQuery}`)
    };
    return (
        <form className="w-full flex-1 md:w-auto md:flex-none" onSubmit={onSearch}>
            <input
                value={SearchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:text-black focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.3rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
                placeholder='What are you looking for?'
            >
            </input>
        </form>
    )
}

export default SearchInput