const express=require("express")
const app=express()
const {createTodo}=require("./types.js")
const {todo} = require("./db.js")
app.use(express.json())
app.post("/todo",async function(req,res){
    const createPayLoad=req.body
    const parsePayLoad=createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).send({
            msg:"send wrong input"
        })
        return
    }
    const todoAdded= await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    res.json({
        msg:"todo added",
        id:todoAdded._id
    })
})
app.get("/todos",async function(req,res){
    const todos=await todo.find({});
    res.send({
        todos:todos
    })
})
app.put("/completed",async function(req,res){
    const createPayLoad=req.body
    const parsePayLoad=createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).send({
            msg:"send wrong input"
        })
        return
    }
    const todoUpdated=await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.send({
        msg:"Todo Marked as completed"
    })
})
app.listen(3000)