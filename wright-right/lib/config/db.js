import mongoose from "mongoose";
 const connectDB = async () => {
    await mongoose.connect('mongodb+srv://agilavenger017:ZsL826iupMSsYGIV@cluster-17.tdhrg.mongodb.net/')
console.log('DB connected') 
}
export default connectDB;
