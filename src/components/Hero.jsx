import Image from 'next/image'
import React from 'react'
import GoogleSearchForm from './GoogleSearchForm';


const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:mt-56 mt-40 flex-grow'>
      <Image src="/google.png" alt="Google"
        height={180} 
        width={180}/>
        <GoogleSearchForm />
    </div>
  )
}

export default Hero