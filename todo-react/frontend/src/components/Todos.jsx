
const markAsCompleted=(id,title,desc)=>{
    console.log(id)
    fetch("http://localhost:3000/completed",{
        method:"PUT",
        body: JSON.stringify({
            id:id,
            title:title,
            description:desc
        }),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(async function(res){
        const json=await res.json()
        console.log(json)
    })
}
function Todos({todos}){
    return (
    <>
    <div className="todos">
        {todos.map(function (item){
           return (
                <div>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                    <button id={item._id} onClick={()=>markAsCompleted(item._id,item.title,item.description)}>{item.completed==true?"completed":"Mark as completed"}</button>
                </div>
            )
        })}
    </div>
    </>
    )
}
export default Todos