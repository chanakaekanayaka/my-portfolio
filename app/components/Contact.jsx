import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div 
      id='contact' 
      className='w-full px-[12%] py-20 scroll-mt-20 
      bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white'
    >
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full 
      overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] 
          w-[40rem] h-[40rem] bg-teal-900/20 rounded-full blur-[100px]"></div>
      </div>

      <h4 className='text-center mb-2 text-lg font-semibold
       text-teal-400 tracking-widest uppercase'>
        Connect with me
      </h4>
      
      <h2 className='text-center text-5xl font-bold text-white mb-10'>
        Get in touch
      </h2>

      <div className='flex flex-col items-center justify-center gap-8'>
         <p className='mb-8 max-w-2xl font-light 
         
         text-center text-gray-400 text-lg leading-8'>
             "I specialize in building secure, scalable, 
              and high-performance web 
              applications. From interactive frontends to complex 
              backend logic, I deliver end-to-end solutions
              tailored to your needs."
         </p>

          <form className='max-w-2xl mx-auto w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
              
              {/* Name Input */}
              <input 
                type='text' 
                placeholder='Enter your name' 
                required 
                className='flex-1 p-4 outline-none border
                 border-gray-800 rounded-lg bg-gray-900 text-white 
                placeholder-gray-500 focus:border-teal-500 focus:bg-gray-900/50 
                focus:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-300'
              />

              {/* Email Input */}
              <input 
                type='email' 
                placeholder='Enter your email' 
                required 
                className='flex-1 p-4 outline-none border
                 border-gray-800 rounded-lg bg-gray-900 text-white 
                placeholder-gray-500 focus:border-teal-500 focus:bg-gray-900/50 
                focus:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-300'
              />
            </div>

            {/* Message Input */}
            <textarea 
              rows='6' 
              placeholder='Enter your message' 
              required 
              className='w-full p-4 outline-none border
               border-gray-800 rounded-lg bg-gray-900 text-white mb-6 resize-none
              placeholder-gray-500 focus:border-teal-500 focus:bg-gray-900/50 
              focus:shadow-[0_0_15px_rgba(20,184,166,0.3)] transition-all duration-300'
            ></textarea>

            {/* Submit Button */}
            <button 
              type='submit' 
              className='py-3 px-8 w-max flex items-center 
              justify-between gap-2 bg-teal-600 
              text-white rounded-full mx-auto hover:bg-teal-500
               hover:scale-105 duration-300 
              shadow-[0_0_20px_rgba(20,184,166,0.4)] 
              hover:shadow-[0_0_30px_rgba(20,184,166,0.6)]'
            >
              Submit now
              
              <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </button>

            <p className='mt-4 text-center text-teal-400 
            animate-pulse'>Sending...</p>

          </form>
      </div>
    </div>
  )
}

export default Contact