import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-20 scroll-mt-20 
      bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white'>
      
      
      <h4 className='text-center mb-2 text-lg font-semibold
       text-teal-400 tracking-widest uppercase'>
        What I offer
      </h4>
      <h2 className='text-center text-5xl font-bold text-white mb-10'>
        My Services
      </h2>

      <div className='flex flex-col items-center justify-center gap-8'>
         
         {/* --- Description --- */}
         <p className='mb-8 max-w-2xl font-light 
         text-center text-gray-400 text-lg leading-8'>
             "I specialize in building secure, scalable, 
             and high-performance web 
             applications. From interactive frontends to complex 
             backend logic, I deliver end-to-end solutions 
             tailored to your needs."
         </p>
            
        {/* --- Service Cards Grid --- */}
        
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
             gap-6 max-w-6xl w-full mb-8'>
             
             {serviceData.map(({icon, title, description, link}, index)=>(
                <li key={index} className='group border border-teal-100 
                rounded-xl p-8 cursor-pointer bg-black
                hover:-translate-y-2 duration-300 hover:bg-teal-100
                 hover:border-teal-400 hover:shadow-lg 
                hover:shadow-teal-100/50 transition-all'>
                    
                    {/* Icon */}
                    <div className='w-12 h-12 flex items-center justify-center
                     bg-teal-50 rounded-lg mb-4 group-hover:bg-teal-100 transition-colors'>
                         <Image src={icon} alt='' className='w-6 h-6 object-contain'/>
                    </div>
                    
                    {/* Content */}
                    <h3 className='my-4 font-bold text-teal-900 text-lg
                     group-hover:text-teal-700 transition-colors'>
                        {title}
                    </h3>
                    <p className='text-gray-600 text-sm leading-relaxed
                     group-hover:text-gray-700'>
                        {description}
                    </p>
                    
                    {/* Link with Animated Arrow */}
                    <a href={link} className='flex items-center gap-2 text-sm 
                    mt-5 font-medium text-teal-600 group-hover:text-teal-800 
                    transition-colors hover:text-black'>
                         Read more
                         <Image alt='' src={assets.right_arrow} className='w-4 h-4 
                         transition-transform 
                         duration-300 group-hover:translate-x-1'/>
                    </a>
                </li>
             ))}
        </ul>

      </div>
    </div>
  )
}

export default Services