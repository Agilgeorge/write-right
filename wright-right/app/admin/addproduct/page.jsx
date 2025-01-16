'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/app/Assets/assets'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Page = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennet",
    author_image: assets.profile_icon,
  })

  const onchangehandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({ ...data, [name]: value }))
    console.log(data)
  }

  const onsubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('author', data.author)
    formData.append('author_image', data.author_image)
    formData.append('image', image)

    try {
      const response = await axios.post('/api/blog', formData) // Corrected URL
      toast.success('Blog added successfully!')
    } catch (error) {
      console.error('Error adding blog:', error)
      toast.error('Failed to add blog: ' + (error.response?.data?.message || error.message))
    }
  }

  return (
    <>
      <form onSubmit={onsubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor='image'>
          <Image className='mt-4' src={!image ? assets.upload_area : URL.createObjectURL(image)} alt='' height={70} width={140} />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required className='mt-4' />
        <p className='text-xl mt-4'>Write-up title</p>
        <input name='title' onChange={onchangehandler} value={data.title} type="text" placeholder='write here' required className='w-full sm:w-[500px] mt-4 px-4 py-3 border' />
        <p className='text-xl mt-4'>Write-up Description</p>
        <textarea type="text" name='description' onChange={onchangehandler} value={data.description} placeholder='write here' rows={6} required className='w-full sm:w-[500px] mt-4 px-4 py-3 border' />
        <p className='text-xl mt-4'>Write-up category</p>
        <select name='category' onChange={onchangehandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="startup">Startup</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type='submit' className='bg-black text-white w-40 h-12 mt-8'>Add</button>
      </form>
      <ToastContainer />
    </>
  )
}

export default Page