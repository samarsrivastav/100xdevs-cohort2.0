const express=require("express")

const app=express()
app.use(express.json())
function checkupMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId=req.query.kidneyId;
    if (!(username === "harkirat" && password == "pass" && (kidneyId==1 || kidneyId==2))) {
        res.json({
            msg:"your kidney is not fine!"
        })
    }else{
        next();
    }
}
app.use(checkupMiddleware) // this function will make sure that the function's getting used as middleware at every route
app.get("/health-checkup", function (req,res){
    let name=req.body.name
    res.json({msg:name+" your kidney is fine!"})
});
//same as
// app.get("/health-checkup",checkupMiddleware, function (req,res){
//     res.json({msg:"your kidney is fine!"})
// });

app.use(function(err,req,res,next){ //this catches global errors
    res.status(411).json({
        msg:"Sorry something is up with the servers!"
    })
})
app.listen(3000) 