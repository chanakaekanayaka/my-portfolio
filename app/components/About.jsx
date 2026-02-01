import { infoList, toolsData } from '@/assets/assets'
import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-20 scroll-mt-20 
      bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white'>
      
      {/* --- Section Headings --- */}
      <h4 className='text-center mb-2 text-lg font-semibold
       text-teal-400 tracking-widest uppercase'>
        Introduction
      </h4>
      <h2 className='text-center text-5xl font-bold text-white mb-10'>
        About me
      </h2>

       
        <div className='flex flex-col items-center justify-center gap-8'>
            
            {/* --- Description --- */}
            <p className='mb-8 max-w-2xl font-light 
         text-center text-gray-400 text-lg leading-8'>
                Hi, I'm Chanaka Ekanayaka. 
                I am an aspiring Full-Stack 
                Developer and Data Science 
                undergraduate specializing in the MERN 
                stack and TypeScript. I build high-performance,
                 AI-integrated SaaS applications that bridge 
                 complex backend logic with intuitive user experiences.
            </p>

            {/* --- Info Cards (Grid) --- */}
            <ul className='grid grid-cols-1 sm:grid-cols-3
             gap-6 max-w-4xl w-full mb-8 '>
                {infoList.map(({icon, iconDark, title, description}, index)=>(
                    <li key={index} className='border-[0.5px] border-teal-200 
                    rounded-xl p-6 cursor-pointer
                    hover:-translate-y-2 duration-300 hover:bg-teal-100 hover:shadow-lg 
                    hover:shadow-teal-100/50 bg-teal-80 transition-all'>
                        
                        
                        <Image src={icon} alt={title} className='w-7 mt-3'/>
                        
                        <h3 className='my-4 font-semibold text-teal-900 text-lg'>{title}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed'>{description}</p>
                    </li>
                ))}
            </ul>

            {/* --- Tools Section --- */}
            <h4 className='text-teal-800 font-bold text-xl mb-4'>Tools I use</h4>
            
            {/* Fixed typo: <ui> -> <ul> */}
            <ul className='flex flex-wrap items-center justify-center gap-5'>
                {toolsData.map((tool, index)=>(
                    <li className='flex items-center 
                    justify-center w-12 sm:w-14 aspect-square 
                    border border-gray-200 rounded-lg cursor-pointer bg-white
                    hover:-translate-y-1 duration-300 hover:border-teal-400 
                    hover:shadow-md hover:shadow-teal-100/50 transition-all'
                    key={index}>
                      <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </li> 
                ))}
            </ul>

        </div>
    </div>
  )
}

export default About