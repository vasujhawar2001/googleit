import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const PaginationButtons = () => {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
  return (
    <div className='flex justify-evenly sm:ml-44 max-w-lg mb-10 text-[9px]'>
        {startIndex >= 10 && (
            <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
            <div className='flex flex-grow flex-col items-center cursor-pointer
            hover:underline'>
                <ChevronLeftIcon className='h-4'/>
                <p>Previous</p>
            </div>
            </Link>
        )}

        <Link href={`/search?term=${router.query.term}&start=${startIndex+10}`}>
            <div className='flex flex-col items-center cursor-pointer
            hover:underline'>
                <ChevronRightIcon className='h-4'/>
                <p>Next</p>
            </div>
        </Link>
    </div>
  )
}

export default PaginationButtons