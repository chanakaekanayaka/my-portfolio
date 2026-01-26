"use client"
import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MenuSquareIcon, PanelRightClose } from 'lucide-react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef(null);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(0)'
    }

    useEffect(() => {
        const handleScroll = () => {
             if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
             window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%]
     py-4 flex items-center justify-between z-50 transition-all duration-300
        ${isScroll ? "bg-black backdrop-blur-md shadow-sm shadow-teal-100" : ""}`}>
        
        {/* --- Logo Name --- */}
        <a href='#top' className='animate-bounce'>
            <span className="text-3xl font-extrabold tracking-wide cursor-pointer mr-14 
                 bg-gradient-to-r from-teal-600 to-teal-300 
                 bg-clip-text text-transparent select-none drop-shadow-sm">
               Chanaka
            </span>
        </a>

        {/* --- Desktop Menu --- */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 
        rounded-full px-12 py-4 font-medium text-teal-700 shadow-md shadow-teal-100/50 bg-black'>
            <li><a href='#top' 
            className='transition-colors hover:text-teal-400'>Home</a></li>
            <li><a href='#about' 
            className='transition-colors hover:text-teal-400'>About me</a></li>
            <li><a href='#services' 
            className='transition-colors hover:text-teal-400'>Services</a></li>
            <li><a href='#work' 
            className='transition-colors hover:text-teal-400'>My Work</a></li>
            <li><a href='#contact' 
            className='transition-colors hover:text-teal-400'>Contact me</a></li>
        </ul>

        {/* --- Contact Button & Mobile Toggle --- */}
        <div className='flex items-center gap-4'>
            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border
            border-teal-500 hover:bg-teal-50 rounded-full ml-4 
            transition-all duration-300 text-teal-700 hover:text-teal-900'>
                Contact
                <Image src={assets.arrow_icon} alt="arrow" className='w-3'/>
            </a>

            <button className='block md:hidden ml-3 text-teal-700' onClick={openMenu}>
                <MenuSquareIcon className='w-8 h-8 p-1
                 hover:bg-teal-50 rounded-md transition-colors'/>   
            </button>
        </div>

        {/* --- Mobile Menu (Dark Teal Theme) --- */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 
        fixed -right-64 top-0 bottom-0 w-64 h-screen bg-teal-950 transition
         duration-500 font-bold text-teal-100 z-50 shadow-2xl shadow-teal-900'>

            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <PanelRightClose className='w-8 h-8 p-1 
                cursor-pointer hover:bg-teal-800 rounded-md text-teal-300'/>
            </div>

            <li><a href='#top' 
            className='block py-2 hover:text-teal-400 border-b border-teal-900' 
            onClick={closeMenu}>Home</a></li>
            <li><a href='#about' 
            className='block py-2 hover:text-teal-400 border-b border-teal-900' 
            onClick={closeMenu}>About me</a></li>
            <li><a href='#services' 
            className='block py-2 hover:text-teal-400 border-b border-teal-900' 
            onClick={closeMenu}>Services</a></li>
            <li><a href='#work' 
            className='block py-2 hover:text-teal-400 border-b border-teal-900' 
            onClick={closeMenu}>My Work</a></li>
            <li><a href='#contact'
             className='block py-2 hover:text-teal-400 border-b border-teal-900' 
             onClick={closeMenu}>Contact me</a></li>

        </ul>
         
    </nav>
      
    </>
  )
}

export default Navbar