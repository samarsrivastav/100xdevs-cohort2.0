import mongoose, { Schema } from "mongoose";

interface todoITF{
    title:string,
    des:string
}

const todoSchema:Schema= new Schema({
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    }
})
const todo = mongoose.model<todoITF>('todo',todoSchema)
export default todo