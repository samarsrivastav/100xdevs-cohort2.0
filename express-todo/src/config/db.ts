import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectDb=async ()=>{
    try {
        const connect= mongoose.connect(process.env.MONGO_URI || "")
        console.log("Database connected ")
    } catch (error) {
        console.error("database Not connected")
    }
}
export default connectDb
