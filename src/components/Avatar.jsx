import { useTheme } from 'next-themes'
import React, { lazy } from 'react'
import { MagnifyingGlassIcon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const Avatar = ({className}) => {

  const { theme, setTheme } = useTheme()
  return (
    <div className='hover:animate-spin ml-auto'>
        <img loading="lazy" alt="profile-pic"
        height={40}
        width={40}
        className={`rounded-full cursor-pointer`}
        src="/profile-pic.png" 
     />
      <button className="rounded md:p-0" onClick={()=> setTheme( theme === "dark"? "light": "dark" )}>
    { theme==="dark"? <SunIcon/>: <MoonIcon/> }
    {theme}</button>
    </div>
  )
}

export default Avatar