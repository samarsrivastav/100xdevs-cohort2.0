import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todo,setTodo]=useState([])
  const [todoId,setTodoId]=useState(1)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/"+todoId)
    .then(async function (res){
      const json=await res.json()
      console.log(json)
      if(Object.keys(json).length==0){
        setTodo([])
      }else{
        setTodo(json)
      }
    })
  },[todoId])
  return (
    <>
      <CardWrapper>
      <div>
        <h1>{todo.length==0?"Empty response":todo.title}</h1>
        <input type="number" id='todoId' onChange={function(e){
          const value=e.target.value
          setTodoId(value)
        }}/>
      </div>
      </CardWrapper>
    </>
  )
}
function CardWrapper({children}){
  return(
    <div style={{border:"2px black solid"}}>
        {children}
    </div>
  )
}

export default App
