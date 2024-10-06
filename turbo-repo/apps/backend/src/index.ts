import express from "express"
const app= express()
import {BACKEND_URL} from "@repo/common/config"
console.log(BACKEND_URL)
app.get("/",function(req,res){
    res.json({
        msg:"hi there"
    })
})
app.listen(8080)