import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
import { useTheme } from 'next-themes'

const SearchHeader = () => {

  const router = useRouter();
  const searchInput = useRef(null);

  const { theme, setTheme } = useTheme()

  const search = (e) =>{
    e.preventDefault();
    const term = searchInput.current.value
    router.push(`/search?query=${term}`);
  }

  return (
    <div>
    <header className='relative flex-grow top-0 w-full bg-white dark:bg-slate-900'>
      <div className='flex w-full p-3 sm:p-4 mt-1 items-center'>
      <Image src="/google.png" 
      alt="Google Logo"
      width="80"
      height="50"
      onClick={()=>router.push('/')}
      className="cursor-pointer sm:mr-2 sm:ml-2"
      />
      <form className='flex flex-grow border border-gray-200 
      hover:shadow-md focus-within:shadow-lg rounded-full 
      px-4 py-2 ml-5 mr-5 items-center max-w-xs  sm:max-w-2xl'>
        <input ref={searchInput} type='text' 
        className='flex-grow w-full focus:outline-none' />
        <XMarkIcon className='h-6 text-gray-500 curson-pointer 
        transition duration-100 hover:scale-125' 
        onClick={()=> searchInput.current.value=""}/>
        <img src='/microphone.svg' className='h-6 ml-3 hidden curson-pointer
        sm:inline-flex border-l-2 pl-4 border-gray-200'/>
        <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex ml-2
        curson-pointer 
        transition hover:scale-125'  onClick={search}/>
        <button hidden type='submit' onClick={search}>Search</button>
      </form>
      <Avatar/>
      </div>
      <HeaderOptions />
    </header>
    </div>
  )
}

export default SearchHeader