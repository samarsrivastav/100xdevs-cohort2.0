const express=require("express")
const fs=require("fs")
const app = express()
app.use(express.json())
files=[{
    name:"a.txt"
},{
    name:"b.txt"
}]
app.get("/files",function(req,res){
    result=[]
    for(let i=0;i<files.length;i++){
        result.push(files[i].name)
    }
    res.json({result})
})
app.get("/file/:name",async function(req,res){
    let filename=req.params.name
    fs.readFile(filename,"utf-8",function(err,data){
        res.json({readData:data})
    })
})
app.listen(3000)