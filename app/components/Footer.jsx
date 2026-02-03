import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-black text-white py-12 relative 
    overflow-hidden'>
        
       
        <div className='absolute top-0 left-0 w-full h-[1px] 
        bg-gradient-to-r from-transparent via-teal-500 
        to-transparent opacity-60'></div>

        <div className='text-center space-y-6'>
          
            <h2 className='text-4xl font-bold tracking-widest
             text-transparent bg-clip-text bg-gradient-to-r
              from-teal-400 to-teal-200'>
                CHANAKA
            </h2>

           
            <div className='w-max flex items-center gap-3 mx-auto
             px-6 py-2 rounded-full border border-gray-700
              bg-gray-800/50 hover:border-teal-500
               hover:bg-gray-800 transition-all duration-300 shadow-md group'>
                <Image 
                    src={assets.mail_icon} 
                    alt='mail icon' 
                   
                    className='w-5 h-5 invert opacity-80 
                    group-hover:opacity-100 group-hover:scale-110 
                    transition-transform duration-300'
                />
                <a href="mailto:chanakaekanayaka15@gmail.com" 
                className='text-gray-300 group-hover:text-teal-400 
                transition-colors duration-300 font-medium'>
                    chanakaekanayaka15@gmail.com
                </a>
            </div>
        </div>

     
        <div className='text-center sm:flex 
        items-center justify-between border-t
         border-gray-800 mx-[10%] mt-12 py-6'>
            <p className='text-gray-500 text-sm'>
                &copy; 2026 CHANAKA EKANAYAKA. All rights reserved.
            </p>
            
            <ul className='flex items-center gap-8 
            justify-center mt-4 sm:mt-0'>
                <li>
                    <a 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        href='https://github.com/chanakaekanayaka' 
                        className='text-gray-400 hover:text-teal-400 transition-colors duration-300 font-medium'
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank' 
                        rel="noopener noreferrer" 
                        href='https://www.linkedin.com/in/chanaka-ekanayaka-8a4b94378/' 
                        className='text-gray-400 hover:text-teal-400 transition-colors duration-300 font-medium'
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a 
                        href='mailto:chanakaekanayaka15@gmail.com' 
                        className='text-gray-400 hover:text-teal-400 transition-colors duration-300 font-medium'
                    >
                        Gmail
                    </a>
                </li>
            </ul>
        </div>
      
    </footer>
  )
}

export default Footer