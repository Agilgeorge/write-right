import React from 'react'
import Image from 'next/image'
import { assets } from '@/app/Assets/assets'
import Link from 'next/link'
assets
const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={assets.logo} alt='logo' width={120} className='mx-5' />

        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
            <div className='w0[50%] sm:w-[80%] absolute right-0'>

            <Link href='/admin/addproduct' className='flex items-center border border-black gap-3 fonte-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'> 
            <Image src={assets.add_icon} alt='' width={28} /><p>Add Writeups</p>
            </Link>

            <Link href='/admin/bloglist' className='flex items-center border border-black gap-3 fonte-medium px-3 py-2 mt-5 bg-white shadow-[-5px_5px_0px_#000000]'> 
            <Image src={assets.blog_icon} alt='' width={28} /><p>Writeup lists</p>
            </Link>

            <Link href='/admin/subscription' className='flex items-center border mt-5 border-black gap-3 fonte-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'> 
            <Image src={assets.email_icon} alt='' width={28} /><p>Add email subscription</p>
            </Link>
           

            </div>
         </div>

    </div>
  )
}

export default Sidebar