'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets, blog_data } from '../../Assets/assets'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

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
    data ? <> 
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Link href={'/'}>
          <Image src={assets.logo} alt='abt the logo' width={120} className='w-[130px] sm:w-auto flex' />
          </Link>
          
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] flex'>
            Get started <Image src={assets.arrow} alt='right-arrow' width={12} height={12} />
          </button>
        </div>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>{data.title}</h1>
          <Image src={data.author_img} alt='author' width={60} height={60} className='rounded-full mx-auto mt-6 my-5 border border-black' />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
      </div> 
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10px'>
        <Image src={data.image} alt='blog1' width={1280} height={720} className='border-4 border-black ' />
        <h1 className='my-8 text-[26px] font-semibold'>Intro</h1>
        <p>{data.description}</p>
        <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
        <p className='py-3'>Before managing life styles you must have a clear goals</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step 2: Consistency</h3>
        <p className='py-3'>consistent work towards the goals will help in the process</p>

        <h3 className='my-5 text-[18px] font-semibold'>Step 3: Winning action</h3>
        <p className='py-3'>perform well in the game time</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
        <p className='py-3'>Managing lifestyle requires discipline</p>
     <div className='my-24 '>
<p className=' my-4 font-semibold text-black font '>Share this article n social media</p>
<div className='flex'>
<Image src={assets. facebook_icon} width={50} alt='' />
<Image src={assets.twitter_icon} width={50} alt='' />
<Image src={assets.googleplus_icon} width={50} alt='' />
</div>
     </div>
      </div>
      <Footer/>
      </>:<></>
  )
}

export default Page