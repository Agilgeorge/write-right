import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='display-flex justify-between items-center'>
      <Image src={logo} alt='logo' width={120}  className='w-[130px] sm:w-auto' />
      </div>
      </div>
  )
}

export default Header;