import React from 'react'
import { blog_data } from '../Assets/assets'
import Image from 'next/image'

const Blogthings = () => {
  return (
    <div className='max-w-[330px sm: max-w-[300px] bg-white border border-black hover-shadow-[7px_7px_0px_#000000]'>
        <Image src={blog_data[0].image} alt='blog1' width={400} height={400} className=' border-b border-black' />
    </div>
  )
}

export default Blogthings