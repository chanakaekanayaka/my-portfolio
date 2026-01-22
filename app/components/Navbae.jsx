import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Navbae = () => {
  return (
    <>
    
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
    flex items-center justify-between z-50'>
        <a href='#top' className='animate-bounce'>
            <span className="text-3xl font-extrabold tracking-wide cursor-pointer mr-14 
                 bg-gradient-to-r from-teal-500 to-teal-200 
                 bg-clip-text text-transparent select-none ">
             Chanaka
            </span>

        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 
        rounded-full px-12 py-4  font-medium text-teal-700 shadow-lg bg-opacity-50 '>
            <li><a href='#top' className='  transition-colors hover:text-teal-300 '>Home</a></li>
            <li><a href='#about' className='transition-colors hover:text-teal-300 '>About me</a></li>
            <li><a href='#services' className='transition-colors hover:text-teal-300 '>Services</a></li>
            <li><a href='#work' className='transition-colors hover:text-teal-300 '>My Work</a></li>
            <li><a href='#contact' className='transition-colors hover:text-teal-300 '>Contact me</a></li>
        </ul>

        <div>
            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border
            border-gray-500 hover:border-teal-300 rounded-full ml-4 transition-colors hover:text-teal-300'>
                Contact
                <Image src={assets.arrow_icon} alt="" className='w-3'/>

            </a>
        </div>
         
    </nav>
      
    </>
  )
}

export default Navbae
