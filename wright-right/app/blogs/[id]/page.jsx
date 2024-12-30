import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets, blog_data } from '../../Assets/assets'

const Page = ({ params }) => {
  const [data, setData] = useState(null)

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (blog_data[i].id === Number(params.id)) {
        setData(blog_data[i])
        console.log(blog_data[i])
        break
      }
    }
  }

  useEffect(() => {
    fetchBlogData()
  }, [params.id])

  return (
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} alt='abt the logo' width={120} className='w-[130px] sm:w-auto flex' />
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] flex'>
          Button
        </button>
      </div>
    </div>
  )
}

export default Page