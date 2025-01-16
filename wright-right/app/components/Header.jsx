import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png'

const Header = () => { 
  return (
    <div className='py-3 px-3 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'> 
        <Image src={logo} alt='abt the logo' width={120} className='w-[130px] sm:w-auto flex' /> 
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] flex'>
          start writing <Image src={arrow} />
        </button> 
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>New Writeups!</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-b'>" A gateway to a world of knowledge, offering in-depth insights, creative ideas, and practical advice,actionable strategies, these thoughtfully crafted pieces aim to enlighten, engage, and empower your journey toward growth and discovery."</p>
      <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
        <input type="email"placeholder='enter your email' className='pl-4 outline-none' />
      <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 hover:bg-gray-600 active:text-white'>Subscribe</button>
      </form>
      </div>
    </div>
  )
}

export default Header