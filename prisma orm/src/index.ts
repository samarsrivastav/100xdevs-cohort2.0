import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient()

//create 
async function insertUser (username: string, password: string, firstName: string, lastName:string) {
    const res= await prisma.user.create({
      data:{
        email:username,
        password,
        firstName,
        lastName
      }  
    })
    console.log(res)
}

//update 
interface UpdateParams{
    firstName:string,
    lastName:string,
}
async function updateUser(username:string,{
    firstName,
    lastName
}:UpdateParams) {
    const res=await prisma.user.update({
        where:{
            email:username
        },
        data:{
            firstName,
            lastName
        }
    })
    console.log(res)
}

//delete 
async function deleteUser(username:string) {
    const res=await prisma.user.delete({
        where:{email:username}
    })
}
//read all data
async function getAllUser() {
    const res=await prisma.user.findMany()
    console.log(res)
}

