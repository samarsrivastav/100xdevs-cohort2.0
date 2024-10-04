import { NextRequest } from "next/server"
import { PrismaClient } from "@prisma/client"
const client=new PrismaClient()

export async function GET(){
    const res=await client.user.findMany()
    return Response.json({
        res
    })
}
export async function POST(req:NextRequest){
    
    const body=await req.json()
    const res= await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    console.log(res)
    return Response.json({
        Message:"posted"
    })
}