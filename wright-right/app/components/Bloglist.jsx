import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { blog_data } from '../Assets/assets'
import Blogthings from './Blogthings'

const Bloglist = () => {
  const [menu,setMenu] = useState('All');
  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blo);
    console.log(response.data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  },[]);  

  return (
    <div>
    <div className='flex justify-center gap-6 my-10 '>
        <button onClick={()=>setMenu('All')} className={menu==="All"?'□ bg-black text-white py-1 px-4 rounded-sm':""}> All</button>
         <button onClick={()=>setMenu('Technology')}className={menu==="Technology"?'□ bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
          <button onClick={()=>setMenu('Startup')}className={menu==="Startup"?'□ bg-black text-white py-1 px-4 rounded-sm':""}>Startups</button>
           <button onClick={()=>setMenu('Lifestyle')}className={menu==="Lifestyle"?'□ bg-black text-white py-1 px-4 rounded-sm':""}> Life</button>
    </div>
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
{blog_data.filter((item)=>menu==="All"?true:item.category===menu).map((item,index) => {
    return <Blogthings key={index}  id= {item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
})}
    </div>
    </div>
  )
}


export default Bloglist;