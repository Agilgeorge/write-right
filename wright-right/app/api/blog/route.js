import connectDB from "@/lib/config/db"
import { writeFile } from "fs/promises"
import Blog from "@/lib/config/modals/blogmodals"
const { NextResponse } = require("next/server")

export async function GET(request) {
  await connectDB()
  return NextResponse.json({ message: 'Hello from the blog route' })
}

export async function POST(request) {
  await connectDB()
  const formData = await request.formData()
  const timestamp = Date.now()
  const image = formData.get('image')
  const imageBytedata = await image.arrayBuffer()
  const buffer = Buffer.from(imageBytedata)
  const path = `public/${timestamp}_${image.name}`
  await writeFile(path, buffer)
  const imageUrl = `/${path}`

  const blogdata = {
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    author: formData.get('author'),
    image: imageUrl,
    author_img: formData.get('author_img'),
  }

  const newBlog = new Blog(blogdata)
  await newBlog.save()

  return NextResponse.json({ message: 'Blog added successfully', blog: newBlog })
}