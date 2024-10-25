import todo from "../model/model"
import { Request, Response } from 'express';


export const getTodo=async (req:Request,res:Response)=>{
   try{ 
        const td=await todo.find()
        res.json({
            message:td
        })
    }catch(e){
        res.json({
            error:"error while getting",
            e
        })
    }
}
export const addTodo=async(req:Request,res:Response)=>{
    
    try {
        const {title,des}=req.body
        const td=await todo.create({
            title:title,
            des:des
        })
        res.json({
            td
        })
    } catch (e) {
        res.status(411).json({
            error:"error while adding"
        })
    }
}