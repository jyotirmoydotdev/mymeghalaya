import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
        <div className="flex flex-col gap-3 items-center">
            <div className="text-3xl">Not Found !</div>
            <p>Could not find requested district</p>
            <Link href="/">
                <Button>
                    Return Home
                </Button>
            </Link>
      </div>
    </div>
  )
}