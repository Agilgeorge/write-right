import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import arrow from '../assets/arrow.png'

const Header = () => {
  return (
    <div className='py-3 px-3 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'> 
        <Image src={logo} alt='logo' width={120} className='w-[130px] sm:w-auto flex' /> 
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] flex'>
          start writing <Image src={arrow} />
        </button> 
      </div>
    </div>
  )
}

export default Header