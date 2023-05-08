import { GlobeAltIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Footer = ({home}) => {
  return (
    <footer className={`w-full divide-y-2 div-gray-300 bg-gray-100 text-xs
    text-gray-400 mt-10 ${home==="home" ? 'sticky bottom-0' : ''}`}>
        <div className='flex flex-row px-4 py-1'>
            <GlobeAltIcon className='h-6 hover:animate-spin mr-2' />
            <a href='/' className='link text-sm'>India</a>
        </div>
        <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start px-2 py-2 '>
            <a href='/' className='link'>LinkedIn</a>
            <a href='/' className='link'>GitHub</a>
            <a href='/' className='link'>Twitter</a>
        </div>
    </footer>
  )
}

export default Footer