import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, MicrophoneIcon, CameraIcon } from "@heroicons/react/24/outline";
import GoogleSearchBar from './GoogleSearchBar';

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-40 flex-grow'>
      <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
<<<<<<< HEAD
        height={200} 
        width={200}/>
      <form className="flex w-full mt-6 hover:shadow-lg focus-within:shadow-lg max-w-sm rounded-full
      border border-gray-200 px-5 py-3 sm:max-w-xl">
      <GoogleSearchBar />
      </form> 
=======
        height={180} 
        width={180}/>
      <form>
      <div className="flex w-full mt-6 hover:shadow-lg focus-within:shadow-lg max-w-sm rounded-full
      border border-gray-200 px-5 py-2 sm:max-w-xl lg-max-w-2xl items-center">
      <GoogleSearchBar />
      </div>
      <div className='flex flex-col sm:flex-row space-y-4 justify-center mt-4 sm:space-x-4 sm:space-y-0'> 
      <button className='btn'>Google Search</button>
      <button className='btn'>Feeling Awesome!</button>
      </div>
      </form>
>>>>>>> d47f919 (fixed css/errors)
    </div>
  )
}

export default Hero