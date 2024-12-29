import React from 'react'
import { blog_data } from '../Assets/assets'
import Image from 'next/image'

const Blogthings = ({title,description,category,image}) => {
  return (
    <div className='max-w-[330px sm: max-w-[300px] bg-white border border-black hover-shadow-[7px_7px_0px_#000000]'>
        <Image src={blog_data[0].image} alt='blog1' width={400} height={400} className=' border-b border-black' />
          <p className='ml-5 mt-5 inline-block bg-black text-white text-sm'>{category}</p>
          <div className='p-5'>
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
         <p className='mb-2 text-sm tracking-tight text-gray-700'>{description}</p>
         <div className='inline-flex items-center py-2 font-semibold text-center'>
          Read more <Image src={assets.arrow} alt='right-arrow' width={12}  className='ml-2'/>
         </div>
          </div>
  </div>
  )
}

export default Blogthings