import mongoose from "mongoose";

export const connectDB=async()=>
{
    // console.log(process.env.MONGO_URI);
 const connection= await mongoose.connect(process.env.MONGODB_URI)

 console.log(`database connected with ${connection}`)
}