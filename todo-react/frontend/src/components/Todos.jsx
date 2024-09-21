function Todos({todos}){
    return (
    <>
    <div className="todos">
        {todos.map(function (item){
           return (
                <div>
                    <h1>{item.title}</h1>
                    <h2>{item.description}</h2>
                    <button id={item._id}>{item.completed==true?"completed":"Mark as completed"}</button>
                </div>
            )
        })}
    </div>
    </>
    )
}
export default Todos