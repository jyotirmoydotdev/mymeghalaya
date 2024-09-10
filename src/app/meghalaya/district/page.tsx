'use client'

import { useParams, useSearchParams } from 'next/navigation';
import React from 'react'

const page = () => {
  const searchParams = useSearchParams()
  const search = searchParams.get('district')
  return (
    <div>
      {search}
    </div>
  )
}

export default page