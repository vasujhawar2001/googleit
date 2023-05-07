import React from 'react'
import HeaderOption from './HeaderOption'
import {MapIcon, NewspaperIcon, PhotoIcon, PlayIcon } from '@heroicons/react/24/outline';

const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-700 mt-1
    lg:justify-start justify-center lg:space-x-24 lg:pl-24
    border-b-[1px]'>
        <div className="flex space-x-6 items-center">
            <HeaderOption Icon={PhotoIcon} title="All" selected/>
            <HeaderOption Icon={PhotoIcon} title="Images" />
            <HeaderOption Icon={PlayIcon} title="Videos" />
            <HeaderOption Icon={NewspaperIcon} title="News" />
            <HeaderOption Icon={MapIcon} title="Maps" />
            <HeaderOption Icon={PhotoIcon} title="More" />
        </div>
    </div>
  )
}

export default HeaderOptions