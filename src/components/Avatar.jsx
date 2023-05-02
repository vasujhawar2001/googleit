import React, { lazy } from 'react'

const Avatar = ({url}) => {
  return (
    <div>
        <img loading="lazy" alt="profile-pic"
        className='h-8 rounded-full cursor-pointer transition duration-250
        transform hover:scale-110'
        src="https://media.licdn.com/dms/image/D4D03AQFQVQ15dfhwdw/profile-displayphoto-shrink_800_800/0/1675336728151?e=1698883200&v=beta&t=Q8RR5FmHupS3z7B7KpamKhM3ZHo-kEzdrd4j9GNN8tc" 
     />
    </div>
  )
}

export default Avatar