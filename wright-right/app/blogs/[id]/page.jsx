'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets, blog_data } from '../../Assets/assets'

const Page = ({ params }) => {
  const [data, setData] = useState(null)
  const [resolvedParams, setResolvedParams] = useState(null)

  useEffect(() => {
    params.then(resolved => {
      setResolvedParams(resolved)
    })
  }, [params])

  useEffect(() => {
    if (resolvedParams) {
      fetchBlogData()
    }
  }, [resolvedParams])

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (blog_data[i].id === Number(resolvedParams.id)) {
        setData(blog_data[i])
        console.log(blog_data[i])
        break
      }
    }
  }

  return (
    data ? (
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Image src={assets.logo} alt='abt the logo' width={120} className='w-[130px] sm:w-auto flex' />
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] flex'>
            Get started <Image src={assets.arrow} alt='right-arrow' width={12} height={12} />
          </button>
        </div>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>{data.title}</h1>
          <Image src={data.author_img} alt='author' width={60} height={60} className='rounded-full mx-auto my-5' />
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )
  )
}

export default Page