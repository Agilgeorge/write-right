'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/app/Assets/assets'
import { useState } from 'react'

const page = () => {
 const[image, setImage] = useState(false)
  return (
   <>
   <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
    <p className='text-xl'> Upload thumbnail</p>
    <label htmlFor='image'>
      <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} alt='' height={70} width={140} />
    </label>
    <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required className='mt-4' />
    <p className='text-xl mt-4'>Write-up tittle</p>
    <input type="text" placeholder='write here' required className='w-full sm:w-[500px] mt-4 px-4 py-3 border'/>


    <p className='text-xl mt-4'>Write-up Description</p>
    <textarea type="text" placeholder='write here' rows={6} required className='w-full sm:w-[500px] mt-4 px-4 py-3 border'/>
   <p className='text-xl mt-4'>Write-up category</p>

   <select name='category' className='w-40 mt-4 px-4 py-3 border text-gray-500'>
    <option value="startup">Startup</option>
    <option value="technology">Technology</option>
    <option value="lifestyle">Lifestyle</option>
   </select>
   <br />
   <button type='submit' className='bg-black text-white w-40 h-12 mt-8'>Add</button>
   </form>
   </>
  )
}

export default page