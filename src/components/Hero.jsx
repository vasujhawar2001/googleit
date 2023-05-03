import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, MicrophoneIcon, CameraIcon } from "@heroicons/react/24/outline";
import GoogleSearchForm from './GoogleSearchForm';

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-40 flex-grow'>
      <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
        height={180} 
        width={180}/>
        <GoogleSearchForm />
    </div>
  )
}

export default Hero