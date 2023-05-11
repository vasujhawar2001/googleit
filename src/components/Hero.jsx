import Image from 'next/image'
import React from 'react'
import GoogleSearchForm from './GoogleSearchForm';


const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:mt-42 mt-28 flex-grow'>
      <Image src="/google.png" alt="Google"
        height={180} 
        width={180}/>
        <GoogleSearchForm />
    </div>
  )
}

export default Hero