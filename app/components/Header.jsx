import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import profileImg from '../../Publicc/profile-img.png';

const Header = () => {
  return (
    <div className="w-full min-h-screen flex flex-col
     md:flex-row items-center justify-center 
    gap-12 md:gap-20 px-6 py-20 md:py-0 
    bg-gradient-to-b from-white via-teal-50 to-white 
    dark:from-gray-900 dark:via-gray-900
     dark:to-teal-950/20 overflow-hidden">
      
      {/* Left Side - Profile Image */}
      <div className="relative shrink-0 group">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 -inset-2 bg-teal-400/50 
        rounded-3xl blur-2xl opacity-40 animate-pulse 
        group-hover:opacity-60 transition-opacity duration-500"></div>
        
        <Image 
          src={profileImg}
          alt="Profile" 
          width={320}   
          height={800}  
          priority
          className="relative rounded-3xl w-64 
          h-auto md:w-80 md:h-auto object-cover 
          border-[6px] border-white dark:border-teal-900 
          shadow-2xl shadow-teal-900/20
          group-hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col items-center
       md:items-start text-center md:text-left max-w-2xl">
        
        <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-4 
        font-semibold text-teal-800 dark:text-teal-300">
            <span className="animate-wave">👋</span> Hi! I'm Chanaka Ekanayaka 
        </h3>

        <h1 className="text-4xl sm:text-6xl lg:text-[66px] 
        font-extrabold tracking-tight leading-[1.1] text-gray-900
          dark:text-white mb-6">
          Full Stack Web Developer based in <span className="text-teal-500 underline
           decoration-teal-300/30 underline-offset-8">Sri Lanka</span>
        </h1>

        <p className="max-w-lg font-normal text-gray-600
          dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">
          I am an Undergraduate Full Stack Developer passionate 
          about building scalable web applications. Bridging the
           gap between frontend creativity and backend logic.
        </p>

        <div className="flex flex-col sm:flex-row items-center 
        gap-4 w-full sm:w-auto">
          
          {/* Contact Button */}
          <a href="#contact" className="px-8 py-3.5 rounded-full w-full sm:w-auto
           bg-teal-600 text-white font-semibold flex items-center justify-center
            gap-2 shadow-lg shadow-teal-500/30 hover:bg-teal-500
             hover:scale-105 active:scale-95 transition-all duration-300">
            Contact me 
            <Image src={assets.right_arrow_white} alt="Arrow" className="w-4 h-4"/>
          </a>

          {/* Resume Button */}
          <a href="/sample-resume.pdf" download className="px-8 py-3.5
           rounded-full w-full sm:w-auto
          border border-gray-300 dark:border-gray-600 bg-white dark:bg-transparent
           dark:text-white text-gray-700 font-medium flex items-center justify-center gap-2
            hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50
             dark:hover:bg-teal-900/30 transition-all duration-300">
            My Resume 
            <Image src={assets.download_icon} alt="Download"
             className="w-4 h-4 group-hover:animate-bounce"/>
          </a>

        </div>
      </div>
      
    </div>
  )
}

export default Header