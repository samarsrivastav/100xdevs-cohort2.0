const express=require("express")
const zod=require("zod") // to check the type of input sent by the user
const app=express()
app.use(express.json())
const schema=zod.array(zod.string());// to check the input we have is array of numbers
//zod schema
// {
//     email:string,
//     password:atleast 8,
// }
// solution==>
    // const schema=zod.object({
    //     email:zod.string().email(),
    //     password:z.string().min(8),
    // })

app.get("/health-checkup", function (req,res){
    let name=req.body.name
    res.json({msg:name+" your kidney is fine!"})
});
app.post("/health-checkup", function (req,res){
    let name=req.body.name
    let response=schema.safeParse(name) // for the input validation
    if(!response.success){
        res.status(411).send("the input is not in the desired type")
    }else{
        res.json(response)
    }
});

app.listen(3000) 