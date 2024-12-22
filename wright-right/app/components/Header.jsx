import React from 'react'
import Image from 'next/image'
const header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='display-flex justify-between items-center'>
        <Image src={assets.logo} width={180} className='w-[130px] sm:w-auto' />
      </div>
      </div>
  )
}

export default header