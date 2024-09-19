const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const app=express()
app.use(express.json())
mongoose.connect(
  "mongodb+srv://samarsrivastav69:Samar123@cluster0.f5cfk.mongodb.net/user_app_new",
);
const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});
app.post("/signup",async function(req,res){
    const username=req.body.username
    const name=req.body.name
    const password=req.body.password
    const existinguser= await User.findOne({username:username})
    if(existinguser){
        res.status(411).send({
            msg:"username already exists"
        })
        return
    }
    const user=new User({
        name:name,
        username:username,
        password:password
    })
    user.save()
    res.json({
        msg:"User created"
    })
})
app.get("/users",async function(req,res){
    const result=await User.find()
    res.json({
        users:result
    })

})
//get one
app.get("/users/:name",async function(req,res){
    const ipname=req.params.name
    const result=await User.findOne({name:ipname})
    res.json({
        users:result
    })

})
app.listen(3000)