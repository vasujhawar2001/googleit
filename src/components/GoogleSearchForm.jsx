import React, { useRef } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from 'next/router';
import { getRandom } from '@/utils/getRandom';
import { randomSongs } from '@/constants/randomSongs';

const GoogleSearchForm = () => {
    const searchInput = useRef(null);
    const router = useRouter();

    const search = (e) => {
        e.preventDefault();
        const term = searchInput.current.value;
        if (!term) return;
        router.push(`/search?query=${term}`);
    }

    const feelingAwesome = () => {
        window.open(getRandom(randomSongs));
    }

    return (
        <form>
            <div className="dark:bg-gray-900 dark:text-white flex w-full mt-6 hover:shadow-lg focus-within:shadow-lg max-w-sm rounded-full border border-gray-200 px-5 py-2 sm:max-w-xl md:max-w-2xl items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-gray-300 cursor-pointer hover:scale-110 hover:text-gray-700" />
                <input ref={searchInput} type="text" className="h-5 flex-grow ml-4 focus:outline-none dark:bg-gray-900 dark:text-white" placeholder="Search" />
                <img src='/microphone.svg' className="h-6 w-6 cursor-pointer hover:scale-110 justify-end mr-2" alt='microphone button' />
                <img src='/lens.svg' className="h-6 w-6 cursor-pointer hover:scale-110 justify-end mr-2" alt='microphone button' />
            </div>
            <div className='flex flex-col sm:flex-row space-y-4 justify-center mt-4 sm:space-x-4 sm:space-y-0'>
                <button className='btn' onClick={search}>Google Search</button>
                <button className='btn' onClick={feelingAwesome}>Feeling Awesome!</button>
            </div>
        </form>
    )
}

export default GoogleSearchForm;
