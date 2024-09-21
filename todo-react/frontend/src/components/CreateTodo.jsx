import { useState } from "react"

const addfunction = (title, desc) => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: desc,
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json", 
      },
    })
      .then(async function (res) {
        const json = await res.json();
        console.log(json);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return(
        <>
        <div>
            <input type="text" placeholder="title" id="title" onChange={function(e){
                const value=e.target.value
                setTitle(value)
            }}/>
            <br/>
            <input type="text" placeholder="description" id="desc" onChange={function(e){
                const value=e.target.value
                setDescription(value)
            }}/>
            <br/>

            <button onClick={() => addfunction(title, description)}>Add todo</button>
        </div>
        </>
    )
}
export default CreateTodo