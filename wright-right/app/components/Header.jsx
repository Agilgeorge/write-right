import React from 'react'
import Image from 'next/image'
import { assets, blog_data } from '@/Assets/assets.js';
const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='display-flex justify-between items-center'>
      <Image src={assets.logo} alt='logo' width={100} height={100} />
      </div>
      </div>
  )
}

export default Header;