import { useTheme } from 'next-themes'
import React, { lazy } from 'react'

const Avatar = ({className}) => {

  const { theme, setTheme } = useTheme()
  return (
    <div className='flex ml-auto'>
    <div className='hover:animate-spin'>
        <img loading="lazy" alt="profile-pic"
        height={40}
        width={40}
        className={`rounded-full cursor-pointer`}
        src="/profile-pic.png" 
     />
    </div>
    <div className='h-10 flex rounded-full md:p-0 ml-2 dark:bg-gray-700 dark:text-white'>
    <button className="items-center flex justify-center" 
      onClick={()=> setTheme( theme === "dark"? "light": "dark" )}>
      { theme==="dark"? <SunIcon className='h-9'/>: <MoonIcon className='h-9'/> }
      </button>
    </div>
    </div>
  )
}

export default Avatar