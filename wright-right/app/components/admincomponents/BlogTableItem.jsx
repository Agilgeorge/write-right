import React from 'react'
import Image from 'next/image'
import { assets } from '../../Assets/assets'
const BlogTableItem = ({profile_icon,title,author}) => {
  return (
    <tr className='bg-white border-b text-black'>
        <th scope='row' className='items-center hidden sm:flex px-6 py-4 font-medium text-black whitespace-nowrap'>

            <Image src={assets.profile_icon} width={40} height={40} alt='profile icon' />
            <p>{author?author: "No author"}</p>
        </th>
        <td className='px-6 py-4'>
{title?title: "Philips lore"}
</td>
<td className='px-6 py-4 '>
{"17 Jan 2025"}
</td>
<td className='px-6 py-4 cursor-pointer'>
x
</td>
    </tr>
  )
}

export default BlogTableItem