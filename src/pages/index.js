import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
    <Header />
    <Hero />
    <Footer />   
    </div>
  )
}
