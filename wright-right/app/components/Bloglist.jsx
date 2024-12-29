import React from 'react'
import Image from 'next/image'
import { blog_data } from '../Assets/assets'
import Blogthings from './Blogthings'
const Bloglist = () => {
  return (
    <div>
    <div className='flex justify-center gap-6 my-10 '>
        <button className='bg-black text-white py-1 px-4 rounded-sm'> All</button>
         <button>Tech</button>
          <button>Startups</button>
           <button>life</button>
    </div>
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
{blog_data.map((item,index) => {
    return <Blogthings key={index} image={item.image} title={item.title} description={item.description} category={item.category}/>
})}
    </div>
    </div>
  )
}

export default Bloglist