import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null| WebSocket>(null)
  const [latestMessage,setLatestMessage]=useState("")
  const [msg,setMsg]=useState("")
  useEffect(()=>{
    const socket =new WebSocket('ws://localhost:8080')
    socket.onopen=()=>{
      setSocket(socket)
    }
    socket.onmessage=((message)=>{
      setLatestMessage(message.data)
    })
    return()=>{
      socket.close()
    }
  },[])

  if(!socket){
    return (
      <div>Loading.....</div>
    )
  }

  return (
    <>
      <h1>{latestMessage}</h1>
      <input type="text" onChange={e=>{
        setMsg(e.target.value)
      }}/>
      <button onClick={()=>socket.send(msg)}>Send</button>
    </>
  )
}

export default App
