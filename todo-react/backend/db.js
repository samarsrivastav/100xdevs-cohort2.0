const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://samarsrivastav69:Samar123@cluster0.f5cfk.mongodb.net/todo-fullstack")

const schema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",schema)
module.exports={
    todo
}