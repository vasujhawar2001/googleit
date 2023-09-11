import Image from 'next/image'
import React from 'react'
import GoogleSearchForm from './GoogleSearchForm';


const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:mt-56 mt-36'>
      <Image src="/google.png" alt="Google"
        height={200} 
        width={200}
        className="relative w-60 h-30"/>
        <GoogleSearchForm />
    </div>
  )
}

export default Hero