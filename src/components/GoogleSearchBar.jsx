import React from 'react'
import { MagnifyingGlassIcon, MicrophoneIcon, CameraIcon } from "@heroicons/react/24/outline";

const GoogleSearchBar = () => {
  return (
    <>
    <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 cursor-pointer hover:scale-110 hover:text-gray-700" />
    <input type="text" className="flex-grow ml-4 focus:outline-none" placeholder="Search" />
    <MicrophoneIcon className="h-5 w-5 cursor-pointer hover:scale-110 hover:text-gray-700 justify-end text-gray-500 mr-2"/>
    <CameraIcon className="h-5 w-5 text-gray-500 cursor-pointer hover:scale-110 hover:text-gray-700" />
    </>
  )
}

export default GoogleSearchBar