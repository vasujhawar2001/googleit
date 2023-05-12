import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Avatar from '@/components/Avatar'
import {CgMenuGridO} from "react-icons/cg"

export default function Home() {
  return (
    <div className='flex flex-col h-screen dark:bg-gray-900 dark:text-white'>
    <header className='flex w-full p-5 justify-end 
    text-sm text-gray-600 dark:text-gray-300'>
    <div className='flex space-x-4 items-center'>
      <a className='link' href='https://mail.google.com/mail/'>Gmail</a>
      <a className='link' href='https://www.google.com/imghp?hl=en'>Images</a>
      <div className='h-5 hover:bg-gray-200 rounded-full dark:hover:bg-gray-800'>
      <CgMenuGridO
      size={20}
      className="rounded-full text-gray-700 dark:text-white dark:hover:text-orange-500 cursor-pointer"
      />
      </div>
      <Avatar/>
      
    </div>
    </header>
    <Hero />
    <Footer/>   
    </div>
  )
}
