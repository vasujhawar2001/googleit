import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, MicrophoneIcon, CameraIcon } from "@heroicons/react/24/outline";
import GoogleSearchForm from './GoogleSearchForm';


const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:mt-40 mt-28 flex-grow'>
      <Image src="/google.png" alt="Google"
        height={180} 
        width={180}/>
        <GoogleSearchForm />
    </div>
  )
}

export default Hero