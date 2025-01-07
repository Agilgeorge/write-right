import mongoose from "mongoose";
 const connectDB = async () => {
    await mongoose.connect('mongodb+srv://agilavenger017:dbwriteright@cluster0.vffm1.mongodb.net/Write-right')
console.log('DB connected') 
}
export default connectDB;
