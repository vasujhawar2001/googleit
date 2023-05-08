import React, { lazy } from 'react'

const Avatar = ({className}) => {
  return (
    <div className='hover:animate-spin ml-auto'>
        <img loading="lazy" alt="profile-pic"
        height={40}
        width={40}
        className={`rounded-full cursor-pointer`}
        src="/profile-pic.png" 
     />
    </div>
  )
}

export default Avatar