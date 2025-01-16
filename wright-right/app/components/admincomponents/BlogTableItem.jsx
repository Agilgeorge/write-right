import React from 'react'
import Image from 'next/image'
import { assets } from '../../Assets/assets'
const BlogTableItem = () => {
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>

            <Image src={assets.profile_icon} width={40} alt='profile icon' />
        </th>
        <td className='px-6 py-4'>
{title?title: "Philips lore"}
</td>
<td className='px-6 py-4'>
{"17 Jan 2025"}
</td>
<td className='px-6 py-4'>
x
</td>
    </tr>
  )
}

export default BlogTableItem