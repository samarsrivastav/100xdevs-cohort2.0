const express=require("express")

const app=express()
const users=[{
    name:"john",
    kidney:[{
        healthy:false
    }]
}]
app.use(express.json())
app.get("/",function(req,res){
    const johnKidneys=users[0].kidney;
    let number=johnKidneys.length;
    let healthyNum=0;
    for(let i=0;i<number;i++){
        if(johnKidneys[i].healthy){
            healthyNum++;
        }
    }
    let unhealthy=number-healthyNum;
    res.send({
        number,
        healthyNum,
        unhealthy
    })
})
app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidney.push({
        healthy:ishealthy
    });
    res.json({
        msg:"done!"
    })
})
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true;
    }
    res.json({
        msg:"updated"
    })
})
app.delete("/",function(req,res){
    const newkidney=[]
    for(let i=0;i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy){
            newkidney.push({
                healthy:true
            })
        }
    }
    if(newkidney.length==users[0].kidney.length){
        res.status(411).json({
            msg:"No unhealthy kidney"
        })
    }else{
        users[0].kidney=newkidney
        res.json({
            msg:"deleted unhealthy"
        })
    }
})
app.listen(3000) 