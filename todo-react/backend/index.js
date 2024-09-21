const express=require("express")
const app=express()
const {createTodo}=require("./types.js")
app.use(express.json())

app.post("/todo",function(req,res){
    const createPayLoad=req.body
    const parsePayLoad=createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).send({
            msg:"send wrong input"
        })
        return
    }
    //put in mongodb
})
app.get("/todos",function(req,res){
    

})
app.put("/completed",function(req,res){
    const createPayLoad=req.body
    const parsePayLoad=createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).send({
            msg:"send wrong input"
        })
        return
    }else{

    }
})