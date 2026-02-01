"use client"
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Work = () => {
   
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div id='work' className='w-full px-[12%] py-20 scroll-mt-20 
      bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white'>

           
            <h4 className='text-center mb-2 text-lg font-semibold
       text-teal-400 tracking-widest uppercase'>
                My Portfolio
            </h4>
            <h2 className='text-center text-5xl font-bold text-white mb-10'>
                My Latest Work
            </h2>

            <div className='flex flex-col items-center justify-center gap-8'>

             
                <p className='mb-8 max-w-2xl font-light 
                 text-center text-gray-400 text-lg leading-8'>
                    "Welcome to my project portfolio. Here, I showcase a
                    diverse range of applications, from AI-powered SaaS
                    platforms to complex E-commerce systems. Each project
                    represents a unique challenge where I applied the MERN stack,
                    TypeScript, and Generative AI to solve real-world problems."
                </p>

                
                <div className='grid grid-cols-1 sm:grid-cols-2
                 lg:grid-cols-4 my-10 gap-6 w-full max-w-7xl'>
                    
                    {/* Logic: Show all if expanded, otherwise only show first 4 */}
                    {workData.slice(0, isExpanded ? workData.length : 4).map((project, index) => (
                        <div key={index}
                            className='aspect-square bg-no-repeat bg-cover bg-center 
                            rounded-xl relative cursor-pointer group overflow-hidden 
                            shadow-lg shadow-teal-100 hover:shadow-xl hover:shadow-teal-400 
                            transition-all duration-500'
                            style={{ backgroundImage: `url(${project.bgImage})` }}>

                            
                            <div className='absolute inset-0 bg-teal-900/10
                             group-hover:bg-teal-900/20 transition-colors duration-500'></div>

                           
                            <div className='bg-teal-700 w-10/12 rounded-xl 
                            absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-5 
                            flex items-center justify-between duration-500 group-hover:bottom-7 
                            shadow-md group-hover:bg-white'>
                                <div className='flex-1 min-w-0 pr-2'>
                                    <h2 className='font-bold text-teal-900 text-base truncate'>{project.title}</h2>
                                    <p className='text-xs text-gray-700 line-clamp-2'>{project.description}</p>
                                </div>

                                <div className='border border-teal-500 rounded-full 
                                p-2 hover:bg-teal-500 group-hover:rotate-45 transition-all 
                                duration-300 group-hover:bg-teal-800'>
                                    <Image src={assets.send_icon} alt='send icon' className='w-4 
                                    aspect-square grayscale group-hover:grayscale-0 
                                    group-hover:invert' />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* --- "Show More" / "Show Less" Button --- */}
               
                {workData.length > 4 && (
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className='py-3 px-8 w-max flex items-center 
              justify-between gap-2 bg-black 
              text-white rounded-full mx-auto hover:bg-teal-500
               hover:scale-105 duration-300 
              shadow-[0_0_20px_rgba(20,184,166,0.4)] 
              hover:shadow-[0_0_30px_rgba(20,184,166,0.6)]'>
                        
                        {isExpanded ? 'Show Less' : 'Show More'}
                        
                        <Image 
                            src={isExpanded ? assets.right_arrow_bold : assets.right_arrow_bold} 
                            alt="Right arrow" 
                            className={`w-4 duration-300 ${isExpanded ? '-rotate-90' : 'rotate-90'}`}
                        />
                    </button>
                )}

            </div>

        </div>
    )
}

export default Work