import connectDB from "@/lib/config/db"
import {writeFile} from "fs/promises"
const { NextResponse } = require("next/server")

export async function GET(request) {
   const loadDB= async()=>{
    await connectDB();
   }
   loadDB();
}
    return NextResponse.json({ message: 'Hello from the blog route' })

    export async function POST(request) {
        const formData = await request.formData();
        const timestamp = Date.now();
        const image = formData.get('image');
        const imageBytedata = await image.arrayBuffer();
        const buffer = Buffer.from(imageBytedata);
        const path = `public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);
        const imageUrl = `/${path}`;
        const blogdata = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            author : `${formData.get('author')}`,
            image : `${imageUrl}`,
            author_img : `${formData.get('author_img')}`,

        }
        await blogmodal.create(blogdata);
        console.log('Blog data saved');
        return NextResponse.json({succes : true , msg : 'Blog data saved'});
    }