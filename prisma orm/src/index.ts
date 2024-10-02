import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res= await prisma.user.create({
    data:{
        username,
        password,
        firstName,
        lastName
    }
  })
}
interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res=await prisma.user.update({
    where:{
        username
    },
    data:{
        firstName,
        lastName
    }
  })
}
async function getUser(username: string) {
  const res=await prisma.user.findUnique({
    where:{
        username
    }
  })
}
async function getTodos(userId: number, ) { // get todo of the user
    const res= await prisma.todo.findMany({
        where:{
            userId:userId
        }
    })
}
//get the todo and user details
async function getTodoAndDetails(userId:number) {
    const res=await prisma.todo.findMany({
        where:{
            userId:userId
        },
        select:{ // what to output
            id:true,
            title:true,
            description:true,
            user:true // this will tell that we need user having this todo
        }
    })
}