import React from 'react'

const SearchHeader = () => {
  return (
    <header>
      <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
      alt="Google Logo"
      width="200"
      height="50"
      onClick={()=>Router.push('/')}
      className="cursor-pointer"
      />
    </header>
  )
}

export default SearchHeader