import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>

        <h4 className='text-center mb-2 text-lg font-medium
        text-teal-600 tracking-wide uppercase hover:animate-pulse'>
        Connect with me
      </h4>
      <h2 className='text-center text-5xl font-bold text-teal-950 mb-10'>
        Get in touch
      </h2>
      <div className='flex flex-col items-center justify-center gap-8'>
         <p className='mb-6 max-w-2xl font-medium text-center
             text-gray-600 text-lg leading-8'>
             "I specialize in building secure, scalable, 
              and high-performance web 
              applications. From interactive frontends to complex 
              backend logic, I deliver end-to-end solutions for
              tailored to your needs."
         </p>
          <form className='max-w-2xl mx-auto '>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
              <input type='text' />

            </div>

          </form>

      </div>
     
      
    </div>
  )
}

export default Contact
