import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import profileImg from '../../Publicc/profile-img.png';


const Header = () => {
  return (
    <div className="w-11/12 max-w-6xl z-0 mx-auto h-screen 
    flex flex-col md:flex-row items-center justify-center gap-10 
    md:gap-16 pt-20">
      
      {/* Left Side */}
      <div className="relative shrink-0">
        
        
        <div className="absolute inset-0 bg-teal-400 
        rounded-3xl blur-lg opacity-50 animate-pulse"></div>
        
        
        <Image 
          src={profileImg}
          alt="Profile" 
          width={320}   
          height={800}  
          className="relative rounded-3xl w-64 h-90 md:w-80 md:h-80 object-cover 
          border-[6px] border-teal-700 hover:border-teal-400 shadow-2xl 
          transition-all duration-300"
        />
      </div>

      {/* Right Sideeeee */}
      <div className="flex flex-col items-center text-center max-w-2xl">
        
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 
        font-medium text-teal-900 dark:text-teal-200">
          Hi! I'm Chanaka Ekanayaka 
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[66px] 
        font-extrabold tracking-tight leading-tight text-black
         dark:text-white">
          Full Stack Web Developer based in <span className="text-teal-300">Sri Lanka</span>
        </h1>

        <p className="max-w-lg mx-auto font-normal text-gray-600
         dark:text-gray-400 text-lg leading-relaxed mt-4">
          I am an Undergraduate Full Stack Developer passionate 
          about building scalable web applications. Bridging the
           gap between frontend creativity and backend logic.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          
          {/* Contact Button */}
          <a href="#contact" className="px-10 py-3 rounded-full
           bg-teal-600 text-white font-medium flex items-center
            gap-2 shadow-lg hover:bg-teal-300 hover:scale-105 transition-all
             hover:text-black">
            Contact me 
            <Image src={assets.right_arrow_white} alt="Arrow" className="w-4 
            hover:animate-spin"/>
          </a>

          {/* Resume Button */}
          <a href="/sample-resume.pdf" download className="px-10 py-3 
          rounded-full border border-gray-400 bg-white dark:bg-transparent
           dark:text-white text-gray-700 font-medium flex items-center gap-2
            hover:border-teal-500 hover:text-teal-300 hover:bg-teal-50 transition-all">
            My Resume 
            <Image src={assets.download_icon} alt="Download" className="w-4 hover:animate-pulse"/>
          </a>

        </div>
      </div>
      
    </div>
  )
}

export default Header